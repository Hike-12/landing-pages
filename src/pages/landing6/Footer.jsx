import { Link } from 'react-router-dom'

/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Full footer for landing6.
 * - Top row with brand, navigation, and social links
 * - Bottom row with copyright
 */
function Footer() {
  const links = [
    { label: 'Work', id: 'work' },
    { label: 'Process', id: 'process' },
    { label: 'Studio', id: 'studio' },
    { label: 'Contact', id: 'contact' },
  ]

  const handleNavClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="border-t border-[#F5F5F5]/10 bg-[#0F0F0F] px-6 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div>
            <Link
              to="/"
              className="font-sans text-lg font-bold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#00F0FF]"
              aria-label="PRISM home"
            >
              PRISM
            </Link>
            <p className="mt-3 max-w-xs font-sans text-sm leading-relaxed text-[#F5F5F5]/50">
              Creative technology studio building identities, interfaces, and motion systems.
            </p>
          </div>

          <nav aria-label="Footer" className="flex flex-col gap-3 md:flex-row md:gap-8">
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/60 transition-colors hover:text-[#00F0FF]"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-[#F5F5F5]/10 pt-8 md:flex-row md:items-center">
          <span className="font-sans text-xs text-[#F5F5F5]/40">
            © {new Date().getFullYear()} PRISM Studio. All rights reserved.
          </span>
          <div className="flex gap-6">
            {['Instagram', 'Twitter', 'LinkedIn'].map((label) => (
              <a key={label} href="#" className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/40 transition-colors hover:text-[#00F0FF]">
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
