import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0.08 }
    )
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl">
      <div
        className={`flex items-center justify-between px-5 py-3 rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-off-white/85 backdrop-blur-xl border border-light-slate/50 shadow-md'
            : 'bg-navy/30 backdrop-blur-sm border border-white/10'
        }`}
      >
        <a
          href="#"
          className="font-display font-bold text-base tracking-[0.07em] link-lift transition-colors duration-300"
          style={{ color: scrolled ? '#0F1F3D' : '#F8F7F4' }}
        >
          DAMINA
        </a>

        <a
          href="#subscribe"
          className="btn-magnetic flex items-center px-5 py-2.5 rounded-full font-sans font-semibold text-sm text-white"
          style={{ backgroundColor: '#0D9488' }}
        >
          <span className="btn-bg rounded-full" style={{ backgroundColor: '#0b7c72' }} />
          <span>Subscribe</span>
        </a>
      </div>
    </nav>
  )
}
