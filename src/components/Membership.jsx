import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const tiers = [
  {
    name: 'Weekly Insights',
    label: 'Essential',
    price: 'Free',
    priceNote: 'forever',
    desc: 'One practical AI concept per week — no hype, no fluff, just what works.',
    features: [
      'Weekly AI breakdown',
      'Real-world case studies',
      'Actionable tactics',
      'No vendor pitches',
    ],
    cta: 'Subscribe free',
    ctaHref: '#newsletter',
    featured: false,
  },
  {
    name: 'Strategy Session',
    label: 'Performance',
    price: '90 min',
    priceNote: 'focused session',
    desc: 'A working session to identify your highest-ROI AI opportunities and build a prioritized roadmap.',
    features: [
      'Workflow audit',
      'Top 3 AI use cases ranked',
      'Implementation roadmap',
      'Honest ROI estimates',
    ],
    cta: 'Book a strategy call',
    ctaHref: '#cta',
    featured: true,
  },
  {
    name: 'Full Engagement',
    label: 'Enterprise',
    price: 'Custom',
    priceNote: 'scoped to your needs',
    desc: 'Strategy, implementation, and training — embedded with your team from start to ownership.',
    features: [
      'Everything in Strategy Session',
      'Full implementation build',
      'Team training & handoff',
      'Measured ROI outcomes',
    ],
    cta: 'Get in touch',
    ctaHref: '#cta',
    featured: false,
  },
]

export default function Membership() {
  const sectionRef = useRef(null)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.tier-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="about" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <span className="font-mono text-xs font-medium tracking-widest uppercase text-teal">
            Get started
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mt-3 leading-tight max-w-xl">
            Choose your starting point.
          </h2>
          <p className="font-sans text-base md:text-lg text-slate mt-4 max-w-lg leading-relaxed">
            No commitment required to start. Most clients begin with the newsletter
            and reach out when they're ready to move.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`tier-card rounded-4xl flex flex-col p-8 transition-transform duration-300 ${
                tier.featured
                  ? 'bg-navy text-off-white ring-2 ring-teal/30 md:scale-[1.03]'
                  : 'bg-white border border-light-slate/60 text-navy'
              }`}
            >
              <div className="mb-6">
                <span
                  className="font-mono text-[11px] font-medium tracking-widest uppercase"
                  style={{ color: '#0D9488' }}
                >
                  {tier.label}
                </span>
                <h3
                  className="font-display font-bold text-xl mt-2"
                  style={{ color: tier.featured ? '#F8F7F4' : '#0F1F3D' }}
                >
                  {tier.name}
                </h3>
                <div className="flex items-baseline gap-1.5 mt-3">
                  <span
                    className="font-display font-bold text-3xl"
                    style={{ color: tier.featured ? '#F8F7F4' : '#0F1F3D' }}
                  >
                    {tier.price}
                  </span>
                  <span
                    className="font-sans text-sm"
                    style={{ color: tier.featured ? 'rgba(248,247,244,0.5)' : '#475569' }}
                  >
                    {tier.priceNote}
                  </span>
                </div>
                <p
                  className="font-sans text-sm leading-relaxed mt-3"
                  style={{ color: tier.featured ? 'rgba(248,247,244,0.65)' : '#475569' }}
                >
                  {tier.desc}
                </p>
              </div>

              <ul className="flex-1 flex flex-col gap-2.5 mb-8">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check
                      size={15}
                      className="mt-0.5 shrink-0"
                      style={{ color: '#0D9488' }}
                    />
                    <span
                      className="font-sans text-sm"
                      style={{ color: tier.featured ? 'rgba(248,247,244,0.8)' : '#475569' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Newsletter tier gets email input */}
              {tier.name === 'Weekly Insights' ? (
                <div id="newsletter">
                  {submitted ? (
                    <div className="rounded-2xl border border-teal/30 bg-teal/5 px-4 py-3 text-center">
                      <span className="font-sans text-sm font-medium text-teal">
                        You're in. First issue coming soon.
                      </span>
                    </div>
                  ) : (
                    <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-2xl border border-light-slate/80 bg-off-white font-sans text-sm text-navy placeholder:text-slate/50 focus:outline-none focus:border-teal/60 transition-colors"
                      />
                      <button
                        type="submit"
                        className="btn-magnetic w-full px-5 py-3 rounded-2xl font-sans font-semibold text-sm text-white"
                        style={{ backgroundColor: '#0D9488' }}
                      >
                        <span className="btn-bg rounded-2xl" style={{ backgroundColor: '#0b7c72' }} />
                        <span>{tier.cta}</span>
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                <a
                  href={tier.ctaHref}
                  className={`btn-magnetic flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-2xl font-sans font-semibold text-sm ${
                    tier.featured ? 'text-navy bg-off-white' : 'text-navy border border-light-slate/80 bg-transparent'
                  }`}
                >
                  {tier.featured && (
                    <span className="btn-bg rounded-2xl bg-light-slate/40" />
                  )}
                  <span>{tier.cta}</span>
                  <ArrowRight size={14} className="relative z-10" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
