/**
 * Testimonials
 * Contract: Testimonials(): JSX.Element
 *
 * Social proof section for NEXUS.
 * - Horizontal scroll row on mobile, flex row on desktop
 * - Bordered cards with avatar initials, quote, name, and role
 * - No images, pure typography and geometry
 */
function Testimonials() {
  const testimonials = [
    {
      quote:
        'NEXUS cut our release cycle in half. The workflow is so intuitive that the whole team adopted it in a week.',
      name: 'Sarah Chen',
      role: 'VP of Engineering',
      initials: 'SC',
    },
    {
      quote:
        'Finally, a platform that brings design and development into the same rhythm. Our handoffs are seamless now.',
      name: 'Marcus Okafor',
      role: 'Product Lead',
      initials: 'MO',
    },
    {
      quote:
        'The modular approach let us ship a complete redesign without touching a single legacy component.',
      name: 'Elena Voss',
      role: 'Design Director',
      initials: 'EV',
    },
  ]

  return (
    <section className="w-full px-6 py-24" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by teams
        </span>
        <h2
          id="testimonials-heading"
          className="font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Loved by builders
        </h2>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="min-w-[280px] flex-1 snap-start rounded-lg border border-border bg-card p-6"
            >
              <p className="text-lg italic leading-relaxed text-card-foreground">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary"
                  aria-hidden="true"
                >
                  {item.initials}
                </span>
                <div>
                  <p className="font-sans font-semibold text-card-foreground">
                    {item.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
