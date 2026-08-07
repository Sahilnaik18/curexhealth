import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'

const services = [
  { emoji:'🏃', title:'Home Physiotherapy',  desc:'Certified physios bring TENS, ultrasound & manual therapy to your living room.', slug:'/services/home-physiotherapy',          color:'#0F6CBD', bg:'#E8F3FC', features:['Post-surgery rehab','Back & neck pain','Neuro rehab'] },
  { emoji:'👩‍⚕️', title:'Nursing Care',        desc:'Wound care, IV infusion, catheter management & 24/7 patient monitoring.',        slug:'/services/nursing-care',                color:'#00B894', bg:'#E0F7F3', features:['Wound dressing','IV therapy','Post-op care'] },
  { emoji:'👴', title:'Elder Care',           desc:'Compassionate caregivers for seniors — mobility, medication & companion care.',    slug:'/services/elder-care',                  color:'#F59E0B', bg:'#FEF6E4', features:['Daily assistance','Dementia care','Fall prevention'] },
  { emoji:'🏥', title:'Post Surgery Rehab',  desc:'Expert home rehab after knee, hip, spinal or cardiac surgery within 48 hrs.',     slug:'/services/post-surgery-rehabilitation',  color:'#5B4FCF', bg:'#EEF0FD', features:['Joint replacement','Scar mobilisation','Strength training'] },
  { emoji:'🧠', title:'Stroke Rehabilitation',desc:'Neuroplasticity-based physio restoring movement, speech & independence.',         slug:'/services/stroke-rehabilitation',        color:'#E17055', bg:'#FDF0EC', features:['Gait retraining','Upper limb rehab','Family training'] },
  { emoji:'🏅', title:'Sports Injury Rehab', desc:'Sport-specific recovery for ACL, rotator cuff & ankle — return to sport safely.', slug:'/services/sports-injury-rehabilitation', color:'#00B894', bg:'#E0F7F3', features:['ACL rehab','Kinesio taping','Return-to-sport'] },
  { emoji:'🦴', title:'Orthopedic Rehab',    desc:'Targeted rehab for arthritis, spondylosis, disc herniation & fractures.',        slug:'/services/orthopedic-rehabilitation',    color:'#FF7675', bg:'#FEF0F0', features:['Arthritis mgmt','Spinal rehab','Joint mobilisation'] },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: i => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, delay: i * 0.07, ease: [0.22,1,0.36,1] } }),
}

export default function Services() {
  const { openBooking } = useBooking()
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-white relative overflow-hidden" aria-labelledby="services-heading">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-[#E8F3FC] text-[#0F6CBD] text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full mb-4 sm:mb-5">
            🏥 What We Offer
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-3 sm:mb-4 font-display">
            Comprehensive Home
            <span className="block" style={{ backgroundImage:'linear-gradient(135deg,#0F6CBD,#00B894)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text' }}>
              Healthcare Services
            </span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg max-w-2xl mx-auto">
            All services delivered by certified professionals across 50+ areas in Mumbai — no travel, no queues.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5" role="list">
          {services.map((s, i) => (
            <motion.article key={s.slug} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once:true }}
              whileHover={{ y:-6 }}
              className="group relative rounded-2xl overflow-hidden border border-[#E2E8F0] bg-white flex flex-col transition-all duration-300"
              style={{ boxShadow:'0 4px 20px rgba(0,0,0,0.05)' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow=`0 18px 52px rgba(0,0,0,0.1), 0 0 0 1.5px ${s.color}22`}
              onMouseLeave={e => e.currentTarget.style.boxShadow='0 4px 20px rgba(0,0,0,0.05)'}
              role="listitem"
            >
              {/* Colour top strip */}
              <div className="h-1 w-0 group-hover:w-full transition-all duration-500 rounded-none"
                style={{ background:`linear-gradient(90deg,${s.color},${s.color}88)` }} aria-hidden="true" />

              <div className="p-5 sm:p-6 flex flex-col flex-1">
                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-4 sm:mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ background:`linear-gradient(135deg,${s.bg},white)` }} aria-hidden="true">
                  {s.emoji}
                </div>

                <h3 className="font-extrabold text-[#0F172A] text-sm sm:text-base mb-2 font-display leading-snug">{s.title}</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-1.5 mb-4 sm:mb-5">
                  {s.features.map(f => (
                    <span key={f} className="text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 rounded-lg"
                      style={{ background:`${s.color}12`, color:s.color }}>{f}</span>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-3.5 border-t border-[#F1F5F9] mt-auto">
                  <Link to={s.slug}
                    className="flex items-center gap-1.5 text-xs sm:text-sm font-bold group/link transition-colors duration-200"
                    style={{ color:s.color }}
                    aria-label={`Learn more about ${s.title}`}>
                    Learn More
                    <FiArrowRight size={13} className="transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                  <button onClick={openBooking}
                    className="text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-1.5 rounded-xl text-white transition-all hover:opacity-85 focus-visible:ring-2"
                    style={{ background:`linear-gradient(135deg,${s.color},${s.color}cc)` }}
                    aria-label={`Book ${s.title}`}>
                    Book
                  </button>
                </div>
              </div>

              {/* Radial glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300 rounded-2xl"
                style={{ background:`radial-gradient(ellipse at 50% -10%, ${s.color}07 0%, transparent 60%)` }} aria-hidden="true" />
            </motion.article>
          ))}

          {/* View all card */}
          <motion.div custom={7} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once:true }}
            className="rounded-2xl flex flex-col items-center justify-center p-6 text-center cursor-pointer group min-h-[200px]"
            style={{ border:'2px dashed rgba(15,108,189,0.2)', background:'rgba(232,243,252,0.3)' }}
            whileHover={{ scale:1.02, borderColor:'rgba(15,108,189,0.45)' }}
            role="article"
          >
            <motion.div whileHover={{ rotate:90 }} transition={{ duration:0.3 }}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#0F6CBD] flex items-center justify-center text-white text-2xl sm:text-3xl mb-3 sm:mb-4"
              style={{ boxShadow:'0 6px 20px rgba(15,108,189,0.4)' }} aria-hidden="true">
              +
            </motion.div>
            <p className="font-extrabold text-[#0F172A] text-sm sm:text-base mb-1.5 font-display">All Services</p>
            <p className="text-[#64748B] text-xs sm:text-sm mb-3 sm:mb-4">Explore our complete range</p>
            <Link to="/services"
              className="inline-flex items-center gap-1.5 text-[#0F6CBD] font-bold text-xs sm:text-sm hover:underline">
              View All <FiArrowRight size={13} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
