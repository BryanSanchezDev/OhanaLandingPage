/* ─── TRUST STRIP STYLES ─────────────────────────────────────── */
const trustStripStyles = `
  .trust-strip {
    background: var(--white);
    border-top: 1px solid var(--slate-light);
    border-bottom: 1px solid var(--slate-light);
    padding: 24px 0;
  }

  .trust-inner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
  }

  .trust-item {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--slate-mid);
  }

  .trust-item .icon { font-size: 1.2rem; }

  @media (max-width: 900px) {
    .trust-inner { gap: 24px; }
  }
`;

/* ─── TRUST STRIP HTML ───────────────────────────────────────── */
const trustStripHTML = `
  <div class="trust-strip">
    <div class="container">
      <div class="trust-inner">
        <div class="trust-item">
          <span class="icon">🦽</span>
          Accessibility Travel Expertise
        </div>
        <div class="trust-item">
          <span class="icon">🥜</span>
          Allergy-Safe Travel Know-How
        </div>
        <div class="trust-item">
          <span class="icon">🤖</span>
          AI-Powered Planning Tools
        </div>
        <div class="trust-item">
          <span class="icon">👨‍👩‍👧‍👦</span>
          Built by a Real Traveling Family
        </div>
        <div class="trust-item">
          <span class="icon">✅</span>
          Free to Join
        </div>
      </div>
    </div>
  </div>
`;

export { trustStripStyles, trustStripHTML };
