/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * Premium editorial hero for HEIRLOOM.
 * - 64px left-aligned headline
 * - 18px subheading
 * - Primary + secondary CTAs at 16px
 * - Editorial hero image
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

        <div className="w-full lg:w-1/2">
          <img
            src="/images/hero.jpg"
            alt="Handcrafted leather goods hero image"
            className="aspect-[4/3] w-full rounded-sm object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
