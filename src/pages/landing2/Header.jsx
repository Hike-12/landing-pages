import ThemeToggle from '../landing1/ThemeToggle.jsx'

/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Sticky top navigation for NEXUS.
 * - Bold geometric sans-serif brand mark
 * - Minimal uppercase nav links
 * - Reuses the shared ThemeToggle from landing1
 */
function Header() {
  const links = ['Features', 'Pricing', 'About', 'Contact']

  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-border">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a
          href="/landing2"
          className="font-sans text-xl font-bold uppercase tracking-tight text-foreground"
          aria-label="NEXUS home"
        >
          NEXUS
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header
