/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * World-class hero for landing6.
 * - Two-column layout: massive type left, hero image right
 * - Subtle animated grid texture overlay
 * - Stats row and scroll indicator
 */
function Hero() {
  const stats = [
    { value: '12+', label: 'Years active' },
    { value: '48', label: 'Projects shipped' },
    { value: '14', label: 'Awards won' },
  ]

  const handleScrollDown = () => {
    const el = document.getElementById('statement')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="relative overflow-hidden px-6 md:px-12" aria-label="Hero">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(245,245,245,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(245,245,245,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="relative mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
              Creative technology studio
            </span>
            <h1 className="max-w-4xl font-sans text-6xl font-bold leading-[0.95] tracking-tight text-[#F5F5F5] md:text-7xl lg:text-8xl">
              Light made digital.
            </h1>
            <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-[#F5F5F5]/60 md:text-xl">
              We design immersive identities, interfaces, and motion systems for brands that want to feel alive.
            </p>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#F5F5F5]/10 lg:aspect-square">
            <img
              src="/images/landing6-hero.jpg"
              alt="Abstract prism refracting cyan light on a dark grid"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0F0F0F]/40 to-transparent" />
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-10 border-t border-[#F5F5F5]/10 pt-8 md:flex-row md:items-end">
          <div className="flex gap-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <span className="block font-sans text-3xl font-bold text-[#F5F5F5] md:text-4xl">{stat.value}</span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/50">{stat.label}</span>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={handleScrollDown}
            className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/60 transition-colors hover:text-[#00F0FF]"
          >
            Scroll
            <span className="block h-8 w-px bg-current transition-all group-hover:h-10" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
