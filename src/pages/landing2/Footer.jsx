/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Swiss-style footer for NEXUS.
 * - 12-column grid, small type, sharp hierarchy
 * - Brand mark, link columns, legal row
 * - No social icons, no decorative containers
 */
function Footer() {
  const columns = [
    {
      title: 'Product',
      links: ['Features', 'Pricing', 'Integrations', 'Changelog'],
    },
    {
      title: 'Company',
      links: ['About', 'Blog', 'Careers', 'Contact'],
    },
    {
      title: 'Legal',
      links: ['Privacy', 'Terms', 'Cookies'],
    },
  ]

  return (
    <footer className="w-full border-t border-border bg-background px-6 py-14 md:py-20">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-8">
        {/* Brand */}
        <div className="md:col-span-4 lg:col-span-3">
          <a
            href="/landing2"
            className="font-sans text-lg font-bold uppercase tracking-tight text-foreground"
            aria-label="NEXUS home"
          >
            NEXUS
          </a>
          <p className="mt-4 max-w-xs font-sans text-xs leading-relaxed text-muted-foreground">
            Precision infrastructure for teams that refuse to compromise.
          </p>
        </div>

        {/* Link columns */}
        <nav
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-8 lg:col-span-9 lg:grid-cols-3"
          aria-label="Footer"
        >
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 font-sans text-xs font-semibold uppercase tracking-widest text-foreground">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="font-sans text-xs text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      {/* Bottom row */}
      <div className="mx-auto mt-14 grid w-full max-w-6xl grid-cols-1 gap-3 border-t border-border pt-8 md:grid-cols-2 md:gap-6">
        <p className="font-sans text-xs text-muted-foreground">
          © {new Date().getFullYear()} NEXUS. All rights reserved.
        </p>
        <p className="font-sans text-xs text-muted-foreground md:text-right">
          Built for teams that move fast.
        </p>
      </div>
    </footer>
  )
}

export default Footer
