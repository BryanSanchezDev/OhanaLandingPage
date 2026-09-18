/* ─── FOOTER STYLES ──────────────────────────────────────────── */
const footerStyles = `
  .footer {
    background: var(--white);
    border-top: 1px solid var(--slate-light);
    padding: 48px 0 32px;
  }

  .footer-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    text-align: center;
  }

  .footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .footer-logo-img {
    width: 40px; height: 40px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--navy), var(--indigo));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    overflow: hidden;
    flex-shrink: 0;
  }

  .footer-brand {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
  }

  .footer-links {
    display: flex;
    gap: 28px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer-links a {
    font-size: 0.85rem;
    color: var(--slate-mid);
    transition: color var(--transition);
  }

  .footer-links a:hover { color: var(--navy); }

  .footer-copy {
    font-size: 0.8rem;
    color: var(--slate-mid);
  }

  .footer-social {
    display: flex;
    gap: 16px;
  }

  .footer-social a {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--slate-mid);
    transition: color var(--transition);
  }

  .footer-social a:hover {
    color: var(--navy);
  }
`;

/* ─── FOOTER HTML ────────────────────────────────────────────── */
const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-inner">

        <div class="footer-logo">
          <img src="/images/OhanaTravelIcon.png" alt="AI Ohana Travel Academy" class="nav-logo-img" />
          <div class="footer-brand">AI Ohana Travel Academy</div>
        </div>

        <nav class="footer-links">
          <a href="#" onclick="window.openLeadModal(); return false;">Join the Community</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <!--
            REQUIRED FOR AD COMPLIANCE (Facebook & Google Ads):
            Add your Privacy Policy and Terms of Service URLs here.
            You can generate these for free at termly.io or iubenda.com
          -->
          <a href="/privacy-policy.html">Privacy Policy</a>
          <a href="/terms.html">Terms of Service</a>
        </nav>

        <p class="footer-copy">
          © ${new Date().getFullYear()} AI Ohana Travel Academy · Built by Bryan Sanchez · All rights reserved
        </p>

        <div class="footer-social">
          <a href="https://www.instagram.com/ohanatravelacademy/" target="_blank" rel="noopener" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61593699107686" target="_blank" rel="noopener" aria-label="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22 12.06C22 6.48 17.52 2 11.94 2S1.88 6.48 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.42V9.91c0-2.39 1.42-3.71 3.6-3.71 1.04 0 2.13.19 2.13.19v2.34h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  </footer>
`;

export { footerStyles, footerHTML };
