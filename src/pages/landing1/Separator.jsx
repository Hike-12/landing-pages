/**
 * Separator primitive
 * Props: orientation ('horizontal' | 'vertical'), decorative (boolean)
 */
function Separator({
  orientation = 'horizontal',
  decorative = true,
  className = '',
  ...props
}) {
  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      className={[
        'ui-separator',
        `ui-separator--${orientation}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}

export default Separator
