/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Fixed editorial top bar for landing5.
 * - Warm ivory background with a sharp dark bottom border
 * - Geist wordmark on the left
 * - Minimal uppercase navigation on the right
 */
function Header() {
  const links = ['Work', 'Approach', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#FAF9F6] border-b border-[#1A1917]">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6">
        <a
          href="/landing5"
          className="font-sans text-xl font-semibold tracking-tight text-[#1A1917]"
        >
          STUDIO NORTH
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {links.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="font-sans text-sm uppercase tracking-widest text-[#1A1917] transition-opacity duration-200 hover:opacity-60"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
