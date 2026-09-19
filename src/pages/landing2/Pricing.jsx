/**
 * Pricing
 * Contract: Pricing(): JSX.Element
 *
 * Swiss-style tier comparison for NEXUS.
 * - Clean horizontal comparison, no card containers
 * - Pro tier emphasized with a subtle background shift
 * - No "Popular" badge, no heavy borders, no shadows
 * - Restrained check marks in muted foreground
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

  const allFeatures = [
    'Up to 3 projects',
    'Unlimited projects',
    'Basic analytics',
    'Advanced analytics',
    'Community support',
    'Priority support',
    '1GB storage',
    '50GB storage',
    'Unlimited storage',
    'Custom integrations',
    'Dedicated account manager',
    'SSO & advanced security',
    'SLA guarantee',
  ]

  const Check = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-muted-foreground"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )

  const Dash = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-border"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )

  return (
    <section id="pricing" className="w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-2xl">
          <span className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Pricing
          </span>
          <h2 className="mt-4 font-sans text-3xl font-bold uppercase tracking-tight text-foreground md:text-4xl">
            Plans
          </h2>
          <p className="mt-4 font-sans text-lg leading-relaxed text-muted-foreground">
            Choose the plan that fits your team. Scale up or down at any time.
          </p>
        </div>

        {/* Desktop horizontal comparison */}
        <div className="hidden border-t border-border md:block">
          {/* Header row */}
          <div className="grid grid-cols-4 border-b border-border">
            <div className="py-6 pr-6" />
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={[
                  'px-6 py-6',
                  tier.recommended ? 'bg-muted/30' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {tier.name}
                </span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-sans text-3xl font-bold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Description row */}
          <div className="grid grid-cols-4 border-b border-border">
            <div className="py-4 pr-6 text-sm text-muted-foreground" />
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={[
                  'px-6 py-4 text-sm leading-relaxed text-muted-foreground',
                  tier.recommended ? 'bg-muted/30' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {tier.description}
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {allFeatures.map((feature) => (
            <div key={feature} className="grid grid-cols-4 border-b border-border">
              <div className="py-4 pr-6 font-sans text-sm text-foreground">
                {feature}
              </div>
              {tiers.map((tier) => (
                <div
                  key={tier.name}
                  className={[
                    'flex items-center px-6 py-4',
                    tier.recommended ? 'bg-muted/30' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {tier.features.includes(feature) ? <Check /> : <Dash />}
                </div>
              ))}
            </div>
          ))}

          {/* CTA row */}
          <div className="grid grid-cols-4">
            <div className="py-6 pr-6" />
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={[
                  'px-6 py-6',
                  tier.recommended ? 'bg-muted/30' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <a
                  href="#signup"
                  className={[
                    'inline-flex items-center justify-center px-6 py-3 font-sans text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30',
                    tier.recommended
                      ? 'bg-foreground text-background hover:bg-foreground/90'
                      : 'border border-border text-foreground hover:bg-foreground/[0.03]',
                  ].join(' ')}
                >
                  {tier.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile stacked layout */}
        <div className="flex flex-col gap-0 divide-y divide-border border-t border-border md:hidden">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={[
                'py-10',
                tier.recommended ? 'bg-muted/20 -mx-6 px-6' : '',
              ]
                .filter(Boolean)
                .join(' ')}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-sans text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {tier.name}
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-sans text-3xl font-bold tracking-tight text-foreground">
                    {tier.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{tier.period}</span>
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {tier.description}
              </p>

              <ul className="mt-6 flex flex-col gap-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check />
                    <span className="text-sm text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#signup"
                className={[
                  'mt-8 inline-flex w-full items-center justify-center px-6 py-3 font-sans text-sm font-semibold uppercase tracking-widest transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground/30',
                  tier.recommended
                    ? 'bg-foreground text-background hover:bg-foreground/90'
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
