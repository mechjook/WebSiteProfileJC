import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { EXPERIENCE_TIMELINE } from '../data/content'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionTitle
        title="Experiencia Laboral"
        subtitle="+8 años en entornos corporativos — sector financiero, retail y consumo masivo"
      />

      <div className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-4 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-400/50 via-accent-400/20 to-transparent" />

        <div className="space-y-12">
          {EXPERIENCE_TIMELINE.map((job, i) => (
            <motion.div
              key={job.company + job.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex flex-col lg:flex-row gap-6 ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 top-2">
                <span className="relative flex h-4 w-4">
                  {job.current && (
                    <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400/40 animate-ping" />
                  )}
                  <span
                    className={`relative inline-flex h-4 w-4 rounded-full border-2 ${
                      job.current
                        ? 'bg-accent-400 border-accent-400 shadow-[0_0_12px_rgba(74,222,128,0.5)]'
                        : 'bg-navy-800 border-accent-400/40'
                    }`}
                  />
                </span>
              </div>

              {/* Spacer for layout */}
              <div className="hidden lg:block lg:w-1/2" />

              {/* Card */}
              <div className="ml-12 lg:ml-0 lg:w-1/2 card-base p-6 hover:border-accent-400/20 transition-all duration-300 group hover:shadow-[0_0_20px_rgba(74,222,128,0.08)]">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{job.role}</h3>
                    <p className="text-accent-400 text-sm font-medium">
                      {job.company}
                      {job.client && (
                        <span className="text-gray-400"> — para {job.client}</span>
                      )}
                    </p>
                  </div>
                  {job.current && (
                    <span className="flex-shrink-0 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent-400/10 text-accent-400 border border-accent-400/20">
                      Actual
                    </span>
                  )}
                </div>

                {/* Period & location */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500 mb-3">
                  <span>{job.period}</span>
                  <span>{job.location}</span>
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {job.description}
                </p>

                {/* Responsibilities */}
                <ul className="space-y-1.5 mb-4">
                  {job.responsibilities.map((r, idx) => (
                    <li key={idx} className="text-gray-400 text-xs leading-relaxed flex gap-2">
                      <span className="text-accent-400/60 mt-0.5 flex-shrink-0">&#x25B8;</span>
                      {r}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5">
                  {job.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-400/5 text-accent-400/70 border border-accent-400/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
