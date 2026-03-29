import { motion } from 'framer-motion'
import SectionWrapper, { staggerItem } from './SectionWrapper'
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
        subtitle="Qué tipo de profesional soy y cómo aporto valor"
      />

      <div className="max-w-3xl mx-auto">
        {/* Lead summary */}
        <div className="relative pl-6 border-l-2 border-accent-400/20 mb-10">
          <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(74,222,128,0.4)]" />
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="text-gray-300 leading-relaxed text-lg"
          >
            {ABOUT.summary}
          </motion.p>
          <div className="absolute -left-[5px] bottom-0 w-2 h-2 rounded-full bg-accent-400/40" />
        </div>

        {/* Value highlights grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          {ABOUT.highlights.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              className="card-base p-5 hover:border-accent-400/20 transition-all duration-300 group"
            >
              <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-accent-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trait badges */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
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
