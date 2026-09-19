/**
 * Separator primitive
 * Props: orientation ('horizontal' | 'vertical'), decorative (boolean)
 *
 * Clean 1px line for HEIRLOOM.
 * - No decorative containers
 * - Subtle border color at reduced opacity
 */
function Separator({
  orientation = 'horizontal',
  decorative = true,
  className = '',
  ...props
}) {
  const isHorizontal = orientation === 'horizontal'

  return (
    <div
      role={decorative ? 'none' : 'separator'}
      aria-orientation={decorative ? undefined : orientation}
      aria-hidden={decorative}
      className={[
        'shrink-0 bg-border/70',
        isHorizontal ? 'h-px w-full' : 'h-full w-px',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    />
  )
}

export default Separator
