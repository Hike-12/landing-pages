import { Component } from 'react'

/**
 * ErrorBoundary
 * Contract: ErrorBoundary({ children, fallback?: ReactNode }): JSX.Element
 *
 * Catches JavaScript errors anywhere in the child component tree and renders
 * a fallback UI instead of crashing the whole application.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div
          style={{
            display: 'flex',
            minHeight: '100vh',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem',
            fontFamily: 'var(--font-sans)',
            color: 'var(--foreground)',
            backgroundColor: 'var(--background)',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '24rem' }}>
            <h1
              style={{
                fontSize: '1.25rem',
                fontWeight: 500,
                lineHeight: 1.4,
                marginBottom: '0.5rem',
              }}
            >
              Something went wrong
            </h1>
            <p style={{ fontSize: '0.875rem', opacity: 0.72 }}>
              Please try refreshing the page.
            </p>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
