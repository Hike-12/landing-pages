import Badge from './Badge.jsx'

/**
 * ProductCard
 * Contract: ProductCard({ name, price, badge, image, size }): JSX.Element
 *
 * Premium product card for the Collection grid.
 * - No border, no shadow, no background box
 * - Bare image with caption overlay
 * - Slow, refined hover scale
 */
function ProductCard({ name, price, badge, image, size = 'default' }) {
  const aspect = size === 'large' ? 'aspect-[4/5]' : 'aspect-[3/4]'

  return (
    <article className="group h-full">
      <a href="#product" aria-label={`View ${name}`} className="block h-full">
        <div className={`relative ${aspect} w-full overflow-hidden`}>
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <span className="text-sm text-muted-foreground">No image</span>
            </div>
          )}
          {badge && (
            <div className="absolute left-4 top-4">
              <Badge>{badge}</Badge>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-5 pt-16">
            <h3 className="font-sans text-base font-medium text-white">
              {name}
            </h3>
            <p className="mt-0.5 font-sans text-sm text-white/80">{price}</p>
          </div>
        </div>
      </a>
    </article>
  )
}

/**
 * Collection
 * Contract: Collection(): JSX.Element
 *
 * Editorial product grid for HEIRLOOM.
 * - Asymmetric layout: one large feature, two smaller companions
 * - Bare images with caption overlays
 * - No backgrounds, borders, or shadows
 */
function Collection() {
  const products = [
    { name: 'Heritage Tote', price: '$480', badge: 'New', image: '/images/collection-1.jpg' },
    { name: 'Atelier Briefcase', price: '$720', image: '/images/collection-2.jpg' },
    { name: 'Weekender Duffle', price: '$640', badge: 'Limited', image: '/images/collection-3.jpg' },
    { name: 'Slim Card Wallet', price: '$120', image: '/images/collection-1.jpg' },
    { name: 'Field Belt', price: '$195', badge: 'New', image: '/images/collection-2.jpg' },
    { name: 'Daily Crossbody', price: '$360', image: '/images/collection-3.jpg' },
  ]

  const [featured, ...rest] = products

  return (
    <section id="collection" className="w-full px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <span className="mb-3 block font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            The Collection
          </span>
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            Six essential silhouettes
          </h2>
          <p className="mt-4 max-w-xl font-sans text-lg leading-relaxed text-muted-foreground">
            Each piece is cut from full-grain vegetable-tanned leather and shaped
            to age gracefully with you.
          </p>
        </div>

        <div
          className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-5"
          role="list"
        >
          {/* Large featured item */}
          <div className="md:col-span-7" role="listitem">
            <ProductCard {...featured} size="large" />
          </div>

          {/* Two smaller items stacked */}
          <div className="grid grid-cols-1 gap-6 md:col-span-5 md:gap-5">
            {rest.slice(0, 2).map((product) => (
              <div key={product.name} role="listitem">
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {/* Remaining row */}
          {rest.slice(2).map((product) => (
            <div key={product.name} className="md:col-span-4" role="listitem">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection
