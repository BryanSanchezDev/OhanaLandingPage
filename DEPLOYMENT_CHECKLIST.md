# Deployment Checklist

Manual steps required before pointing real traffic (and ads) at this site. Nothing here happens automatically from a `git push` — work through it top to bottom before launch.

## 1. Environment variables

- [ ] Confirm all required environment variables are set in the Azure Static Web Apps portal (**Settings → Environment variables**): `AZURE_STORAGE_CONNECTION_STRING`, `RESEND_API_KEY`, `SENDER_EMAIL`, `SKOOL_URL`. See [ENV_SETUP.md](ENV_SETUP.md) for what each one is and where to get it.

## 2. Azure Table Storage

- [ ] Verify the `leads` table exists in the Azure Storage account (it's auto-created on first successful signup, but confirm it's actually there and in the right storage account before relying on it).

## 3. Resend (email)

- [ ] Verify the Resend sender domain is authenticated (SPF/DKIM records set and verified in the Resend dashboard) so welcome emails don't land in spam or fail to send.

## 4. Meta Pixel

- [ ] Set up the Meta Pixel in Meta Business Manager.
- [ ] Complete domain verification for this site's domain in Meta Business Manager.
- [ ] Paste the real Meta Pixel base code into the placeholder comments in `public/thank-you.html`, inside the consent-gated block there (it fires on that page's load, gated on stored cookie consent — see the comment in that file).

## 5. Google Tag / Google Ads

- [ ] Set up Google Tag in Google Tag Manager or Google Ads.
- [ ] Create the Google Ads conversion action for signups.
- [ ] Paste the real Google Tag base code into the placeholder comments in `public/thank-you.html`, inside that same consent-gated block.

## 6. Replace placeholder conversion ID

- [ ] Replace `REPLACE_WITH_GTAG_ID` in `public/thank-you.html` with the real Google Ads conversion label.

## 7. Legal pages

- [ ] Paste the actual Termly-generated content into `public/privacy-policy.html` and `public/terms.html` (both currently have an HTML comment placeholder).
- [ ] Confirm the Privacy Policy and Terms of Service links are visible in the footer and point to `/privacy-policy` and `/terms`.

## 8. End-to-end test in production

- [ ] Submit the signup form for real on the live (deployed) site — not just locally — and confirm: the lead appears in the `leads` table, the welcome email arrives with a working Skool join link, and the redirect to `/thank-you` works.
- [ ] Do this **before** pointing any ad spend at the site.

## 9. Cookie banner

- [ ] Open the live site in a fresh incognito/private window and confirm the cookie banner appears on first visit.
- [ ] Click "Accept All" and confirm the `cookieConsentGranted` event fires (e.g. via a `console.log` in devtools) once pixels are wired up.

## 10. UTM passthrough

- [ ] Load the live site with `?utm_source=test&utm_campaign=test` in the URL and confirm those values carry through into the stored lead entity in Table Storage.
