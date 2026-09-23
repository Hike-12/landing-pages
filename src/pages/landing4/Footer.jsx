/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Minimal editorial footer for landing4.
 * - Single row, sharp top border
 * - Serif ATELIER logotype on the left
 * - Small text links on the right
 */
function Footer() {
  const links = [
    { label: 'Privacy', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
  ]

  return (
    <footer className="h-20 w-full border-t border-[#111111] bg-[#F4F1EA]">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6 md:px-12">
        <span className="font-['Playfair_Display'] text-xl text-[#111111]">
          ATELIER
        </span>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="font-sans text-xs uppercase tracking-widest text-[#111111] transition-opacity duration-200 hover:opacity-60"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
