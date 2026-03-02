import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Card 1 — Diagnostic Shuffler (Strategy)
function ShufflerCard() {
  const labels = [
    { id: 1, text: 'Customer ops automation', score: '94' },
    { id: 2, text: 'Lead qualification AI', score: '87' },
    { id: 3, text: 'Revenue forecasting', score: '81' },
  ]
  const [stack, setStack] = useState(labels)

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const next = [...prev]
        next.push(next.shift())
        return next
      })
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const positions = [
    { top: 0, scale: 1, z: 3, opacity: 1 },
    { top: 14, scale: 0.97, z: 2, opacity: 0.8 },
    { top: 26, scale: 0.94, z: 1, opacity: 0.6 },
  ]

  return (
    <div className="rounded-4xl border border-light-slate/60 bg-off-white p-7 shadow-sm flex flex-col h-full min-h-[320px]">
      <div className="mb-4">
        <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-teal">
          01 / Strategy
        </span>
        <h3 className="font-display font-bold text-xl text-navy mt-2 leading-snug">
          AI strategy that prioritizes ROI
        </h3>
        <p className="font-sans text-sm text-slate mt-1.5 leading-relaxed">
          We identify where AI creates real leverage — ranked by business impact.
        </p>
      </div>

      <div className="relative flex-1 mt-4" style={{ minHeight: '140px' }}>
        {stack.map((item, i) => {
          const pos = positions[i]
          return (
            <div
              key={item.id}
              className="absolute left-0 right-0 flex items-center justify-between px-4 py-3.5 rounded-2xl border border-light-slate/80 bg-white"
              style={{
                top: `${pos.top}px`,
                transform: `scale(${pos.scale})`,
                zIndex: pos.z,
                opacity: pos.opacity,
                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transformOrigin: 'top center',
              }}
            >
              <span className="font-sans text-sm font-medium text-navy">{item.text}</span>
              <span className="font-mono text-xs font-medium text-teal">{item.score}%</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Card 2 — Telemetry Typewriter (Implementation)
function TypewriterCard() {
  const messages = [
    '> Analyzing customer service workflows...',
    '> Found: 40% reduction in handling time',
    '> Deploying lead scoring model...',
    '> Integration complete. Live in production.',
    '> ROI confirmed: $180k annualized.',
    '> Handing off to internal team...',
  ]
  const [displayed, setDisplayed] = useState('')
  const [msgIdx, setMsgIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const current = messages[msgIdx]
    if (charIdx < current.length) {
      const t = setTimeout(() => {
        setDisplayed((d) => d + current[charIdx])
        setCharIdx((c) => c + 1)
      }, 38)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setDisplayed('')
        setCharIdx(0)
        setMsgIdx((m) => (m + 1) % messages.length)
      }, 1800)
      return () => clearTimeout(t)
    }
  }, [charIdx, msgIdx])

  return (
    <div className="rounded-4xl border border-light-slate/60 bg-navy p-7 shadow-sm flex flex-col h-full min-h-[320px]">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-teal">
            02 / Implementation
          </span>
          <span className="flex items-center gap-1.5 ml-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-teal pulse-dot" />
            <span className="font-mono text-[10px] text-teal/70 uppercase tracking-wider">Live</span>
          </span>
        </div>
        <h3 className="font-display font-bold text-xl text-off-white leading-snug">
          Implementation that ships
        </h3>
        <p className="font-sans text-sm leading-relaxed mt-1.5" style={{ color: 'rgba(248,247,244,0.6)' }}>
          We build with your team embedded — not handed off when it gets complex.
        </p>
      </div>

      <div className="flex-1 mt-4 rounded-2xl bg-black/30 p-4 border border-white/10">
        <p className="font-mono text-sm leading-relaxed" style={{ color: '#0D9488', minHeight: '3em' }}>
          {displayed}
          <span className="cursor-blink" style={{ color: '#0D9488' }}>█</span>
        </p>
      </div>
    </div>
  )
}

// Card 3 — Cursor Protocol Scheduler (Training)
function SchedulerCard() {
  const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const sessions = [
    { day: 1, label: 'AI sprint' },
    { day: 3, label: 'Data audit' },
    { day: 5, label: 'Deploy review' },
  ]
  const [activeDays, setActiveDays] = useState([])
  const [step, setStep] = useState(0)

  useEffect(() => {
    const steps = [
      () => setActiveDays([1]),
      () => setActiveDays([1, 3]),
      () => setActiveDays([1, 3, 5]),
      () => {},
      () => setActiveDays([]),
    ]
    const delays = [600, 1200, 1800, 3000, 3600]

    const timers = delays.map((delay, i) =>
      setTimeout(() => steps[i]?.(), delay)
    )

    const reset = setTimeout(() => setStep((s) => s + 1), 4200)

    return () => {
      timers.forEach(clearTimeout)
      clearTimeout(reset)
    }
  }, [step])

  return (
    <div className="rounded-4xl border border-light-slate/60 bg-off-white p-7 shadow-sm flex flex-col h-full min-h-[320px]">
      <div className="mb-4">
        <span className="font-mono text-[11px] font-medium tracking-widest uppercase text-teal">
          03 / Training
        </span>
        <h3 className="font-display font-bold text-xl text-navy mt-2 leading-snug">
          Training that sticks
        </h3>
        <p className="font-sans text-sm text-slate mt-1.5 leading-relaxed">
          Your team learns to own the AI advantage — so it doesn't leave when we do.
        </p>
      </div>

      <div className="flex-1 mt-4">
        {/* Day grid */}
        <div className="grid grid-cols-7 gap-1.5 mb-4">
          {days.map((d, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <span className="font-mono text-[10px] text-slate/60 uppercase">{d}</span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-400"
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                  backgroundColor: activeDays.includes(i)
                    ? '#0D9488'
                    : 'rgba(203,213,225,0.3)',
                  transform: activeDays.includes(i) ? 'scale(1.08)' : 'scale(1)',
                }}
              >
                {activeDays.includes(i) && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Session list */}
        <div className="flex flex-col gap-2">
          {sessions.map((s) => (
            <div
              key={s.day}
              className="flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300"
              style={{
                backgroundColor: activeDays.includes(s.day)
                  ? 'rgba(13,148,136,0.08)'
                  : 'transparent',
              }}
            >
              <span
                className="font-mono text-xs font-medium"
                style={{ color: activeDays.includes(s.day) ? '#0D9488' : '#CBD5E1' }}
              >
                {days[s.day]}
              </span>
              <span
                className="font-sans text-sm transition-colors duration-300"
                style={{ color: activeDays.includes(s.day) ? '#0F1F3D' : '#CBD5E1' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.feature-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="strategy" ref={sectionRef} className="py-24 md:py-32 px-6 md:px-16 max-w-6xl mx-auto">
      <div className="mb-14">
        <span className="font-mono text-xs font-medium tracking-widest uppercase text-teal">
          What we do
        </span>
        <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mt-3 leading-tight max-w-xl">
          Three things that make AI actually work.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="feature-card">
          <ShufflerCard />
        </div>
        <div className="feature-card">
          <TypewriterCard />
        </div>
        <div className="feature-card">
          <SchedulerCard />
        </div>
      </div>
    </section>
  )
}
