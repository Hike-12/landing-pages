import Badge from '../UI/Badge.jsx'

/**
 * ProductCard
 * Contract: ProductCard({ name, price, badge, image }): JSX.Element
 *
 * Premium product card for the Collection grid.
 * - Elegant SVG placeholder when no image is provided
 * - Optional badge for 'New' or 'Limited'
 * - Subtle hover lift with shadow transition
 */
function ProductCard({ name, price, badge, image }) {
  return (
    <article className="product-card">
      <a href="#product" className="product-card__link" aria-label={`View ${name}`}>
        <div className="product-card__media">
          {image ? (
            <img src={image} alt={name} className="product-card__image" loading="lazy" />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 360 420"
              fill="none"
              className="product-card__placeholder"
              aria-hidden="true"
            >
              <rect width="360" height="420" rx="12" fill="var(--accent-bg)" />
              <path
                d="M120 300c30-60 90-100 150-100s120 40 150 100"
                stroke="var(--accent-border)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M160 300c20-40 60-70 100-70s80 30 100 70"
                stroke="var(--accent-border)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <ellipse cx="180" cy="160" rx="60" ry="48" stroke="var(--accent)" strokeWidth="1.5" />
              <path
                d="M150 160c0-20 13-36 30-36s30 16 30 36-13 36-30 36-30-16-30-36Z"
                fill="var(--accent)"
                fillOpacity="0.12"
              />
              <path
                d="M140 240h80M140 256h60M140 272h40"
                stroke="var(--accent-border)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          )}
          {badge && (
            <div className="product-card__badge">
              <Badge>{badge}</Badge>
            </div>
          )}
        </div>
        <div className="product-card__info">
          <h3 className="product-card__name">{name}</h3>
          <p className="product-card__price">{price}</p>
        </div>
      </a>
    </article>
  )
}

/**
 * Collection
 * Contract: Collection(): JSX.Element
 *
 * 3-column product grid for HEIRLOOM.
 * - Responsive: 3 cols → 2 cols → 1 col
 * - Consistent 24px gaps
 * - Section heading with editorial spacing
 */
function Collection() {
  const products = [
    { name: 'Heritage Tote', price: '$480', badge: 'New' },
    { name: 'Atelier Briefcase', price: '$720' },
    { name: 'Weekender Duffle', price: '$640', badge: 'Limited' },
    { name: 'Slim Card Wallet', price: '$120' },
    { name: 'Field Belt', price: '$195', badge: 'New' },
    { name: 'Daily Crossbody', price: '$360' },
  ]

  return (
    <section id="collection" className="collection">
      <div className="collection__header">
        <h2 className="collection__title">The Collection</h2>
        <p className="collection__subtitle">
          Six essential silhouettes, each cut from full-grain vegetable-tanned leather.
        </p>
      </div>
      <div className="collection__grid" role="list">
        {products.map((product) => (
          <div key={product.name} role="listitem">
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Collection
