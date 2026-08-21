import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiCheckCircle } from 'react-icons/fi'
import { FaShieldHalved, FaClock, FaStar, FaLocationDot, FaHeadset, FaHandHoldingHeart, FaVials, FaUserDoctor } from 'react-icons/fa6'
import { useBooking } from '../../context/BookingContext'
import AnimatedCounter from '../common/AnimatedCounter'

const features = [
  { icon: <FaShieldHalved size={20}/>, title:'100% Verified Professionals', desc:'10-step vetting: background checks, degree verification, clinical assessment.', color:'#0F6CBD', bg:'#E8F3FC' },
  { icon: <FaClock size={20}/>, title:'Same-day Service', desc:'Book today, professional at your door within 2–4 hours.', color:'#00B894', bg:'#E0F7F3' },
  { icon: <FaStar size={20}/>, title:'4.9★ Rated Service', desc:'Rated 4.9/5 across 3,200+ verified patient reviews.', color:'#F59E0B', bg:'#FEF6E4' },
  { icon: <FaLocationDot size={20}/>, title:'50+ Areas in Mumbai', desc:'Western suburbs to Thane and Navi Mumbai — growing monthly.', color:'#E17055', bg:'#FDF0EC' },
  { icon: <FaHeadset size={20}/>, title:'7-Day Support', desc:'Care coordinators available Mon–Sun, 8 AM to 8 PM.', color:'#5B4FCF', bg:'#EEF0FD' },
  { icon: <FaUserDoctor size={20}/>, title:'Personalised Care Plans', desc:'Every patient gets a custom plan built around their condition.', color:'#0F6CBD', bg:'#E8F3FC' },
  { icon: <FaVials size={20}/>, title:'NABH Recognised', desc:'Same quality board that certifies top Indian hospitals.', color:'#FF7675', bg:'#FEF0F0' },
  { icon: <FaHandHoldingHeart size={20}/>, title:'Compassionate Care', desc:'Clinical excellence combined with genuine patient-first empathy.', color:'#00B894', bg:'#E0F7F3' },
]

const bigStats = [
  { to: 10000, suffix: '+', label: 'Patients Served', color: '#60A5FA' },
  { to: 150,   suffix: '+', label: 'Professionals',   color: '#34D399' },
  { to: 4.9,   suffix: '★', label: 'Average Rating',  color: '#FCD34D', decimals: 1 },
  { to: 50,    suffix: '+', label: 'Areas Served',     color: '#F87171' },
]

export default function WhyChoose() {
  const { openBooking } = useBooking()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <section ref={ref} className="py-20 lg:py-28 relative overflow-hidden" aria-label="Why choose Curexhealth">
      {/* Parallax background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg,#020D1A 0%,#041A2E 50%,#020D1A 100%)' }} />
        <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full" style={{ background:'radial-gradient(circle,rgba(15,108,189,0.14) 0%,transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full" style={{ background:'radial-gradient(circle,rgba(0,184,148,0.09) 0%,transparent 70%)' }} />
        <div className="absolute inset-0 dot-grid-white opacity-25" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              <span className="inline-flex items-center gap-2 text-sm font-bold px-4 py-1.5 rounded-full mb-5"
                style={{ background:'rgba(15,108,189,0.18)', color:'#93C5FD', border:'1px solid rgba(15,108,189,0.3)' }}>
                ✦ Why Curexhealth
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-5 font-display leading-tight">
                Healthcare You Can<span className="block gradient-text-hero">Truly Trust</span>
              </h2>
              <p className="text-white/55 text-lg leading-relaxed mb-8">
                We've redefined home healthcare in Mumbai. Here's what makes us the most trusted name for 10,000+ families.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {features.slice(0,4).map((f,i) => (
                <motion.div key={f.title}
                  initial={{ opacity:0, x:-24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                  transition={{ duration:0.45, delay:i*0.09 }}
                  className="flex gap-3.5 group"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background:f.bg, color:f.color }}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm mb-1 font-display">{f.title}</h3>
                    <p className="text-white/45 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: glass cards grid */}
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ duration:0.6 }}
            className="grid grid-cols-2 gap-4">
            {features.slice(4).map((f,i) => (
              <motion.div key={f.title}
                initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                transition={{ duration:0.4, delay:i*0.08 }}
                whileHover={{ y:-5, scale:1.02 }}
                className="group rounded-2xl p-5 transition-all duration-300 cursor-default"
                style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)', backdropFilter:'blur(12px)' }}
                onMouseEnter={e => e.currentTarget.style.background='rgba(255,255,255,0.08)'}
                onMouseLeave={e => e.currentTarget.style.background='rgba(255,255,255,0.04)'}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                  style={{ background:f.bg, color:f.color }}>
                  {f.icon}
                </div>
                <h3 className="text-white font-bold text-xs mb-1.5 font-display leading-snug">{f.title}</h3>
                <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
