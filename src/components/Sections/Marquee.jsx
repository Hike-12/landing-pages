/**
 * Marquee
 * Contract: Marquee(): JSX.Element
 *
 * Trust strip with brand values for HEIRLOOM.
 */
function Marquee() {
  const values = [
    'Hand-stitched in Italy',
    'Full-grain Leather',
    'Lifetime Warranty',
    'Carbon Neutral Shipping',
  ]

  return (
    <section className="marquee" aria-label="Brand values">
      <div className="marquee__track">
        {values.map((value, index) => (
          <span key={value} className="marquee__item">
            {value}
            {index < values.length - 1 && (
              <span className="marquee__dot" aria-hidden="true">
                ·
              </span>
            )}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Marquee
