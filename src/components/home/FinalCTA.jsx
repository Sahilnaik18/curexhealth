import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPhone, FiArrowRight, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaStar } from 'react-icons/fa6'
import { useBooking } from '../../context/BookingContext'

const trust = ['100% Verified','Same-day Service','4.9★ Rated','50+ Areas','Satisfaction Guarantee']

export default function FinalCTA() {
  const { openBooking } = useBooking()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} className="relative py-24 lg:py-36 overflow-hidden" aria-label="Final booking CTA">
      {/* Parallax bg */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background:'linear-gradient(160deg,#020D1A 0%,#041A2E 50%,#020D1A 100%)' }} />
        <motion.div animate={{ scale:[1,1.12,1], opacity:[0.3,0.5,0.3] }} transition={{ duration:10, repeat:Infinity }}
          className="absolute top-0 left-1/3 w-[700px] h-[700px] rounded-full"
          style={{ background:'radial-gradient(circle,rgba(15,108,189,0.35) 0%,transparent 70%)' }} />
        <motion.div animate={{ scale:[1,1.18,1], opacity:[0.2,0.38,0.2] }} transition={{ duration:13, repeat:Infinity, delay:4 }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{ background:'radial-gradient(circle,rgba(0,184,148,0.25) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 dot-grid-white opacity-20" />
        {/* Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full opacity-10"
          style={{ background:'linear-gradient(to bottom,transparent,rgba(96,165,250,0.8),transparent)' }} />
      </motion.div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity:0, y:32 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }}>
          {/* Live pill */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7"
            style={{ background:'rgba(0,184,148,0.15)', border:'1px solid rgba(52,211,153,0.35)' }}>
            <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />
            <span className="text-[#34D399] font-semibold text-sm">Available Today in Mumbai — Book in 60 Seconds</span>
          </div>

          {/* Big headline */}
          <h2 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-extrabold text-white mb-6 font-display leading-[1.05] text-balance">
            Your Health Deserves
            <span className="block gradient-text-hero mt-2">the Best Care at Home</span>
          </h2>

          <p className="text-white/60 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Join 10,000+ Mumbai families who trust Curexhealth for professional, compassionate healthcare at their doorstep.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-5 justify-center mb-10 sm:mb-12 w-full max-w-lg mx-auto sm:max-w-none">
            <motion.button onClick={openBooking}
              whileHover={{ scale:1.04, y:-3 }} whileTap={{ scale:0.97 }}
              className="btn-primary text-base sm:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-2xl w-full sm:w-auto justify-center"
              aria-label="Book a home healthcare visit">
              <FiPhone size={20} aria-hidden="true" /> Book Home Visit Now
            </motion.button>
            <motion.a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.04, y:-3 }} whileTap={{ scale:0.97 }}
              className="flex items-center justify-center gap-2.5 sm:gap-3 font-extrabold px-8 sm:px-10 py-4 sm:py-5 rounded-2xl text-base sm:text-xl text-white transition-all w-full sm:w-auto"
              style={{ background:'linear-gradient(135deg,#25D366,#20bd59)', boxShadow:'0 8px 32px rgba(37,211,102,0.4)' }}
              aria-label="Chat with us on WhatsApp">
              <FaWhatsapp size={22} aria-hidden="true" /> WhatsApp Us
            </motion.a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 mb-10 sm:mb-12">
            {trust.map(t => (
              <div key={t} className="flex items-center gap-1.5 sm:gap-2 text-white/50 text-xs sm:text-sm font-medium">
                <FiCheckCircle size={13} className="text-[#34D399]" aria-hidden="true" /> {t}
              </div>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center justify-center gap-8 flex-wrap pt-8"
            style={{ borderTop:'1px solid rgba(255,255,255,0.08)' }}>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {['PS','RM','AK','SD','MJ'].map((init,i)=>(
                  <div key={i} className="w-9 h-9 rounded-full border-2 flex items-center justify-center text-white text-[10px] font-extrabold"
                    style={{ borderColor:'#020D1A', background:['#0F6CBD','#00B894','#5B4FCF','#E17055','#FF7675'][i] }}>
                    {init}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">{[1,2,3,4,5].map(s=><FaStar key={s} size={11} className="text-yellow-400"/>)}</div>
                <p className="text-white/35 text-xs mt-0.5">10,000+ happy patients</p>
              </div>
            </div>
            <div className="h-6 w-px bg-white/10" aria-hidden="true" />
            <div className="text-center">
              <p className="text-white/75 font-extrabold text-2xl font-display">4.9/5</p>
              <p className="text-white/35 text-xs">Average Rating</p>
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block" aria-hidden="true" />
            <div className="text-center">
              <p className="text-white/75 font-extrabold text-2xl font-display">50+</p>
              <p className="text-white/35 text-xs">Mumbai Areas</p>
            </div>
            <div className="h-6 w-px bg-white/10 hidden sm:block" aria-hidden="true" />
            <Link to="/services"
              className="hidden sm:flex items-center gap-2 text-white/40 text-sm font-medium hover:text-white/75 transition-colors">
              All Services <FiArrowRight size={14} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
