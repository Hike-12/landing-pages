/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * Editorial hero for landing5.
 * - Full-bleed warm ivory canvas
 * - Oversized Geist headline with tight tracking
 * - Asymmetric placement: headline left, descriptor right
 */
function Hero() {
  return (
    <section
      className="min-h-[calc(100vh-4rem)] w-full border-b border-[#1A1917] px-6 pt-16 md:px-12"
      aria-label="Hero"
    >
      <div className="mx-auto flex h-full min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-between py-12 md:py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <h1 className="max-w-4xl font-sans text-6xl font-medium leading-[0.95] tracking-tight text-[#1A1917] md:text-8xl lg:text-9xl">
            Design that outlasts the trend cycle.
          </h1>

          <p className="max-w-xs self-start font-sans text-base leading-relaxed text-[#1A1917]/70 md:self-end">
            Studio North is a brand and digital studio for founders who value
            restraint, structure, and long-form craft.
          </p>
        </div>

        <div className="flex items-end justify-between border-t border-[#1A1917] pt-6">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A1917]/60">
            Est. 2024 — Copenhagen / Remote
          </span>
          <a
            href="#work"
            className="font-sans text-sm uppercase tracking-widest text-[#1A1917] underline decoration-transparent underline-offset-8 transition-all duration-300 hover:decoration-[#1A1917] hover:underline-offset-4"
          >
            View selected work
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
