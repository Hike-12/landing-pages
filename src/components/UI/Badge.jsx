/**
 * Badge primitive
 * Contract: Badge({ children }): JSX.Element
 */
function Badge({ children, className = '', ...props }) {
  return (
    <span className={['ui-badge', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </span>
  )
}

export default Badge
