/**
 * Button primitive
 * Contract: Button({ variant, size, children }): JSX.Element
 *
 * Variants: default (filled accent), secondary (outlined), ghost, link
 * Sizes:    default, sm, lg, icon
 */
function Button({
  variant = 'default',
  size = 'default',
  children,
  className = '',
  ...props
}) {
  const base = 'ui-button'
  const variantClass = `ui-button--${variant}`
  const sizeClass = `ui-button--${size}`

  return (
    <button
      className={[base, variantClass, sizeClass, className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
