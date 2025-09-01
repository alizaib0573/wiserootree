import EffectFrame from './effects/EffectFrame'

export default function HeroDarkVeil() {
  return (
    <section className="section pt-8 md:pt-14">
      <div className="container">
        <div className="relative overflow-hidden rounded-xl">
          {/* ReactBits Dark Veil effect embedded */}
          <div className="absolute inset-0 -z-10">
            <EffectFrame src="/effects/dark-veil/index.html" />
          </div>
          <div className="px-6 md:px-12 py-16 md:py-24">
            <h1 className="font-display text-[42px] md:text-[84px] leading-[1.02] tracking-tight3">
              WISE ROOTREE
            </h1>
            <p className="mt-4 max-w-xl text-[13px] md:text-[16px] leading-[1.6] text-white/80">
              {/* Replace with exact subtitle from Figma; comments are NOT part of design */}
              A business partner who will make your vision concrete.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}