import { useState } from 'react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  return (
    <footer className="noise-overlay" style={{ backgroundColor: '#0A1628' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 pt-16 pb-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="font-display font-bold text-xl tracking-[0.07em] text-off-white mb-2">
              DAMINA
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(248,247,244,0.45)' }}>
              Practical AI education for business owners who want real results.
            </p>
          </div>

          {/* Company */}
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: 'rgba(248,247,244,0.3)' }}>
              Company
            </p>
            <ul className="flex flex-col gap-2.5">
              {['Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-sm link-lift transition-colors duration-200"
                    style={{ color: 'rgba(248,247,244,0.5)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#F8F7F4')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(248,247,244,0.5)')}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-mono text-[11px] font-medium uppercase tracking-widest mb-4"
              style={{ color: 'rgba(248,247,244,0.3)' }}>
              Subscribe to our newsletter
            </p>
            {done ? (
              <p className="font-sans text-sm font-medium text-teal">
                You're in. First issue coming soon.
              </p>
            ) : (
              <form
                onSubmit={(e) => { e.preventDefault(); if (email) setDone(true) }}
                className="flex gap-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-3.5 py-2.5 rounded-full font-sans text-sm text-off-white placeholder:text-off-white/25 bg-white/6 border focus:outline-none focus:border-teal/40 transition-colors"
                  style={{ borderColor: 'rgba(255,255,255,0.1)' }}
                />
                <button
                  type="submit"
                  className="btn-magnetic px-4 py-2.5 rounded-full font-sans font-semibold text-sm text-white shrink-0"
                  style={{ backgroundColor: '#0D9488' }}
                >
                  <span className="btn-bg rounded-full" style={{ backgroundColor: '#0b7c72' }} />
                  <span>Go</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t mb-7" style={{ borderColor: 'rgba(255,255,255,0.07)' }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-sans text-xs" style={{ color: 'rgba(248,247,244,0.28)' }}>
            © 2026 Damina. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: '#22c55e' }} />
            <span className="font-mono text-[11px] uppercase tracking-wider" style={{ color: 'rgba(248,247,244,0.3)' }}>
              System Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  )
}
