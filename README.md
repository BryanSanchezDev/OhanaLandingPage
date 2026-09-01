# AI Ohana Travel Academy — Landing Page

Marketing landing page for the [AI Ohana Travel Academy](https://www.skool.com/ai-family-travel-academy-1186/about) Skool community — a resource that teaches couples and families how to plan extraordinary trips using AI, including allergy-safe and accessibility travel.

---

## What the page covers

- **Hero** — headline, CTA, and hero family photo
- **Trust strip** — social proof bar
- **Problem** — relatable pain points families face when planning trips
- **Features** — what's included in the $9.99/month all-access membership
- **How It Works** — 3-step system overview
- **Gallery** — trip photo showcase
- **About** — founder story
- **Pricing** — single all-access membership card ($9.99/month, $99/year option)
- **FAQ** — common questions answered
- **Final CTA** — bottom conversion section
- **Lead capture modal** — every "Start for $9.99/month" button on the page opens the same signup modal instead of linking out directly

---

## Lead capture & email

"Start for $9.99/month" buttons across the site open a signup modal (`src/components/lead-form.js`) instead of linking straight to Skool. On submit it:

1. POSTs the lead to `/api/subscribe` (an Azure Function in `api/`), which saves it to an Azure Table Storage `leads` table and sends a welcome email via [Resend](https://resend.com) containing the Skool join link
2. Redirects to `/thank-you`, which tells the visitor to check their email for that link — there is no direct "Join on Skool" button on that page, and no auto-redirect to Skool. Conversion pixels fire on `/thank-you`'s page load instead of at submission time, since that's where the original pixel-firing pattern lives; either way there's no checkout page of our own and no payment-completion webhook back from Skool, so pixels fire on reaching that page, not on verified payment (see the caveat comment in `public/thank-you.html`)

Required environment variables (Azure Table Storage connection string, Resend API key, etc.) are documented in [ENV_SETUP.md](ENV_SETUP.md).

---

## Standalone pages

A few pages live in `public/` and are served as-is, outside the Vite build (no shared components, no build step):

- `thank-you.html` — post-signup confirmation ("check your email"), and where Google Ads / Meta conversion pixels actually fire, gated on stored cookie consent
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

The `/api` backend has its own dependencies, and needs the [Azure Functions Core Tools](https://learn.microsoft.com/azure/azure-functions/functions-run-local) (`func`) running locally for `/api/subscribe` calls to work in dev — `npm run dev`'s Vite proxy forwards `/api/*` to `http://localhost:7071`, so without this running, form submissions fail with a `ECONNREFUSED` proxy error:

```bash
cd api
npm install
npm start        # runs `func start`, keep this running in a separate terminal
```

See [ENV_SETUP.md](ENV_SETUP.md) for the environment variables both the frontend and `/api` need to run locally and in production.
