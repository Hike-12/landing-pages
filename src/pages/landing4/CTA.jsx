/**
 * CTA
 * Contract: CTA(): JSX.Element
 *
 * Final call-to-action for landing4.
 * - Solid near-black background with warm paper text
 * - Oversized serif headline
 * - Minimal underlined mailto link, no buttons or borders
 */
function CTA() {
  return (
    <section className="w-full bg-[#111111] px-6 py-24 text-[#F4F1EA]">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="font-['Playfair_Display'] text-6xl leading-[0.95] tracking-tight md:text-8xl">
          Start a project.
        </h2>

        <a
          href="mailto:hello@atelier.studio"
          className="mt-8 inline-block font-sans text-lg underline underline-offset-4 transition-colors duration-200 hover:text-white"
        >
          hello@atelier.studio
        </a>
      </div>
    </section>
  )
}

export default CTA
