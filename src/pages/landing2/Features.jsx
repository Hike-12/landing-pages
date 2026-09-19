/**
 * Features
 * Contract: Features(): JSX.Element
 *
 * Swiss-style feature index for NEXUS.
 * - Three large horizontal rows, no cards, no icons
 * - Thin top border as the only structural element
 * - Oversized muted numbers and bold typographic titles
 * - Generous vertical rhythm
 */
function Features() {
  const features = [
    {
      num: '01',
      title: 'Real-time Collaboration',
      description:
        'A shared canvas where every edit syncs instantly. No refresh, no merge conflicts, no friction.',
    },
    {
      num: '02',
      title: 'Modular Components',
      description:
        'Flexible blocks that adapt to any screen or state. Build once, reuse everywhere.',
    },
    {
      num: '03',
      title: 'Insightful Analytics',
      description:
        'Clean dashboards that surface the metrics that matter — and ignore the ones that do not.',
    },
  ]

  return (
    <section id="features" className="w-full px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {features.map((feature) => (
          <div
            key={feature.num}
            className="border-t border-border py-24"
          >
            <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-12 md:items-baseline md:gap-8">
              <span
                className="font-sans text-5xl font-light tabular-nums text-muted-foreground md:col-span-2 lg:text-6xl"
                aria-hidden="true"
              >
                {feature.num}
              </span>
              <h3 className="font-sans text-2xl font-semibold uppercase tracking-tight text-foreground md:col-span-4 lg:text-3xl">
                {feature.title}
              </h3>
              <p className="max-w-xl font-sans text-base leading-relaxed text-muted-foreground md:col-span-6">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
