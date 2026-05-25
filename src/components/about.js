/* ─── ABOUT STYLES ───────────────────────────────────────────── */
const aboutStyles = `
  .about-grid {
    display: grid;
    grid-template-columns: 420px 1fr;
    gap: 72px;
    align-items: center;
  }

  /* Founder photo */
  .founder-photo-wrap { position: relative; }

  .founder-photo {
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--shadow-lg);
  }

  /*
   * FOUNDER PHOTO SLOT
   * Replace .founder-photo-placeholder with:
   * <img src="/images/founder.jpg" alt="Bryan Sanchez"
   *      style="width:100%;aspect-ratio:3/4;object-fit:cover;" />
   * Then remove the dashed border on .founder-photo.
   */
  .founder-photo-placeholder {
    width: 100%;
    aspect-ratio: 3/4;
    background: linear-gradient(160deg, var(--ice), var(--sky));
    border: 2px dashed var(--slate-light);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    color: var(--slate-mid);
    font-size: 0.85rem;
  }

  .founder-photo-placeholder .icon { font-size: 3rem; }

  /* Floating accent card */
  .founder-accent-card {
    position: absolute;
    bottom: -24px;
    right: -24px;
    background: var(--orange);
    color: var(--white);
    border-radius: 14px;
    padding: 18px 22px;
    box-shadow: 0 8px 32px rgba(251,146,60,0.35);
    max-width: 200px;
  }

  .founder-accent-card .acc-title {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.8;
    margin-bottom: 4px;
  }

  .founder-accent-card .acc-value {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.3;
  }

  /* Content */
  .about-content h2 {
    font-size: clamp(1.8rem, 3vw, 2.6rem);
    color: var(--navy);
    margin-bottom: 20px;
  }

  .about-content h2 span { color: var(--orange); }

  .about-content p {
    font-size: 1rem;
    margin-bottom: 16px;
    line-height: 1.75;
  }

  .expertise-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 28px;
  }

  .pill {
    background: var(--ice);
    border: 1px solid var(--slate-light);
    color: var(--navy);
    font-size: 0.85rem;
    font-weight: 600;
    padding: 8px 16px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 900px) {
    .about-grid { grid-template-columns: 1fr; gap: 40px; }
    .founder-photo-wrap { max-width: 380px; margin: 0 auto; }
    .founder-accent-card { right: 0; bottom: -16px; }
  }
`;

/* ─── ABOUT HTML ─────────────────────────────────────────────── */
const aboutHTML = `
  <section class="section">
    <div class="container">
      <div class="about-grid">

        <!-- Photo -->
        <div class="founder-photo-wrap">
          <img src="/images/founder.jpeg" alt="Bryan Sanchez" style="width:100%;aspect-ratio:3/4;object-fit:cover;" />

          <div class="founder-accent-card">
            <div class="acc-title">Lived experience with</div>
            <div class="acc-value">Accessibility &amp; Allergy-Safe Travel</div>
          </div>
        </div>

        <!-- Content -->
        <div class="about-content">
          <div class="tag">Meet Your Guide</div>
          <h2>I'm not some guy<br>who <span>read a blog</span> about this.</h2>

          <p>I'm Bryan Sanchez — Software Engineer, husband, dad, and the person who figured out how to take the whole family to Mexico, Disney, Europe and South America including a family member in a wheelchair and a wife with a serious gluten allergy, without losing my mind OR my wallet.</p>

          <p>I've personally navigated every "accessible room" that turned out to have a step at the door, every restaurant that said "no problem!" and then had no idea what a gluten allergy was, and every airline form that makes traveling with medical needs feel like applying for a mortgage.</p>

          <p>And then I discovered AI tools. Not as a tech guy — as a dad who needed a better way. I started using AI to plan trips and realized it changed <em>everything</em>. So I built this community to share that with families just like mine.</p>

          <div class="expertise-pills">
            <span class="pill">🦽 Accessibility Travel</span>
            <span class="pill">🥜 Allergy-Safe Planning</span>
            <span class="pill">🤖 AI Travel Tools</span>
            <span class="pill">👨‍👩‍👧‍👦 Family Logistics</span>
            <span class="pill">🌎 International Trips</span>
          </div>
        </div>

      </div>
    </div>
  </section>
`;

export { aboutStyles, aboutHTML };
