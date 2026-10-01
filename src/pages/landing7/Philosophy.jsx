/**
 * Philosophy
 * Contract: Philosophy(): JSX.Element
 *
 * AURELIA philosophy section.
 * - Two-column asymmetric editorial layout (1/3 left, 2/3 right)
 * - Vertical antique gold rule with wide-tracking label
 * - Large Playfair Display italic quote and light sans body
 * - Deep espresso canvas with generous whitespace
 */
function Philosophy() {
  return (
    <section
      id="philosophy"
      className="bg-[#0F0D0A] px-6 py-28 md:py-36 lg:px-10"
    >
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3 md:gap-16 lg:gap-24">
        <div className="relative flex md:justify-end">
          <div
            className="absolute left-0 top-0 hidden h-full w-px bg-[#C5A059]/60 md:block"
            aria-hidden="true"
          />
          <span className="pl-8 font-[var(--sans)] text-[10px] font-medium uppercase tracking-[0.35em] text-[#C5A059]">
            Our Philosophy
          </span>
        </div>

        <div className="md:col-span-2">
          <blockquote className="font-['Playfair_Display',serif] text-3xl font-normal italic leading-[1.25] text-[#F5F0E8] md:text-4xl lg:text-5xl">
            “True luxury is the absence of excess.”
          </blockquote>

          <p className="mt-8 max-w-2xl font-[var(--sans)] text-sm font-light leading-[1.8] tracking-wide text-[#F5F0E8]/60 md:text-base">
            We believe the most extraordinary spaces are shaped by restraint.
            Every object we curate is chosen not for spectacle, but for the
            quiet confidence it brings to a room — a conversation between
            material, light, and time.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
