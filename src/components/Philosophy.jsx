import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TEXTURE_IMAGE = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80'

export default function Philosophy() {
  const sectionRef = useRef(null)
  const wordsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax texture
      gsap.to('.philosophy-texture', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Word-by-word reveal for the big statement
      const words = gsap.utils.toArray('.reveal-word')
      gsap.fromTo(
        words,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.06,
          scrollTrigger: {
            trigger: wordsRef.current,
            start: 'top 70%',
          },
        }
      )

      gsap.fromTo(
        '.philosophy-body',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: wordsRef.current,
            start: 'top 60%',
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const bigWords = ['We', 'focus', 'on', 'making', 'ourselves']

  return (
    <section
      id="results"
      ref={sectionRef}
      className="relative noise-overlay overflow-hidden py-28 md:py-40 px-6 md:px-16"
      style={{ backgroundColor: '#0F1F3D' }}
    >
      {/* Parallax texture */}
      <div
        className="philosophy-texture absolute inset-0 opacity-[0.06] bg-cover bg-center"
        style={{ backgroundImage: `url(${TEXTURE_IMAGE})`, top: '-20%', height: '140%' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Small contrast statement */}
        <p className="font-sans text-base md:text-lg font-medium mb-10 opacity-50"
          style={{ color: '#F8F7F4' }}>
          Most AI consultants focus on: the strategy deck.
        </p>

        {/* Big statement with word reveal */}
        <div ref={wordsRef}>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-2">
            {bigWords.map((word, i) => (
              <span
                key={i}
                className="reveal-word font-display font-bold leading-none"
                style={{
                  fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                  color: '#F8F7F4',
                }}
              >
                {word}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-12">
            {['unnecessary.'].map((word, i) => (
              <span
                key={i}
                className="reveal-word font-serif italic leading-none"
                style={{
                  fontSize: 'clamp(3rem, 8vw, 7rem)',
                  color: '#0D9488',
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        {/* Body */}
        <div className="philosophy-body max-w-2xl border-l-2 border-teal/40 pl-6">
          <p className="font-sans text-base md:text-lg leading-relaxed"
            style={{ color: 'rgba(248,247,244,0.65)' }}>
            The goal of every engagement is your independence. We embed with your
            team, build real capability, and transfer ownership. The result should
            be a business that can sustain — and extend — its AI advantage without us.
          </p>
        </div>
      </div>
    </section>
  )
}
