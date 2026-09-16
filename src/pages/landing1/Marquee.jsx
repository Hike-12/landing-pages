/**
 * Marquee
 * Contract: Marquee(): JSX.Element
 *
 * Trust strip with brand values for HEIRLOOM.
 * - No background box or border
 * - Low-contrast muted text
 * - Continuous horizontal scroll layout
 */
function Marquee() {
  const values = [
    'Hand-stitched in Italy',
    'Full-grain Leather',
    'Lifetime Warranty',
    'Carbon Neutral Shipping',
  ]

  const items = [...values, ...values]

  return (
    <section className="py-16 md:py-20 overflow-hidden" aria-label="Brand values">
      <div className="flex w-max animate-[marquee_20s_linear_infinite] will-change-transform">
        {items.map((value, index) => (
          <span
            key={`${value}-${index}`}
            className="flex items-center gap-8 md:gap-12 whitespace-nowrap px-4 md:px-6"
          >
            <span className="font-sans text-sm uppercase tracking-widest text-muted-foreground">
              {value}
            </span>
            <span className="text-muted-foreground/40" aria-hidden="true">
              |
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}

export default Marquee
