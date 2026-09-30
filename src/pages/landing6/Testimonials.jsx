/**
 * Testimonials
 * Contract: Testimonials(): JSX.Element
 *
 * Social proof section for landing6.
 * - Two-column grid of client quotes
 * - Large quote marks, attribution, and role
 */
function Testimonials() {
  const quotes = [
    {
      body: 'PRISM turned a vague product idea into a brand and interface our users actually love. Their craft is rare.',
      name: 'Elena Voss',
      role: 'CEO, Lumen Finance',
    },
    {
      body: 'The team thinks in systems, not screens. Every animation, transition, and type choice had a reason.',
      name: 'Marcus Chen',
      role: 'Product Lead, Aurora Health',
    },
    {
      body: 'They shipped our rebrand in eight weeks without a single compromise on quality. World-class partners.',
      name: 'Sarah Okonkwo',
      role: 'Founder, Cipher Records',
    },
    {
      body: 'Our conversion rate doubled after the new site went live. Design that actually performs.',
      name: 'David Park',
      role: 'CMO, Nova Energy',
    },
  ]

  return (
    <section className="border-y border-[#F5F5F5]/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="mb-12 block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
          Client voices
        </span>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {quotes.map((quote) => (
            <blockquote key={quote.name} className="border-l-2 border-[#00F0FF]/30 pl-6">
              <p className="mb-6 font-sans text-lg leading-relaxed text-[#F5F5F5] md:text-xl">
                “{quote.body}”
              </p>
              <footer>
                <cite className="not-italic">
                  <span className="block font-sans text-sm font-semibold text-[#F5F5F5]">{quote.name}</span>
                  <span className="font-sans text-sm text-[#F5F5F5]/50">{quote.role}</span>
                </cite>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
