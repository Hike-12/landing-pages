/**
 * Showcase
 * Contract: Showcase(): JSX.Element
 *
 * FLUX selected-work gallery.
 * - Asymmetric two-column grid: the left image spans both rows
 * - Images sit inside rounded containers with no padding or shadow
 * - Grayscale by default, full color on hover
 */
function Showcase() {
  return (
    <section id="work" className="bg-slate-950 py-24 px-6">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
        {/* Left image — spans both rows */}
        <div className="row-span-2 overflow-hidden rounded-3xl">
          <img
            src="/images/nexus-hero.jpg"
            alt="Dark architectural corridor lit by a single overhead light"
            className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            loading="lazy"
          />
        </div>

        {/* Top-right image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/images/collection-1.jpg"
            alt="Hand-finished leather surface in warm studio light"
            className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            loading="lazy"
          />
        </div>

        {/* Bottom-right image */}
        <div className="overflow-hidden rounded-3xl">
          <img
            src="/images/collection-3.jpg"
            alt="Minimal product detail against a neutral background"
            className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}

export default Showcase
