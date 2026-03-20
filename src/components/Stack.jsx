import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { STACK } from '../data/content'

const categoryColors = {
  'Automatización & RPA': '#06b6d4',
  'Desarrollo': '#22d3ee',
  'Datos & Bases de datos': '#67e8f9',
  'Archivos & Procesamiento': '#a5f3fc',
  'Herramientas & DevOps': '#0891b2',
  'Integración': '#0e7490',
}

export default function Stack() {
  const categories = Object.entries(STACK)

  return (
    <SectionWrapper id="stack" className="relative overflow-hidden">
      {/* Animated background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
        <motion.div
          className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.04) 0%, transparent 70%)' }}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Stack Tecnológico"
          subtitle="Ecosistema de herramientas y tecnologías con las que construyo soluciones"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(([category, items], catIdx) => {
            const color = categoryColors[category] || '#06b6d4'

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
              >
                <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <motion.span
                    className="inline-block w-2.5 h-2.5 rotate-45 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: color }}
                    initial={{ scale: 0, rotate: 45 }}
                    whileInView={{ scale: 1, rotate: 45 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: catIdx * 0.1 + 0.2 }}
                  />
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, itemIdx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: catIdx * 0.1 + itemIdx * 0.05,
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 0 12px 2px rgba(6,182,212,0.15)',
                      }}
                      className="px-3 py-1.5 text-sm text-gray-300 bg-navy-800/80 border border-navy-600/40 rounded-lg hover:border-accent-400/30 hover:text-white transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
