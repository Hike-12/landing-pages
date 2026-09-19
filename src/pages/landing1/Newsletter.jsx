/**
 * Newsletter
 * Contract: Newsletter(): JSX.Element
 *
 * Minimal email CTA for HEIRLOOM.
 * - No card wrapper, no background box
 * - Single-line input with bottom-border-only styling
 * - Minimal arrow submit button
 * - Generous whitespace, muted typography
 */
function Newsletter() {
  return (
    <section className="w-full px-6 py-24 md:py-32" aria-labelledby="newsletter-heading">
      <div className="mx-auto max-w-xl text-center">
        <span className="mb-4 block font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
          The Atelier List
        </span>
        <h2
          id="newsletter-heading"
          className="font-serif text-2xl font-light tracking-tight text-foreground md:text-3xl"
        >
          New releases, studio notes, and stories from the workbench.
        </h2>

        <form
          className="mx-auto mt-10 flex w-full max-w-md items-center"
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
            className="flex-1 border-0 border-b border-border bg-transparent py-3 pr-4 font-sans text-base text-foreground placeholder:text-muted-foreground transition-colors focus-visible:border-foreground focus-visible:outline-none"
          />
          <button
            type="submit"
            className="group -ml-px flex items-center justify-center p-3 text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            aria-label="Subscribe"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover:translate-x-0.5"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </form>

        <p className="mt-5 font-sans text-xs text-muted-foreground">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
