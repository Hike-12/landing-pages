import ThemeToggle from './ThemeToggle'

/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Sticky minimal editorial navbar for HEIRLOOM.
 * - Clean wordmark, no box
 * - Uppercase nav links with generous tracking
 * - Subtle bottom border only
 */
function Header() {
  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Atelier', href: '#atelier' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Journal', href: '#journal' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <nav
        className="flex items-center justify-between py-6 px-6"
        aria-label="Primary"
      >
        <a
          href="/"
          className="font-serif text-xl tracking-tight text-foreground"
          aria-label="HEIRLOOM home"
        >
          HEIRLOOM
        </a>

        <ul className="hidden md:flex items-center gap-8" role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="none">
              <a
                href={link.href}
                className="font-sans text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                role="menuitem"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <a
            href="#cart"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Open cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 6h15l-1.5 9h-12z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
              <path d="M6 6 5 3H2" />
            </svg>
          </a>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground transition-colors md:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="8" x2="20" y2="8" />
              <line x1="4" y1="16" x2="20" y2="16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
