/* ─── FAQ STYLES ─────────────────────────────────────────────── */
const faqStyles = `
  .faq-header {
    text-align: center;
    max-width: 560px;
    margin: 0 auto 56px;
  }

  .faq-header .section-subtitle { margin: 0 auto; }

  .faq-list {
    max-width: 780px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .faq-item {
    background: var(--white);
    border: 1px solid var(--slate-light);
    border-radius: var(--radius);
    overflow: hidden;
    transition: box-shadow var(--transition);
  }

  .faq-item:hover { box-shadow: var(--shadow-card); }

  .faq-question {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 20px 24px;
    background: none;
    border: none;
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 1rem;
    font-weight: 600;
    color: var(--navy);
    text-align: left;
  }

  .faq-chevron {
    flex-shrink: 0;
    width: 24px; height: 24px;
    border-radius: 50%;
    background: var(--ice);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    color: var(--navy);
    transition: transform var(--transition), background var(--transition);
  }

  .faq-item.open .faq-chevron {
    transform: rotate(180deg);
    background: var(--navy);
    color: var(--white);
  }

  .faq-answer {
    display: none;
    padding: 16px 24px 20px;
    font-size: 0.95rem;
    color: var(--slate-mid);
    line-height: 1.7;
    border-top: 1px solid var(--slate-light);
  }

  .faq-item.open .faq-answer { display: block; }
`;

/* ─── FAQ DATA ───────────────────────────────────────────────── */
// To add, edit, or remove questions, just edit this array.
const faqItems = [
  {
    question: 'Do I need to know anything about AI to join?',
    answer: 'Absolutely not. If you\'ve ever typed a question into Google, you can use AI for travel planning. We start from zero and walk you through every step. The tools we use are free, beginner-friendly, and honestly kind of fun once you get going.',
  },
  {
    question: 'Is the $9.99/month membership actually worth it, or just a sales pitch?',
    answer: 'Genuinely useful from day one. The moment you join, you get the full course library, the AI prompt vault, and Bella — not a watered-down trial. Most members say the very first trip they plan pays for the membership many times over.',
  },
  {
    question: 'We travel with a family member who uses a wheelchair. Is this community for us?',
    answer: '100% yes — this is one of the core reasons this community exists. The founder has personal, hands-on experience navigating accessibility travel. Module 4 in the course library is dedicated entirely to mobility and disability travel planning: wheelchair-accessible routes, hotel vetting, medical equipment logistics, and choosing destinations that are actually accessible — not just "accessible-ish."',
  },
  {
    question: 'My child has a serious food allergy. Can this community help?',
    answer: 'Yes — and this is another reason the community was built. We cover allergy-safe travel in depth: how to communicate dietary needs to airlines, hotels, and restaurants (including in foreign languages), how to vet destinations, what to pack, and how to use AI to research safe options at every stop.',
  },
  {
    question: 'How is this different from just Googling travel tips?',
    answer: 'Google gives you generic information. This community gives you a system — built specifically for families with real-world complexity — plus AI-powered tools, templates, scripts, and a community of people doing the exact same thing. The difference is going from scattered information to a repeatable process that works for your family every single trip.',
  },
  {
    question: 'Who is Bella, the AI Travel Consultant?',
    answer: "Bella is a custom AI chatbot built exclusively for members — trained on the community's methodology, frameworks, and full prompt library. She can help you research destinations, build itineraries, find allergy-safe options, and plan for accessibility needs — 24/7, in seconds. She's the flagship feature of your membership and not available anywhere else.",
  },
  {
    question: 'Can both spouses use the membership?',
    answer: 'The whole point of this community is that travel planning is a team sport. Everything is designed for couples to do together. One membership gets both of you into the community, courses, and tools — plan together, argue less, travel more.',
  },
  {
    question: 'Can I cancel anytime?',
    answer: "Yes, no questions asked. It's a monthly subscription — cancel anytime directly through Skool. We're confident the community pays for itself the first time you plan a trip without a travel agent.",
  },
];

/* ─── FAQ HTML ───────────────────────────────────────────────── */
const faqHTML = `
  <section class="section">
    <div class="container">

      <div class="faq-header">
        <div class="tag">Questions</div>
        <h2 class="section-title">Real answers to real questions.</h2>
        <p class="section-subtitle">No fluff. If you're wondering about it, someone else already asked.</p>
      </div>

      <div class="faq-list">
        ${faqItems.map(item => `
          <div class="faq-item">
            <button class="faq-question">
              ${item.question}
              <span class="faq-chevron">▼</span>
            </button>
            <div class="faq-answer">${item.answer}</div>
          </div>
        `).join('')}
      </div>

    </div>
  </section>
`;

/* ─── FAQ BEHAVIOUR ──────────────────────────────────────────── */
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
      // Toggle clicked
      if (!isOpen) item.classList.add('open');
    });
  });
}

export { faqStyles, faqHTML, initFaq };
