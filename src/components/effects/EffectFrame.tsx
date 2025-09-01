import { useEffect, useState } from 'react'

export default function EffectFrame({ src, fallbackClass }:{ src: string; fallbackClass?: string }) {
  const [ready, setReady] = useState(false)
  useEffect(() => { const t = setTimeout(() => setReady(true), 10); return () => clearTimeout(t) }, [])
  if (!ready) return <div className={fallbackClass ?? 'w-full h-full'} />
  return (
    <iframe
      src={src}
      title="Effect"
      className="w-full h-full"
      loading="lazy"
      style={{ background: 'transparent', border: '1px solid rgba(255,255,255,.06)', borderRadius: 12 }}
    />
  )
}
