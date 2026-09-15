/**
 * Newsletter
 * Contract: Newsletter(): JSX.Element
 *
 * Centered email CTA for HEIRLOOM.
 * - 24px heading
 * - 18px subtext
 * - Accessible email form with visible focus states
 */
function Newsletter() {
  return (
    <section className="newsletter" aria-labelledby="newsletter-heading">
      <div className="newsletter__content">
        <h2 id="newsletter-heading" className="newsletter__title">
          Join the Atelier
        </h2>
        <p className="newsletter__subtext">
          Be the first to see new releases, studio notes, and stories from the
          workbench—delivered with care, never clutter.
        </p>
        <form
          className="newsletter__form"
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
            className="newsletter__input"
          />
          <button
            type="submit"
            className="ui-button ui-button--default newsletter__submit"
          >
            Subscribe
          </button>
        </form>
        <p className="newsletter__disclaimer">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}

export default Newsletter
