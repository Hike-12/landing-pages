/**
 * Craftsmanship
 * Contract: Craftsmanship(): JSX.Element
 *
 * Editorial process section for HEIRLOOM.
 * - Large image + adjacent text panel
 * - Numbered process steps with no visible boxes
 * - Sharp image, generous whitespace, no gradients
 */
function Craftsmanship() {
  const steps = [
    {
      num: '01',
      title: 'Selection',
      desc: 'We source full-grain hides from heritage tanneries in Tuscany, inspecting each hide by hand for grain consistency and natural character.',
    },
    {
      num: '02',
      title: 'Cutting',
      desc: 'Every panel is cut with precision knives guided by patterns refined over decades. No two pieces are identical.',
    },
    {
      num: '03',
      title: 'Stitching',
      desc: 'Using waxed linen thread and traditional saddle stitches, our artisans build seams that outlast machine stitching.',
    },
    {
      num: '04',
      title: 'Finishing',
      desc: 'Edges are burnished, conditioned, and polished with natural beeswax to develop a patina unique to its owner.',
    },
  ]

  return (
    <section className="w-full py-24 px-6" id="craftsmanship">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-12 lg:flex-row lg:gap-16">
        <div className="w-full lg:w-1/2">
          <img
            src="/images/craftsmanship.jpg"
            alt="Artisan hand-stitching leather in the atelier"
            className="aspect-square w-full rounded-sm object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex w-full flex-col items-start lg:w-1/2">
          <span className="mb-4 font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Our Process
          </span>
          <h2 className="mb-4 font-serif text-3xl text-foreground">
            Four Stages of Craft
          </h2>
          <p className="mb-10 font-sans text-lg leading-relaxed text-muted-foreground">
            Each HEIRLOOM piece passes through the hands of a single artisan from
            start to finish. This continuity of care ensures every stitch, edge,
            and surface meets a standard that machines cannot replicate.
          </p>

          <ol className="w-full space-y-8">
            {steps.map((step) => (
              <li key={step.num} className="flex gap-6">
                <span
                  className="mt-0.5 font-sans text-sm font-medium tabular-nums text-muted-foreground"
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="mb-1 font-serif text-2xl text-foreground">
                    {step.title}
                  </h3>
                  <p className="font-sans text-lg leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default Craftsmanship

