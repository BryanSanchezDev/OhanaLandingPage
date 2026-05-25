/* ─── HOW IT WORKS STYLES ────────────────────────────────────── */
const howItWorksStyles = `
  .steps-header {
    text-align: center;
    max-width: 580px;
    margin: 0 auto 64px;
  }

  .steps-header .section-subtitle { margin: 0 auto; }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    position: relative;
  }

.step-card {
    background: var(--white);
    border-radius: 20px;
    border: 1px solid var(--slate-light);
    padding: 36px 28px;
    text-align: center;
    transition: transform var(--transition), box-shadow var(--transition);
  }

  .step-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .step-number {
    width: 56px; height: 56px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--navy), var(--indigo));
    color: var(--white);
    font-family: var(--font-display);
    font-size: 1.4rem;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
    box-shadow: 0 4px 16px rgba(29,78,216,0.25);
  }

  .step-icon {
    font-size: 1.8rem;
    margin-bottom: 6px;
  }

  .step-card h3 {
    font-size: 1.2rem;
    color: var(--navy);
    margin-bottom: 10px;
  }

  .step-card p {
    font-size: 0.92rem;
    color: var(--slate-mid);
    line-height: 1.6;
  }

  @media (max-width: 900px) {
    .steps-grid { grid-template-columns: 1fr; gap: 20px; }
    .steps-grid::before { display: none; }
  }
`;

/* ─── HOW IT WORKS HTML ──────────────────────────────────────── */
const howItWorksHTML = `
  <section class="section section-alt" id="how-it-works">
    <div class="container">

      <div class="steps-header">
        <div class="tag">The System</div>
        <h2 class="section-title">From overwhelmed to booked in 3 steps.</h2>
        <p class="section-subtitle">No travel experience required. Just a little curiosity and a free account.</p>
      </div>

      <div class="steps-grid">

        <div class="step-card">
          <div class="step-number">1</div>
          <div class="step-icon">🆓</div>
          <h3>Join Free</h3>
          <p>Create your free account on Skool and get instant access to the 5-lesson starter course, AI prompt library, and community. No credit card. No catch.</p>
        </div>

        <div class="step-card">
          <div class="step-number">2</div>
          <div class="step-icon">🤖</div>
          <h3>Learn the AI Playbook</h3>
          <p>Follow the course to build your Family Travel Profile — a personalized document that makes every future trip faster, smarter, and tailored to YOUR crew's real needs.</p>
        </div>

        <div class="step-card">
          <div class="step-number">3</div>
          <div class="step-icon">✈️</div>
          <h3>Plan It. Book It. Go.</h3>
          <p>Use the frameworks and AI tools to plan your actual trip — itinerary, accommodations, budget, allergy-safe restaurants, accessibility logistics. Then go live your best trip. Pura vida.</p>
        </div>

      </div>
    </div>
  </section>
`;

export { howItWorksStyles, howItWorksHTML };
