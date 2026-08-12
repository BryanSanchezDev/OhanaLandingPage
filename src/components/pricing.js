/* ─── PRICING STYLES ─────────────────────────────────────────── */
const pricingStyles = `
  .pricing-header {
    text-align: center;
    max-width: 620px;
    margin: 0 auto 64px;
  }

  .pricing-header .section-subtitle { margin: 0 auto; }

  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 24px;
  }

  .pricing-card {
    background: var(--white);
    border-radius: 20px;
    border: 1px solid var(--slate-light);
    overflow: hidden;
    transition: transform var(--transition), box-shadow var(--transition);
  }

  .pricing-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
  }

  .pricing-card.highlighted {
    border-color: var(--orange);
    box-shadow: 0 8px 40px rgba(251,146,60,0.18);
  }

  .popular-banner {
    background: linear-gradient(90deg, var(--orange), var(--amber));
    color: var(--white);
    text-align: center;
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 8px;
  }

  .pricing-head {
    padding: 32px 32px 24px;
    border-bottom: 1px solid var(--slate-light);
  }

  .pricing-tier-label {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--slate-mid);
    margin-bottom: 10px;
  }

  .pricing-price {
    display: flex;
    align-items: flex-end;
    gap: 4px;
    margin-bottom: 6px;
  }

  .price-amount {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 900;
    color: var(--navy);
    line-height: 1;
  }

  .price-period {
    font-size: 0.9rem;
    color: var(--slate-mid);
    margin-bottom: 6px;
  }

  .pricing-desc {
    font-size: 0.88rem;
    color: var(--slate-mid);
    line-height: 1.5;
  }

  .founding-note-pricing {
    display: flex;
    align-items: center;
    gap: 8px;
    background: rgba(245,158,11,0.1);
    border: 1px solid rgba(245,158,11,0.3);
    border-radius: 10px;
    padding: 10px 14px;
    font-size: 0.82rem;
    color: #92400e;
    font-weight: 500;
    margin-top: 14px;
  }

  .pricing-body { padding: 28px 32px 32px; }

  .pricing-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  }

  .pricing-features li {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.92rem;
  }

  .check-sm {
    flex-shrink: 0;
    color: var(--emerald);
    font-weight: 700;
    margin-top: 1px;
  }

  .pricing-cta .btn {
    width: 100%;
    justify-content: center;
  }

  @media (max-width: 900px) {
    .pricing-grid { grid-template-columns: 1fr; }
  }
`;

/* ─── PRICING HTML ───────────────────────────────────────────── */
const pricingHTML = `
  <section class="section section-alt" id="pricing">
    <div class="container">

      <div class="pricing-header">
        <div class="tag">Simple Pricing</div>
        <h2 class="section-title">Start free. Upgrade when it clicks.</h2>
        <p class="section-subtitle">No pressure, no gimmicks. The free tier is genuinely valuable — we want you to feel it before you pay for anything.</p>
      </div>

      <div class="pricing-grid">

        <!-- Free -->
        <div class="pricing-card">
          <div class="pricing-head">
            <div class="pricing-tier-label">Starter</div>
            <div class="pricing-price">
              <span class="price-amount">$0</span>
            </div>
            <div class="pricing-desc">Free forever. No credit card. Join and get real value immediately.</div>
          </div>
          <div class="pricing-body">
            <ul class="pricing-features">
              <li><span class="check-sm">✓</span> 5-lesson AI travel starter course</li>
              <li><span class="check-sm">✓</span> 10–15 AI prompt templates</li>
              <li><span class="check-sm">✓</span> Community access</li>
              <li><span class="check-sm">✓</span> Monthly live Q&amp;A</li>
              <li><span class="check-sm">✓</span> 1 live session a month</li>
            </ul>
            <div class="pricing-cta">
              <a
                href="https://www.skool.com/ai-family-travel-academy-1186/about"
                target="_blank" rel="noopener"
                class="btn btn-navy"
              >
                Join Free
              </a>
            </div>
          </div>
        </div>

        <!-- Premium -->
        <div class="pricing-card highlighted">
          <div class="popular-banner">👑 Most Popular</div>
          <div class="pricing-head">
            <div class="pricing-tier-label">Premium</div>
            <div class="pricing-price">
              <span class="price-amount">$47</span>
              <span class="price-period">/month</span>
            </div>
            <div class="pricing-desc">Full system access, everything you need to plan like a pro.</div>
            <div class="founding-note-pricing">
              💰 Or save with annual: $470/year — 10 months for the price of 12
            </div>
          </div>
          <div class="pricing-body">
            <ul class="pricing-features">
              <li><span class="check-sm">✓</span> Everything in Free, plus...</li>
              <li><span class="check-sm">✓</span> 7-module complete course library</li>
              <li><span class="check-sm">✓</span> Private AI Travel Consultant (exclusive)</li>
              <li><span class="check-sm">✓</span> Multilingual allergy communication cards</li>
              <li><span class="check-sm">✓</span> 2 live sessions/week + Plan With Me</li>
              <li><span class="check-sm">✓</span> Personal trip feedback from Bryan</li>
            </ul>
            <div class="pricing-cta">
              <a
                href="https://www.skool.com/ai-family-travel-academy-1186/about"
                target="_blank" rel="noopener"
                class="btn btn-primary"
              >
                🚀 Get Full Access
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
`;

export { pricingStyles, pricingHTML };
