/* ─── HERO STYLES ────────────────────────────────────────────── */
const heroStyles = `
  .hero {
    background: linear-gradient(135deg, var(--navy) 0%, var(--indigo) 100%);
    padding: 90px 0 80px;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    top: -80px; right: -80px;
    width: 500px; height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    bottom: -100px; left: -60px;
    width: 400px; height: 400px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%);
    pointer-events: none;
  }

  .hero-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 56px;
    align-items: center;
  }

  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2);
    color: var(--white);
    font-size: 0.8rem;
    font-weight: 600;
    padding: 6px 14px;
    border-radius: 100px;
    margin-bottom: 24px;
    letter-spacing: 0.05em;
  }

  .hero-badge-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--emerald);
    animation: pulse 2s ease-in-out infinite;
  }

  .hero h1 {
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    color: var(--white);
    margin-bottom: 20px;
    line-height: 1.1;
  }

  .hero h1 em {
    font-style: normal;
    color: var(--orange);
  }

  .hero-sub {
    font-size: 1.15rem;
    color: rgba(255,255,255,0.82);
    margin-bottom: 36px;
    line-height: 1.7;
  }

  .hero-cta-group {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .hero-note {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.5);
    margin-top: 14px;
  }

  /* Hero image */
  .hero-image-wrap { position: relative; }

  .hero-photo {
    width: 100%;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
    line-height: 0;
  }

  /* Floating stat cards */
  .hero-stat-card {
    position: absolute;
    background: var(--white);
    border-radius: 14px;
    padding: 14px 18px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  }
  .hero-stat-card.bottom-left { bottom: -20px; left: -24px; }
  .hero-stat-card.top-right   { top: -16px; right: -20px; }

  .stat-number {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 900;
    color: var(--navy);
    line-height: 1;
  }
  .stat-label {
    font-size: 0.72rem;
    color: var(--slate-mid);
    font-weight: 500;
    margin-top: 2px;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .hero { padding: 60px 0 56px; }
    .hero-grid { grid-template-columns: 1fr; gap: 40px; }
    .hero-photo { max-width: 460px; margin: 0 auto; }
  }

  @media (max-width: 600px) {
    .hero-cta-group { flex-direction: column; align-items: flex-start; }
  }
`;

/* ─── HERO HTML ──────────────────────────────────────────────── */
const heroHTML = `
  <section class="hero">
    <div class="container">
      <div class="hero-grid">

        <!-- Left: Copy -->
        <div>
          <div class="hero-badge fade-up">
            <span class="hero-badge-dot"></span>
            Free Community · No Credit Card Needed
          </div>

          <h1 class="fade-up delay-1">
            Your Family.<br>
            Your Trips.<br>
            <em>Your Way.</em>
          </h1>

          <p class="hero-sub fade-up delay-2">
            We teach couples and families how to plan extraordinary trips from scratch using AI —
            including allergy-safe and accessibility travel.
            No travel agent. No overwhelm. Just you, your partner, and a plan your whole family will actually love.
          </p>

          <div class="hero-cta-group fade-up delay-3">
            <button type="button" class="btn btn-primary" onclick="window.openLeadModal()">
              🚀 Join Free — Start Planning Today
            </button>
            <a href="#how-it-works" class="btn btn-outline">
              See How It Works
            </a>
          </div>

          <p class="hero-note fade-up delay-4">Free to join · 5-lesson starter course included · No credit card</p>
        </div>

        <!-- Right: Photo -->
        <div class="hero-image-wrap fade-up delay-2">
          <div class="hero-photo">
            <img src="/images/hero-family.png" alt="Family enjoying a trip together"
                 style="width:100%;height:auto;display:block;" />
          </div>

          <div class="hero-stat-card bottom-left">
            <div class="stat-number">100%</div>
            <div class="stat-label">Family-tested trips ✓</div>
          </div>

          <div class="hero-stat-card top-right">
            <div class="stat-number">FREE</div>
            <div class="stat-label">to join & get started</div>
          </div>
        </div>

      </div>
    </div>
  </section>
`;

export { heroStyles, heroHTML };
