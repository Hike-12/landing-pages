/**
 * Featured
 * Contract: Featured(): JSX.Element
 *
 * Editorial split section for HEIRLOOM.
 * - Asymmetric two-column: image ~60%, text ~40%
 * - No bordered containers, no background boxes
 * - Near-sharp image corners with slow, refined hover scale
 * - Bespoke copy and a text-link CTA with arrow nudge
 */
function Featured() {
  return (
    <section className="w-full px-6 py-24 md:py-32" id="collection">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:gap-16">
        <div className="group w-full overflow-hidden rounded-sm lg:w-3/5">
          <img
            src="/images/featured-bag.jpg"
            alt="The Signature Tote in cognac leather"
            className="w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
        </div>

        <div className="flex w-full flex-col items-start lg:w-2/5">
          <span className="mb-4 font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Flagship Piece
          </span>
          <h2 className="mb-4 font-serif text-2xl text-foreground md:text-3xl">
            The Signature Tote
          </h2>
          <p className="mb-6 font-sans text-lg leading-relaxed text-muted-foreground">
            Cut from a single hide of vegetable-tanned leather and saddle-stitched
            by hand with waxed linen thread. Unlined by intention, so the grain
            softens and darkens with every journey.
          </p>
          <a
            href="#shop-tote"
            className="group/link inline-flex items-center gap-2 font-sans text-base text-foreground transition-colors hover:text-muted-foreground"
          >
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
              className="transition-transform duration-300 ease-out group-hover/link:translate-x-1"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Featured
