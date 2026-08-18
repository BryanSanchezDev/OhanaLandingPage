# AI Ohana Travel Academy — Landing Page

Marketing landing page for the [AI Ohana Travel Academy](https://www.skool.com/ai-family-travel-academy-1186/about) Skool community — a resource that teaches couples and families how to plan extraordinary trips using AI, including allergy-safe and accessibility travel.

---

## What the page covers

- **Hero** — headline, CTA, and hero family photo
- **Trust strip** — social proof bar
- **Problem** — relatable pain points families face when planning trips
- **Features** — free vs. premium membership comparison
- **How It Works** — 3-step system overview
- **Gallery** — trip photo showcase
- **About** — founder story
- **Pricing** — free and premium tier cards
- **FAQ** — common questions answered
- **Final CTA** — bottom conversion section
- **Lead capture modal** — every "Join Free" / "Get Full Access" button on the page opens the same signup modal instead of linking out directly

---

## Lead capture & email

"Join Free" buttons across the site open a signup modal (`src/components/lead-form.js`) instead of linking straight to Skool. On submit it:

1. POSTs the lead to `/api/subscribe` (an Azure Function in `api/`), which saves it to an Azure Table Storage `leads` table and sends a welcome email via [Resend](https://resend.com)
2. Redirects to `/thank-you` on success, where the visitor gets the actual link to join the Skool community

Required environment variables (Azure Table Storage connection string, Resend API key, etc.) are documented in [ENV_SETUP.md](ENV_SETUP.md).

---

## Standalone pages

A few pages live in `public/` and are served as-is, outside the Vite build (no shared components, no build step):

- `thank-you.html` — post-signup confirmation, links out to Skool
- `privacy-policy.html` / `terms.html` — legal pages (Termly-generated content goes in the marked placeholder inside each)

Azure Static Web Apps' default clean-URL routing serves these at `/thank-you`, `/privacy-policy`, and `/terms` without the `.html` extension.

---

## Technology

| Tool                                                             | Purpose                                |
| ------------------------------------------------------------------ | ---------------------------------------- |
| [Vite](https://vitejs.dev)                                       | Build tool and dev server              |
| Vanilla JavaScript                                                | Component rendering and interactivity  |
| CSS custom properties                                             | Design tokens and theming              |
| [Inter](https://fonts.google.com/specimen/Inter) (Google Fonts)  | Typography                             |
| Azure Static Web Apps                                            | Hosting and deployment                 |
| Azure Functions (`api/`)                                          | `/api/subscribe` lead capture endpoint |
| Azure Table Storage                                                | Stores lead signups                    |
| [Resend](https://resend.com)                                      | Sends the welcome email                |

The frontend itself has no dependencies beyond Vite. Each page section is a self-contained JS module that exports its styles, HTML, and an optional `init` function.

---

## Quick Start

```bash
npm install
npm run dev      # dev server at localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

The `/api` backend has its own dependencies:

```bash
cd api
npm install
```

See [ENV_SETUP.md](ENV_SETUP.md) for the environment variables both the frontend and `/api` need to run locally and in production.
