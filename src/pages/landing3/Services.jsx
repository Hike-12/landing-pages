/**
 * Services
 * Contract: Services(): JSX.Element
 *
 * FLUX creative-studio services.
 * - Four full-width typographic rows on a dark slate ground
 * - Service name on the left, short description on the right
 * - Subtle gradient hover state, no icons, cards, or rounded corners
 */
function Services() {
  const services = [
    {
      name: 'Brand Systems',
      description:
        'Identity, typography, and visual language built to evolve with culture.',
    },
    {
      name: 'Digital Products',
      description:
        'Websites, apps, and interactive experiences engineered for clarity.',
    },
    {
      name: 'Immersive Direction',
      description:
        'Motion, spatial design, and environments that pull audiences in.',
    },
    {
      name: 'Creative Partnership',
      description:
        'Long-term collaboration with teams shaping what comes next.',
    },
  ]

  return (
    <section className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        {services.map((service) => (
          <div
            key={service.name}
            className="group flex flex-col justify-between gap-4 border-t border-white/10 bg-gradient-to-r from-transparent to-transparent py-8 transition-colors duration-500 hover:from-white/5 hover:to-transparent md:flex-row md:items-start md:gap-12"
          >
            <h3 className="text-2xl font-semibold text-slate-100 md:text-3xl">
              {service.name}
            </h3>
            <p className="max-w-md text-slate-400 md:text-right">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
