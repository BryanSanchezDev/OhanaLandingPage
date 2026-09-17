/**
 * prerender.mjs — bakes the client-rendered homepage into dist/index.html
 *
 * Why: this is a pure client-side SPA (src/main.js builds the whole page by
 * setting #app.innerHTML at runtime), so the raw build output ships an empty
 * <body> with just <div id="app"></div>. Crawlers that don't execute
 * JavaScript (e.g. AdsBot-Google) see a blank page — that mismatch between
 * what crawlers see and what real users see got this project's Google Ads
 * account suspended for "cloaking."
 *
 * Fix: run `vite build` as normal, then serve the built dist/ folder,
 * drive a headless browser to it, wait for main.js to populate #app, and
 * write the fully-rendered DOM back over dist/index.html. Real users still
 * get the exact same app — the <script type="module"> tag is untouched, so
 * main.js still runs and re-renders on top of the baked content (see the
 * idempotency guards added in main.js and cookie-banner.js for why that's
 * safe rather than duplicating things).
 */

import { preview } from "vite";
import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distIndexPath = path.resolve(__dirname, "../dist/index.html");

async function prerender() {
  const server = await preview({ preview: { port: 0 } });
  const address = server.resolvedUrls.local[0];

  const browser = await puppeteer.launch({ headless: true });

  try {
    const page = await browser.newPage();
    await page.goto(address, { waitUntil: "networkidle0" });

    // main.js renders synchronously into #app on load — wait for real
    // content so we never snapshot the empty shell.
    await page.waitForFunction(() => {
      const app = document.getElementById("app");
      return !!app && app.children.length > 0;
    });

    const html = await page.content();
    writeFileSync(distIndexPath, html);
    console.log(`Prerendered dist/index.html (${html.length} bytes)`);
  } finally {
    await browser.close();
    await new Promise((resolve) => server.httpServer.close(resolve));
  }
}

prerender().catch((err) => {
  console.error("Prerender failed:", err);
  process.exit(1);
});
