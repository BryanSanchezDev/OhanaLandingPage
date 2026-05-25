/* ─── PROBLEM STYLES ─────────────────────────────────────────── */
const problemStyles = `
  .problem-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 56px;
  }

  .problem-card {
    background: var(--white);
    border-radius: var(--radius);
    border: 1px solid var(--slate-light);
    padding: 28px;
    position: relative;
    overflow: hidden;
    transition: transform var(--transition), box-shadow var(--transition);
  }

  .problem-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-card);
  }

  .problem-card::before {
    content: '"';
    position: absolute;
    top: 16px; left: 28px;
    font-size: 5rem;
    font-family: var(--font-display);
    color: var(--slate-light);
    line-height: 1;
    pointer-events: none;
  }

  .problem-card p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--slate-dark);
    padding-top: 68px;
  }

  .problem-card .attribution {
    margin-top: 14px;
    font-size: 0.8rem;
    color: var(--slate-mid);
    font-weight: 500;
  }

  .problem-closer {
    margin-top: 48px;
    background: linear-gradient(135deg, var(--navy), var(--indigo));
    border-radius: var(--radius);
    padding: 40px;
    text-align: center;
    color: var(--white);
  }

  .problem-closer h3 {
    font-size: 1.8rem;
    color: var(--white);
    margin-bottom: 12px;
  }

  .problem-closer p {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.8);
  }

  @media (max-width: 900px) {
    .problem-grid { grid-template-columns: 1fr; }
  }
`;

/* ─── PROBLEM HTML ───────────────────────────────────────────── */
const problemHTML = `
  <section class="section">
    <div class="container">
      <div class="tag">Sound Familiar?</div>
      <h2 class="section-title">We know exactly how you feel.</h2>
      <p class="section-subtitle">
        Travel planning should be exciting. Instead, it feels like a second job.
        Here's what we hear all the time — and honestly, we've been there too.
      </p>

      <div class="problem-grid">
        <div class="problem-card">
          <p>You've been talking about "that trip to Europe" for three years. You have a Pinterest board, a half-open browser tab, and zero actual plans.</p>
          <div class="attribution">— Every couple, ever 😅</div>
        </div>
        <div class="problem-card">
          <p>You have a family member with a nut allergy and the idea of eating abroad genuinely terrifies you. So you just... don't go.</p>
          <div class="attribution">— Parents with allergic kids</div>
        </div>
        <div class="problem-card">
          <p>You want to bring grandma or a family member with mobility needs, but you have no idea how to find hotels that are ACTUALLY accessible — not just "accessible-ish."</p>
          <div class="attribution">— Families with accessibility needs</div>
        </div>
        <div class="problem-card">
          <p>You paid a travel agent once. The trip was fine. But fine isn't your family. You want something that actually fits YOUR people.</p>
          <div class="attribution">— Couples ready to take control</div>
        </div>
      </div>

      <div class="problem-closer">
        <h3>There's a better way. And it starts with AI.</h3>
        <p>You already have access to a tool that can research destinations, build itineraries, find allergy-safe restaurants, and plan around grandma's mobility needs — all at 2am in your pajamas, for free. We just teach you how to use it.</p>
      </div>
    </div>
  </section>
`;

export { problemStyles, problemHTML };
