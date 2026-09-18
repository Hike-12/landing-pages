/**
 * Pricing
 * Contract: Pricing(): JSX.Element
 *
 * Tiered pricing cards for NEXUS.
 * - 3 cards in a row on desktop, stacked on mobile
 * - Pro tier highlighted with a Popular badge and primary ring
 * - Checkmark feature lists and solid/outline CTAs
 * - No images, pure typography and geometry
 */
function Pricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '$0',
      period: 'per user / month',
      description: 'For individuals exploring the platform.',
      features: ['Up to 3 projects', 'Basic analytics', 'Community support', '1GB storage'],
      cta: 'Get Started',
      recommended: false,
    },
    {
      name: 'Pro',
      price: '$29',
      period: 'per user / month',
      description: 'For growing teams that need more power.',
      features: [
        'Unlimited projects',
        'Advanced analytics',
        'Priority support',
        '50GB storage',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      recommended: true,
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per user / month',
      description: 'For organizations with advanced needs.',
      features: [
        'Everything in Pro',
        'Dedicated account manager',
        'SSO & advanced security',
        'Unlimited storage',
        'SLA guarantee',
      ],
      cta: 'Contact Sales',
      recommended: false,
    },
  ]

  return (
    <section id="pricing" className="w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <span className="font-sans text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Pricing
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Choose the plan that fits your team. Scale up or down at any time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                'relative flex flex-col rounded-lg border border-border bg-card p-8',
                tier.recommended ? 'ring-2 ring-primary' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              {tier.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
                  Popular
                </span>
              )}

              <span className="font-sans text-sm font-medium uppercase tracking-widest text-muted-foreground">
                {tier.name}
              </span>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-sans text-4xl font-bold text-foreground">
                  {tier.price}
                </span>
                <span className="text-muted-foreground">{tier.period}</span>
              </div>

              <p className="mt-4 text-muted-foreground">{tier.description}</p>

              <ul className="mt-8 flex flex-col gap-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mt-0.5 shrink-0 text-primary"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                className={[
                  'mt-8 inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
                  tier.recommended
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border text-foreground hover:bg-foreground/[0.03]',
                ].join(' ')}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
