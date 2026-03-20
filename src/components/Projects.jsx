import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { PROJECTS } from '../data/content'

export default function Projects() {
  return (
    <SectionWrapper id="projects" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Proyectos Destacados"
          subtitle="Soluciones diseñadas para resolver problemas reales de operación"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative card-base p-6 hover:border-accent-400/20 transition-all duration-300 group flex flex-col overflow-hidden hover:shadow-[0_0_20px_rgba(34,211,238,0.08),0_0_40px_rgba(34,211,238,0.04)]"
            >
              {/* Gradient top-border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-400/10 flex items-center justify-center text-accent-400 font-mono font-bold text-sm group-hover:bg-accent-400/15 group-hover:shadow-[0_0_12px_rgba(34,211,238,0.15)] transition-all duration-300">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium text-accent-400/80 bg-accent-400/5 border border-accent-400/10 rounded-md transition-transform duration-200 hover:scale-105"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* "Ver más" arrow indicator on hover */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1 text-accent-400/60 text-xs font-medium pointer-events-none">
                <span>Ver más</span>
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
