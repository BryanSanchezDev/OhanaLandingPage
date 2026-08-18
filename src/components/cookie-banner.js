/**
 * cookie-banner.js — Cookie Consent Banner
 *
 * Self-contained like lead-form.js: builds its own <style> tag and DOM
 * node and appends itself directly to document.body, independent of
 * main.js's sections/styleBlocks arrays. Call initCookieBanner() once
 * after the page is assembled.
 */

const COOKIE_CONSENT_KEY = "ohana_cookie_consent";
const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

/* ─── COOKIE BANNER STYLES ───────────────────────────────────── */
const cookieBannerStyles = `
  .ohana-cookie-banner {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9998;
    background: #ffffff;
    border-top: 1px solid #e2e8f0;
    font-family: "Inter", sans-serif;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    transform: translateY(0);
    transition: transform 0.3s ease;
  }

  .ohana-cookie-banner--hidden {
    transform: translateY(100%);
  }

  .ohana-cookie-text {
    color: #334155;
    font-size: 0.9rem;
    line-height: 1.5;
    flex: 1 1 320px;
  }

  .ohana-cookie-text a {
    color: #1d4ed8;
  }

  .ohana-cookie-actions {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  }

  .ohana-cookie-btn {
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    white-space: nowrap;
  }

  .ohana-cookie-btn--accept {
    background: #fb923c;
    color: #ffffff;
    font-weight: 700;
    border: none;
  }

  .ohana-cookie-btn--accept:hover {
    background: #ea7c2b;
  }

  .ohana-cookie-btn--essential {
    background: #ffffff;
    color: #334155;
    border: 1.5px solid #e2e8f0;
  }

  .ohana-cookie-btn--essential:hover {
    border-color: #94a3b8;
  }

  @media (max-width: 640px) {
    .ohana-cookie-banner {
      flex-direction: column;
      align-items: stretch;
      text-align: center;
    }

    .ohana-cookie-actions {
      justify-content: center;
    }
  }
`;

/* ─── COOKIE BANNER BEHAVIOUR ────────────────────────────────── */
function getStoredConsent() {
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (err) {
    return null;
  }
}

function isConsentValid(consent) {
  if (!consent || typeof consent.timestamp !== "number") return false;
  return Date.now() - consent.timestamp < CONSENT_MAX_AGE_MS;
}

function storeConsent(consent) {
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consent));
}

function dismissBanner(banner) {
  banner.classList.add("ohana-cookie-banner--hidden");
  banner.addEventListener("transitionend", () => banner.remove(), { once: true });
}

function handleChoice(banner, consent) {
  storeConsent(consent);
  dismissBanner(banner);

  if (consent.marketing) {
    window.dispatchEvent(new CustomEvent("cookieConsentGranted"));
  }
}

function initCookieBanner() {
  if (isConsentValid(getStoredConsent())) return;

  if (!document.getElementById("ohana-cookie-banner-styles")) {
    const styleTag = document.createElement("style");
    styleTag.id = "ohana-cookie-banner-styles";
    styleTag.textContent = cookieBannerStyles;
    document.head.appendChild(styleTag);
  }

  const banner = document.createElement("div");
  banner.className = "ohana-cookie-banner";
  banner.innerHTML = `
    <p class="ohana-cookie-text">
      We use cookies to improve your experience and track conversions.
      <a href="/privacy-policy">Read our Privacy Policy</a>
    </p>
    <div class="ohana-cookie-actions">
      <button type="button" class="ohana-cookie-btn ohana-cookie-btn--accept" id="ohanaCookieAccept">
        Accept All
      </button>
      <button type="button" class="ohana-cookie-btn ohana-cookie-btn--essential" id="ohanaCookieEssential">
        Essential Only
      </button>
    </div>
  `;

  document.body.appendChild(banner);

  banner.querySelector("#ohanaCookieAccept").addEventListener("click", () => {
    handleChoice(banner, { analytics: true, marketing: true, timestamp: Date.now() });
  });

  banner.querySelector("#ohanaCookieEssential").addEventListener("click", () => {
    handleChoice(banner, { analytics: false, marketing: false, timestamp: Date.now() });
  });
}

export { initCookieBanner };
