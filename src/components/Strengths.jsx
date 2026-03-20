import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { STRENGTHS } from '../data/content'

export default function Strengths() {
  return (
    <SectionWrapper id="strengths">
      <SectionTitle
        title="Áreas en las que Destaco"
        subtitle="Capacidades técnicas que aporto a cada solución"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {STRENGTHS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative p-5 rounded-xl border border-navy-600/30 hover:border-accent-400/20 bg-navy-800/30 hover:bg-navy-800/50 transition-all duration-300 hover:shadow-[0_0_16px_rgba(34,211,238,0.06)]"
          >
            {/* Left border accent on hover */}
            <div className="absolute left-0 top-3 bottom-3 w-[2px] bg-accent-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <h3 className="text-sm font-semibold text-white mb-1.5 group-hover:text-accent-400 transition-colors flex items-center gap-2">
              {/* Diamond indicator */}
              <span className="inline-block w-1.5 h-1.5 rotate-45 bg-accent-400/50 group-hover:bg-accent-400 transition-colors flex-shrink-0" />
              {item.title}
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed pl-3.5">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
