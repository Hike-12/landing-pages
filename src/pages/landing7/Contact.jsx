/**
 * Contact
 * Contract: Contact(): JSX.Element
 *
 * AURELIA contact CTA.
 * - Minimal centered layout on a deep espresso canvas
 * - Playfair Display headline with generous vertical breathing room
 * - Transparent "Inquire" button with a 1px antique gold border
 * - Hover state fills antique gold and switches text to deep espresso
 */
function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center bg-[#0F0D0A] px-6 py-32 text-center md:py-40"
    >
      <h2 className="max-w-3xl font-['Playfair_Display',serif] text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-[#F5F0E8] md:text-6xl">
        Begin Your Collection
      </h2>

      <p className="mx-auto mt-6 max-w-md font-[var(--sans)] text-sm font-light leading-relaxed tracking-wide text-[#F5F0E8]/55 md:text-base">
        Let us curate a space that feels unmistakably yours — quiet, luminous,
        and entirely at ease.
      </p>

      <button
        type="button"
        className="mt-10 border border-[#C5A059] bg-transparent px-10 py-4 font-[var(--sans)] text-xs font-medium uppercase tracking-[0.25em] text-[#F5F0E8] transition-all duration-300 hover:bg-[#C5A059] hover:text-[#0F0D0A]"
      >
        Inquire
      </button>
    </section>
  )
}

export default Contact
