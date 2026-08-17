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
          <a href="#how-it-works">How It Works</a>
          <a href="#pricing">Pricing</a>
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

      </div>
    </div>
  </footer>
`;

export { footerStyles, footerHTML };
