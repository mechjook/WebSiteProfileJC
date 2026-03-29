import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { VISION_ITEMS } from '../data/content'

export default function Vision() {
  return (
    <SectionWrapper id="vision" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Visión de Crecimiento"
          subtitle="Hacia dónde se proyecta mi carrera profesional"
        />

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-gray-300 text-center text-lg leading-relaxed">
            Mi trayectoria apunta a roles donde pueda combinar profundidad técnica con visión
            estratégica. Busco construir soluciones que unan negocio, operación y tecnología
            — liderando iniciativas que generen impacto medible y sostenible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VISION_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative p-6 rounded-2xl border border-navy-600/30 bg-gradient-to-b from-navy-800/40 to-transparent hover:border-accent-400/20 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(74,222,128,0.08)] overflow-hidden"
            >
              {/* Top gradient line - animates wider on hover */}
              <div className="absolute top-0 left-6 w-8 h-0.5 bg-gradient-to-r from-accent-400/60 to-transparent group-hover:w-20 transition-all duration-500 ease-out" />

              {/* Numbered indicator - faded, top-right */}
              <span className="absolute top-3 right-4 text-xs font-mono text-navy-500/40 group-hover:text-accent-400/20 transition-colors duration-300 select-none">
                {String(i + 1).padStart(2, '0')}
              </span>

              <h3 className="text-base font-semibold text-white mb-2 mt-2 group-hover:text-accent-400 transition-colors pr-8">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>

              {/* Arrow indicator on hover */}
              <div className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 transition-all duration-300">
                <span className="text-xs text-accent-400/60 font-medium">Explorar</span>
                <svg
                  className="w-3 h-3 text-accent-400/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
