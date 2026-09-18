/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Clean minimal footer for NEXUS.
 * - Brand mark on the left
 * - Three tidy link columns: Product, Company, Legal
 * - Muted small links, no newsletter, no heavy containers
 * - Simple bottom bar with copyright
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
    <footer className="w-full border-t border-border bg-background px-6 py-12 md:py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 md:flex-row md:justify-between">
        <a
          href="/landing2"
          className="font-sans text-xl font-bold uppercase tracking-tight text-foreground"
          aria-label="NEXUS home"
        >
          NEXUS
        </a>

        <nav
          className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-12"
          aria-label="Footer"
        >
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
                {column.title}
              </h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
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

      <div className="mx-auto mt-12 flex w-full max-w-6xl flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} NEXUS. All rights reserved.</p>
        <p>Built for teams that move fast.</p>
      </div>
    </footer>
  )
}

export default Footer
