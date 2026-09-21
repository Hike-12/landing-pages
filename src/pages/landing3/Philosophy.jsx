/**
 * Philosophy
 * Contract: Philosophy(): JSX.Element
 *
 * FLUX creative-studio philosophy statement.
 * - Dark, immersive section with no cards, icons, or buttons
 * - Large editorial statement split across two columns on desktop
 * - Pure typography and negative space
 */
function Philosophy() {
  return (
    <section className="bg-slate-950 py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <p className="text-3xl font-medium leading-tight tracking-tight text-slate-200 md:columns-2 md:gap-12 md:text-5xl">
          We believe the best work lives in the tension between intuition and
          precision. Every project is an invitation to question defaults,
          embrace ambiguity, and craft experiences that feel inevitable yet
          impossible to ignore. Form follows feeling. Function follows
          obsession. The result is not a product, but a point of view.
        </p>
      </div>
    </section>
  )
}

export default Philosophy
