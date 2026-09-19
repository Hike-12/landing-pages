/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Editorial footer for HEIRLOOM.
 * - Large brand mark on the left, minimal links on the right
 * - Single subtle top border, no internal dividers
 * - Small legal text, generous whitespace
 */
function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { label: 'Collection', href: '#collection' },
    { label: 'Atelier', href: '#atelier' },
    { label: 'Craft', href: '#craftsmanship' },
    { label: 'Journal', href: '#journal' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="w-full border-t border-border/40 px-6 py-16 md:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-12 md:flex-row md:items-end">
        {/* Brand mark */}
        <div className="flex flex-col gap-6">
          <a
            href="/"
            className="font-serif text-4xl tracking-tight text-foreground md:text-5xl"
            aria-label="HEIRLOOM home"
          >
            HEIRLOOM
          </a>
          <p className="max-w-xs font-sans text-sm leading-relaxed text-muted-foreground">
            Small-batch leather goods, shaped by hand and made to last.
          </p>
        </div>

        {/* Minimal links */}
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Legal */}
      <div className="mx-auto mt-16 flex w-full max-w-6xl flex-col items-start justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
        <p>&copy; {currentYear} HEIRLOOM. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="transition-colors hover:text-foreground">
            Privacy
          </a>
          <a href="#terms" className="transition-colors hover:text-foreground">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
