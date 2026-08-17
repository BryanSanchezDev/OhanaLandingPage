/* ─── NAV STYLES ─────────────────────────────────────────────── */
const navStyles = `
  .nav {
    position: sticky;
    top: 0;
    z-index: 100;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--slate-light);
    padding: 14px 0;
    transition: box-shadow var(--transition);
  }
  .nav.scrolled { box-shadow: 0 4px 20px rgba(29, 78, 216, 0.08); }

  .nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .logo-img-slot {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--navy), var(--indigo));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    overflow: hidden;
    flex-shrink: 0;
  }

  .nav-logo-img { 
    height: 60px;
    width: auto; 
  }

  .nav-brand-text {
    font-family: var(--font-display);
    font-size: 1rem;
    font-weight: 700;
    color: var(--navy);
    line-height: 1.1;
  }
  .nav-brand-text span {
    display: block;
    font-family: var(--font-body);
    font-size: 0.7rem;
    font-weight: 500;
    color: var(--slate-mid);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;

/* ─── NAV HTML ───────────────────────────────────────────────── */
const navHTML = `
  <nav class="nav" id="mainNav">
    <div class="container">
      <div class="nav-inner">

        <div class="nav-logo">
          <img src="/images/OhanaTravelIcon.png" alt="AI Ohana Travel Academy" class="nav-logo-img" />
          <div class="nav-brand-text">
            AI Ohana Travel Academy
            <span>Plan Smarter. Travel Better.</span>
          </div>
        </div>

        <button type="button" class="btn btn-primary" onclick="window.openLeadModal()">
          Join Free ✈️
        </button>

      </div>
    </div>
  </nav>
`;

/* ─── NAV BEHAVIOUR ──────────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById("mainNav");
  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  });
}

export { navStyles, navHTML, initNav };
