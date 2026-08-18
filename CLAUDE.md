# AI Ohana Travel Academy — Landing Page

Marketing landing page for the [AI Ohana Travel Academy](https://www.skool.com/ai-family-travel-academy-1186/about) Skool community, which teaches couples and families how to plan trips using AI, including allergy-safe and accessibility travel.

- Repo: github.com/BryanSanchezDev/OhanaLandingPage
- Hosting: Azure Static Web Apps (deploy workflow at `.github/workflows/azure-static-web-apps-icy-stone-079489510.yml`, triggers on push to `main`, `api_location: "api"`)
- Stack: Vite + vanilla JavaScript frontend, Azure Functions backend. No frontend framework, no frontend dependencies beyond Vite.

## Architecture

Each page section is a self-contained module in `src/components/` that exports:

- `<name>Styles` — a template-literal string of plain CSS (no preprocessor)
- `<name>HTML` — a template-literal string of the section's markup
- an optional `init<Name>` function for JS behavior (see `nav.js`, `faq.js`)

`src/main.js` imports every component, concatenates all styles into one `<style>` tag injected into `<head>`, joins all HTML into `#app`, then calls each `init` function. To add a new section: create the component file, import it in `main.js`, and add it to both the `styleBlocks` and `sections` arrays.

`src/styles/global.css` holds design tokens, resets, and shared utility classes (`.container`, `.section`, `.btn`, `.card-hover`, `.tag`, `.fade-up`, etc.). Prefer reusing these over redefining equivalents in a component file.

**`src/components/lead-form.js` is the one exception to the pattern above.** It's the signup modal shared across the whole page, so it isn't part of the `styleBlocks`/`sections` arrays:

- `buildLeadForm(id = "ohana-form-1")` — **default export**. Returns the modal markup with its `<style>` block embedded inline (self-contained, scoped under `.ohana-form-`), keyed by `id` so multiple instances can't collide on element IDs.
- `initLeadForm(id)`, `openLeadModal(id)`, `closeLeadModal(id)` — named exports for wiring behavior and controlling the modal.
- `main.js` mounts exactly one instance (`ohana-form-main`) into a `#ohana-modal-mount` div appended to `#app`, and exposes `window.openLeadModal = () => openLeadModal("ohana-form-main")` so plain `onclick="window.openLeadModal()"` attributes anywhere in the page's HTML strings can open it (inline `<script>` tags can't be used here since content is inserted via `.innerHTML`, which doesn't execute them).

## Backend / API

`api/` is an Azure Functions app (v3 JS model: `function.json` + `index.js` per function, `host.json` at the root) with its own `package.json` — install its dependencies separately with `cd api && npm install`.

- `api/subscribe/` — `POST /api/subscribe`. Validates the email, writes the lead to an Azure Table Storage table named `leads` (auto-creates it if missing), then sends a welcome email via [Resend](https://resend.com). Email delivery failures are logged but don't fail the request — the lead is already saved by that point.
- Required env vars: `AZURE_STORAGE_CONNECTION_STRING`, `RESEND_API_KEY`, `SENDER_EMAIL`, `SKOOL_URL` (see [ENV_SETUP.md](ENV_SETUP.md) for what each does and where to get/set it — locally via `api/local.settings.json`, in production via the Static Web App's **Settings → Environment variables**).
- `api/local.settings.json` holds real secrets for local dev and is gitignored — never commit it or pass its contents anywhere.

## Standalone pages

`public/thank-you.html`, `public/privacy-policy.html`, and `public/terms.html` are plain, self-contained HTML files — not Vite components, no shared styles/tokens, no build step. Vite copies `public/` to the build output untouched, and Azure Static Web Apps' clean-URL routing serves them at `/thank-you`, `/privacy-policy`, `/terms` (no `.html` needed). `privacy-policy.html` and `terms.html` currently have an HTML comment placeholder where the Termly-generated legal content goes.

## Brand tokens

Defined in `src/styles/global.css` `:root` — always use the CSS variable, never hardcode a hex value:

```
--navy: #1d4ed8
--indigo: #3730a3
--orange: #fb923c
--amber: #f59e0b
--sky: #f0f9ff
--ice: #eff6ff
--emerald: #34d399
--white: #ffffff
--slate-dark: #334155
--slate-mid: #94a3b8
--slate-light: #e2e8f0
```

Font is Inter (`--font-display`, `--font-body`), loaded via Google Fonts `<link>` in `index.html`. Buttons use `.btn` + a modifier (`.btn-primary` orange, `.btn-navy` navy, `.btn-outline` for on-dark sections). Border radius uses `var(--radius)` (14px). Card shadows use `var(--shadow-card)` / `var(--shadow-lg)`.

`lead-form.js` and the standalone `public/` pages are the exception — they hardcode brand hex values directly rather than using the CSS variables, since they're self-contained and don't load `global.css`.

## Conventions

- Two-tier product: free "Starter" membership and paid "Premium" membership. Pricing/plan copy currently lives in both `src/components/features.js` (comparison cards) and `src/components/pricing.js` (dedicated pricing section) — keep these two in sync when pricing changes.
- "Join Free" / "Get Full Access" CTAs across the page do **not** link directly to Skool — they call `onclick="window.openLeadModal()"` to open the shared signup modal. The Skool URL itself now only appears as: the destination link on `public/thank-you.html`, and the `SKOOL_URL` env var used in the welcome email template. The footer's "Join the Community" link is kept as an `<a href="#" onclick="window.openLeadModal(); return false;">` rather than a `<button>`, since its styling comes from a `.footer-links a` element selector.
- `index.html` has a commented-out placeholder block for ad tracking pixels (Meta/Google) — leave as-is unless asked to wire up tracking.
- No test suite or linter configured. `npm run dev` / `npm run build` / `npm run preview` are the available scripts.
