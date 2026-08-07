import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const conditions = [
  { emoji:'🦵', name:'Knee Pain & OA',       slug:'/services/orthopedic-rehabilitation',        color:'#0F6CBD', bg:'#E8F3FC' },
  { emoji:'🔙', name:'Back & Neck Pain',     slug:'/services/home-physiotherapy',               color:'#00B894', bg:'#E0F7F3' },
  { emoji:'🧠', name:'Stroke Recovery',      slug:'/services/stroke-rehabilitation',            color:'#5B4FCF', bg:'#EEF0FD' },
  { emoji:'🦴', name:'Fracture Rehab',       slug:'/services/orthopedic-rehabilitation',        color:'#E17055', bg:'#FDF0EC' },
  { emoji:'🏋️', name:'ACL / Ligament Tear', slug:'/services/sports-injury-rehabilitation',     color:'#00B894', bg:'#E0F7F3' },
  { emoji:'🫁', name:'Post Cardiac Surgery', slug:'/services/post-surgery-rehabilitation',      color:'#FF7675', bg:'#FEF0F0' },
  { emoji:'🤸', name:'Frozen Shoulder',      slug:'/services/orthopedic-rehabilitation',        color:'#F59E0B', bg:'#FEF6E4' },
  { emoji:'🦯', name:"Parkinson's Disease",  slug:'/services/home-physiotherapy',               color:'#5B4FCF', bg:'#EEF0FD' },
  { emoji:'👶', name:'Cerebral Palsy',       slug:'/services/home-physiotherapy',               color:'#0F6CBD', bg:'#E8F3FC' },
  { emoji:'🏃', name:'Sports Injuries',      slug:'/services/sports-injury-rehabilitation',     color:'#00B894', bg:'#E0F7F3' },
  { emoji:'💊', name:'Diabetic Neuropathy',  slug:'/services/home-physiotherapy',               color:'#F59E0B', bg:'#FEF6E4' },
  { emoji:'🦽', name:'Hip Replacement',      slug:'/services/post-surgery-rehabilitation',      color:'#FF7675', bg:'#FEF0F0' },
  { emoji:'🤕', name:'Sciatica',             slug:'/services/home-physiotherapy',               color:'#0F6CBD', bg:'#E8F3FC' },
  { emoji:'🧓', name:'Geriatric Weakness',   slug:'/services/elder-care',                       color:'#F59E0B', bg:'#FEF6E4' },
  { emoji:'🫀', name:'Post Surgery Care',    slug:'/services/post-surgery-rehabilitation',      color:'#5B4FCF', bg:'#EEF0FD' },
  { emoji:'💫', name:'Vertigo & Balance',    slug:'/services/home-physiotherapy',               color:'#E17055', bg:'#FDF0EC' },
]

export default function Conditions() {
  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden" aria-label="Conditions we treat">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#EEF0FD] text-[#5B4FCF] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            🩺 Conditions We Treat
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4 font-display">
            We Treat a Wide Range of<span className="block text-[#0F6CBD]">Conditions at Home</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            50+ conditions treated by our certified professionals — all at your home in Mumbai.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2.5 sm:gap-3">
          {conditions.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity:0, scale:0.8, y:12 }}
              whileInView={{ opacity:1, scale:1, y:0 }}
              viewport={{ once:true }}
              transition={{ duration:0.35, delay:i*0.04, ease:[0.22,1,0.36,1] }}
              whileHover={{ y:-5, scale:1.06 }}
            >
              <Link to={c.slug}
                className="flex flex-col items-center gap-2.5 p-4 rounded-2xl border text-center transition-all duration-200 group h-full relative overflow-hidden"
                style={{ backgroundColor:c.bg, borderColor:`${c.color}20` }}
                aria-label={`Learn about ${c.name} treatment`}
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  style={{ background:`radial-gradient(circle at 50% 100%, ${c.color}15, transparent 70%)` }} aria-hidden="true" />
                <span className="text-2xl group-hover:scale-110 transition-transform duration-200 relative z-10">{c.emoji}</span>
                <span className="text-xs font-bold leading-tight relative z-10" style={{ color:c.color }}>{c.name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:0.5 }}
          className="text-center text-[#94A3B8] text-sm mt-8">
          Don't see your condition?{' '}
          <a href="tel:+918762697832" className="text-[#0F6CBD] font-semibold hover:underline">Call us</a>
          {' '}— our care team will guide you.
        </motion.p>
      </div>
    </section>
  )
}
