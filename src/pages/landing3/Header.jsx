/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Fixed navigation for the FLUX creative-studio landing page.
 * - Transparent background so the aurora hero remains visible underneath
 * - Gradient wordmark on the left
 * - Minimal text links on the right, no theme toggle (FLUX owns its dark atmosphere)
 */
function Header() {
  const links = ['Work', 'Studio', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <a
          href="/landing3"
          className="bg-gradient-to-r from-teal-400 to-violet-400 bg-clip-text text-2xl font-bold tracking-tighter text-transparent"
        >
          FLUX
        </a>

        <nav className="flex items-center gap-8" aria-label="Primary">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
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
