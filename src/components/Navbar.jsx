import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#hero')
  const navRef = useRef(null)

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.slice(1))

    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Detect active section
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) {
          current = id
        }
      }
      setActiveSection(`#${current}`)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on click outside
  useEffect(() => {
    if (!mobileOpen) return

    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [mobileOpen])

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!mobileOpen) return

    const handleKey = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }

    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [mobileOpen])

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:bg-accent-500 focus:text-navy-900 focus:rounded-lg focus:font-semibold"
      >
        Saltar al contenido
      </a>

      <nav
        ref={navRef}
        role="navigation"
        aria-label="Navegación principal"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-navy-900/90 backdrop-blur-lg border-b border-navy-600/30 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              className="text-xl font-bold text-white hover:text-accent-400 transition-colors"
              aria-label="Ir al inicio"
            >
              JC<span className="text-accent-400">.</span>
            </a>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeSection === link.href ? 'true' : undefined}
                  className={`px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeSection === link.href
                      ? 'text-accent-400 bg-accent-400/10'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileOpen}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-navy-900/95 backdrop-blur-lg border-b border-navy-600/30 overflow-hidden"
            >
              <div className="px-4 py-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={activeSection === link.href ? 'true' : undefined}
                    className={`block px-3 py-2 rounded-lg transition-colors ${
                      activeSection === link.href
                        ? 'text-accent-400 bg-accent-400/10'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
