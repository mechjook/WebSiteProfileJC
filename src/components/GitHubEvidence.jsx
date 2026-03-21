import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'
import SectionTitle from './SectionTitle'
import { GITHUB_REPOS, CONTACT } from '../data/content'

function GitHubIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" />
    </svg>
  )
}

export default function GitHubEvidence() {
  return (
    <SectionWrapper id="github" className="relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        <SectionTitle
          title="Evidencia Técnica"
          subtitle="Repositorios reales que respaldan mi experiencia"
        />

        <div className="grid md:grid-cols-2 gap-6">
          {GITHUB_REPOS.map((repo, i) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative card-base p-6 hover:border-accent-400/20 transition-all duration-300 group flex flex-col overflow-hidden hover:shadow-[0_0_20px_rgba(34,211,238,0.08),0_0_40px_rgba(34,211,238,0.04)]"
            >
              {/* Gradient top-border accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center gap-3 mb-3">
                <GitHubIcon className="w-5 h-5 text-accent-400 shrink-0" />
                <a
                  href={`https://github.com/mechjook/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold text-white group-hover:text-accent-400 transition-colors font-mono truncate"
                >
                  {repo.name}
                </a>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
                {repo.description}
              </p>

              <div className="flex flex-wrap gap-2 items-center">
                {repo.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-xs font-medium text-accent-400/80 bg-accent-400/5 border border-accent-400/10 rounded-md transition-transform duration-200 hover:scale-105"
                  >
                    {tech}
                  </span>
                ))}
                {repo.link && (
                  <a
                    href={repo.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto px-3 py-1 text-xs font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-md hover:bg-emerald-400/20 transition-all duration-200"
                  >
                    Ver Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA to full GitHub profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: GITHUB_REPOS.length * 0.1 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={CONTACT.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 border border-accent-400/30 text-accent-400 rounded-xl font-medium text-sm hover:bg-accent-400/10 hover:border-accent-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300"
          >
            <GitHubIcon className="w-5 h-5" />
            Ver perfil completo
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
