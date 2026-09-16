import { Link } from 'react-router-dom'

/**
 * Home
 * Contract: Home(): JSX.Element
 *
 * Minimal editorial hub for landing page routes.
 * - No card containers, no border boxes, no emojis
 * - Typography and whitespace only
 */
function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground max-w-5xl mx-auto px-6 py-24 text-center">
      <h1 className="font-serif text-5xl md:text-6xl font-light tracking-tight text-foreground">
        Landing Pages
      </h1>
      <p className="mt-6 text-lg text-muted-foreground font-sans">
        A curated set of editorial directions.
      </p>
      <nav
        className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        aria-label="Landing pages"
      >
        <Link
          to="/landing1"
          className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-foreground border border-foreground/15 hover:border-foreground/30 hover:bg-foreground/[0.03] transition-colors"
        >
          HEIRLOOM Landing Page
        </Link>
      </nav>
    </main>
  )
}

export default Home
