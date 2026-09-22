/**
 * CTA
 * Contract: CTA(): JSX.Element
 *
 * FLUX final call-to-action.
 * - Solid charcoal band, no gradient
 * - Centered bold headline
 * - Solid button with clear hover state
 */
function CTA() {
  return (
    <section className="bg-slate-950 py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-start px-6 md:px-12">
        <h2 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
          Start your next chapter
        </h2>
        <button
          type="button"
          className="mt-8 rounded-sm bg-white px-8 py-4 font-semibold text-black transition-colors hover:bg-neutral-200"
        >
          Book a discovery call
        </button>
      </div>
    </section>
  )
}

export default CTA
