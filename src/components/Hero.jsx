import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80'

export default function Hero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-animate',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          delay: 0.3,
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full noise-overlay"
      style={{ height: '100dvh', minHeight: '600px' }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Gradient overlay: strong navy-to-black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(15,31,61,0.97) 0%, rgba(15,31,61,0.82) 50%, rgba(15,31,61,0.55) 100%)',
        }}
      />

      {/* Content — bottom-left */}
      <div className="relative z-10 h-full flex flex-col justify-end px-6 pb-16 md:px-16 md:pb-20 max-w-6xl mx-auto">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <p className="hero-animate font-mono text-xs font-medium tracking-[0.2em] uppercase mb-6"
            style={{ color: '#0D9488' }}>
            AI Consulting & Implementation
          </p>

          {/* Headline */}
          <h1 className="hero-animate font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-tight text-white mb-3">
            Build AI that
          </h1>
          <h1
            className="hero-animate font-serif italic text-6xl md:text-8xl lg:text-[108px] leading-none mb-8"
            style={{ color: '#F8F7F4', lineHeight: '0.95' }}
          >
            generates ROI.
          </h1>

          {/* Subtext */}
          <p className="hero-animate font-sans text-base md:text-lg leading-relaxed mb-10 max-w-lg"
            style={{ color: 'rgba(248,247,244,0.72)' }}>
            Most companies know AI matters. Most haven't seen the ROI.
            Damina bridges that gap — strategy, implementation, and training
            together.
          </p>

          {/* CTAs */}
          <div className="hero-animate flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="btn-magnetic flex items-center justify-center gap-2 px-7 py-4 rounded-full font-sans font-semibold text-sm text-white"
              style={{ backgroundColor: '#0D9488' }}
            >
              <span className="btn-bg rounded-full" style={{ backgroundColor: '#0b7c72' }} />
              <span>Book a strategy call</span>
              <ArrowRight size={16} className="relative z-10" />
            </a>
            <a
              href="#strategy"
              className="btn-magnetic flex items-center justify-center gap-2 px-7 py-4 rounded-full font-sans font-semibold text-sm border border-white/30 text-white hover:border-white/60 transition-colors duration-300"
            >
              <span className="btn-bg rounded-full bg-white/10" />
              <span>See how it works</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-16 z-10 hidden md:flex flex-col items-center gap-2 opacity-40">
        <div className="w-px h-12 bg-white/50" style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.5))'
        }} />
        <span className="font-mono text-xs text-white tracking-widest rotate-90 origin-center translate-x-5">
          scroll
        </span>
      </div>
    </section>
  )
}
