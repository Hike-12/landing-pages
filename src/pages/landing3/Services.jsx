/**
 * Services
 * Contract: Services(): JSX.Element
 *
 * FLUX creative-studio services.
 * - Asymmetric two-column editorial layout
 * - Large index numbers, solid stroke icons, no gradients
 * - Service items separated by solid top borders and whitespace
 * - Subtle solid hover state
 */
function Services() {
  const services = [
    {
      num: '01',
      name: 'Brand Systems',
      description:
        'Identity, typography, and visual language built to evolve with culture.',
      icon: (
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
        >
          <path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.84l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z" />
          <path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12" />
          <path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17" />
        </svg>
      ),
    },
    {
      num: '02',
      name: 'Digital Products',
      description:
        'Websites, apps, and interactive experiences engineered for clarity.',
      icon: (
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
        >
          <rect width="20" height="14" x="2" y="3" rx="1" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
    },
    {
      num: '03',
      name: 'Immersive Direction',
      description:
        'Motion, spatial design, and environments that pull audiences in.',
      icon: (
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
        >
          <path d="m21.12 6.4-6.05-4.03a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.03a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z" />
          <path d="M10 22v-8" />
          <path d="M10 12 2.5 7.5" />
          <path d="m10 12 9.5-5.5" />
        </svg>
      ),
    },
    {
      num: '04',
      name: 'Creative Partnership',
      description:
        'Long-term collaboration with teams shaping what comes next.',
      icon: (
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
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
  ]

  return (
    <section className="bg-slate-950 px-6 py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
        {/* Left column — section anchor */}
        <div className="md:col-span-4">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-500">
            What we do
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tighter text-white md:text-5xl">
            Services
          </h2>
          <p className="mt-6 max-w-sm text-slate-400">
            A focused set of capabilities for brands ready to stand apart.
          </p>
        </div>

        {/* Right column — service rows */}
        <div className="md:col-span-8">
          {services.map((service) => (
            <div
              key={service.name}
              className="group border-t border-white/10 py-8 transition-colors duration-300 hover:bg-white/[0.03] md:py-10"
            >
              <div className="flex items-start gap-5 md:gap-8">
                <span className="mt-1 w-6 font-mono text-sm text-slate-600">
                  {service.num}
                </span>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/10 text-slate-300">
                  {service.icon}
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:justify-between md:gap-12">
                  <h3 className="text-xl font-semibold text-white md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="max-w-sm text-slate-400">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
