/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Fixed navigation for the FLUX creative-studio landing page.
 * - Subtle solid charcoal backdrop over the solid hero
 * - Solid white wordmark on the left
 * - Minimal text links on the right, no theme toggle (FLUX owns its dark atmosphere)
 * - Solid border for separation
 */
function Header() {
  const links = ['Work', 'Studio', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="/landing3"
          className="text-2xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80"
        >
          FLUX
        </a>

        <nav className="flex items-center gap-8" aria-label="Primary">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 underline-offset-4 transition-colors hover:text-white hover:underline"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
