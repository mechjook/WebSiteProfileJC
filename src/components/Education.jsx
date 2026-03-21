import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { EDUCATION, DIPLOMAS, CERTIFICATIONS } from '../data/content'

const typeLabels = {
  magister: 'Magíster',
  titulo: 'Título Profesional',
}

export default function Education() {
  return (
    <SectionWrapper id="education" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Formación y Certificaciones"
          subtitle="Base académica sólida con especialización en tecnología, sistemas y ciberseguridad"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Educación formal */}
          <div>
            <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Educación
            </h3>
            <div className="space-y-4">
              {EDUCATION.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative card-base p-4 overflow-hidden hover:border-accent-400/20 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="inline-block px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-400/70 bg-accent-400/5 border border-accent-400/10 rounded mb-2">
                    {typeLabels[item.type]}
                  </span>
                  <h4 className="text-sm font-semibold text-white mb-1 leading-snug">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Diplomados */}
          <div>
            <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
              Diplomados
            </h3>
            <div className="space-y-4">
              {DIPLOMAS.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative card-base p-4 overflow-hidden hover:border-accent-400/20 transition-all duration-300 group"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <h4 className="text-sm font-semibold text-white mb-1 leading-snug">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.institution}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certificaciones */}
          <div>
            <h3 className="text-sm font-semibold text-accent-400 uppercase tracking-wider mb-5 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              Certificaciones
            </h3>
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="group flex items-start gap-3 p-3 rounded-xl border border-navy-600/30 bg-navy-800/30 hover:border-accent-400/20 hover:bg-navy-800/50 transition-all duration-300"
                >
                  <span className="flex-shrink-0 mt-0.5 w-1.5 h-1.5 rounded-full bg-accent-400/50 group-hover:bg-accent-400 transition-colors" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors leading-snug">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
