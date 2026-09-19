/**
 * Badge primitive
 * Contract: Badge({ children }): JSX.Element
 *
 * Minimal editorial badge for HEIRLOOM.
 * - Text-only, no box, no background, no border
 * - Uppercase with wide tracking
 * - Tight leading so it sits cleanly in overlays
 */
function Badge({ children, className = '', ...props }) {
  return (
    <span
      className={[
        'inline-flex items-center font-sans text-xs font-medium uppercase leading-none tracking-widest text-muted-foreground',
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
