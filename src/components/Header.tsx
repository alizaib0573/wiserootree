import { useState } from 'react'
import clsx from 'clsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-black/30">
      <div className="container flex items-center justify-between py-4">
        <div className="text-xl tracking-widest font-display">WISE ROOTREE</div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-white mb-1" /><div className="w-6 h-0.5 bg-white mb-1" /><div className="w-6 h-0.5 bg-white" />
        </button>
        <nav className={clsx('hidden md:flex gap-8 text-sm text-white/80')}>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#works" className="hover:text-white">Works</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
      </div>
      {open && (
        <div className="md:hidden container pb-4">
          <div className="ink-card p-4 flex flex-col gap-3 text-white/80">
            <a href="#about">About</a><a href="#services">Services</a><a href="#works">Works</a><a href="#contact">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
