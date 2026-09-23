/**
 * Header
 * Contract: Header(): JSX.Element
 *
 * Fixed editorial top bar for landing4.
 * - Warm paper background with a sharp black bottom border
 * - Serif "ATELIER" logotype on the left
 * - Minimal uppercase navigation on the right
 */
function Header() {
  const links = ['Work', 'Studio', 'Contact']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#F4F1EA] border-b border-[#111111]">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6">
        <a
          href="/landing4"
          className="font-['Playfair_Display'] text-2xl text-[#111111]"
        >
          ATELIER
        </a>

        <nav aria-label="Primary">
          <ul className="flex items-center gap-8">
            {links.map((label) => (
              <li key={label}>
                <a
                  href={`#${label.toLowerCase()}`}
                  className="font-sans text-sm uppercase tracking-widest text-[#111111] transition-opacity duration-200 hover:opacity-60"
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
