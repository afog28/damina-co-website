export default function Footer() {

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
            <a
              href="#subscribe"
              className="btn-magnetic inline-flex items-center px-6 py-3 rounded-full font-sans font-semibold text-sm text-white"
              style={{ backgroundColor: '#0D9488' }}
            >
              <span className="btn-bg rounded-full" style={{ backgroundColor: '#0b7c72' }} />
              <span>Subscribe — It's Free</span>
            </a>
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
