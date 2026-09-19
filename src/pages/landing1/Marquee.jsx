/**
 * Marquee
 * Contract: Marquee(): JSX.Element
 *
 * Trust strip with brand values for HEIRLOOM.
 * - Hairline top and bottom borders for quiet structure
 * - Low-contrast muted text
 * - Slow, continuous horizontal scroll
 */
function Marquee() {
  const values = [
    'Hand-stitched in Tuscany',
    'Vegetable-tanned hides',
    'Lifetime repair guarantee',
    'Carbon-neutral shipping',
  ]

  const items = [...values, ...values]

  return (
    <section
      className="w-full overflow-hidden border-y border-border/60 py-10 md:py-12"
      aria-label="Brand values"
    >
      <div className="flex w-max animate-[marquee_30s_linear_infinite] will-change-transform">
        {items.map((value, index) => (
          <span
            key={`${value}-${index}`}
            className="flex items-center gap-8 md:gap-12 whitespace-nowrap px-4 md:px-6"
          >
            <span className="font-sans text-sm uppercase tracking-widest text-muted-foreground">
              {value}
            </span>
            <svg
              width="4"
              height="4"
              viewBox="0 0 4 4"
              fill="currentColor"
              className="text-muted-foreground/40"
              aria-hidden="true"
            >
              <circle cx="2" cy="2" r="2" />
            </svg>
          </span>
        ))}
      </div>
    </section>
  )
}

export default Marquee
