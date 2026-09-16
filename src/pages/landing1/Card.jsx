/**
 * Card primitive
 * Contract: Card({ children, ...props }): JSX.Element
 *
 * Minimal editorial card container for HEIRLOOM.
 * - Subtle border and shadow
 * - Rounded corners using the theme radius
 * - Clean background that sits on the page background
 */
function Card({ children, className = '', ...props }) {
  return (
    <div
      className={[
        'rounded-lg border border-border bg-card p-6 text-card-foreground shadow-sm',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
