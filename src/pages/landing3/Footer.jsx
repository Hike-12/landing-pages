/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * FLUX footer.
 * - Dark slate backdrop with oversized watermark wordmark
 * - Minimal horizontal link row and copyright
 * - No icons, no heavy containers
 */
function Footer() {
  const links = ['Work', 'Studio', 'Contact', 'Privacy']

  return (
    <footer className="relative overflow-hidden bg-slate-950 py-20 px-6">
      {/* Background watermark */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-white/[0.03] select-none"
        aria-hidden="true"
      >
        FLUX
      </div>

      {/* Foreground content */}
      <div className="relative z-10 mx-auto flex max-w-5xl items-center justify-between">
        <nav className="flex flex-wrap items-center gap-6" aria-label="Footer">
          {links.map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-sm text-slate-500 transition-colors hover:text-slate-300"
            >
              {label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} FLUX Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
