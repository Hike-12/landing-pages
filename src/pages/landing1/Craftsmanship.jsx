/**
 * Craftsmanship
 * Contract: Craftsmanship(): JSX.Element
 *
 * Editorial process section for HEIRLOOM.
 * - Full-bleed image with a floating minimal text panel
 * - Panel offset to the side, overlapping the image
 * - Static editorial layout for cross-browser stability
 *   (scroll-driven zoom omitted due to limited browser support)
 */
function Craftsmanship() {
  const steps = [
    {
      num: '01',
      title: 'Selection',
      desc: 'Full-grain hides from heritage tanneries in Tuscany, inspected by hand.',
    },
    {
      num: '02',
      title: 'Cutting',
      desc: 'Panels cut with precision knives guided by decades-old patterns.',
    },
    {
      num: '03',
      title: 'Stitching',
      desc: 'Waxed linen thread and traditional saddle stitches.',
    },
    {
      num: '04',
      title: 'Finishing',
      desc: 'Edges burnished and polished with natural beeswax.',
    },
  ]

  return (
    <section className="relative w-full" id="craftsmanship">
      {/* Full-bleed image */}
      <div className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
        <img
          src="/images/craftsmanship.jpg"
          alt="Artisan hand-stitching leather in the atelier"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* Floating minimal text panel */}
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="relative -mt-32 ml-auto w-full max-w-md bg-background/95 p-8 backdrop-blur-sm md:-mt-48 md:p-10">
          <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Our Process
          </span>
          <h2 className="mb-4 font-serif text-3xl text-foreground">
            Four Stages of Craft
          </h2>
          <p className="mb-8 font-sans text-base leading-relaxed text-muted-foreground">
            Every HEIRLOOM piece is shaped by a single artisan from start to
            finish. That continuity of care is what machines cannot replicate.
          </p>

          <ol className="w-full space-y-5">
            {steps.map((step) => (
              <li key={step.num} className="flex gap-4">
                <span
                  className="mt-0.5 font-sans text-xs font-medium tabular-nums text-muted-foreground"
                  aria-hidden="true"
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="font-serif text-lg leading-tight text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-0.5 font-sans text-sm leading-relaxed text-muted-foreground">
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

