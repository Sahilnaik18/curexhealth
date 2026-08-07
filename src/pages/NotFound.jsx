import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiHome, FiPhone, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useBooking } from '../context/BookingContext'
import SEOHead from '../seo/SEOHead'

const quickLinks = [
  { label:'Home Physiotherapy',  to:'/services/home-physiotherapy',         emoji:'🏃' },
  { label:'Nursing Care',        to:'/services/nursing-care',               emoji:'👩‍⚕️' },
  { label:'Elder Care',          to:'/services/elder-care',                 emoji:'👴' },
  { label:'Service Areas',       to:'/service-areas',                       emoji:'📍' },
  { label:'About Us',            to:'/about',                               emoji:'🌟' },
  { label:'Contact Us',          to:'/contact',                             emoji:'📞' },
]

export default function NotFound() {
  const { openBooking } = useBooking()

  return (
    <>
      <SEOHead
        title="Page Not Found – Curexhealth Home Healthcare Mumbai"
        description="This page doesn't exist. Find home healthcare services in Mumbai — physiotherapy, nursing, elder care & more at Curexhealth."
        canonical="/404"
        noIndex={true}
      />

      <section className="min-h-[90vh] relative flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Background */}
        <div className="absolute inset-0" style={{ background:'linear-gradient(160deg,#E8F3FC 0%,#ffffff 50%,#E0F7F3 100%)' }} aria-hidden="true" />
        <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />
        <motion.div animate={{ scale:[1,1.1,1], opacity:[0.3,0.5,0.3] }} transition={{ duration:8, repeat:Infinity }}
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle,rgba(15,108,189,0.12) 0%,transparent 70%)' }} aria-hidden="true" />
        <motion.div animate={{ scale:[1,1.15,1], opacity:[0.2,0.4,0.2] }} transition={{ duration:10, repeat:Infinity, delay:3 }}
          className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background:'radial-gradient(circle,rgba(0,184,148,0.1) 0%,transparent 70%)' }} aria-hidden="true" />

        <motion.div
          initial={{ opacity:0, y:28 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.65, ease:[0.22,1,0.36,1] }}
          className="relative z-10 text-center max-w-2xl w-full"
        >
          {/* Animated logo */}
          <motion.div
            animate={{ y:[-8,8,-8] }}
            transition={{ duration:4, repeat:Infinity, ease:'easeInOut' }}
            className="w-24 h-24 rounded-[22px] flex items-center justify-center mx-auto mb-8 relative"
            style={{ background:'linear-gradient(135deg,#0F6CBD,#00B894)', boxShadow:'0 16px 48px rgba(15,108,189,0.45), inset 0 1px 0 rgba(255,255,255,0.2)' }}
          >
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3L12 21M4 12L20 12" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
            {/* Pulse rings */}
            <motion.div animate={{ scale:[1,1.8], opacity:[0.4,0] }} transition={{ duration:2, repeat:Infinity }}
              className="absolute inset-0 rounded-[22px] border-2 border-[#0F6CBD]" aria-hidden="true" />
            <motion.div animate={{ scale:[1,1.8], opacity:[0.3,0] }} transition={{ duration:2, repeat:Infinity, delay:0.6 }}
              className="absolute inset-0 rounded-[22px] border-2 border-[#00B894]" aria-hidden="true" />
          </motion.div>

          {/* 404 */}
          <motion.h1
            initial={{ opacity:0, scale:0.8 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ delay:0.2, duration:0.5, ease:[0.22,1,0.36,1] }}
            className="font-extrabold font-display leading-none mb-2"
            style={{ fontSize:'clamp(5rem,15vw,9rem)', background:'linear-gradient(135deg,#0F6CBD,#00B894)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}
          >
            404
          </motion.h1>

          <motion.h2 initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.35 }}
            className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3 font-display">
            Page Not Found
          </motion.h2>

          <motion.p initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.45 }}
            className="text-[#64748B] text-lg mb-10 max-w-md mx-auto leading-relaxed">
            This page doesn't exist, but expert healthcare does — right at your doorstep in Mumbai.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <motion.button onClick={openBooking} whileHover={{ scale:1.05, y:-3 }} whileTap={{ scale:0.97 }}
              className="btn-primary text-base px-7 py-3.5 rounded-2xl">
              <FiPhone size={18}/> Book Home Visit
            </motion.button>
            <Link to="/">
              <motion.span whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
                className="btn-secondary text-base px-7 py-3.5 rounded-2xl flex items-center gap-2">
                <FiHome size={18}/> Back to Home
              </motion.span>
            </Link>
            <motion.a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              className="flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-2xl text-base text-white transition-all"
              style={{ background:'linear-gradient(135deg,#25D366,#20bd59)', boxShadow:'0 4px 20px rgba(37,211,102,0.35)' }}>
              <FaWhatsapp size={20}/> WhatsApp
            </motion.a>
          </motion.div>

          {/* Quick links */}
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.6 }}
            className="bg-white rounded-2xl border border-[#E2E8F0] p-6"
            style={{ boxShadow:'0 8px 40px rgba(0,0,0,0.06)' }}>
            <p className="text-[#94A3B8] text-xs font-bold uppercase tracking-widest mb-4">
              Popular Pages
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {quickLinks.map(l => (
                <Link key={l.to} to={l.to}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-[#475569] text-sm font-semibold hover:bg-[#E8F3FC] hover:text-[#0F6CBD] hover:border-[#0F6CBD]/25 transition-all duration-150 group">
                  <span className="group-hover:scale-110 transition-transform">{l.emoji}</span>
                  {l.label}
                  <FiArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-150" />
                </Link>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
