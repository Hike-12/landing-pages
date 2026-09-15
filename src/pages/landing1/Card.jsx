/**
 * Card primitive family
 * Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
 */
function Card({ children, className = '', ...props }) {
  return (
    <div className={['ui-card', className].filter(Boolean).join(' ')} {...props}>
      {children}
    </div>
  )
}

function CardHeader({ children, className = '', ...props }) {
  return (
    <div
      className={['ui-card__header', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

function CardTitle({ children, className = '', ...props }) {
  return (
    <h3
      className={['ui-card__title', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </h3>
  )
}

function CardDescription({ children, className = '', ...props }) {
  return (
    <p
      className={['ui-card__description', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </p>
  )
}

function CardContent({ children, className = '', ...props }) {
  return (
    <div
      className={['ui-card__content', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

function CardFooter({ children, className = '', ...props }) {
  return (
    <div
      className={['ui-card__footer', className].filter(Boolean).join(' ')}
      {...props}
    >
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Title = CardTitle
Card.Description = CardDescription
Card.Content = CardContent
Card.Footer = CardFooter

export default Card
