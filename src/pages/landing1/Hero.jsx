/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * Premium editorial hero for HEIRLOOM.
 * - 64px left-aligned headline
 * - 18px subheading
 * - Primary + secondary CTAs at 16px
 * - Elegant SVG visual placeholder
 */
function Hero() {
  return (
    <section className="w-full px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex w-full flex-col items-start lg:w-1/2">
          <h1 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Crafted to Outlast Trends
          </h1>
          <p className="mt-6 max-w-lg font-sans text-lg leading-relaxed text-muted-foreground">
            Small-batch leather goods shaped by hand in our family atelier. Each
            piece is cut, stitched, and finished to age gracefully with you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#collection"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium tracking-wide text-background bg-foreground transition-colors hover:bg-foreground/90"
            >
              Explore Collection
            </a>
            <a
              href="#atelier"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium tracking-wide text-foreground border border-foreground/15 transition-colors hover:bg-foreground/[0.03]"
            >
              Our Atelier
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 560 420"
            fill="none"
            className="h-auto w-full rounded-sm"
          >
            <rect width="560" height="420" rx="16" fill="var(--muted)" />
            <path
              d="M80 340c40-80 120-140 200-140s160 60 200 140"
              stroke="var(--border)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M140 340c30-50 90-90 140-90s110 40 140 90"
              stroke="var(--border)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <circle cx="280" cy="160" r="72" stroke="var(--primary)" strokeWidth="1.5" />
            <path
              d="M248 160c0-24 14-44 32-44s32 20 32 44-14 44-32 44-32-20-32-44Z"
              fill="var(--primary)"
              fillOpacity="0.12"
            />
            <path
              d="M280 88v-24M236 112l-17-17M324 112l17-17"
              stroke="var(--primary)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M200 260h160M200 276h120M200 292h80"
              stroke="var(--border)"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}

export default Hero
