/**
 * Philosophy
 * Contract: Philosophy(): JSX.Element
 *
 * FLUX creative-studio philosophy statement.
 * - Solid charcoal ground with no gradients or decorative effects
 * - Large left-aligned editorial quote with generous whitespace
 * - Hierarchy built from size and weight, not color fades
 */
function Philosophy() {
  return (
    <section className="bg-slate-950 px-6 py-32 md:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="mb-8 text-sm font-medium uppercase tracking-widest text-neutral-400">
            Philosophy
          </p>

          <blockquote className="text-4xl font-semibold leading-[1.1] tracking-tight text-white md:text-6xl lg:text-7xl">
            The best work lives in the tension between intuition and precision.
          </blockquote>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Every project is an invitation to question defaults, embrace
            ambiguity, and craft experiences that feel inevitable yet
            impossible to ignore. Form follows feeling. Function follows
            obsession. The result is not a product, but a point of view.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Philosophy
