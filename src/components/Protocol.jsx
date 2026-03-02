import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// SVG animation 1 — rotating concentric circles
function ConcentricAnim() {
  return (
    <svg width="160" height="160" viewBox="0 0 160 160" fill="none" className="opacity-30">
      <circle cx="80" cy="80" r="70" stroke="#0D9488" strokeWidth="1" strokeDasharray="8 4" />
      <circle cx="80" cy="80" r="50" stroke="#0D9488" strokeWidth="1" strokeDasharray="6 6" />
      <circle cx="80" cy="80" r="30" stroke="#0D9488" strokeWidth="1.5" />
      <circle cx="80" cy="80" r="8" fill="#0D9488" opacity="0.6" />
      <style>{`
        @keyframes spin1 { from { transform: rotate(0deg); } to { transform { rotate(360deg); } } }
        @keyframes spin2 { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
      `}</style>
      <g style={{ transformOrigin: '80px 80px', animation: 'spin1 12s linear infinite' }}>
        <circle cx="80" cy="10" r="4" fill="#0D9488" opacity="0.8" />
      </g>
      <g style={{ transformOrigin: '80px 80px', animation: 'spin2 8s linear infinite' }}>
        <circle cx="80" cy="30" r="3" fill="#0D9488" opacity="0.5" />
      </g>
    </svg>
  )
}

// SVG animation 2 — scanning laser grid
function LaserAnim() {
  const cols = 8
  const rows = 5
  return (
    <div className="relative w-[180px] h-[100px] opacity-30">
      <svg width="180" height="100" viewBox="0 0 180 100" fill="none">
        {Array.from({ length: rows }).map((_, r) =>
          Array.from({ length: cols }).map((_, c) => (
            <circle
              key={`${r}-${c}`}
              cx={12 + c * 22}
              cy={12 + r * 20}
              r="2"
              fill="#0D9488"
              opacity="0.4"
            />
          ))
        )}
      </svg>
      <div
        className="absolute inset-y-0 w-8 laser-scan"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(13,148,136,0.6), transparent)',
          left: 0,
        }}
      />
    </div>
  )
}

// SVG animation 3 — EKG waveform
function EKGAnim() {
  const path = 'M0,50 L20,50 L30,20 L40,80 L50,50 L70,50 L80,20 L90,80 L100,50 L120,50 L130,20 L140,80 L150,50 L180,50'
  return (
    <svg width="180" height="100" viewBox="0 0 180 100" fill="none" className="opacity-40">
      <path
        d={path}
        stroke="#0D9488"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="ekg-path"
        style={{ strokeDasharray: '600', strokeDashoffset: '600' }}
      />
    </svg>
  )
}

const cards = [
  {
    num: '01',
    title: 'Diagnose',
    desc: 'Map your workflows. Find where AI creates measurable ROI. You get a ranked shortlist of high-impact use cases — not a 40-page strategy deck.',
    Anim: ConcentricAnim,
  },
  {
    num: '02',
    title: 'Build',
    desc: 'Implement with your team embedded, not handed off. Real tools, real workflows, tested in your environment before we leave.',
    Anim: LaserAnim,
  },
  {
    num: '03',
    title: 'Transfer',
    desc: 'Train your people to run it independently. Every engagement ends with your team fully capable — and Damina made unnecessary.',
    Anim: EKGAnim,
  },
]

export default function Protocol() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        '.protocol-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )

      // Stacking scroll interaction
      cardsRef.current.forEach((card, i) => {
        if (!card || i === 0) return

        ScrollTrigger.create({
          trigger: card,
          start: 'top 80%',
          onEnter: () => {
            const prev = cardsRef.current[i - 1]
            if (prev) {
              gsap.to(prev, {
                scale: 0.92,
                opacity: 0.45,
                filter: 'blur(4px)',
                duration: 0.5,
                ease: 'power2.inOut',
              })
            }
          },
          onLeaveBack: () => {
            const prev = cardsRef.current[i - 1]
            if (prev) {
              gsap.to(prev, {
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)',
                duration: 0.4,
                ease: 'power2.inOut',
              })
            }
          },
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="process" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 bg-off-white">
      <div className="max-w-6xl mx-auto">
        <div className="protocol-header mb-16">
          <span className="font-mono text-xs font-medium tracking-widest uppercase text-teal">
            How we work
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mt-3 leading-tight max-w-lg">
            Three steps. One outcome: results.
          </h2>
        </div>

        <div className="flex flex-col gap-6">
          {cards.map((card, i) => (
            <div
              key={card.num}
              ref={(el) => (cardsRef.current[i] = el)}
              className="protocol-card rounded-4xl border border-light-slate/60 bg-white overflow-hidden"
              style={{ transformOrigin: 'top center', willChange: 'transform, opacity, filter' }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-10 md:p-14">
                {/* Left: number + text */}
                <div className="flex-1">
                  <span className="font-mono text-xs font-medium tracking-widest uppercase text-teal">
                    {card.num}
                  </span>
                  <h3 className="font-display font-bold text-3xl md:text-4xl text-navy mt-3 mb-4">
                    {card.title}
                  </h3>
                  <p className="font-sans text-base md:text-lg text-slate leading-relaxed max-w-md">
                    {card.desc}
                  </p>
                </div>

                {/* Right: animation */}
                <div className="flex items-center justify-center w-full md:w-auto md:min-w-[200px]">
                  <card.Anim />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
