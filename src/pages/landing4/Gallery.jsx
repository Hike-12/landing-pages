/**
 * Gallery
 * Contract: Gallery(): JSX.Element
 *
 * Editorial image grid for landing4.
 * - 12-column asymmetric layout
 * - Sharp, unrounded images with no shadows
 * - Warm paper container with a black top border
 */
function Gallery() {
  const images = [
    {
      src: '/images/nexus-abstract.jpg',
      alt: 'Abstract architectural surface in warm paper light',
      span: 'md:col-span-8',
      height: 'h-96',
    },
    {
      src: '/images/flux-aurora.jpg',
      alt: 'Aurora light drifting across a dark field',
      span: 'md:col-span-4',
      height: 'h-96',
    },
    {
      src: '/images/nexus-hero.jpg',
      alt: 'Editorial studio detail in warm paper light',
      span: 'md:col-span-12',
      height: 'h-[32rem]',
    },
  ]

  return (
    <section className="w-full border-t border-[#111111] bg-[#F4F1EA]" aria-label="Gallery">
      <div className="px-6 py-12 md:px-12 md:py-16">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {images.map((image) => (
            <div
              key={image.src}
              className={`overflow-hidden border border-[#111111] ${image.span} ${image.height}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full rounded-none object-cover shadow-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
