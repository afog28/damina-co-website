import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Zap, TrendingUp, Shield, Check } from 'lucide-react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger)

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80'

function EmailForm({ dark = false, id }) {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  if (done) {
    return (
      <p className="font-sans text-sm font-medium" style={{ color: '#0D9488' }}>
        You're in. First issue coming soon.
      </p>
    )
  }

  return (
    <form
      id={id}
      onSubmit={(e) => { e.preventDefault(); if (email) setDone(true) }}
      className="flex flex-col sm:flex-row gap-2.5 w-full max-w-sm"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className={`flex-1 min-w-0 px-4 py-3 rounded-full font-sans text-sm focus:outline-none transition-colors ${
          dark
            ? 'bg-white/10 border border-white/15 text-white placeholder:text-white/40 focus:border-teal/50'
            : 'bg-white border border-light-slate/70 text-navy placeholder:text-slate/40 focus:border-teal/50'
        }`}
      />
      <button
        type="submit"
        className="btn-magnetic px-5 py-3 rounded-full font-sans font-semibold text-sm text-white shrink-0"
        style={{ backgroundColor: '#0D9488' }}
      >
        <span className="btn-bg rounded-full" style={{ backgroundColor: '#0b7c72' }} />
        <span>Subscribe</span>
      </button>
    </form>
  )
}

const cards = [
  {
    Icon: Zap,
    title: 'Automate Repetitive Work',
    desc: 'AI handles scheduling, data entry, customer follow-ups, and more — freeing your team to focus on what actually grows the business.',
  },
  {
    Icon: TrendingUp,
    title: 'Grow Revenue with AI',
    desc: 'From smarter lead generation to personalized marketing, AI helps you find and convert more customers without increasing headcount.',
  },
  {
    Icon: Shield,
    title: 'Stay Competitive',
    desc: "Businesses adopting AI now are pulling ahead. The ones that wait will spend years trying to catch up. The time to start is today.",
  },
]

const learnItems = [
  'AI tools you can use today',
  'Automation strategies that save hours',
  'Real case studies from real businesses',
  'Cost-saving tactics with immediate ROI',
]

export default function App() {
  const heroRef = useRef(null)
  const cardsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-item',
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.2 }
      )
      gsap.fromTo(
        '.feature-card',
        { y: 36, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.1,
          scrollTrigger: { trigger: cardsRef.current, start: 'top 78%' },
        }
      )
      gsap.fromTo(
        '.cta-item',
        { y: 24, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', stagger: 0.08,
          scrollTrigger: { trigger: ctaRef.current, start: 'top 75%' },
        }
      )
    })
    return () => ctx.revert()
  }, [])

  return (
    <div className="min-h-screen">

      <Navbar />

      {/* ── HERO — navy/dark ────────────────────────────────────── */}
      <section
        id="hero"
        ref={heroRef}
        className="relative noise-overlay"
        style={{ minHeight: '92vh' }}
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        />
        {/* Dark navy overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(15,31,61,0.96) 0%, rgba(15,31,61,0.88) 60%, rgba(15,31,61,0.80) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-center min-h-[92vh] px-6 md:px-12 max-w-4xl mx-auto py-32">
          <p
            className="hero-item font-mono text-xs font-medium tracking-[0.18em] uppercase mb-6"
            style={{ color: '#0D9488' }}
          >
            Weekly Newsletter
          </p>

          <h1 className="hero-item font-display font-bold text-5xl md:text-6xl lg:text-[68px] text-off-white leading-[1.06] mb-1">
            AI Without the Hype.
          </h1>
          <h2
            className="hero-item font-serif italic text-5xl md:text-6xl lg:text-[68px] leading-[1.06] mb-8"
            style={{ color: '#0D9488' }}
          >
            Just What Works.
          </h2>

          <p
            className="hero-item font-sans text-lg leading-relaxed max-w-md mb-8"
            style={{ color: 'rgba(248,247,244,0.65)' }}
          >
            Practical AI education for business owners who want real results.
          </p>

          <div className="hero-item">
            <EmailForm dark id="subscribe" />
            <p className="font-sans text-sm mt-3" style={{ color: 'rgba(248,247,244,0.35)' }}>
              Free weekly insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ── THREE CARDS — off-white ─────────────────────────────── */}
      <section ref={cardsRef} className="py-24 px-6 md:px-12 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-navy mb-3 leading-tight">
              Why AI Matters for Your Business
            </h2>
            <p className="font-sans text-base md:text-lg text-slate max-w-xl leading-relaxed">
              AI isn't just for tech giants. Here's how it creates real value for small and mid-sized companies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((card) => (
              <div
                key={card.title}
                className="feature-card rounded-4xl border border-light-slate/50 bg-white p-8"
              >
                <div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: 'rgba(13,148,136,0.1)' }}
                >
                  <card.Icon size={20} color="#0D9488" />
                </div>
                <h3 className="font-display font-bold text-lg text-navy mb-3 leading-snug">
                  {card.title}
                </h3>
                <p className="font-sans text-sm text-slate leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN — navy ────────────────────────────── */}
      <section
        ref={ctaRef}
        className="noise-overlay py-24 px-6 md:px-12"
        style={{ backgroundColor: '#0F1F3D' }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="cta-item font-display font-bold text-3xl md:text-4xl text-off-white mb-3 leading-tight">
            What you'll learn
          </h2>
          <p
            className="cta-item font-sans text-base leading-relaxed mb-10 max-w-lg"
            style={{ color: 'rgba(248,247,244,0.55)' }}
          >
            Every week we break down one actionable AI concept you can apply to your business right away.
          </p>

          <ul className="cta-item grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {learnItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check size={15} color="#0D9488" className="mt-0.5 shrink-0" />
                <span className="font-sans text-sm" style={{ color: 'rgba(248,247,244,0.7)' }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="cta-item">
            <EmailForm dark />
            <p className="font-sans text-sm mt-3" style={{ color: 'rgba(248,247,244,0.3)' }}>
              Free weekly insights. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOOTER — dark ───────────────────────────────────────── */}
      <Footer />

    </div>
  )
}
