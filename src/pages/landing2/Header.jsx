import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from '../landing1/ThemeToggle.jsx'

/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Stark minimal navigation for NEXUS.
 * - Transparent over the dark hero, then solid on scroll
 * - High-contrast inverted foreground on dark background
 * - No rounded buttons or containers
 * - Reuses the shared ThemeToggle from landing1
 */
function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = ['Features', 'Pricing', 'About', 'Contact']

  return (
    <header
      className={[
        'dark sticky top-0 z-50 w-full transition-colors duration-300',
        scrolled
          ? 'border-b border-border bg-background/95 backdrop-blur-sm'
          : 'bg-transparent',
      ].join(' ')}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-sans text-xl font-bold uppercase tracking-tight text-foreground"
          aria-label="NEXUS home"
        >
          NEXUS
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="relative font-sans text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4 [&>button]:rounded-none">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
