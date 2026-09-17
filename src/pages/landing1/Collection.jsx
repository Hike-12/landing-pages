import Badge from './Badge.jsx'

/**
 * ProductCard
 * Contract: ProductCard({ name, price, badge, image }): JSX.Element
 *
 * Premium product card for the Collection grid.
 * - No border, no shadow, no background box
 * - Whitespace-driven layout
 * - Optional minimal badge
 */
function ProductCard({ name, price, badge, image }) {
  return (
    <article className="group">
      <a href="#product" aria-label={`View ${name}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          {image ? (
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <span className="text-sm text-muted-foreground">No image</span>
            </div>
          )}
          {badge && (
            <div className="absolute left-4 top-4">
              <Badge>{badge}</Badge>
            </div>
          )}
        </div>
        <div className="mt-4 space-y-1">
          <h3 className="font-sans text-base font-medium text-foreground">
            {name}
          </h3>
          <p className="font-sans text-sm text-muted-foreground">{price}</p>
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
 * - Responsive: 3 cols -> 2 cols -> 1 col
 * - Generous gap-8 / gap-12 whitespace
 * - No background boxes or borders
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

  return (
    <section id="collection" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-serif text-3xl text-foreground">
            The Collection
          </h2>
          <p className="mt-4 font-sans text-lg text-muted-foreground max-w-xl">
            Six essential silhouettes, each cut from full-grain vegetable-tanned
            leather.
          </p>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12"
          role="list"
        >
          {products.map((product) => (
            <div key={product.name} role="listitem">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collection
