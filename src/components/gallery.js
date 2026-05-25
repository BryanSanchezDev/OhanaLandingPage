/* ─── GALLERY STYLES ─────────────────────────────────────────── */
const galleryStyles = `
  .gallery-header { margin-bottom: 48px; }

  .gallery-header p {
    margin-top: 8px;
    font-style: italic;
    color: var(--slate-mid);
    font-size: 0.95rem;
  }

  .gallery-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  /*
   * Items 1 and 5 span 2 rows to create a tall feature photo effect.
   * When you add real photos, make sure trip-01.jpg and trip-05.jpg
   * are portrait-oriented shots for best visual impact.
   */
  .gallery-item:nth-child(1) { grid-row: span 2; }
  .gallery-item:nth-child(5) { grid-row: span 2; }

  .gallery-item {
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;
    transition: transform var(--transition), box-shadow var(--transition);
    cursor: pointer;
  }

  .gallery-item:hover {
    transform: scale(1.02);
    box-shadow: var(--shadow-lg);
    z-index: 2;
  }

  /* Real photo inside a gallery item — remove border/bg when using real images */
  .gallery-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    display: block;
  }

  /*
   * GALLERY PHOTO PLACEHOLDERS
   * For each item, replace the .photo-placeholder div with:
   * <img src="/images/trip-XX.jpg" alt="Your caption here" />
   * Then remove the dashed border from .gallery-item.
   */
  .gallery-item .photo-placeholder {
    min-height: 220px;
  }

  .gallery-item:nth-child(1) .photo-placeholder,
  .gallery-item:nth-child(5) .photo-placeholder {
    min-height: 460px;
  }

  @media (max-width: 900px) {
    .gallery-grid { grid-template-columns: repeat(2, 1fr); }
    .gallery-item:nth-child(1),
    .gallery-item:nth-child(5) { grid-row: span 1; }
    .gallery-item .photo-placeholder,
    .gallery-item:nth-child(1) .photo-placeholder,
    .gallery-item:nth-child(5) .photo-placeholder { min-height: 200px; }
  }

  @media (max-width: 600px) {
    .gallery-grid { grid-template-columns: 1fr; }
  }
`;

/* ─── HELPER: build a single gallery item ────────────────────── */
// When you have real photos, call buildGalleryItem with imageSrc set:
// buildGalleryItem(1, '/images/trip-01.jpg', 'Family in Portugal')
function buildGalleryItem(index, imageSrc = null, alt = "") {
  const content = imageSrc
    ? `<img src="${imageSrc}" alt="${alt}" />`
    : `
      <div class="photo-placeholder">
        <span class="p-icon">📸</span>
        <strong>Trip Photo ${index}</strong>
        <span>/images/trip-0${index}.jpg</span>
      </div>
    `;
  return `<div class="gallery-item">${content}</div>`;
}

/* ─── GALLERY PHOTOS CONFIG ──────────────────────────────────── */
// To add your photos, fill in the src and alt for each item below.
// Leave src as null to keep the placeholder.
const galleryPhotos = [
  { src: "/images/1.jpeg", alt: "Trip photo 1" },
  { src: "/images/2.jpeg", alt: "Trip photo 2" },
  { src: "/images/3.jpeg", alt: "Trip photo 3" },
  { src: "/images/4.jpeg", alt: "Trip photo 4" },
  { src: "/images/5.jpeg", alt: "Trip photo 5" },
  { src: "/images/6.jpeg", alt: "Trip photo 6" },
  { src: "/images/7.jpeg", alt: "Trip photo 7" },
  { src: "/images/8.jpeg", alt: "Trip photo 8" },
];

/* ─── GALLERY HTML ───────────────────────────────────────────── */
const galleryHTML = `
  <section class="section">
    <div class="container">

      <div class="gallery-header">
        <div class="tag">Real Trips. Real Family.</div>
        <h2 class="section-title">These aren't stock photos.</h2>
        <p>This is us — allergies, wheelchairs and all. Planning with AI made every single one of these trips happen.</p>
      </div>

      <div class="gallery-grid">
        ${galleryPhotos.map((photo, i) => buildGalleryItem(i + 1, photo.src, photo.alt)).join("\n")}
      </div>

    </div>
  </section>
`;

export { galleryStyles, galleryHTML };
