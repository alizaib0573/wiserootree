import EffectFrame from './effects/EffectFrame'

export default function Scroll3DGridSection() {
  return (
    <section className="section" id="grid3d">
      <div className="container">
        <div className="rounded-xl overflow-hidden h-[640px] md:h-[800px]">
          {/* Codrops Scroll3DGrid */}
          <EffectFrame src="/effects/scroll-3d-grid/index.html" />
        </div>
      </div>
    </section>
  )
}
