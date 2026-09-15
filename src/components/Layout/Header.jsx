/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Sticky minimal navbar for HEIRLOOM.
 * - Wordmark left
 * - Centered nav links
 * - Cart + menu icons right
 */
function Header() {
  const navLinks = [
    { label: 'Collection', href: '#collection' },
    { label: 'Atelier', href: '#atelier' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Journal', href: '#journal' },
  ]

  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Primary">
        <a href="/" className="site-header__wordmark" aria-label="HEIRLOOM home">
          HEIRLOOM
        </a>

        <ul className="site-header__links" role="menubar">
          {navLinks.map((link) => (
            <li key={link.label} role="none">
              <a href={link.href} className="site-header__link" role="menuitem">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="site-header__actions">
          <a
            href="#cart"
            className="site-header__icon"
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
            className="site-header__icon"
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
