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
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Crafted to Outlast Trends</h1>
        <p className="hero__subheading">
          Small-batch leather goods shaped by hand in our family atelier. Each
          piece is cut, stitched, and finished to age gracefully with you.
        </p>
        <div className="hero__actions">
          <a href="#collection" className="ui-button ui-button--default">
            Explore Collection
          </a>
          <a href="#atelier" className="ui-button ui-button--secondary ui-button--default">
            Our Atelier
          </a>
        </div>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 560 420"
          fill="none"
          className="hero__svg"
        >
          <rect width="560" height="420" rx="16" fill="var(--accent-bg)" />
          <path
            d="M80 340c40-80 120-140 200-140s160 60 200 140"
            stroke="var(--accent-border)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M140 340c30-50 90-90 140-90s110 40 140 90"
            stroke="var(--accent-border)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="280" cy="160" r="72" stroke="var(--accent)" strokeWidth="1.5" />
          <path
            d="M248 160c0-24 14-44 32-44s32 20 32 44-14 44-32 44-32-20-32-44Z"
            fill="var(--accent)"
            fillOpacity="0.12"
          />
          <path
            d="M280 88v-24M236 112l-17-17M324 112l17-17"
            stroke="var(--accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M200 260h160M200 276h120M200 292h80"
            stroke="var(--accent-border)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero
