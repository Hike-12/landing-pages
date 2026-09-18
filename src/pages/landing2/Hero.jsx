/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * Bold geometric hero for NEXUS.
 * - Centered, large sans-serif headline
 * - Floating polygon accent behind the text
 * - Primary solid + outline secondary CTAs
 * - No images, pure typography and SVG shapes
 */
function Hero() {
  return (
    <section className="relative isolate w-full overflow-hidden px-6 py-24 md:py-32 lg:py-40">
      {/* Floating geometric accent */}
      <svg
        className="absolute inset-0 -z-10 mx-auto h-full w-full max-w-3xl text-primary/15"
        viewBox="0 0 600 600"
        fill="currentColor"
        aria-hidden="true"
        preserveAspectRatio="xMidYMid slice"
      >
        <polygon points="300,60 540,210 480,480 120,480 60,210" />
      </svg>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
        <h1 className="font-sans text-5xl font-bold tracking-tight text-foreground md:text-7xl">
          Build Faster.
          <br />
          Ship Smarter.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          NEXUS gives your team a unified platform to design, deploy, and scale
          products with precision — no friction, no guesswork.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#features"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide text-primary-foreground bg-primary transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Start Building
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide text-foreground border border-foreground/20 transition-colors hover:bg-foreground/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
