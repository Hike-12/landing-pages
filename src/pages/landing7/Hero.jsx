/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * AURELIA hero.
 * - Full viewport height, centered editorial composition
 * - Deep espresso canvas with warm alabaster typography
 * - Playfair Display headline, ultra-light sans subhead
 * - Antique gold horizontal rule and scroll-down indicator
 */
function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center bg-[#0F0D0A] px-6 text-center"
    >
      <span className="mb-6 font-[var(--sans)] text-[10px] font-medium uppercase tracking-[0.35em] text-[#C5A059]">
        EST. MMXXIV
      </span>

      <h1 className="max-w-4xl font-['Playfair_Display',serif] text-5xl font-medium leading-[1.05] tracking-[-0.02em] text-[#F5F0E8] md:text-7xl">
        The Art of Dwelling
      </h1>

      <p className="mx-auto mt-8 max-w-xl font-[var(--sans)] text-sm font-light leading-relaxed tracking-wide text-[#F5F0E8]/55 md:text-base">
        A curated world where light, material, and proportion converge into
        spaces that feel quietly extraordinary.
      </p>

      <div className="mt-10 h-px w-16 bg-[#C5A059]" aria-hidden="true" />

      <a
        href="#philosophy"
        onClick={(e) => {
          e.preventDefault()
          const el = document.getElementById('philosophy')
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' })
          }
        }}
        className="group absolute bottom-10 flex flex-col items-center gap-3 transition-opacity duration-300 hover:opacity-80"
        aria-label="Scroll to philosophy"
      >
        <span className="font-[var(--sans)] text-[10px] uppercase tracking-[0.25em] text-[#F5F0E8]/50">
          Explore
        </span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-[#C5A059]/40 p-1.5">
          <span className="block h-1.5 w-px origin-top animate-[scroll-pulse_2s_ease-in-out_infinite] bg-[#C5A059]" />
        </span>
      </a>
    </section>
  )
}

export default Hero
