/**
 * Hero
 * Contract: Hero(): JSX.Element
 *
 * FLUX creative-studio hero.
 * - Dark, immersive aurora backdrop with asymmetric gradient orbs
 * - Bold gradient headline centered in the viewport
 * - Minimal centered subheadline
 * - Subtle bottom-center scroll indicator
 */
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950">
      {/* Asymmetric aurora gradient orbs */}
      <div
        className="absolute -left-32 top-1/4 h-[28rem] w-[28rem] rounded-full bg-teal-500/20 blur-3xl animate-pulse"
        aria-hidden="true"
      />
      <div
        className="absolute -right-40 bottom-1/4 h-[32rem] w-[32rem] rounded-full bg-violet-500/20 blur-3xl animate-pulse"
        aria-hidden="true"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Centered content */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <h1 className="bg-gradient-to-r from-teal-300 via-cyan-300 to-violet-300 bg-clip-text text-6xl font-bold tracking-tighter text-transparent md:text-8xl">
          We shape digital realities
        </h1>
        <p className="mt-6 max-w-xl text-lg text-slate-400 md:text-xl">
          A creative studio building immersive brands, products, and experiences
          for the next era of culture.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="animate-bounce"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
