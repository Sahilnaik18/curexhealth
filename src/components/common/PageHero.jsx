import { motion } from 'framer-motion'
import { useBooking } from '../../context/BookingContext'
import { FiPhone } from 'react-icons/fi'

export default function PageHero({ badge, title, highlight, subtitle, dark = false, showCTA = false }) {
  const { openBooking } = useBooking()

  return (
    <section className={`relative py-16 lg:py-24 overflow-hidden ${dark ? '' : 'bg-gradient-to-br from-[#E8F3FC] via-white to-[#E0F7F3]'}`}
      aria-label="Page header">
      {/* Background */}
      {dark ? (
        <div className="absolute inset-0" style={{ background:'linear-gradient(160deg,#020D1A 0%,#041A2E 50%,#020D1A 100%)' }} aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background:'radial-gradient(circle,rgba(15,108,189,0.25) 0%,transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full" style={{ background:'radial-gradient(circle,rgba(0,184,148,0.15) 0%,transparent 70%)' }} />
          <div className="absolute inset-0 dot-grid-white opacity-20" />
        </div>
      ) : (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background:'rgba(15,108,189,0.07)' }} />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl" style={{ background:'rgba(0,184,148,0.06)' }} />
          <div className="absolute inset-0 dot-grid opacity-40" />
        </div>
      )}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, ease:[0.22,1,0.36,1] }}>
          {badge && (
            <motion.span initial={{ opacity:0, scale:0.9 }} animate={{ opacity:1, scale:1 }} transition={{ delay:0.1 }}
              className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6 ${
                dark ? 'bg-white/12 text-white/85 border border-white/20' : 'bg-white border border-[#0F6CBD]/15 shadow-sm text-[#0F6CBD]'
              }`}>
              {badge}
            </motion.span>
          )}

          <h1 className={`text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold leading-tight mb-5 font-display text-balance ${dark ? 'text-white' : 'text-[#0F172A]'}`}>
            {title}
            {highlight && (
              <span className={`block mt-2 ${dark ? 'gradient-text-hero' : 'text-[#0F6CBD]'}`}>{highlight}</span>
            )}
          </h1>

          {subtitle && (
            <p className={`text-xl leading-relaxed max-w-2xl mx-auto ${dark ? 'text-white/65' : 'text-[#64748B]'} ${showCTA ? 'mb-8' : ''}`}>
              {subtitle}
            </p>
          )}

          {showCTA && (
            <motion.button onClick={openBooking} whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              className="btn-primary text-base px-7 py-3.5 rounded-2xl mx-auto">
              <FiPhone size={18}/> Book Home Visit
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  )
}
