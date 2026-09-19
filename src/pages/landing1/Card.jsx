/**
 * Card primitive
 * Contract: Card({ children, image, imageAlt, ...props }): JSX.Element
 *
 * Minimal editorial card container for HEIRLOOM.
 * - No heavy shadows or default rounded corners
 * - Sharp or near-sharp corners (rounded-sm)
 * - Optional image with slow, refined hover scale
 * - Clean background that sits on the page background
 */
function Card({ children, image, imageAlt = '', className = '', ...props }) {
  return (
    <div
      className={[
        'group overflow-hidden rounded-sm border border-border bg-card text-card-foreground',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {image && (
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}

export default Card
