/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * Stark full-bleed hero for NEXUS.
 * - Dark editorial background with inverted foreground
 * - Full-bleed nexus-hero.jpg behind a directional gradient
 * - Massive tight-tracking headline, single descriptor, one CTA
 * - Asymmetric text placement with generous negative space
 */
function Hero() {
  return (
    <section className="dark relative isolate flex min-h-[90vh] w-full items-end bg-background text-foreground md:items-center">
      {/* Full-bleed image */}
      <img
        src="/images/nexus-hero.jpg"
        alt="Abstract architectural structure in low light"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="eager"
      />

      {/* Directional dark gradient for readability */}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/40"
        aria-hidden="true"
      />

      <div className="relative w-full px-6 pb-20 pt-32 md:py-0">
        <div className="mx-auto w-full max-w-6xl">
          <h1 className="max-w-4xl font-sans text-6xl font-bold leading-[0.9] tracking-tighter text-foreground md:text-7xl">
            Build the next
            <br />
            standard.
          </h1>

          <p className="mt-8 max-w-xl font-sans text-lg font-medium leading-snug text-muted-foreground md:text-xl">
            Precision infrastructure for teams that refuse to compromise.
          </p>

          <a
            href="#features"
            className="mt-10 inline-flex items-center justify-center rounded-none bg-foreground px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-background transition-colors duration-300 ease-out hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30"
          >
            Start Building
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
