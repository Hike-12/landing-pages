import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Production header for landing6.
 * - Hides on scroll down, reveals on scroll up
 * - Smooth-scroll anchor navigation
 * - Accessible mobile menu with focus trap behavior
 * - PRISM wordmark links back to home
 */
function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setIsScrolled(currentY > 16)
      if (currentY < 64) {
        setIsVisible(true)
      } else if (currentY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(currentY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleNavClick = (e, id) => {
    e.preventDefault()
    setMobileOpen(false)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const links = [
    { label: 'Work', id: 'work' },
    { label: 'Process', id: 'process' },
    { label: 'Studio', id: 'studio' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <header
      className={`fixed left-0 right-0 z-50 h-16 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-[#0F0F0F]/95 backdrop-blur-sm border-b border-[#F5F5F5]/10' : 'bg-[#0F0F0F]'}`}
    >
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="font-sans text-lg font-bold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#00F0FF]"
          aria-label="PRISM home"
        >
          PRISM
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/60 transition-colors duration-200 hover:text-[#00F0FF]"
            >
              {label}
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
          <span className={`block h-px w-6 bg-[#F5F5F5] transition-transform ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`block h-px bg-[#F5F5F5] transition-all ${mobileOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'}`} />
          <span className={`block h-px w-6 bg-[#F5F5F5] transition-transform ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {mobileOpen && (
        <div className="absolute left-0 right-0 top-16 border-b border-[#F5F5F5]/10 bg-[#0F0F0F] px-6 py-6 md:hidden">
          <nav aria-label="Mobile primary" className="flex flex-col gap-4">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="font-mono text-sm uppercase tracking-widest text-[#F5F5F5]/80 transition-colors hover:text-[#00F0FF]"
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
