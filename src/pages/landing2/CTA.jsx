/**
 * CTA
 * Contract: CTA(): JSX.Element
 *
 * Stark dark call-to-action band for NEXUS.
 * - Full-bleed abstract texture behind a solid dark scrim
 * - Massive tight-tracking headline, no sub-copy noise
 * - One minimal inverted button
 * - No gradients, no decorative shapes
 */
function CTA() {
  return (
    <section className="dark relative isolate w-full overflow-hidden px-6 py-28 md:py-36 lg:py-44">
      {/* Abstract texture */}
      <img
        src="/images/nexus-abstract.jpg"
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        loading="lazy"
      />

      {/* Solid dark scrim for contrast — no gradients */}
      <div
        className="absolute inset-0 -z-10 bg-background/85"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-6xl">
        <h2 className="max-w-4xl font-sans text-5xl font-bold leading-[0.9] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
          Set the next
          <br />
          standard.
        </h2>

        <a
          href="#pricing"
          className="mt-12 inline-flex items-center justify-center rounded-none border border-foreground bg-foreground px-8 py-3.5 font-sans text-sm font-semibold uppercase tracking-widest text-background transition-colors duration-300 ease-out hover:bg-transparent hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30"
        >
          Start Building
        </a>
      </div>
    </section>
  )
}

export default CTA
