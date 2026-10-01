/**
 * Atmosphere
 * Contract: Atmosphere(): JSX.Element
 *
 * AURELIA atmosphere statement.
 * - Full-bleed section with a fixed-background parallax feel
 * - Centered Playfair Display serif text over the hero image
 * - Warm alabaster type with antique gold accent words
 * - Deep espresso scrim so the image never competes with the words
 * - Very generous vertical padding (py-32)
 */
function Atmosphere() {
  return (
    <section
      id="atmosphere"
      className="relative overflow-hidden bg-[#0F0D0A] py-32 md:py-40"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/landing7-hero.jpg)',
          backgroundAttachment: 'fixed',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[#0F0D0A]/75"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center px-6 text-center lg:px-10">
        <span className="mb-8 font-[var(--sans)] text-[10px] font-medium uppercase tracking-[0.35em] text-[#C5A059]">
          Atmosphere
        </span>

        <blockquote className="font-['Playfair_Display',serif] text-3xl font-normal leading-[1.25] tracking-[-0.01em] text-[#F5F0E8] md:text-5xl lg:text-6xl">
          “A room should feel like a{' '}
          <em className="not-italic text-[#C5A059]">sigh of relief</em> —
          composed, luminous, and entirely at ease with itself.”
        </blockquote>

        <div className="mt-10 h-px w-16 bg-[#C5A059]" aria-hidden="true" />

        <p className="mt-8 max-w-2xl font-[var(--sans)] text-sm font-light leading-relaxed tracking-wide text-[#F5F0E8]/60 md:text-base">
          We believe the most luxurious spaces are not the ones that demand
          attention, but the ones that gently hold it.
        </p>
      </div>
    </section>
  )
}

export default Atmosphere
