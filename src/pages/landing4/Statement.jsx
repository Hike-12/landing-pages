/**
 * Statement
 * Contract: Statement(): JSX.Element
 *
 * Editorial pull-quote section for landing4.
 * - Full-width band framed by sharp horizontal borders
 * - Massive Playfair Display quote, left-aligned
 * - No background color changes; inherits warm paper surface
 */
function Statement() {
  return (
    <section
      className="w-full border-y border-[#111111] py-24 px-6 md:px-12"
      aria-label="Statement"
    >
      <blockquote className="mx-auto max-w-6xl">
        <p className="font-['Playfair_Display'] text-4xl leading-tight text-[#111111] md:text-6xl">
          We build brands that refuse to whisper.
        </p>
      </blockquote>
    </section>
  )
}

export default Statement
