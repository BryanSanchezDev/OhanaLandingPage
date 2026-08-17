/* ─── FINAL CTA STYLES ───────────────────────────────────────── */
const finalCtaStyles = `
  .final-cta {
    background: linear-gradient(135deg, var(--navy) 0%, var(--indigo) 100%);
    padding: 100px 0;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  /* Big decorative plane in the background */
  .final-cta::before {
    content: '✈';
    position: absolute;
    font-size: 18rem;
    opacity: 0.03;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%) rotate(-15deg);
    pointer-events: none;
  }

  .final-cta h2 {
    font-size: clamp(2rem, 4vw, 3.2rem);
    color: var(--white);
    margin-bottom: 16px;
    position: relative;
  }

  .final-cta h2 em {
    font-style: normal;
    color: var(--orange);
  }

  .final-cta p {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.78);
    max-width: 560px;
    margin: 0 auto 40px;
    line-height: 1.7;
    position: relative;
  }

  .final-cta-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
    position: relative;
  }

  .final-note {
    margin-top: 20px;
    font-size: 0.82rem;
    color: rgba(255,255,255,0.45);
    position: relative;
  }

  .final-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #fb923c;
    color: #ffffff;
    font-family: var(--font-body);
    font-weight: 700;
    font-size: 1.1rem;
    border: none;
    border-radius: 10px;
    padding: 16px 36px;
    cursor: pointer;
    transition:
      transform var(--transition),
      box-shadow var(--transition),
      background var(--transition);
  }
  .final-cta-btn:hover {
    background: #ea7c2b;
    transform: translateY(-2px);
  }
`;

/* ─── FINAL CTA HTML ─────────────────────────────────────────── */
const finalCtaHTML = `
  <section class="final-cta">
    <div class="container">
      <h2>That trip your family keeps<br>talking about? <em>Let's make it happen.</em></h2>
      <p>
        Join free today. Take the 5-lesson starter course. Build your Family Travel Profile.
        And finally start planning the trip your crew actually deserves. Pura vida. 🌍
      </p>
      <div class="final-cta-group">
        <button type="button" class="final-cta-btn" onclick="window.openLeadModal()">
          🚀 Join Free — No Credit Card Needed
        </button>
      </div>
      <p class="final-note">Free to join · 5-lesson starter course included · Accessibility &amp; Allergy expertise built in</p>
    </div>
  </section>
`;

export { finalCtaStyles, finalCtaHTML };
