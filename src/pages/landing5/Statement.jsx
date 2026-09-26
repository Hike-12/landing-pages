/**
 * Statement
 * Contract: Statement(): JSX.Element
 *
 * Editorial pull-quote for landing5.
 * - Full-width band with sharp top and bottom borders
 * - Left-aligned statement in large Geist type
 */
function Statement() {
  return (
    <section className="border-b border-[#1A1917] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-[#1A1917]/60">
          Point of view
        </span>
        <blockquote className="max-w-5xl font-sans text-3xl font-medium leading-snug tracking-tight text-[#1A1917] md:text-5xl lg:text-6xl">
          We do not chase novelty. We build systems that stay coherent as the
          company grows.
        </blockquote>
      </div>
    </section>
  )
}

export default Statement
