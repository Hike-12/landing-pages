import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * AURELIA editorial header.
 * - Deep espresso canvas with warm alabaster typography
 * - Small-caps wordmark links to the directory home
 * - Smooth-scroll anchor navigation to page sections
 * - Antique gold bottom border reveals on scroll
 * - Accessible mobile hamburger menu
 */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 16)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const links = [
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Collection', id: 'collection' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 h-20 transition-all duration-500 ease-out bg-[#0F0D0A] ${
        isScrolled ? 'border-b border-[#C5A059]/40' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link
          to="/"
          className="font-[var(--heading)] text-[#F5F0E8] text-xl tracking-[0.25em] transition-colors duration-300 hover:text-[#C5A059]"
          style={{ fontVariant: 'small-caps' }}
          aria-label="AURELIA home"
        >
          AURELIA
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-10 md:flex">
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="group relative font-[var(--sans)] text-xs uppercase tracking-[0.2em] text-[#F5F0E8]/70 transition-colors duration-300 hover:text-[#F5F0E8]"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-[#F5F0E8] transition-transform duration-300 ${
              mobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px bg-[#F5F0E8] transition-all duration-300 ${
              mobileOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
            }`}
          />
          <span
            className={`block h-px w-6 bg-[#F5F0E8] transition-transform duration-300 ${
              mobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-20 border-b border-[#C5A059]/30 bg-[#0F0D0A] px-6 py-8 md:hidden">
          <nav aria-label="Mobile primary" className="flex flex-col gap-5">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="font-[var(--sans)] text-sm uppercase tracking-[0.2em] text-[#F5F0E8]/80 transition-colors duration-300 hover:text-[#C5A059]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
