/**
 * Features
 * Contract: Features(): JSX.Element
 *
 * Geometric feature grid for NEXUS.
 * - 3-column grid on desktop, 1 column on mobile
 * - Bordered cards with small SVG shape icons
 * - No images, pure typography and geometry
 */
function Features() {
  const features = [
    {
      title: 'Real-time Collaboration',
      description:
        'Work together in a shared canvas where every change syncs instantly across your entire team.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </svg>
      ),
    },
    {
      title: 'Modular Components',
      description:
        'Assemble interfaces from a library of flexible blocks that adapt to any screen or state.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z" />
          <path d="M12 12l9.5-5.5M12 12v12M12 12L2.5 6.5" />
        </svg>
      ),
    },
    {
      title: 'Insightful Analytics',
      description:
        'Track performance with clean dashboards that surface the metrics that matter most.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l9 18H3L12 2z" />
          <path d="M12 10v6" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
    {
      title: 'Secure by Default',
      description:
        'Enterprise-grade permissions, encrypted connections, and audit logs built into every layer.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M8 12l3 3 5-6" />
        </svg>
      ),
    },
    {
      title: 'Automated Workflows',
      description:
        'Connect tools and trigger actions with a visual workflow engine that runs in the background.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l9.5 5.5v11L12 24l-9.5-5.5v-11L12 2z" />
          <path d="M12 12l9.5-5.5M12 12v12M12 12L2.5 6.5" />
        </svg>
      ),
    },
    {
      title: 'Global Deployment',
      description:
        'Ship to edge locations around the world with a single click and zero configuration.',
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <path d="M12 2l9 18H3L12 2z" />
          <path d="M12 10v6" />
          <path d="M12 18h.01" />
        </svg>
      ),
    },
  ]

  return (
    <section id="features" className="w-full px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center font-sans text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Everything you need
        </h2>
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {features.map((feature) => (
            <div
              key={feature.title}
              role="listitem"
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-foreground/20"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
