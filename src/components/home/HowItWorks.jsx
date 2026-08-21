import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { FiPhone, FiClipboard, FiHome, FiBarChart2 } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { useBooking } from '../../context/BookingContext'

const steps = [
  { step:'01', icon: <FiClipboard size={28} />, title:'Submit Your Request', desc:'Call, WhatsApp, or fill our form. Tell us your condition and preferred slot — takes 60 seconds.', color:'#0F6CBD', bg:'#E8F3FC', details:['Available 7 days a week','Confirmed in 15 mins','No advance payment'] },
  { step:'02', icon: <FiPhone size={28} />, title:'Our Team Contacts You', desc:'A care coordinator calls within 15 minutes, understands your needs & assigns the right professional.', color:'#00B894', bg:'#E0F7F3', details:['Expert matching','Flexible time slots','Same-day available'] },
  { step:'03', icon: <FiHome size={28} />, title:'Professional Visits Home', desc:'Your certified professional arrives fully equipped, on time — ready to deliver expert care.', color:'#5B4FCF', bg:'#EEF0FD', details:['Clinic-grade equipment','Punctual every time','Verified professional'] },
  { step:'04', icon: <FiBarChart2 size={28} />, title:'Care & Follow-up', desc:'Receive expert treatment. Digital reports, follow-up reminders, and ongoing support included.', color:'#E17055', bg:'#FDF0EC', details:['Digital session report','Progress tracking','Follow-up reminders'] },
]

function StepCard({ step, index, totalSteps }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity:0, y:40 }}
      animate={isInView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.55, delay:index*0.12, ease:[0.22,1,0.36,1] }}
      className="relative group flex flex-col"
    >
      {/* Desktop connector */}
      {index < totalSteps - 1 && (
        <motion.div
          initial={{ scaleX:0 }} animate={isInView ? { scaleX:1 } : {}}
          transition={{ duration:0.6, delay:index*0.12+0.4 }}
          className="hidden lg:block absolute top-[26px] left-[calc(100%+8px)] w-[calc(100%-16px)] h-0.5 origin-left z-0"
          style={{ background:`linear-gradient(90deg,${step.color}80,${steps[index+1].color}40)` }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 bg-white rounded-2xl p-6 border border-[#E2E8F0] h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2"
        style={{ boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}
        onMouseEnter={e => e.currentTarget.style.boxShadow=`0 20px 60px rgba(0,0,0,0.12),0 0 0 1.5px ${step.color}30`}
        onMouseLeave={e => e.currentTarget.style.boxShadow='0 4px 24px rgba(0,0,0,0.06)'}
      >
        {/* Coloured top strip */}
        <div className="h-0.5 rounded-full mb-5 w-0 group-hover:w-full transition-all duration-500"
          style={{ background:`linear-gradient(90deg,${step.color},${step.color}60)` }} aria-hidden="true" />

        <div className="flex items-center gap-3 mb-5">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ background:`linear-gradient(135deg,${step.bg},white)`, border:`2px solid ${step.color}18`, color: step.color }} aria-hidden="true">
            {step.icon}
          </div>
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest block" style={{ color:step.color }}>Step {step.step}</span>
            <h3 className="text-[#0F172A] font-extrabold text-base leading-snug font-display">{step.title}</h3>
          </div>
        </div>

        <p className="text-[#64748B] text-sm leading-relaxed mb-5 flex-1">{step.desc}</p>

        <ul className="flex flex-col gap-1.5">
          {step.details.map((d,i) => (
            <motion.li key={d} initial={{ opacity:0, x:-8 }} animate={isInView ? { opacity:1, x:0 } : {}}
              transition={{ delay:index*0.12+0.3+i*0.06 }}
              className="flex items-center gap-2 text-xs font-semibold" style={{ color:step.color }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background:step.color }} aria-hidden="true" />
              {d}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function HowItWorks() {
  const { openBooking } = useBooking()

  return (
    <section className="relative overflow-hidden py-20 lg:py-28" id="how-it-works" aria-label="How it works">
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#E0F7F3] text-[#00B894] text-sm font-bold px-4 py-1.5 rounded-full mb-5">⚡ Simple Process</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4 font-display">
            Healthcare at Home in<span className="block text-[#0F6CBD]">4 Easy Steps</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">We handle everything — you just focus on getting better.</p>
        </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-5 relative">
          {steps.map((step, i) => <StepCard key={step.step} step={step} index={i} totalSteps={steps.length} />)}
        </div>

        {/* Animated progress bar */}
        <div className="mt-5 h-1 rounded-full bg-[#E2E8F0] overflow-hidden" aria-hidden="true">
          <motion.div
            initial={{ width:0 }} whileInView={{ width:'100%' }} viewport={{ once:true }}
            transition={{ duration:1.4, ease:'easeInOut', delay:0.4 }}
            className="h-full rounded-full bg-[#0A9C6F]"
          />
        </div>

        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.5 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <motion.button onClick={openBooking} whileHover={{ scale:1.04, y:-3 }} whileTap={{ scale:0.97 }}
            className="btn-primary text-lg px-8 py-4 rounded-2xl">
            <FiPhone size={20} /> Book in 60 Seconds
          </motion.button>
          <motion.a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
            whileHover={{ scale:1.04, y:-3 }} whileTap={{ scale:0.97 }}
            className="flex items-center justify-center gap-2.5 font-bold px-8 py-4 rounded-2xl text-lg text-white transition-all"
            style={{ background:'linear-gradient(135deg,#25D366,#20bd59)', boxShadow:'0 8px 32px rgba(37,211,102,0.35)' }}>
            <FaWhatsapp size={22} /> WhatsApp Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
