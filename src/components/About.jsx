import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { ABOUT } from '../data/content'

const TRAITS = [
  { label: 'Analítico', icon: '{}' },
  { label: 'Estructurado', icon: '//' },
  { label: 'Orientado a impacto', icon: '>_' },
  { label: 'Adaptable', icon: '<>' },
  { label: 'Perfeccionista', icon: '##' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        title="Sobre Mí"
        subtitle="Automatización con criterio, desarrollo con propósito"
      />

      <div className="max-w-3xl mx-auto">
        {/* Accent sidebar with content */}
        <div className="relative pl-6 border-l-2 border-accent-400/20">
          {/* Glowing dot at top of sidebar */}
          <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(56,189,248,0.4)]" />

          <div className="space-y-6">
            {ABOUT.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-gray-300 leading-relaxed text-lg"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Glowing dot at bottom of sidebar */}
          <div className="absolute -left-[5px] bottom-0 w-2 h-2 rounded-full bg-accent-400/40" />
        </div>

        {/* Trait badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {TRAITS.map((trait, i) => (
            <motion.span
              key={trait.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
              className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-navy-600/60 bg-navy-800/50 text-sm text-gray-400 hover:border-accent-400/30 hover:text-gray-300 transition-all duration-300"
            >
              <span className="font-mono text-accent-400/60 text-xs group-hover:text-accent-400/80 transition-colors">
                {trait.icon}
              </span>
              {trait.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
