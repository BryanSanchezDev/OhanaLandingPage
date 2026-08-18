/**
 * lead-form.js — Free Community Signup Modal
 *
 * Self-contained: styles, markup, and behaviour are all produced by
 * buildLeadForm(), scoped under the .ohana-form- prefix so this can
 * be dropped anywhere without touching the site's global CSS.
 *
 * NOTE: buildLeadForm() only returns a markup string. If it's inserted
 * via `.innerHTML` (the pattern main.js uses for every other section),
 * browsers do not execute <script> tags that arrive that way — so the
 * interactivity lives in the separately-exported initLeadForm(), which
 * must be called once the markup is in the DOM (same pattern as
 * initNav() / initFaq() in main.js). openLeadModal()/closeLeadModal()
 * are safe to call independently of initLeadForm() — they only toggle
 * classes on the overlay looked up by id.
 */

import { getUTMParams } from "../utils/utm.js";

const GTAG_CONVERSION_ID = "REPLACE_WITH_GTAG_ID";
const TRANSITION_MS = 200;

/* ─── LEAD FORM STYLES ───────────────────────────────────────── */
const leadFormStyles = `
  .ohana-form-overlay {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 9999;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.55);
    padding: 24px;
    opacity: 0;
    transition: opacity ${TRANSITION_MS}ms ease;
  }

  .ohana-form-overlay.ohana-form-overlay--open {
    display: flex;
  }

  .ohana-form-overlay.ohana-form-overlay--visible {
    opacity: 1;
  }

  .ohana-form-card {
    position: relative;
    width: 100%;
    max-width: 520px;
    max-height: 90vh;
    overflow-y: auto;
    background: #ffffff;
    border-radius: 16px;
    padding: 40px 36px;
    text-align: center;
    transform: translateY(16px);
    transition: transform ${TRANSITION_MS}ms ease;
  }

  .ohana-form-overlay.ohana-form-overlay--visible .ohana-form-card {
    transform: translateY(0);
  }

  .ohana-form-close {
    position: absolute;
    top: 8px;
    right: 8px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: #94a3b8;
    font-size: 1.7rem;
    line-height: 1;
    cursor: pointer;
  }

  .ohana-form-badge {
    display: inline-block;
    background: #fb923c;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 16px;
  }

  .ohana-form-headline {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    color: #1d4ed8;
    font-size: clamp(1.6rem, 4vw, 2.2rem);
    line-height: 1.2;
    margin: 0 0 12px;
  }

  .ohana-form-subheadline {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #334155;
    font-size: 1rem;
    line-height: 1.6;
    margin: 0 0 32px;
  }

  .ohana-form-form {
    display: flex;
    flex-direction: column;
    gap: 14px;
    text-align: left;
  }

  .ohana-form-field {
    display: flex;
    flex-direction: column;
  }

  .ohana-form-input {
    width: 100%;
    background: #ffffff;
    border: 1.5px solid #e2e8f0;
    color: #334155;
    font-family: "Inter", sans-serif;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 10px;
    padding: 14px 16px;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .ohana-form-input::placeholder {
    color: #94a3b8;
  }

  .ohana-form-input:focus {
    outline: none;
    border-color: #1d4ed8;
    box-shadow: 0 0 0 3px rgba(29, 78, 216, 0.18);
  }

  .ohana-form-input.ohana-form-input--error {
    border-color: #ef4444;
  }

  .ohana-form-submit {
    width: 100%;
    background: #fb923c;
    color: #ffffff;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    padding: 16px;
    cursor: pointer;
    margin-top: 4px;
    transition: background 0.25s ease, transform 0.25s ease;
  }

  .ohana-form-submit:hover:not(:disabled) {
    background: #ea7c2b;
  }

  .ohana-form-submit:disabled {
    cursor: not-allowed;
    opacity: 0.85;
  }

  .ohana-form-disclaimer {
    font-family: "Inter", sans-serif;
    font-style: italic;
    color: #94a3b8;
    font-size: 0.82rem;
    text-align: center;
    margin: 12px 0 0;
  }

  .ohana-form-error-message {
    display: none;
    color: #fb923c;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 0.88rem;
    text-align: center;
    margin: 12px 0 0;
  }

  .ohana-form-error-message.ohana-form-error-message--visible {
    display: block;
  }

  .ohana-form-success {
    display: none;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 24px 0 8px;
  }

  .ohana-form-success.ohana-form-success--visible {
    display: flex;
  }

  .ohana-form-success-icon {
    margin-bottom: 16px;
  }

  .ohana-form-success-title {
    font-family: "Inter", sans-serif;
    font-weight: 600;
    color: #334155;
    font-size: 1.2rem;
    margin: 0 0 8px;
  }

  .ohana-form-success-sub {
    font-family: "Inter", sans-serif;
    font-weight: 400;
    color: #94a3b8;
    font-size: 0.95rem;
    margin: 0;
  }
`;

/* ─── LEAD FORM HTML ─────────────────────────────────────────── */
function buildLeadForm(id = "ohana-form-1") {
  return `
    <style>${leadFormStyles}</style>
    <div class="ohana-form-overlay" id="${id}-overlay">
      <div class="ohana-form-card" id="${id}-card">
        <button type="button" class="ohana-form-close" id="${id}-close" aria-label="Close">&times;</button>

        <div class="ohana-form-badge">FREE COMMUNITY 🌿</div>
        <h2 class="ohana-form-headline">Join Families Who Travel Smarter</h2>
        <p class="ohana-form-subheadline">Learn how to plan any trip using AI, including trips with accessibility needs and food allergies. Free to join, no credit card needed.</p>

        <form class="ohana-form-form" id="${id}-form" novalidate>
          <div class="ohana-form-field">
            <input
              type="text"
              class="ohana-form-input"
              id="${id}-firstname"
              name="firstName"
              placeholder="First Name"
              autocomplete="given-name"
            />
          </div>
          <div class="ohana-form-field">
            <input
              type="email"
              class="ohana-form-input"
              id="${id}-email"
              name="email"
              placeholder="Email Address"
              autocomplete="email"
            />
          </div>
          <button type="submit" class="ohana-form-submit" id="${id}-submit">
            Join the Free Community →
          </button>
          <p class="ohana-form-disclaimer">No spam. Just real travel help. Unsubscribe anytime.</p>
          <p class="ohana-form-error-message" id="${id}-error">Something went wrong. Try again in a moment.</p>
        </form>

        <div class="ohana-form-success" id="${id}-success">
          <svg class="ohana-form-success-icon" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="28" cy="28" r="28" fill="#34d399" fill-opacity="0.15" />
            <circle cx="28" cy="28" r="20" fill="#34d399" />
            <path d="M19 28.5L25 34.5L37 21.5" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <p class="ohana-form-success-title">You're in! Check your inbox. 🌿</p>
          <p class="ohana-form-success-sub">We'll see you inside the community.</p>
        </div>

      </div>
    </div>
  `;
}

/* ─── LEAD FORM BEHAVIOUR ────────────────────────────────────── */
function fireConversionPixels() {
  if (typeof window.fbq === "function") {
    window.fbq("track", "Lead");
  }
  if (typeof window.gtag === "function") {
    window.gtag("event", "conversion", { send_to: GTAG_CONVERSION_ID });
  }
}

function resetLeadForm(id) {
  const form = document.getElementById(`${id}-form`);
  const successState = document.getElementById(`${id}-success`);
  if (!form || !successState) return;

  // Already submitted successfully — leave the success state as-is.
  if (successState.classList.contains("ohana-form-success--visible")) return;

  const firstNameInput = document.getElementById(`${id}-firstname`);
  const emailInput = document.getElementById(`${id}-email`);
  const submitBtn = document.getElementById(`${id}-submit`);
  const errorMessage = document.getElementById(`${id}-error`);

  form.reset();
  firstNameInput.classList.remove("ohana-form-input--error");
  emailInput.classList.remove("ohana-form-input--error");
  errorMessage.classList.remove("ohana-form-error-message--visible");
  submitBtn.disabled = false;
  submitBtn.textContent = "Join the Free Community →";
}

function openLeadModal(id = "ohana-form-1") {
  const overlay = document.getElementById(`${id}-overlay`);
  if (!overlay) return;

  overlay.classList.add("ohana-form-overlay--open");
  document.body.style.overflow = "hidden";

  // Double rAF so the browser paints the display:flex/opacity:0 state
  // before the --visible class is added, letting the transition run.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      overlay.classList.add("ohana-form-overlay--visible");
    });
  });
}

function closeLeadModal(id = "ohana-form-1") {
  const overlay = document.getElementById(`${id}-overlay`);
  if (!overlay) return;

  overlay.classList.remove("ohana-form-overlay--visible");
  document.body.style.overflow = "";

  setTimeout(() => {
    overlay.classList.remove("ohana-form-overlay--open");
  }, TRANSITION_MS);

  resetLeadForm(id);
}

function initLeadForm(id = "ohana-form-1") {
  const overlay = document.getElementById(`${id}-overlay`);
  const form = document.getElementById(`${id}-form`);
  if (!overlay || !form) return;

  const closeBtn = document.getElementById(`${id}-close`);
  const firstNameInput = document.getElementById(`${id}-firstname`);
  const emailInput = document.getElementById(`${id}-email`);
  const submitBtn = document.getElementById(`${id}-submit`);
  const errorMessage = document.getElementById(`${id}-error`);
  const successState = document.getElementById(`${id}-success`);

  const originalBtnText = submitBtn.textContent;

  closeBtn.addEventListener("click", () => closeLeadModal(id));

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) closeLeadModal(id);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && overlay.classList.contains("ohana-form-overlay--open")) {
      closeLeadModal(id);
    }
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const firstName = firstNameInput.value.trim();
    const email = emailInput.value.trim();

    firstNameInput.classList.toggle("ohana-form-input--error", !firstName);
    emailInput.classList.toggle("ohana-form-input--error", !email);

    if (!firstName || !email) return;

    errorMessage.classList.remove("ohana-form-error-message--visible");
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";

    const utms = getUTMParams();
    const utmSource = utms.utm_source;
    const utmCampaign = utms.utm_campaign;
    const utmMedium = utms.utm_medium;
    const utmContent = utms.utm_content;
    const utmTerm = utms.utm_term;

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          email,
          utmSource,
          utmCampaign,
          utmMedium,
          utmContent,
          utmTerm,
        }),
      });

      if (!response.ok) throw new Error("Request failed");

      form.style.display = "none";
      successState.classList.add("ohana-form-success--visible");

      setTimeout(() => {
        fireConversionPixels();
        window.location.href = "/thank-you";
      }, 2000);
    } catch (err) {
      errorMessage.classList.add("ohana-form-error-message--visible");
      submitBtn.disabled = false;
      submitBtn.textContent = originalBtnText;
    }
  });
}

export default buildLeadForm;
export { initLeadForm, openLeadModal, closeLeadModal };
