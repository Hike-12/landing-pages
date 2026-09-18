/**
 * CTA
 * Contract: CTA(): JSX.Element
 *
 * Full-width call-to-action banner for NEXUS.
 * - Primary background with primary-foreground text
 * - Single prominent inverted button
 * - Subtle repeating geometric SVG texture
 * - Contrasts with landing1's understated Newsletter section
 */
function CTA() {
  return (
    <section className="relative isolate w-full overflow-hidden bg-primary px-6 py-20 md:py-28">
      {/* Subtle geometric background texture */}
      <svg
        className="absolute inset-0 -z-10 h-full w-full text-primary-foreground/[0.08]"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="cta-dots"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="24" cy="24" r="2" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="currentColor" />
            <circle cx="48" cy="0" r="1" fill="currentColor" />
            <circle cx="0" cy="48" r="1" fill="currentColor" />
            <circle cx="48" cy="48" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cta-dots)" />
      </svg>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-primary-foreground md:text-5xl">
          Ready to start?
        </h2>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          Join thousands of teams shipping faster with NEXUS. Get started free
          today — no credit card required.
        </p>
        <a
          href="#pricing"
          className="mt-10 inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold tracking-wide text-primary bg-primary-foreground transition-colors hover:bg-primary-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground/50"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}

export default CTA
