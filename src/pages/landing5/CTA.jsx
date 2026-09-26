/**
 * CTA
 * Contract: CTA(): JSX.Element
 *
 * Final call-to-action for landing5.
 * - Dark band with warm ivory typography
 * - Large headline and a simple underlined email link
 * - No buttons, no gradients
 */
function CTA() {
  return (
    <section className="bg-[#1A1917] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-4xl font-sans text-4xl font-medium leading-tight tracking-tight text-[#FAF9F6] md:text-6xl lg:text-7xl">
          Tell us what you are building.
        </h2>
        <a
          href="mailto:hello@studionorth.co"
          className="mt-8 inline-block font-sans text-lg text-[#FAF9F6] underline decoration-[#FAF9F6]/40 underline-offset-8 transition-all duration-300 hover:decoration-[#FAF9F6] hover:underline-offset-4 md:text-2xl"
        >
          hello@studionorth.co
        </a>
      </div>
    </section>
  )
}

export default CTA
