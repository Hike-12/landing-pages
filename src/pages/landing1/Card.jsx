/**
 * Card primitive
 * Contract: Card({ children, image, imageAlt, ...props }): JSX.Element
 *
 * Minimal editorial card container for HEIRLOOM.
 * - Subtle border and shadow
 * - Rounded corners using the theme radius
 * - Clean background that sits on the page background
 * - Optional image header with consistent aspect ratio and object-cover
 */
function Card({ children, image, imageAlt = '', className = '', ...props }) {
  return (
    <div
      className={[
        'overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-sm',
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
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6">{children}</div>
    </div>
  )
}

export default Card
