import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiPhone, FiCheckCircle, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp, FaStar, FaAward } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { useBooking } from '../../context/BookingContext'

const trust = ['Verified Professionals','Same-day Service','100% Satisfaction']

function MedicalIllustration() {
  return (
    <div className="relative w-full aspect-square max-w-[520px] mx-auto select-none" aria-hidden="true">
      {/* Outer rotating ring */}
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-0 rounded-full border border-dashed opacity-20"
        style={{ borderColor: '#60A5FA' }} />
      <motion.div animate={{ rotate: -360 }} transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-8 rounded-full border border-dashed opacity-15"
        style={{ borderColor: '#34D399' }} />

      {/* Center glow orb */}
      <motion.div
        animate={{ scale: [1, 1.06, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute inset-16 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(15,108,189,0.35) 0%, rgba(0,184,148,0.15) 60%, transparent 80%)' }}
      />

      {/* Main card */}
      <motion.div
        animate={{ y: [-6, 6, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-[18%] rounded-[28px] overflow-hidden"
        style={{ background: 'linear-gradient(145deg, rgba(15,108,189,0.18), rgba(0,184,148,0.12))', backdropFilter: 'blur(20px)', border: '1px solid rgba(96,165,250,0.25)', boxShadow: '0 24px 64px rgba(15,108,189,0.3), inset 0 1px 0 rgba(255,255,255,0.15)' }}
      >
        {/* Gradient strip */}
        <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #0F6CBD, #00B894)' }} />
        <div className="p-5 flex flex-col items-center justify-center h-full gap-4">
          {/* Doctor SVG illustration */}
          <svg viewBox="0 0 120 130" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-28">
            {/* Head */}
            <circle cx="60" cy="32" r="22" fill="url(#skinGrad)" />
            {/* Hair */}
            <path d="M38 28 C38 14 82 14 82 28 L82 20 C82 6 38 6 38 20 Z" fill="#1a2d5a" />
            {/* Face features */}
            <ellipse cx="52" cy="30" rx="2.5" ry="3" fill="#1E293B" />
            <ellipse cx="68" cy="30" rx="2.5" ry="3" fill="#1E293B" />
            <circle cx="52.8" cy="29" r="1" fill="white" />
            <circle cx="68.8" cy="29" r="1" fill="white" />
            <path d="M53 40 Q60 45 67 40" stroke="#E17055" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            {/* Neck */}
            <rect x="54" y="52" width="12" height="12" rx="4" fill="url(#skinGrad)" />
            {/* White coat */}
            <path d="M28 110 L32 64 Q42 56 60 58 Q78 56 88 64 L92 110 Z" fill="white" />
            <path d="M60 58 L55 78 L60 86 L65 78 Z" fill="#0F6CBD" opacity="0.5" />
            {/* Blue shirt underneath */}
            <path d="M34 68 Q42 62 60 62 Q78 62 86 68 L88 110 L32 110 Z" fill="url(#shirtGrad)" />
            <path d="M60 62 L55 76 L60 84 L65 76 Z" fill="#0A5299" />
            {/* Collar */}
            <path d="M48 64 L60 72 L72 64" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
            {/* Stethoscope */}
            <path d="M44 70 Q38 80 38 92 Q38 100 46 102 Q54 104 56 96 Q58 88 52 84" stroke="#0F6CBD" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="44" cy="70" r="4" fill="none" stroke="#0F6CBD" strokeWidth="2" />
            <circle cx="43" cy="70" r="1.5" fill="#0F6CBD" />
            <circle cx="56" cy="96" r="5" fill="#0F6CBD" opacity="0.7" />
            <circle cx="56" cy="96" r="2.5" fill="#0F6CBD" />
            {/* Pocket + badge */}
            <rect x="66" y="72" width="14" height="10" rx="2" fill="rgba(15,108,189,0.15)" stroke="#0F6CBD" strokeWidth="0.8" />
            <text x="73" y="80" textAnchor="middle" fontSize="5" fill="#0F6CBD" fontWeight="bold">MD</text>
            <defs>
              <linearGradient id="skinGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#FDDCB5" /><stop offset="100%" stopColor="#F5C18A" />
              </linearGradient>
              <linearGradient id="shirtGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0F6CBD" /><stop offset="100%" stopColor="#0A5299" />
              </linearGradient>
            </defs>
          </svg>
          <div className="text-center">
            <p className="text-white font-bold text-sm">Dr. Anika Desai</p>
            <p className="text-white/60 text-xs">Senior Physiotherapist</p>
            <div className="flex justify-center gap-0.5 mt-1">
              {[1,2,3,4,5].map(s => <FaStar key={s} size={10} className="text-yellow-400" />)}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating orbit badges */}
      {[
        { angle: 15,  radius: 47, content: '✅', label: 'Verified', delay: 0 },
        { angle: 155, radius: 47, content: '⚡', label: 'Same-day', delay: 0.5 },
        { angle: 255, radius: 45, content: '🏆', label: '4.9★ Rated', delay: 1 },
      ].map((b, i) => {
        const rad = (b.angle * Math.PI) / 180
        const x = 50 + b.radius * Math.cos(rad)
        const y = 50 + b.radius * Math.sin(rad)
        return (
          <motion.div key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 + b.delay, type: 'spring', stiffness: 200 }}
            style={{ position: 'absolute', left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
          >
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 3 + i, repeat: Infinity, ease: 'easeInOut', delay: b.delay }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-white text-xs font-bold whitespace-nowrap"
              style={{ background: 'rgba(4,26,46,0.75)', backdropFilter: 'blur(12px)', border: '1px solid rgba(96,165,250,0.25)', boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}
            >
              <span>{b.content}</span> {b.label}
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}

export default function Hero() {
  const { openBooking } = useBooking()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y       = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50" aria-label="Welcome to Curexhealth">
      {/* Light, healthcare-themed background */}
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Soft healthcare colors - blues and greens */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          className="absolute -bottom-40 -right-32 w-[700px] h-[700px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)' }}
        />
        {/* Subtle medical cross patterns */}
        {[{ x:'9%',y:'18%',s:18,d:0 },{ x:'87%',y:'14%',s:14,d:1.5 },{ x:'76%',y:'72%',s:16,d:3 }].map((c,i) => (
          <motion.div key={i}
            animate={{ y: [-10, 10, -10], opacity: [0.05, 0.15, 0.05] }}
            transition={{ duration: 6+i, repeat: Infinity, ease: 'easeInOut', delay: c.d }}
            className="absolute" style={{ left: c.x, top: c.y }}>
            <svg width={c.s} height={c.s} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3v18M3 12h18" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity }} className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 lg:pt-12 lg:pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left ─────────────────────────────────── */}
          <div className="flex flex-col items-start">
            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-6 sm:mb-7 bg-blue-100 border border-blue-200"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse flex-shrink-0" aria-hidden="true" />
              <span className="text-blue-700 font-semibold text-xs sm:text-sm">Mumbai's #1 Premium Home Healthcare</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.6rem] sm:text-5xl lg:text-[3.8rem] xl:text-[4.2rem] font-extrabold text-gray-900 leading-[1.06] mb-5 sm:mb-6 font-display"
            >
              Expert Care,
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Delivered Home</span>
              <br />
              <span className="text-gray-800">in Mumbai</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed mb-7 sm:mb-8 max-w-lg"
            >
              Certified physiotherapists, nurses, and healthcare specialists visit you at home.
              World-class medical care — without the hospital hassle.
            </motion.p>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-x-4 gap-y-2 mb-7 sm:mb-8"
            >
              {trust.map(t => (
                <div key={t} className="flex items-center gap-1.5 text-gray-700 text-sm font-medium">
                  <FiCheckCircle size={14} className="text-green-600 flex-shrink-0" aria-hidden="true" />
                  {t}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="flex flex-col xs:flex-row gap-3 sm:gap-4 mb-7 w-full xs:w-auto"
            >
              <motion.button
                onClick={openBooking}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl w-full xs:w-auto justify-center"
                aria-label="Book a home healthcare visit"
              >
                <FiPhone size={19} aria-hidden="true" />
                Book Home Visit
              </motion.button>
              <motion.a
                href="https://wa.me/918762697832"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost text-base sm:text-lg px-7 sm:px-8 py-3.5 sm:py-4 rounded-2xl flex items-center gap-2.5 w-full xs:w-auto justify-center"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp size={21} className="text-[#25D366]" aria-hidden="true" />
                WhatsApp Us
              </motion.a>
            </motion.div>

            {/* Emergency */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex items-center gap-3 p-3.5 rounded-2xl mb-7 w-full max-w-md"
              style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.22)' }}
              role="note"
              aria-label="Emergency contact information"
            >
              <span className="text-lg flex-shrink-0" aria-hidden="true">🚨</span>
              <p className="text-red-300/90 text-sm leading-snug">
                <strong className="text-red-300">Emergency: </strong>
                <a href="tel:+918762697832" className="font-bold hover:underline">+91 98765 43210</a>
                {' '}— dispatched within 1–2 hours
              </p>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              className="flex items-center gap-5 flex-wrap"
            >
              <div className="flex items-center gap-2.5">
                <div className="flex -space-x-2.5" aria-label="5 patient avatars">
                  {['PS','RM','AK','SD','MJ'].map((init, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white text-[9px] font-extrabold flex-shrink-0"
                      style={{ borderColor: '#020D1A', background: ['#0F6CBD','#00B894','#5B4FCF','#E17055','#FF7675'][i] }}
                      aria-hidden="true"
                    >
                      {init}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5" aria-label="5 star rating" role="img">
                    {[1,2,3,4,5].map(s => <FaStar key={s} size={11} className="text-yellow-400" aria-hidden="true" />)}
                  </div>
                  <p className="text-white/40 text-xs mt-0.5">10,000+ families trust us</p>
                </div>
              </div>
              <div className="h-6 w-px bg-white/10" aria-hidden="true" />
              <div className="flex items-center gap-2">
                <FaAward size={15} className="text-[#FCD34D]" aria-hidden="true" />
                <p className="text-white/55 text-xs font-medium">NABH Certified</p>
              </div>
            </motion.div>
          </div>

          {/* ── Right: illustration (desktop only) ──── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
            aria-hidden="true"
          >
            <MedicalIllustration />
          </motion.div>
        </div>

        {/* ── Services quick strip ──────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 lg:mt-10 rounded-2xl px-4 sm:px-5 py-3 sm:py-3.5 flex flex-wrap gap-1.5 sm:gap-2 items-center bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm"
          aria-label="Quick links to our services"
        >
          <span className="text-gray-500 text-xs font-bold uppercase tracking-widest hidden sm:block mr-1">
            Services:
          </span>
          {[
            ['🏃','Physiotherapy','/services/home-physiotherapy'],
            ['👩‍⚕️','Nursing','/services/nursing-care'],
            ['👴','Elder Care','/services/elder-care'],
            ['🏥','Post Surgery','/services/post-surgery-rehabilitation'],
            ['🧠','Stroke Rehab','/services/stroke-rehabilitation'],
            ['🏅','Sports Injury','/services/sports-injury-rehabilitation'],
            ['🦴','Ortho Rehab','/services/orthopedic-rehabilitation'],
          ].map(([e, n, to]) => (
            <Link
              key={to}
              to={to}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-gray-600 text-xs font-semibold hover:bg-blue-50 hover:text-blue-700 transition-all duration-150"
            >
              <span aria-hidden="true">{e}</span>
              <span>{n}</span>
            </Link>
          ))}
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none bg-gradient-to-t from-white via-white/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  )
}
