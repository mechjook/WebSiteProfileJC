import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import Icon from './Icons'
import { IMPACT_METRICS } from '../data/content'

export default function Impact() {
  return (
    <SectionWrapper id="impact">
      <SectionTitle
        title="Impacto y Resultados"
        subtitle="Evidencia concreta de cómo mis soluciones generan valor"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMPACT_METRICS.map((item, i) => (
          <motion.div
            key={item.metric}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative card-base p-6 overflow-hidden hover:border-accent-400/20 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,211,238,0.08),0_0_40px_rgba(34,211,238,0.04)]"
          >
            {/* Gradient top-border accent on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Numbered indicator */}
            <span className="absolute top-4 right-4 text-xs font-mono text-accent-400/20 group-hover:text-accent-400/35 transition-colors duration-300">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="w-12 h-12 rounded-xl bg-accent-400/10 flex items-center justify-center mb-4 group-hover:bg-accent-400/15 transition-colors">
              <Icon name={item.icon} className="w-6 h-6 text-accent-400" />
            </div>

            <p className="text-lg font-bold text-white mb-2">{item.metric}</p>
            <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
