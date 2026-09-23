/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * Editorial brutalism hero for landing4.
 * - 7/5 asymmetric grid on desktop
 * - Massive Playfair Display headline on the left
 * - Mono label, short paragraph, and sharp object-cover image on the right
 */
function Hero() {
  return (
    <section
      className="grid min-h-[calc(100vh-4rem)] w-full grid-cols-1 border-b border-[#111111] md:grid-cols-12"
      aria-label="Hero"
    >
      {/* Left column — massive serif headline */}
      <div className="flex flex-col justify-end border-b border-[#111111] p-6 md:col-span-7 md:border-b-0 md:border-r md:p-10 lg:p-12">
        <h1 className="font-['Playfair_Display'] text-7xl font-bold leading-[0.9] text-[#111111] md:text-9xl">
          Editorial craft for the modern age
        </h1>
      </div>

      {/* Right column — label, paragraph, image */}
      <div className="flex flex-col justify-between md:col-span-5">
        <div className="p-6 md:p-10 lg:p-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#111111]/70">
            EST. 2024
          </span>
          <p className="mt-6 max-w-sm font-sans text-base leading-relaxed text-[#111111]/80">
            A design studio built on restraint, typography, and the belief that
            every surface should earn its ink.
          </p>
        </div>

        <div className="aspect-[4/3] w-full border-t border-[#111111]">
          <img
            src="/images/nexus-hero.jpg"
            alt="Editorial studio detail in warm paper light"
            className="h-full w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
