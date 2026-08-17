# Environment Variables Setup

This project needs a few secret values to work — things like storage account keys and API keys. These are never stored in the code. Instead they live in two places:

- **Locally**, in `api/local.settings.json` (for your own machine only)
- **In production**, in the Azure Static Web Apps portal (for the live site)

You need to set them up in **both** places. Below is every variable, what it's for, where to find the real value, and where to put it.

---

## 1. AZURE_STORAGE_CONNECTION_STRING

**What it is:** The connection string that lets the site's backend save lead signups to Azure Table Storage.

**Where to get it:**
1. Go to the [Azure Portal](https://portal.azure.com)
2. Open your Storage Account (the one used for this project)
3. In the left sidebar, go to **Security + networking → Access keys**
4. Copy the **Connection string** under **key1**

**Where to add it:** Azure Static Web Apps portal → your app → **Settings → Environment variables**

---

## 2. RESEND_API_KEY

**What it is:** The API key that lets the site send the welcome email when someone signs up.

**Where to get it:**
1. Log in to [resend.com](https://resend.com)
2. Go to **API Keys** in the dashboard
3. Copy your API key (starts with `re_`)

**Where to add it:** Azure Static Web Apps portal → your app → **Settings → Environment variables**

---

## 3. SENDER_EMAIL

**What it is:** The "from" email address the welcome email is sent from. It must be an address on a domain you've verified inside Resend.

**Value for this project:** `bryan@mail.ohanatravel.net`

**Where to add it:** Azure Static Web Apps portal → your app → **Settings → Environment variables**

---

## 4. SKOOL_URL

**What it is:** The link to the Ohana Travel Academy Skool community — used for the "Join the Free Community" button in the welcome email.

**Value:** `https://www.skool.com/ai-family-travel-academy-1186/about`

**Where to add it:** Azure Static Web Apps portal → your app → **Settings → Environment variables**

---

## About `local.settings.json`

`api/local.settings.json` holds these same values for testing on your own computer when you run the site locally. A few important things to know:

- It is **for local development only** — the live site does not read this file.
- It is listed in `.gitignore`, meaning **Git will never track or upload it**. It stays on your computer only.
- **Never commit this file or paste its contents anywhere public** (GitHub, Slack, email, etc.) — it contains real secret keys.
- Setting values here does **not** set them for the live site. You must **also** add every value above in the Azure Static Web Apps portal (**Settings → Environment variables**) for production to actually work.

In short: `local.settings.json` is your personal testing copy. The Azure portal settings are what the real, live site uses.
