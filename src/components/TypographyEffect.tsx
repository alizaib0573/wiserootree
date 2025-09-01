import EffectFrame from './effects/EffectFrame'

export default function TypographyEffect() {
  return (
    <section className="section" id="typography">
      <div className="container">
        <div className="rounded-xl overflow-hidden h-[520px] md:h-[620px]">
          {/* Codrops OnScroll Typography Animations (index2) */}
          <EffectFrame src="/effects/typography/index2.html" />
        </div>
      </div>
    </section>
  )
}
