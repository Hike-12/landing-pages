/**
 * Collection
 * Contract: Collection(): JSX.Element
 *
 * AURELIA collection grid.
 * - Masonry-style asymmetric layout using CSS columns
 * - Four bespoke editorial images with varying aspect ratios
 * - Warm alabaster small-caps titles
 * - Thin antique gold border reveals on hover
 * - Slow scale transform on each image
 * - Deep espresso canvas
 */
function Collection() {
  const items = [
    {
      src: '/images/landing7-collection-1.jpg',
      title: 'The Stillness of Stone',
      ratio: 'aspect-[3/4]',
    },
    {
      src: '/images/landing7-collection-2.jpg',
      title: 'Light Through Linen',
      ratio: 'aspect-[4/5]',
    },
    {
      src: '/images/landing7-collection-3.jpg',
      title: 'Objects with Memory',
      ratio: 'aspect-[3/4]',
    },
    {
      src: '/images/landing7-collection-4.jpg',
      title: 'The Quiet Hour',
      ratio: 'aspect-[4/5]',
    },
  ]

  return (
    <section id="collection" className="bg-[#0F0D0A] px-6 py-24 md:py-32 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between">
          <div>
            <span
              className="mb-4 block font-[var(--sans)] text-[10px] font-medium uppercase tracking-[0.35em] text-[#C5A059]"
              style={{ fontVariant: 'small-caps' }}
            >
              Curated Works
            </span>
            <h2 className="font-['Playfair_Display',serif] text-4xl font-medium leading-[1.1] tracking-[-0.02em] text-[#F5F0E8] md:text-5xl lg:text-6xl">
              The Collection
            </h2>
          </div>

          <p className="max-w-md font-[var(--sans)] text-sm font-light leading-relaxed tracking-wide text-[#F5F0E8]/55">
            A rotating assembly of objects, surfaces, and atmospheres chosen for
            their capacity to slow a room down.
          </p>
        </div>

        <div className="columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {items.map((item, index) => (
            <article
              key={item.title}
              className="group relative break-inside-avoid"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full ${item.ratio} object-cover transition-transform duration-[900ms] ease-out will-change-transform group-hover:scale-105`}
                  loading="lazy"
                />

                <div
                  className="pointer-events-none absolute inset-0 border border-[#C5A059]/0 transition-all duration-500 ease-out group-hover:inset-3 group-hover:border-[#C5A059]/80"
                  aria-hidden="true"
                />
              </div>

              <div className="mt-5 flex items-start gap-4">
                <span className="font-[var(--sans)] text-[10px] font-medium uppercase tracking-[0.25em] text-[#C5A059]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3
                  className="font-[var(--sans)] text-xs font-medium uppercase tracking-[0.2em] text-[#F5F0E8]"
                  style={{ fontVariant: 'small-caps' }}
                >
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection
