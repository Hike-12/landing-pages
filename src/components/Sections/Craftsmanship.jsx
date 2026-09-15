/**
 * Craftsmanship
 * Contract: Craftsmanship(): JSX.Element
 *
 * Editorial process section for HEIRLOOM.
 * - Large image + adjacent text panel
 * - 24px subheadings, 18px body text
 * - Numbered process steps
 * - Warm off-white background, no gradients
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
    <section className="craftsmanship" id="craftsmanship">
      <div className="craftsmanship__media">
        <img
          src="/images/craftsmanship.jpg"
          alt="Artisan hand-stitching leather in the atelier"
          className="craftsmanship__image"
          loading="lazy"
        />
      </div>

      <div className="craftsmanship__content">
        <span className="craftsmanship__eyebrow">Our Process</span>
        <h2 className="craftsmanship__title">Four Stages of Craft</h2>
        <p className="craftsmanship__body">
          Each HEIRLOOM piece passes through the hands of a single artisan from
          start to finish. This continuity of care ensures every stitch, edge,
          and surface meets a standard that machines cannot replicate.
        </p>

        <ol className="craftsmanship__steps">
          {steps.map((step) => (
            <li key={step.num} className="craftsmanship__step">
              <span className="craftsmanship__step-num" aria-hidden="true">
                {step.num}
              </span>
              <div className="craftsmanship__step-text">
                <h3 className="craftsmanship__step-title">{step.title}</h3>
                <p className="craftsmanship__step-desc">{step.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Craftsmanship
