/**
 * Statement
 * Contract: Statement(): JSX.Element
 *
 * Editorial statement band for landing6.
 * - Full-width with top and bottom borders
 * - Large light-weight type with a small label
 */
function Statement() {
  return (
    <section id="statement" className="border-y border-[#F5F5F5]/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
          Point of view
        </span>
        <blockquote className="max-w-5xl font-sans text-3xl font-light leading-snug tracking-tight text-[#F5F5F5] md:text-5xl">
          In a world of noise, we build signal. Every interaction is an opportunity to create clarity, beauty, and momentum.
        </blockquote>
      </div>
    </section>
  )
}

export default Statement
