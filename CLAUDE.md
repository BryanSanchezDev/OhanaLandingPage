# AI Ohana Travel Academy — Landing Page

Marketing landing page for the [AI Ohana Travel Academy](https://www.skool.com/ai-family-travel-academy-1186/about) Skool community, which teaches couples and families how to plan trips using AI, including allergy-safe and accessibility travel.

- Repo: github.com/BryanSanchezDev/OhanaLandingPage
- Hosting: Azure Static Web Apps (deploy workflow at `.github/workflows/azure-static-web-apps-icy-stone-079489510.yml`, triggers on push to `main`)
- Stack: Vite + vanilla JavaScript. No frontend framework, no dependencies beyond Vite.

## Architecture

Each page section is a self-contained module in `src/components/` that exports:

- `<name>Styles` — a template-literal string of plain CSS (no preprocessor)
- `<name>HTML` — a template-literal string of the section's markup
- an optional `init<Name>` function for JS behavior (see `nav.js`, `faq.js`)

`src/main.js` imports every component, concatenates all styles into one `<style>` tag injected into `<head>`, joins all HTML into `#app`, then calls each `init` function. To add a new section: create the component file, import it in `main.js`, and add it to both the `styleBlocks` and `sections` arrays.

`src/styles/global.css` holds design tokens, resets, and shared utility classes (`.container`, `.section`, `.btn`, `.card-hover`, `.tag`, `.fade-up`, etc.). Prefer reusing these over redefining equivalents in a component file.

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

## Conventions

- Two-tier product: free "Starter" membership and paid "Premium" membership. Pricing/plan copy currently lives in both `src/components/features.js` (comparison cards) and `src/components/pricing.js` (dedicated pricing section) — keep these two in sync when pricing changes.
- CTAs link out to the Skool community URL (`https://www.skool.com/ai-family-travel-academy-1186/about`).
- `index.html` has a commented-out placeholder block for ad tracking pixels (Meta/Google) — leave as-is unless asked to wire up tracking.
- No test suite or linter configured. `npm run dev` / `npm run build` / `npm run preview` are the available scripts.
