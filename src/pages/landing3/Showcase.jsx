/**
 * Showcase
 * Contract: Showcase(): JSX.Element
 *
 * FLUX selected-work gallery.
 * - Solid charcoal surfaces with subtle white borders (no gradients)
 * - Sharp/minimal radius (rounded-sm)
 * - Asymmetric 12-column editorial rhythm: one tall feature, two offset
 *   supporting pieces with varying internal padding and top-margin offset
 * - Grayscale images that reveal color on hover
 */
function Showcase() {
  return (
    <section id="work" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-slate-500">
          Selected Work
        </p>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          {/* Large feature — spans 7 columns and both rows */}
          <article className="group relative overflow-hidden rounded-sm border border-white/10 bg-neutral-900 md:col-span-7 md:row-span-2">
            <div className="aspect-[4/5] md:aspect-auto md:h-full">
              <img
                src="/images/nexus-hero.jpg"
                alt="Dark architectural corridor lit by a single overhead light"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-6 md:p-8">
              <h3 className="text-xl font-semibold text-white">Nexus</h3>
              <p className="mt-1 text-sm text-slate-400">Brand & digital experience</p>
            </div>
          </article>

          {/* Top-right piece — spans 5 columns, pushed down to break alignment */}
          <article className="group overflow-hidden rounded-sm border border-white/10 bg-neutral-900 md:col-span-5 md:mt-16">
            <div className="aspect-[16/10]">
              <img
                src="/images/collection-1.jpg"
                alt="Hand-finished leather surface in warm studio light"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-white">Heirloom</h3>
              <p className="mt-1 text-sm text-slate-400">E-commerce identity</p>
            </div>
          </article>

          {/* Bottom-right piece — spans 5 columns, tighter padding */}
          <article className="group overflow-hidden rounded-sm border border-white/10 bg-neutral-900 md:col-span-5">
            <div className="aspect-[16/10]">
              <img
                src="/images/collection-3.jpg"
                alt="Minimal product detail against a neutral background"
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white">Forma</h3>
              <p className="mt-1 text-sm text-slate-400">Product photography</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Showcase
