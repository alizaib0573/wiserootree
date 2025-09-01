import EffectFrame from './effects/EffectFrame'

export default function HorizontalScrollSection() {
  return (
    <section className="section" id="hscroll">
      <div className="container">
        <div className="rounded-xl overflow-hidden h-[560px] md:h-[680px]">
          {/* Codrops Horizontal Smooth Scroll Layout (index2) */}
          <EffectFrame src="/effects/horizontal-smooth/index2.html" />
        </div>
      </div>
    </section>
  )
}
