/**
 * CTA
 * Contract: CTA(): JSX.Element
 *
 * FLUX final call-to-action.
 * - Horizontal aurora gradient band
 * - Centered bold headline
 * - Gradient pill button with simple opacity hover
 */
function CTA() {
  return (
    <section className="bg-gradient-to-r from-teal-950 via-slate-900 to-violet-950 py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="text-4xl font-bold tracking-tighter text-white md:text-6xl">
          Start your next chapter
        </h2>
        <button
          type="button"
          className="mt-8 rounded-full bg-gradient-to-r from-teal-400 to-violet-500 px-8 py-4 font-semibold text-slate-950 transition-opacity hover:opacity-90"
        >
          Book a discovery call
        </button>
      </div>
    </section>
  )
}

export default CTA
