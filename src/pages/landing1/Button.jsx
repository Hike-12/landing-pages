/**
 * Button primitive
 * Contract: Button({ variant, size, children }): JSX.Element
 *
 * Minimal editorial button for HEIRLOOM.
 * - No shadow, no heavy borders
 * - Sharp corners (rounded-none)
 * - Clean Geist typography with tracking
 * - Refined transitions using editorial easing
 */
function Button({
  variant = 'default',
  size = 'default',
  children,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-none font-sans font-medium tracking-wide transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30 disabled:pointer-events-none disabled:opacity-50'

  const variantClasses = {
    default: 'bg-foreground text-background hover:bg-foreground/90',
    secondary:
      'border border-foreground/15 bg-transparent text-foreground hover:bg-foreground/[0.03]',
    ghost: 'text-foreground hover:bg-foreground/[0.03]',
    link: 'text-foreground underline-offset-4 hover:underline',
  }

  const sizeClasses = {
    default: 'h-9 px-6 py-2.5 text-sm',
    sm: 'h-8 px-4 py-2 text-xs',
    lg: 'h-11 px-8 py-3 text-base',
    icon: 'h-9 w-9',
  }

  return (
    <button
      className={[base, variantClasses[variant], sizeClasses[size], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
