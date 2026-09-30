/**
 * Capabilities
 * Contract: Capabilities(): JSX.Element
 *
 * Capabilities grid for landing6.
 * - Three pillars with inline SVG icons
 * - Hover lift and accent border
 */
function Capabilities() {
  const items = [
    {
      num: '01',
      title: 'Brand systems',
      body: 'Identity, typography, and guidelines that scale across every touchpoint.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Digital products',
      body: 'Websites, apps, and platforms built for performance and feel.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Motion & 3D',
      body: 'Animation, WebGL, and spatial design that adds depth to the story.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
          <polyline points="12 22 12 15.5 22 8.5" />
          <polyline points="2 8.5 12 15.5 12 22" />
          <line x1="12" y1="15.5" x2="22" y2="8.5" />
        </svg>
      ),
    },
  ]

  return (
    <section id="studio" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="mb-12 block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
          Capabilities
        </span>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.num}
              className="group border-t border-[#F5F5F5]/10 bg-[#F5F5F5]/[0.02] p-8 transition-all duration-300 hover:border-[#00F0FF]/50 hover:bg-[#F5F5F5]/[0.04]"
            >
              <div className="mb-6 text-[#00F0FF] transition-transform duration-300 group-hover:-translate-y-1">
                {item.icon}
              </div>
              <span className="mb-3 block font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/40">
                {item.num}
              </span>
              <h3 className="mb-3 font-sans text-xl font-semibold tracking-tight text-[#F5F5F5]">
                {item.title}
              </h3>
              <p className="font-sans text-base leading-relaxed text-[#F5F5F5]/60">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
