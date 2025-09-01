const items = [
  { k: 'Planning', v: '기획' },
  { k: 'UI/UX Design', v: 'UI/UX 디자인' },
  { k: 'Program Development', v: '프로그램 개발' },
  { k: 'AI (Artificial Intelligence)', v: 'AI' },
  { k: 'Marketing', v: '마케팅' }
]
export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {items.map((it) => (
            <div key={it.k} className="ink-card p-6">
              <div className="text-white/50 text-[11px] md:text-[12px] uppercase tracking-wide">{it.k}</div>
              <div className="mt-2 text-[16px] md:text-[18px]">{it.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}