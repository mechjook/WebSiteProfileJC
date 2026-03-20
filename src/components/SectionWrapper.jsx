import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function SectionWrapper({ id, children, className = '' }) {
  const { ref, isInView } = useScrollAnimation()

  return (
    <section id={id} ref={ref} className={`section-padding ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  )
}
