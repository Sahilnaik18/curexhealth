import { motion } from 'framer-motion'
import { FaShieldHalved, FaAward, FaHouseChimney, FaUserCheck } from 'react-icons/fa6'

const badges = [
  { icon: <FaShieldHalved size={28} />, title: 'Certified Staff', desc: 'BPT/MPT/GNM qualified with valid registration', stat: '100%', statLabel: 'Qualified', color: '#3B82F6', bgCard: 'bg-white' },
  { icon: <FaAward size={28} />, title: 'Experienced Therapists', desc: 'Minimum 3 years clinical experience required', stat: '3-15+', statLabel: 'Yrs Exp', color: '#10b981', bgCard: 'bg-white' },
  { icon: <FaHouseChimney size={28} />, title: 'Home Visits Only', desc: 'Exclusively home healthcare — no clinics, no queues', stat: '50+', statLabel: 'Areas', color: '#8B5CF6', bgCard: 'bg-white' },
  { icon: <FaUserCheck size={28} />, title: 'Verified Professionals', desc: 'Background checks, credentials & clinical assessment', stat: 'Top 10%', statLabel: 'Accepted', color: '#F97316', bgCard: 'bg-white' },
]

const certifications = ['Certified Staff', 'Experienced Therapists', 'Home Visits Only', 'Verified Professionals']

export default function TrustedBy() {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden" aria-labelledby="trusted-heading">
      {/* Clean green gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0ea976] via-[#0d9b6d] to-[#2fb885]" />
      
      {/* Soft decorative elements */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0ea976]/30 rounded-full blur-[100px]" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#34d399]/20 rounded-full blur-[80px]" />
      
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <motion.div 
          initial={{ opacity:0, y:16 }} 
          whileInView={{ opacity:1, y:0 }} 
          viewport={{ once:true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-14"
        >
          <span 
            id="trusted-heading" 
            className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em] px-6 py-2.5 rounded-full text-white/90 backdrop-blur-sm"
            style={{ background:'rgba(255,255,255,0.12)', border:'1px solid rgba(255,255,255,0.2)', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
          >
            ✦ TRUSTED BY 10,000+ FAMILIES ACROSS MUMBAI ✦
          </span>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12"
          role="list" aria-label="Trust credentials">
          {badges.map((b, i) => (
            <motion.article 
              key={b.title}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`${b.bgCard} rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-default`}
              role="listitem"
            >
              {/* Icon and Stat */}
              <div className="flex items-start justify-between">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${b.color}15`, color: b.color }} 
                  aria-hidden="true"
                >
                  {b.icon}
                </div>
                <div className="text-right">
                  <p className="font-extrabold text-3xl font-display leading-none" style={{ color: b.color }}>
                    {b.stat}
                  </p>
                  <p className="text-[10px] font-semibold mt-1 uppercase tracking-wide" style={{ color: `${b.color}cc` }}>
                    {b.statLabel}
                  </p>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="font-bold text-gray-900 text-base mb-2 font-display">
                  {b.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Certification Marquee */}
        <div className="overflow-hidden relative py-4">
          <motion.div 
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...certifications, ...certifications, ...certifications, ...certifications, ...certifications, ...certifications].map((cert, i) => (
              <span key={i} className="text-white/70 text-sm font-semibold tracking-wide flex items-center gap-3">
                <span className="text-white/40">•</span> {cert}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
