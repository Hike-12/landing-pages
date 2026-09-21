import { Link } from 'react-router-dom'

/**
 * Home
 * Contract: Home(): JSX.Element
 *
 * Curated gallery hub for the two landing-page directions.
 * - Portfolio-index feel: large asymmetric preview cards, not a route list
 * - Editorial typography, oversized project numbers, minimal descriptions
 * - Full-bleed thumbnails with slow, refined hover scale
 * - No card containers, no heavy shadows, no default rounded corners
 */
function Home() {
  const projects = [
    {
      num: '01',
      title: 'HEIRLOOM',
      subtitle: 'Premium Leather Goods',
      description:
        'Warm, asymmetric editorial luxury. Small-batch leather goods shaped by hand.',
      href: '/landing1',
      image: '/images/hero.jpg',
      imageAlt: 'Handcrafted leather goods in warm studio light',
      accent: 'from-amber-950/40 to-stone-900/20',
    },
    {
      num: '02',
      title: 'NEXUS',
      subtitle: 'Precision Infrastructure',
      description:
        'Stark Swiss-style clarity for teams building the next standard.',
      href: '/landing2',
      image: '/images/nexus-hero.jpg',
      imageAlt: 'Abstract architectural structure in low light',
      accent: 'from-slate-950/60 to-zinc-900/30',
    },
    {
      num: '03',
      title: 'FLUX',
      subtitle: 'Digital Craft Studio',
      description: 'An aurora of digital craft. Dark, immersive, ever-shifting.',
      href: '/landing3',
      image: '/images/flux-aurora.jpg',
      imageAlt: 'Aurora light waves drifting across a dark sky',
      accent: 'from-teal-950/50 via-violet-950/40 to-slate-950/20',
    },
  ]

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      {/* Index header */}
      <header className="w-full px-6 py-12 md:py-16">
        <div className="mx-auto flex w-full max-w-6xl items-end justify-between border-b border-border/60 pb-6">
          <div>
            <span className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
              SELECTED WORK
            </span>
            <h1 className="mt-2 font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl">
              Landing Index
            </h1>
          </div>
          <span className="hidden font-sans text-sm text-muted-foreground md:block">
            03 projects
          </span>
        </div>
      </header>

      {/* Gallery previews */}
      <nav
        className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-px bg-border/60 px-6 pb-24 md:grid-cols-2"
        aria-label="Landing pages"
      >
        {projects.map((project) => (
          <Link
            key={project.num}
            to={project.href}
            className="group relative flex min-h-[70vh] flex-col justify-end overflow-hidden bg-stone-900 p-6 md:p-8"
          >
            {/* Background thumbnail */}
            <img
              src={project.image}
              alt={project.imageAlt}
              className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              loading="eager"
            />

            {/* Directional overlay for legibility */}
            <div
              className={`absolute inset-0 -z-10 bg-gradient-to-t ${project.accent} to-transparent`}
              aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start">
              <span className="font-sans text-7xl font-light tabular-nums text-white/90 md:text-8xl">
                {project.num}
              </span>
              <h2 className="mt-4 font-serif text-4xl font-light tracking-tight text-white md:text-5xl">
                {project.title}
              </h2>
              <span className="mt-1 font-sans text-sm font-medium uppercase tracking-widest text-white/80">
                {project.subtitle}
              </span>
              <p className="mt-4 max-w-sm font-sans text-base leading-relaxed text-white/80">
                {project.description}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-medium uppercase tracking-widest text-white transition-transform duration-300 ease-out group-hover:translate-x-1">
                VIEW PROJECT
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </nav>
    </main>
  )
}

export default Home
