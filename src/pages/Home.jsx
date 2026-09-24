import { Link } from 'react-router-dom'

/**
 * Home
 * Contract: Home(): JSX.Element
 *
 * Premium editorial gateway to the four landing-page directions.
 * - Full-bleed layout centered within the 1126px #root container
 * - Large display typography in Geist sans, no cards or gradients
 * - Asymmetric link placement with animated underline hover states
 */
function Home() {
  const works = [
    {
      num: '01',
      name: 'HEIRLOOM',
      descriptor: 'Premium leather goods',
      href: '/landing1',
      align: 'left',
      size: 'large',
    },
    {
      num: '02',
      name: 'NEXUS',
      descriptor: 'Precision infrastructure',
      href: '/landing2',
      align: 'right',
      size: 'medium',
    },
    {
      num: '03',
      name: 'FLUX',
      descriptor: 'Digital craft studio',
      href: '/landing3',
      align: 'left',
      size: 'medium',
    },
    {
      num: '04',
      name: 'ATELIER',
      descriptor: 'Serif editorial brutalism',
      href: '/landing4',
      align: 'right',
      size: 'large',
    },
  ]

  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <div className="mx-auto w-full max-w-[1126px] px-6 py-20 md:py-28 lg:py-32">
        <header className="mb-16 md:mb-24 lg:mb-32">
          <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Landing Archive
          </span>
          <h1 className="font-sans text-5xl font-light tracking-tight md:text-7xl lg:text-8xl">
            Selected Works
          </h1>
        </header>

        <nav aria-label="Selected works" className="flex flex-col gap-14 md:gap-20">
          {works.map((work) => {
            const alignClass =
              work.align === 'right'
                ? 'md:ml-auto md:items-end md:text-right'
                : 'md:items-start md:text-left'

            const sizeClass =
              work.size === 'large'
                ? 'text-4xl md:text-6xl lg:text-7xl'
                : 'text-3xl md:text-5xl lg:text-6xl'

            return (
              <Link
                key={work.num}
                to={work.href}
                className={`group flex flex-col ${alignClass}`}
              >
                <span className="mb-2 font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors duration-300 group-hover:text-[var(--accent)]">
                  {work.num}
                </span>
                <span
                  className={`font-sans font-light tracking-tight underline decoration-transparent underline-offset-8 transition-all duration-300 group-hover:decoration-[var(--accent)] group-hover:underline-offset-4 ${sizeClass}`}
                >
                  {work.name}
                </span>
                <span className="mt-2 font-sans text-base text-muted-foreground md:text-lg">
                  {work.descriptor}
                </span>
              </Link>
            )
          })}
        </nav>
      </div>
    </main>
  )
}

export default Home
