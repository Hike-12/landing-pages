/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * AURELIA minimal footer.
 * - Deep espresso canvas with warm alabaster typography
 * - Left: AURELIA wordmark and copyright
 * - Right: smooth-scroll anchor links in tiny uppercase wide tracking
 * - Subtle warm gray top border
 * - Antique gold hover states
 */
function Footer() {
  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const links = [
    { label: 'Philosophy', id: 'philosophy' },
    { label: 'Collection', id: 'collection' },
    { label: 'Contact', id: 'contact' },
  ]

  return (
    <footer className="border-t border-[#F5F0E8]/10 bg-[#0F0D0A] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <span
            className="font-[var(--heading)] text-lg tracking-[0.25em] text-[#F5F0E8]"
            style={{ fontVariant: 'small-caps' }}
          >
            AURELIA
          </span>
          <span className="font-[var(--sans)] text-[10px] font-light uppercase tracking-[0.2em] text-[#F5F0E8]/40">
            © {new Date().getFullYear()} AURELIA. All rights reserved.
          </span>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-8 md:gap-10">
          {links.map(({ label, id }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleNavClick(e, id)}
              className="group relative font-[var(--sans)] text-[10px] uppercase tracking-[0.25em] text-[#F5F0E8]/60 transition-colors duration-300 hover:text-[#C5A059]"
            >
              {label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#C5A059] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
