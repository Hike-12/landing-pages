/**
 * Manifesto
 * Contract: Manifesto(): JSX.Element
 *
 * Three-pillar manifesto for landing5.
 * - Asymmetric three-column grid on desktop
 * - Numbered pillars with sharp top borders
 * - No cards, no icons, pure typography
 */
function Manifesto() {
  const pillars = [
    {
      num: '01',
      title: 'Clarity before decoration',
      body: 'Every element must justify its place. If it does not serve the message, it is removed.',
    },
    {
      num: '02',
      title: 'Systems over one-offs',
      body: 'We design tokens, grids, and rules that scale so the brand does not drift with every new page.',
    },
    {
      num: '03',
      title: 'Quiet confidence',
      body: 'The best brands do not shout. They choose restraint and let the work speak with weight.',
    },
  ]

  return (
    <section className="border-b border-[#1A1917] px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.num}
              className="border-t border-[#1A1917] pt-8"
            >
              <span className="mb-6 block font-mono text-xs uppercase tracking-widest text-[#1A1917]/60">
                {pillar.num}
              </span>
              <h3 className="mb-4 font-sans text-xl font-semibold tracking-tight text-[#1A1917] md:text-2xl">
                {pillar.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-[#1A1917]/70">
                {pillar.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Manifesto
