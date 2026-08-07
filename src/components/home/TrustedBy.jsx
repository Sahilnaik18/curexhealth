import { motion } from 'framer-motion'
import { FaShieldHalved, FaAward, FaHouseChimney, FaUserCheck } from 'react-icons/fa6'

const badges = [
  { icon: <FaShieldHalved size={24} />, title: 'Certified Staff', desc: 'BPT/MPT/GNM qualified with valid registration', stat: '100%', statLabel: 'Qualified', color: '#0F6CBD', bg: 'from-[#E8F3FC] to-[#DBEEFF]' },
  { icon: <FaAward size={24} />, title: 'Experienced Therapists', desc: 'Minimum 3 years clinical experience required', stat: '3–15+', statLabel: 'Yrs Exp', color: '#00B894', bg: 'from-[#E0F7F3] to-[#CCFBF1]' },
  { icon: <FaHouseChimney size={24} />, title: 'Home Visits Only', desc: 'Exclusively home healthcare — no clinics, no queues', stat: '50+', statLabel: 'Areas', color: '#5B4FCF', bg: 'from-[#EEF0FD] to-[#E0E7FF]' },
  { icon: <FaUserCheck size={24} />, title: 'Verified Professionals', desc: 'Background checks, credentials & clinical assessment', stat: 'Top 10%', statLabel: 'Accepted', color: '#E17055', bg: 'from-[#FDF0EC] to-[#FEE2D5]' },
]

const partners = ['NABH Recognised','ISO 9001:2015','IMA Member','FICCI Health','NABL Labs','NMC Compliant']

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: i => ({ opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.09, ease: [0.22,1,0.36,1] } }),
}

export default function TrustedBy() {
  return (
    <section className="py-14 sm:py-16 bg-[#0a0f1a]" aria-labelledby="trusted-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-8 sm:mb-10">
          <p id="trusted-heading" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] px-5 py-2 rounded-full text-white/35"
            style={{ background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.07)' }}>
            ✦ Trusted by 10,000+ Families Across Mumbai ✦
          </p>
        </motion.div>

        {/* Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10 sm:mb-12"
          role="list" aria-label="Trust credentials">
          {badges.map((b, i) => (
            <motion.article key={b.title}
              custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once:true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group relative rounded-2xl p-5 sm:p-6 flex flex-col gap-4 bg-gradient-to-br ${b.bg} transition-all duration-300 cursor-default`}
              style={{ border:`1.5px solid ${b.color}18`, boxShadow:`0 4px 20px rgba(0,0,0,0.04)` }}
              role="listitem"
            >
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background:`radial-gradient(ellipse at 50% -10%, ${b.color}12, transparent 65%)` }} aria-hidden="true" />
              <div className="flex items-start justify-between">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shadow-sm"
                  style={{ background:`${b.color}18`, color:b.color }} aria-hidden="true">
                  {b.icon}
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-2xl font-display" style={{ color:b.color }}>{b.stat}</p>
                  <p className="text-[11px] font-semibold mt-0.5" style={{ color:`${b.color}99` }}>{b.statLabel}</p>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-[#0F172A] text-sm sm:text-base mb-1.5 font-display">{b.title}</h3>
                <p className="text-[#64748B] text-xs sm:text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Marquee */}
        <div className="marquee-wrapper overflow-hidden rounded-2xl py-3"
          style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}
          aria-label="Accreditations and recognitions">
          <div className="flex animate-marquee whitespace-nowrap" aria-hidden="true">
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className="inline-flex items-center gap-3 px-6 text-sm font-bold text-white/28">
                <span className="w-1 h-1 rounded-full bg-[#0F6CBD] inline-block" />
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
