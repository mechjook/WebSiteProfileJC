import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import Icon from './Icons'
import { VALUE_PROPS } from '../data/content'

export default function ValueProposition() {
  return (
    <SectionWrapper id="value" className="relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Propuesta de Valor"
          subtitle="Convierto complejidad operativa en herramientas útiles, sostenibles y de impacto real"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUE_PROPS.map((prop, i) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative card-base p-6 overflow-hidden hover:border-accent-400/20 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(74,222,128,0.08),0_0_40px_rgba(74,222,128,0.04)]"
            >
              {/* Gradient top-border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Numbered indicator */}
              <span className="absolute top-4 right-4 text-xs font-mono text-accent-400/20 group-hover:text-accent-400/35 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className="w-12 h-12 rounded-xl bg-accent-400/10 flex items-center justify-center mb-4 group-hover:bg-accent-400/15 transition-colors">
                <Icon name={prop.icon} className="w-6 h-6 text-accent-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{prop.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
