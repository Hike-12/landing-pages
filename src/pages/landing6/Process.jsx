/**
 * Process
 * Contract: Process(): JSX.Element
 *
 * Four-step process for landing6.
 * - Vertical timeline on mobile, connected cards on desktop
 * - Numbered steps with concise titles and descriptions
 */
function Process() {
  const steps = [
    {
      num: '01',
      title: 'Discover',
      body: 'We map your audience, market, and constraints until the real problem is clear.',
    },
    {
      num: '02',
      title: 'Define',
      body: 'Strategy becomes a creative direction: typography, motion language, and interaction rules.',
    },
    {
      num: '03',
      title: 'Craft',
      body: 'Design and engineering happen side by side so the final build matches the vision pixel for pixel.',
    },
    {
      num: '04',
      title: 'Launch',
      body: 'We ship, measure, and refine. A great product is never truly finished, only continuously improved.',
    },
  ]

  return (
    <section id="process" className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <span className="mb-12 block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
          Process
        </span>

        <div className="grid grid-cols-1 gap-px bg-[#F5F5F5]/10 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.num}
              className="group bg-[#0F0F0F] p-8 transition-colors duration-300 hover:bg-[#F5F5F5]/[0.03] md:p-10"
            >
              <span className="mb-4 block font-mono text-xs uppercase tracking-widest text-[#00F0FF]">
                {step.num}
              </span>
              <h3 className="mb-3 font-sans text-2xl font-semibold tracking-tight text-[#F5F5F5]">
                {step.title}
              </h3>
              <p className="max-w-sm font-sans text-base leading-relaxed text-[#F5F5F5]/60">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
