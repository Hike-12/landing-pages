/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * Premium editorial hero for HEIRLOOM.
 * - Asymmetric 5/12 text + 7/12 image split
 * - Tight-tracking editorial headline
 * - Bordered primary CTA + text-link secondary CTA with arrow
 * - Editorial hero image
 */
function Hero() {
  return (
    <section className="w-full px-6 py-16 md:py-24 lg:py-32">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start lg:col-span-5">
          <h1 className="font-serif text-4xl font-light leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-[3.5rem]">
            Carry something that lasts
          </h1>
          <p className="mt-6 max-w-md font-sans text-lg leading-relaxed text-muted-foreground">
            Small-batch leather goods shaped by hand in our family atelier. Each
            piece is cut, stitched, and finished to age gracefully with you.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#collection"
              className="inline-flex items-center justify-center border border-foreground px-6 py-3 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Explore Collection
            </a>
            <a
              href="#atelier"
              className="group inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-foreground transition-colors hover:text-muted-foreground"
            >
              Our Atelier
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
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
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
