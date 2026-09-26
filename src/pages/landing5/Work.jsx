/**
 * Work
 * Contract: Work(): JSX.Element
 *
 * Selected work list for landing5.
 * - Vertical stack of project rows
 * - Each row is a full-width link with a sharp top border
 * - Asymmetric internal layout: title left, tags right
 */
function Work() {
  const projects = [
    {
      title: 'Haven Journal',
      tags: 'Brand identity, Editorial design',
      year: '2024',
    },
    {
      title: 'Forma Architecture',
      tags: 'Web design, Art direction',
      year: '2024',
    },
    {
      title: 'Maison Rye',
      tags: 'E-commerce, Photography direction',
      year: '2023',
    },
    {
      title: 'Northwind Labs',
      tags: 'Product design, Design system',
      year: '2023',
    },
  ]

  return (
    <section
      id="work"
      className="border-b border-[#1A1917] px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <span className="mb-12 block font-mono text-xs uppercase tracking-widest text-[#1A1917]/60">
          Selected work
        </span>

        <div className="flex flex-col">
          {projects.map((project) => (
            <a
              key={project.title}
              href="#"
              className="group flex flex-col justify-between gap-4 border-t border-[#1A1917] py-8 transition-colors duration-300 hover:bg-[#1A1917]/[0.03] md:flex-row md:items-center"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:gap-8">
                <h3 className="font-sans text-2xl font-medium tracking-tight text-[#1A1917] transition-colors duration-300 group-hover:text-[#1A1917] md:text-4xl">
                  {project.title}
                </h3>
                <span className="font-sans text-sm text-[#1A1917]/60">
                  {project.tags}
                </span>
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#1A1917]/60">
                {project.year}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work
