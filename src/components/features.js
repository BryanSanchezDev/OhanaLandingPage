/* ─── FEATURES STYLES ────────────────────────────────────────── */
const featuresStyles = `
  .features-header {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 64px;
  }

  .features-header .section-subtitle { margin: 0 auto; }

  .tiers-grid {
    display: grid;
    grid-template-columns: 1fr;
    max-width: 480px;
    margin: 0 auto;
    gap: 28px;
  }

  .tier-card {
    background: var(--white);
    border-radius: 20px;
    border: 1px solid var(--slate-light);
    overflow: hidden;
    box-shadow: var(--shadow-card);
    transition: transform var(--transition), box-shadow var(--transition);
  }

  .tier-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .tier-card.featured {
    border-color: var(--navy);
    box-shadow: 0 8px 40px rgba(29,78,216,0.16);
  }

  .tier-header {
    padding: 28px 32px 24px;
    border-bottom: 1px solid var(--slate-light);
  }

  .tier-card.featured .tier-header {
    background: linear-gradient(135deg, var(--navy), var(--indigo));
  }

  .tier-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 12px;
  }

  .tier-badge.free     { background: rgba(52,211,153,0.15); color: #059669; }
  .tier-badge.premium  { background: rgba(255,255,255,0.15); color: var(--white); }

  .tier-name {
    font-family: var(--font-display);
    font-size: 1.6rem;
    color: var(--navy);
  }

  .tier-card.featured .tier-name { color: var(--white); }

  .tier-price {
    font-size: 1rem;
    margin-top: 6px;
    color: var(--slate-mid);
  }

  .tier-card.featured .tier-price { color: rgba(255,255,255,0.7); }

  .tier-price strong {
    font-size: 1.6rem;
    font-weight: 700;
    font-family: var(--font-display);
    color: var(--navy);
  }

  .tier-card.featured .tier-price strong { color: var(--amber); }

  .tier-body { padding: 28px 32px; }

  .feature-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .feature-list li {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 0.95rem;
    line-height: 1.5;
  }

  .check {
    flex-shrink: 0;
    width: 22px; height: 22px;
    border-radius: 50%;
    background: rgba(52,211,153,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: #059669;
    margin-top: 1px;
    font-weight: 700;
  }

  .tier-cta { margin-top: 28px; }
  .tier-cta .btn { width: 100%; justify-content: center; }

  .founding-note-small {
    font-size: 0.88rem;
    color: var(--slate-mid);
    line-height: 1.5;
    margin-top: 12px;
  }

  @media (max-width: 900px) {
    .tiers-grid { grid-template-columns: 1fr; }
  }
`;

/* ─── FEATURES HTML ──────────────────────────────────────────── */
const featuresHTML = `
  <section class="section section-alt">
    <div class="container">

      <div class="features-header">
        <div class="tag">What's Included</div>
        <h2 class="section-title">Everything your family needs to plan like a pro.</h2>
        <p class="section-subtitle">One membership. Everything unlocked. No free trial, no upsells.</p>
      </div>

      <div class="tiers-grid">

        <!-- All-Access Membership -->
        <div class="tier-card featured">
          <div class="tier-header">
            <div class="tier-badge premium">👑 Full System</div>
            <div class="tier-name">All-Access Membership</div>
            <div class="tier-price"><strong>$9.99</strong>/month</div>
            <div class="founding-note-small">
              💰 Or save with annual: $99/year — 10 months for the price of 12
            </div>
          </div>
          <div class="tier-body">
            <ul class="feature-list">
              <li><span class="check">✓</span> <span>Full course library (accessibility, allergy travel, itinerary building, budgeting + more)</span></li>
              <li><span class="check">✓</span> <span>Bella — your private AI Travel Consultant, a custom chatbot available 24/7</span></li>
              <li><span class="check">✓</span> <span>Full AI prompt &amp; template vault (destinations, packing, budgeting, logistics)</span></li>
              <li><span class="check">✓</span> <span>Restaurant allergy cards in multiple languages</span></li>
              <li><span class="check">✓</span> <span>Weekly live sessions + "Plan With Me" live sessions</span></li>
              <li><span class="check">✓</span> <span>Community access — ask questions, share wins, get inspired</span></li>
              <li><span class="check">✓</span> <span>Personal trip feedback from Bryan</span></li>
            </ul>
            <div class="tier-cta">
              <button type="button" class="btn btn-primary" onclick="window.openLeadModal()">
                Start for $9.99/month
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
`;

export { featuresStyles, featuresHTML };
