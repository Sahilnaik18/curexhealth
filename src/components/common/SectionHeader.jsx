import { motion } from 'framer-motion'

export default function SectionHeader({ badge, title, titleHighlight, subtitle, center = true, light = false, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`${center ? 'text-center' : ''} ${className}`}
    >
      {badge && (
        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-5 ${
          light
            ? 'bg-white/15 text-white border border-white/25'
            : 'bg-[#E8F3FC] text-[#0F6CBD]'
        }`}>
          {badge}
        </span>
      )}

      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4 font-display ${
          light ? 'text-white' : 'text-[#0F172A]'
        }`}
      >
        {title}
        {titleHighlight && (
          <span className={`block mt-1 ${light ? 'text-[#34D399]' : 'text-[#0F6CBD]'}`}>
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-lg leading-relaxed max-w-2xl ${center ? 'mx-auto' : ''} ${
          light ? 'text-white/70' : 'text-[#64748B]'
        }`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
