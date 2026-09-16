/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Minimal editorial footer for HEIRLOOM.
 * - Single subtle top border, no boxy columns
 * - Clean grid of text links
 * - Generous whitespace, muted typography
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 px-6 py-16">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <a
            href="/"
            className="font-serif text-xl tracking-tight text-foreground"
            aria-label="HEIRLOOM home"
          >
            HEIRLOOM
          </a>
          <p className="mt-4 text-sm text-muted-foreground font-sans leading-relaxed max-w-xs">
            Small-batch leather goods, shaped by hand and made to last a
            lifetime.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-foreground">
            Shop
          </h3>
          <ul className="mt-4 space-y-2">
            {['All Bags', 'Wallets', 'Accessories', 'Gift Cards'].map((label) => (
              <li key={label}>
                <a
                  href="#collection"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Atelier */}
        <div>
          <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-foreground">
            Atelier
          </h3>
          <ul className="mt-4 space-y-2">
            {['Our Story', 'Craftsmanship', 'Sustainability', 'Journal'].map((label) => (
              <li key={label}>
                <a
                  href={label === 'Craftsmanship' ? '#craftsmanship' : label === 'Journal' ? '#journal' : '#atelier'}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="font-sans text-sm font-medium uppercase tracking-wide text-foreground">
            Connect
          </h3>
          <ul className="mt-4 space-y-2">
            {['Contact', 'Shipping & Returns', 'Care Guide'].map((label) => (
              <li key={label}>
                <a
                  href="#contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors font-sans"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-4">
            <a
              href="#instagram"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="#x"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="X"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-border/40 text-center">
        <p className="text-xs text-muted-foreground font-sans">
          &copy; {currentYear} HEIRLOOM. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
