import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { METHODOLOGY_STEPS } from '../data/content'

const pulseVariants = {
  hidden: { scale: 0.8, opacity: 0, boxShadow: '0 0 0px rgba(74,222,128,0)' },
  visible: {
    scale: 1,
    opacity: 1,
    boxShadow: [
      '0 0 0px rgba(74,222,128,0)',
      '0 0 18px rgba(74,222,128,0.35)',
      '0 0 6px rgba(74,222,128,0.12)',
    ],
    transition: {
      scale: { duration: 0.4, ease: 'easeOut' },
      opacity: { duration: 0.4, ease: 'easeOut' },
      boxShadow: { duration: 1.2, ease: 'easeInOut' },
    },
  },
}

export default function Methodology() {
  return (
    <SectionWrapper id="methodology">
      <SectionTitle
        title="Forma de Trabajo"
        subtitle="Un proceso estructurado para construir soluciones que funcionan"
      />

      <div className="relative">
        {/* Vertical line connector with elegant gradient */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px hidden sm:block">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-400/25 to-transparent" />
          <div className="absolute top-[10%] bottom-[10%] left-0 w-px bg-gradient-to-b from-transparent via-accent-400/10 to-transparent blur-[2px]" />
        </div>

        <div className="space-y-8 sm:space-y-12">
          {METHODOLOGY_STEPS.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex items-start gap-6 sm:gap-8 ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Content */}
              <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div
                  className={`card-base p-6 inline-block relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_rgba(74,222,128,0.08)] hover:border-accent-400/20 ${
                    i % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'
                  }`}
                >
                  {/* Gradient accent line at the left edge */}
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-accent-400/40 via-accent-400/15 to-transparent" />

                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>

              {/* Step number with glow pulse on enter */}
              <motion.div
                variants={pulseVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-800 border-2 border-accent-400/30 flex items-center justify-center text-accent-400 font-mono font-bold text-sm z-10 relative"
              >
                {item.step}
              </motion.div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
