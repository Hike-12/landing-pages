/**
 * Work
 * Contract: Work(): JSX.Element
 *
 * Selected work gallery for landing6.
 * - Two-column grid of case-study cards
 * - Each card has an image, title, tags, and hover overlay
 */
function Work() {
  const projects = [
    {
      title: 'Lumen Finance',
      tags: 'Web platform, Brand',
      image: '/images/landing6-work-1.jpg',
      year: '2024',
    },
    {
      title: 'Aurora Health',
      tags: 'App design, Design system',
      image: '/images/landing6-work-2.jpg',
      year: '2024',
    },
    {
      title: 'Cipher Records',
      tags: 'Identity, Motion',
      image: '/images/landing6-work-3.jpg',
      year: '2023',
    },
    {
      title: 'Nova Energy',
      tags: 'Website, 3D direction',
      image: '/images/landing6-work-4.jpg',
      year: '2023',
    },
  ]

  return (
    <section id="work" className="border-y border-[#F5F5F5]/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between">
          <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
            Selected work
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#F5F5F5]/40">
            {projects.length} projects
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#"
              className="group relative block overflow-hidden border border-[#F5F5F5]/10 bg-[#F5F5F5]/[0.02] transition-all duration-300 hover:border-[#00F0FF]/50"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} project preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-between border-t border-[#F5F5F5]/10 p-6">
                <div>
                  <h3 className="mb-1 font-sans text-xl font-semibold tracking-tight text-[#F5F5F5]">
                    {project.title}
                  </h3>
                  <span className="font-sans text-sm text-[#F5F5F5]/50">{project.tags}</span>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
                  {project.year}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
