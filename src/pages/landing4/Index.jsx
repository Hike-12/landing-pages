/**
 * Index
 * Contract: Index(): JSX.Element
 *
 * Editorial service index for landing4.
 * - Vertical stack of three rows
 * - Each row: large serif number, title, description
 * - Sharp top border only, no cards, no icons, no hover shadows
 */
function Index() {
  const rows = [
    {
      num: '01',
      title: 'Strategy',
      description:
        'We map the territory before we design a single pixel. Research, positioning, and a clear narrative architecture come first.',
    },
    {
      num: '02',
      title: 'Design',
      description:
        'Typography, proportion, and restraint. Every layout is built to carry meaning and hold up under scrutiny.',
    },
    {
      num: '03',
      title: 'Development',
      description:
        'Clean systems, fast surfaces, and code that stays maintainable long after the launch date.',
    },
  ]

  return (
    <section className="w-full px-6" aria-label="Services index">
      <div className="mx-auto w-full max-w-6xl">
        {rows.map((row) => (
          <div
            key={row.num}
            className="flex flex-col gap-6 border-t border-[#111111] py-8 md:flex-row md:items-start md:justify-between"
          >
            <span className="font-['Playfair_Display'] text-4xl text-[#111111] md:w-24">
              {row.num}
            </span>
            <h3 className="text-xl font-medium text-[#111111] md:flex-1">
              {row.title}
            </h3>
            <p className="max-w-md text-sm leading-relaxed text-[#111111]/80">
              {row.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Index
