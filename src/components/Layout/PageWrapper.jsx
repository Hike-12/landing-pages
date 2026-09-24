import { useEffect, useState } from 'react'

/**
 * PageWrapper
 * Contract: PageWrapper({ children, title?: string }): JSX.Element
 *
 * Wraps page content in a semantic <main> element, updates the document title,
 * and advertises the user's reduced-motion preference via a data attribute
 * so child components can respect it in CSS or JS.
 */
function PageWrapper({ children, title }) {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    document.title = title || 'Landing Archive'
  }, [title])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')

    const apply = () => {
      setReducedMotion(mediaQuery.matches)
    }

    apply()
    mediaQuery.addEventListener('change', apply)

    return () => {
      mediaQuery.removeEventListener('change', apply)
    }
  }, [])

  return (
    <main data-reduced-motion={reducedMotion ? 'true' : 'false'}>
      {children}
    </main>
  )
}

export default PageWrapper
