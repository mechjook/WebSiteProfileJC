export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-16 text-center">
      <h2 className="text-3xl md:text-4xl font-bold font-heading text-white mb-4">{title}</h2>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-6 mx-auto w-20 h-0.5 bg-gradient-to-r from-transparent via-accent-400 to-transparent" />
    </div>
  )
}
