import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HERO } from '../data/content'

export default function Hero() {
  const [currentSubtitle, setCurrentSubtitle] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSubtitle((prev) => (prev + 1) % HERO.subtitles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle, #38bdf8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.04, 0.08, 0.04],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-500 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600 rounded-full blur-[120px]"
        />
      </div>

      {/* Horizontal accent lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/20 to-transparent" />
      <motion.div
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-400/10 to-transparent"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-accent-400/20 bg-accent-400/5 text-accent-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent-400 animate-pulse" />
            Disponible para nuevos desafíos
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
        >
          {HERO.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl text-accent-400 font-medium mb-8"
        >
          {HERO.title}
        </motion.p>

        {/* Typing cycle subtitles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-10 flex items-center justify-center mb-10"
        >
          <div className="relative flex items-center gap-2">
            <span className="text-accent-400/60 font-mono text-sm select-none">
              {'> '}
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={currentSubtitle}
                initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="text-gray-300 font-mono text-sm sm:text-base tracking-wide"
              >
                {HERO.subtitles[currentSubtitle]}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: 'steps(2)' }}
              className="inline-block w-[2px] h-5 bg-accent-400 ml-0.5"
            />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4 font-light italic"
        >
          &ldquo;{HERO.tagline}&rdquo;
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12"
        >
          {HERO.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-400 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20"
          >
            Conversemos
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-navy-600 hover:border-accent-400/40 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/5"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-900 to-transparent" />
    </section>
  )
}
