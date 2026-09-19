/**
 * Testimonials
 * Contract: Testimonials(): JSX.Element
 *
 * Swiss-style social proof for NEXUS.
 * - Full-width large quotes, no card containers
 * - Tight leading, generous vertical rhythm
 * - Asymmetric attribution: name small, company smaller
 * - Thin top border as the only structural element
 */
function Testimonials() {
  const testimonials = [
    {
      quote:
        'NEXUS cut our release cycle in half. The workflow is so intuitive that the whole team adopted it in a week.',
      name: 'Sarah Chen',
      company: 'Linear',
    },
    {
      quote:
        'Finally, a platform that brings design and development into the same rhythm. Our handoffs are seamless now.',
      name: 'Marcus Okafor',
      company: 'Vercel',
    },
    {
      quote:
        'The modular approach let us ship a complete redesign without touching a single legacy component.',
      name: 'Elena Voss',
      company: 'Figma',
    },
  ]

  return (
    <section className="w-full px-6 py-24 md:py-32" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-6xl">
        <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by teams
        </span>
        <h2
          id="testimonials-heading"
          className="font-sans text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl"
        >
          Voices
        </h2>

        <div className="mt-16 md:mt-24">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="border-t border-border py-16 md:py-24"
            >
              <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end md:gap-8">
                <blockquote className="md:col-span-10">
                  <p className="font-sans text-3xl font-medium leading-[1.1] tracking-tight text-foreground md:text-4xl lg:text-[2.75rem]">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </blockquote>

                <footer className="flex flex-col gap-0.5 md:col-span-2 md:text-right">
                  <span className="font-sans text-sm font-semibold uppercase tracking-wide text-foreground">
                    {item.name}
                  </span>
                  <span className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
                    {item.company}
                  </span>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
