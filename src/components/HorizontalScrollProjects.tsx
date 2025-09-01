import { useEffect, useLayoutEffect, useRef, useState } from 'react'

type Panel = { title: string; subtitle?: string; img?: string }

const PANELS: Panel[] = [
  { title: 'PROJECT 01', img: '/images/work-1.jpg' },
  { title: 'PROJECT 02', img: '/images/work-2.jpg' },
  { title: 'PROJECT 03', img: '/images/work-3.jpg' },
  { title: 'PROJECT 04', img: '/images/work-4.jpg' },
  { title: 'PROJECT 05', img: '/images/work-5.jpg' }
]

export default function HorizontalScrollProjects() {
  const outerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const [wrapperH, setWrapperH] = useState(0)

  // Set scroll height = content width - viewport + viewport
  const recalc = () => {
    const track = trackRef.current
    if (!track) return
    const totalW = track.scrollWidth
    const viewportW = window.innerWidth
    const viewportH = window.innerHeight
    const needed = Math.max(totalW - viewportW + viewportH, viewportH * 2)
    setWrapperH(needed)
  }

  useLayoutEffect(() => {
    recalc()
    const ro = new ResizeObserver(recalc)
    if (trackRef.current) ro.observe(trackRef.current)
    window.addEventListener('resize', recalc)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', recalc)
    }
  }, [])

  useEffect(() => {
    const outer = outerRef.current
    const track = trackRef.current
    if (!outer || !track) return

    let raf = 0
    const loop = () => {
      const start = outer.offsetTop
      const end = start + outer.offsetHeight - window.innerHeight
      const y = window.scrollY
      const p = Math.min(Math.max((y - start) / (end - start), 0), 1)
      const maxX = track.scrollWidth - window.innerWidth
      track.style.transform = `translate3d(${-p * maxX}px,0,0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [wrapperH])

  return (
    <section id="hscroll" className="w-full">
      <div ref={outerRef} style={{ height: wrapperH || '200vh' }} className="relative">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div ref={trackRef} className="will-change-transform flex h-full items-center gap-6 px-6">
            {PANELS.map((p, i) => (
              <article key={i} className="w-[80vw] md:w-[50vw] xl:w-[40vw] shrink-0">
                <div className="ink-card overflow-hidden">
                  <img src={p.img} alt="" className="w-full h-[48vh] object-cover" />
                </div>
                <div className="mt-3 text-sm text-white/60">{p.subtitle}</div>
                <h4 className="text-xl md:text-2xl mt-1">{p.title}</h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}