/**
 * Badge primitive
 * Contract: Badge({ children }): JSX.Element
 *
 * Minimal editorial badge for HEIRLOOM.
 * - Text-only, no box, no background, no border
 * - Uppercase with wide tracking
 */
function Badge({ children, className = '', ...props }) {
  return (
    <span
      className={[
        'inline-flex items-center font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge
