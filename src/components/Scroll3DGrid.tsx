import { useEffect, useRef } from 'react'

const GRID = [
  '/images/work-1.jpg','/images/work-2.jpg','/images/work-3.jpg','/images/work-4.jpg',
  '/images/work-5.jpg','/images/work-6.jpg','/images/work-7.jpg','/images/work-8.jpg',
  '/images/work-9.jpg','/images/work-10.jpg','/images/work-11.jpg','/images/work-12.jpg'
]

export default function Scroll3DGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sec = sectionRef.current
    const grid = gridRef.current
    if (!sec || !grid) return

    let raf = 0
    const onFrame = () => {
      const rect = sec.getBoundingClientRect()
      const viewH = window.innerHeight
      const p = Math.min(Math.max(1 - rect.top / (viewH + rect.height), 0), 1) // 0..1
      // Tilt + subtle Z parallax
      grid.style.transform = `rotateX(${(-6 + 12 * p).toFixed(2)}deg) rotateZ(${(2 * p).toFixed(2)}deg) translateZ(0)`
      Array.from(grid.children).forEach((el, i) => {
        const depth = ((i % 5) - 2) * 20 // -40..40
        ;(el as HTMLElement).style.transform = `translateZ(${(depth * (p - 0.5)).toFixed(1)}px)`
      })
      raf = requestAnimationFrame(onFrame)
    }
    raf = requestAnimationFrame(onFrame)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <section ref={sectionRef} className="section" id="grid3d">
      <div className="container">
        <div className="grid3d-wrap">
          <div ref={gridRef} className="grid3d">
            {GRID.map((src, i) => (
              <div key={i} className="grid3d-item">
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}