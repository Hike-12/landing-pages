/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * FLUX creative-studio hero.
 * - Solid charcoal backdrop, no gradients or aurora effects
 * - Large editorial headline with strong weight and tight tracking
 * - Asymmetric left-aligned composition
 * - Minimal scroll indicator
 */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden bg-slate-950 pb-24 md:items-center md:pb-0">
      {/* Editorial content — left-aligned, asymmetric */}
      <div className="relative z-10 w-full px-6 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-sm font-medium uppercase tracking-widest text-slate-500">
            Creative Studio
          </p>
          <h1 className="max-w-4xl text-6xl font-bold tracking-tighter text-white md:text-8xl lg:text-9xl">
            We shape
            <br />
            digital realities
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-slate-400 md:text-xl">
            A creative studio building immersive brands, products, and experiences
            for the next era of culture.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-6 text-slate-600 md:left-12">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="animate-bounce"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
