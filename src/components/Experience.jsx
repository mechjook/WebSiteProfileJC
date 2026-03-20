import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { EXPERIENCE_AREAS } from '../data/content'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        title="Enfoque Profesional"
        subtitle="Áreas donde conecto automatización, datos y lógica de negocio"
      />

      <div className="grid md:grid-cols-2 gap-6">
        {EXPERIENCE_AREAS.map((item, i) => (
          <motion.div
            key={item.area}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative card-base p-6 overflow-hidden hover:border-accent-400/20 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(34,211,238,0.08),0_0_40px_rgba(34,211,238,0.04)]"
          >
            {/* Numbered indicator top-right */}
            <span className="absolute top-4 right-4 text-xs font-mono text-accent-400/20 group-hover:text-accent-400/35 transition-colors duration-300">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="flex items-start gap-4">
              {/* Left gradient bar — brightens on hover */}
              <div className="flex-shrink-0 w-1 h-full min-h-[60px] rounded-full bg-gradient-to-b from-accent-400/70 to-accent-400/10 group-hover:from-accent-400 group-hover:to-accent-400/30 transition-all duration-500" />

              <div>
                {/* Title with pulse dot indicator */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400/40 group-hover:animate-ping group-hover:bg-accent-400/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400/70 group-hover:bg-accent-400 transition-colors duration-300" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{item.area}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
