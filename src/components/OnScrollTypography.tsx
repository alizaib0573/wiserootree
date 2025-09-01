import { useRef } from 'react'
import { useInView } from 'framer-motion'

function Line({ text, delay = 0 }: { text: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.35 })
  return (
    <div ref={ref} className="overflow-hidden will-change-transform">
      <span
        className={`reveal-line ${inView ? 'is-inview' : ''}`}
        style={{ ['--d' as any]: `${delay}s` }}
      >
        {[...text].map((ch, i) => (
          <span key={i} className="reveal-char" style={{ ['--i' as any]: i }}>
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        ))}
      </span>
    </div>
  )
}

export default function OnScrollTypography() {
  return (
    <section className="section" id="typography">
      <div className="container">
        {/* Use the exact strings from Figma for a perfect match */}
        <div className="max-w-[1080px]">
          <Line text="PLANT YOUR VISION" />
          <Line text="BEHIND EACH PIXEL" delay={0.08} />
        </div>
      </div>
    </section>
  )
}