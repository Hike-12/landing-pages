/**
 * Featured
 * Contract: Featured(): JSX.Element
 *
 * Editorial split section for HEIRLOOM.
 * - Asymmetric two-column: image 60%, text 40%
 * - 24px heading, 18px body, 16px text-link CTA
 * - Responsive stacking on mobile
 */
function Featured() {
  return (
    <section className="featured" id="collection">
      <div className="featured__media">
        <img
          src="/images/featured-bag.jpg"
          alt="The Signature Tote in cognac leather"
          className="featured__image"
          loading="lazy"
        />
      </div>

      <div className="featured__content">
        <span className="featured__eyebrow">Flagship Piece</span>
        <h2 className="featured__title">The Signature Tote</h2>
        <p className="featured__body">
          Cut from full-grain vegetable-tanned leather and hand-stitched with
          waxed linen thread. Designed to carry your day with quiet confidence
          and age into a record of where you have been.
        </p>
        <a href="#shop-tote" className="featured__cta">
          Discover the Collection
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Featured
