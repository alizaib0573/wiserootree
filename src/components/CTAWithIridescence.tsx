import EffectFrame from './effects/EffectFrame'

export default function CTAWithIridescence() {
  return (
    <section className="section" id="cta">
      <div className="container">
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 -z-10">
            {/* ReactBits Iridescence */}
            <EffectFrame src="/effects/iridescence/index.html" />
          </div>
          <div className="px-6 md:px-12 py-16 md:py-24 text-center md:text-left">
            <h3 className="text-2xl md:text-4xl font-medium">PLANT YOUR VISION</h3>
            <div className="mt-6">
              <a href="#contact" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/20 px-5 py-2">
                PRESS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
