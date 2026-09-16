/**
 * Newsletter
 * Contract: Newsletter(): JSX.Element
 *
 * Centered email CTA for HEIRLOOM.
 * - No background box, no border container
 * - Inline flex form with bottom-border-only input
 * - Minimal submit button, generous whitespace
 */
function Newsletter() {
  return (
    <section className="py-24 px-6" aria-labelledby="newsletter-heading">
      <div className="max-w-xl mx-auto text-center">
        <h2
          id="newsletter-heading"
          className="font-serif text-2xl md:text-3xl font-light tracking-tight text-foreground"
        >
          Join the Atelier
        </h2>
        <p className="mt-4 text-lg text-muted-foreground font-sans leading-relaxed">
          Be the first to see new releases, studio notes, and stories from the
          workbench--delivered with care, never clutter.
        </p>
        <form
          className="mt-8 inline-flex items-end gap-4 w-full max-w-md"
          onSubmit={(e) => e.preventDefault()}
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="flex-1 border-0 border-b border-input bg-transparent py-2 text-foreground placeholder:text-muted-foreground transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:border-foreground"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium tracking-wide text-background bg-foreground transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs text-muted-foreground font-sans">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
