import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import { CONTACT } from '../data/content'

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="relative overflow-hidden">
      {/* Animated gradient background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-accent-500/5 rounded-full blur-3xl" />
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -25, 15, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-72 h-72 bg-accent-400/[0.03] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -25, 20, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.9, 1.12, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-[10%] w-80 h-80 bg-blue-500/[0.03] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 15, -15, 0],
            y: [0, -20, 10, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/[0.02] rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative line with diamond center */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-accent-400/40" />
            <div className="w-2 h-2 rotate-45 bg-accent-400/50 border border-accent-400/30" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-accent-400/40" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {CONTACT.headline}
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">{CONTACT.description}</p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a
              href={`mailto:${CONTACT.links.email}`}
              className="group relative inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-400 text-navy-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/20 animate-[ctaPulse_3s_ease-in-out_infinite]"
            >
              {/* Pulse glow ring */}
              <span className="absolute inset-0 rounded-xl bg-accent-400/20 animate-ping opacity-0 group-hover:opacity-20" style={{ animationDuration: '2s' }} />
              <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Escríbeme</span>
            </a>
            <a
              href={CONTACT.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de LinkedIn"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-navy-600 hover:border-accent-400/40 text-gray-300 hover:text-white font-medium rounded-xl transition-all duration-300 hover:bg-white/5"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Contact details */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <a
              href={`mailto:${CONTACT.links.email}`}
              className="hover:text-accent-400 transition-colors"
            >
              {CONTACT.links.email}
            </a>
            <span className="hidden sm:inline text-navy-600">|</span>
            <a
              href={CONTACT.links.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de GitHub"
              className="hover:text-accent-400 transition-colors"
            >
              GitHub
            </a>
            <span className="hidden sm:inline text-navy-600">|</span>
            <span>{CONTACT.location}</span>
          </div>
        </motion.div>
      </div>

      {/* Tailwind custom animation via inline style tag */}
      <style>{`
        @keyframes ctaPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 211, 238, 0); }
          50% { box-shadow: 0 0 20px 2px rgba(34, 211, 238, 0.15); }
        }
      `}</style>
    </SectionWrapper>
  )
}
