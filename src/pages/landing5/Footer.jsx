/**
 * Footer
 * Contract: Footer(): JSX.Element
 *
 * Minimal editorial footer for landing5.
 * - Single-row bar with sharp top border
 * - Left wordmark, right sparse links
 */
function Footer() {
  return (
    <footer className="h-20 border-t border-[#1A1917] bg-[#FAF9F6] px-6">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between">
        <span className="font-sans text-sm font-semibold tracking-tight text-[#1A1917]">
          STUDIO NORTH
        </span>

        <nav aria-label="Footer">
          <ul className="flex items-center gap-6">
            {['Instagram', 'LinkedIn', 'Privacy'].map((label) => (
              <li key={label}>
                <a
                  href="#"
                  className="font-sans text-xs uppercase tracking-widest text-[#1A1917]/70 transition-opacity duration-200 hover:opacity-100"
                >
                  {label}
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
