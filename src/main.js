/**
 * main.js — AI Ohana Travel Academy Landing Page
 *
 * This file imports every component, injects their styles into
 * the <head>, assembles the page HTML, and runs any JS init.
 *
 * TO ADD A NEW SECTION:
 *   1. Create src/components/mySection.js (export mySectionStyles, mySectionHTML)
 *   2. Import it here
 *   3. Add mySectionStyles to the styleBlocks array
 *   4. Add mySectionHTML to the sections array
 *   5. If it has JS behaviour, call its init function at the bottom
 */

import "./styles/global.css";

// ─── Component imports ────────────────────────────────────────
import { navStyles, navHTML, initNav } from "./components/nav.js";
import { heroStyles, heroHTML } from "./components/hero.js";
import { trustStripStyles, trustStripHTML } from "./components/trustStrip.js";
import { problemStyles, problemHTML } from "./components/problem.js";
import { featuresStyles, featuresHTML } from "./components/features.js";
import { galleryStyles, galleryHTML } from "./components/gallery.js";
import { howItWorksStyles, howItWorksHTML } from "./components/howItWorks.js";
import { aboutStyles, aboutHTML } from "./components/about.js";
import { pricingStyles, pricingHTML } from "./components/pricing.js";
import { faqStyles, faqHTML, initFaq } from "./components/faq.js";
import { finalCtaStyles, finalCtaHTML } from "./components/finalCta.js";
import { footerStyles, footerHTML } from "./components/footer.js";
import buildLeadForm, { initLeadForm, openLeadModal } from "./components/lead-form.js";

// ─── Inject component styles into <head> ─────────────────────
const styleBlocks = [
  navStyles,
  heroStyles,
  trustStripStyles,
  problemStyles,
  featuresStyles,
  galleryStyles,
  howItWorksStyles,
  aboutStyles,
  pricingStyles,
  faqStyles,
  finalCtaStyles,
  footerStyles,
];

const styleTag = document.createElement("style");
styleTag.textContent = styleBlocks.join("\n");
document.head.appendChild(styleTag);

// ─── Assemble page HTML ───────────────────────────────────────
const sections = [
  navHTML,
  heroHTML,
  trustStripHTML,
  problemHTML,
  featuresHTML,
  galleryHTML,
  howItWorksHTML,
  aboutHTML,
  pricingHTML,
  faqHTML,
  finalCtaHTML,
  footerHTML,
];

document.getElementById("app").innerHTML = sections.join("\n");

// ─── Init component behaviours ────────────────────────────────
initNav();
initFaq();

// ─── Mount lead capture modal ───────────────────────────────────
const modalMount = document.createElement("div");
modalMount.id = "ohana-modal-mount";
document.getElementById("app").appendChild(modalMount);
modalMount.innerHTML = buildLeadForm("ohana-form-main");
initLeadForm("ohana-form-main");
window.openLeadModal = () => openLeadModal("ohana-form-main");
