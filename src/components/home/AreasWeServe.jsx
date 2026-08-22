import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { serviceAreas } from '../../data/areas'

export default function AreasWeServe() {
  const [activeZone, setActiveZone] = useState(0)

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" aria-label="Areas we serve">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#E0F7F3] text-[#00B894] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
            <FiMapPin size={13}/> Service Areas
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4 font-display">
            We Come to Your Home<span className="block text-[#0F6CBD]">Across Mumbai</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
            Serving 50+ areas across Mumbai, Thane & Navi Mumbai — network growing every month.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 sm:gap-6">
          {/* Zone tabs — horizontal scroll on mobile */}
          <div className="lg:col-span-2 flex flex-row lg:flex-col gap-2 sm:gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-none"
            style={{ scrollbarWidth: 'none' }}>
            {serviceAreas.map((zone, zi) => (
              <motion.button key={zone.zone}
                initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                transition={{ delay:zi*0.07 }}
                onClick={() => setActiveZone(zi)}
                whileHover={{ x: activeZone === zi ? 0 : 3 }}
                className={`flex-shrink-0 lg:w-full text-left rounded-2xl px-4 py-3.5 border-2 transition-all duration-200 group min-w-[170px] lg:min-w-0 ${
                  activeZone === zi ? 'shadow-card-md' : 'border-[#E2E8F0] bg-white hover:border-[#CBD5E1]'
                }`}
                style={activeZone === zi ? {
                  background:`linear-gradient(135deg, ${zone.bg}cc, white)`,
                  borderColor:`${zone.color}30`,
                  boxShadow:`0 8px 32px ${zone.color}15`
                } : {}}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.span
                      animate={{ scale: activeZone === zi ? 1.3 : 1, backgroundColor: activeZone === zi ? zone.color : '#CBD5E1' }}
                      className="w-3 h-3 rounded-full flex-shrink-0 transition-colors"
                      style={{ backgroundColor: activeZone === zi ? zone.color : '#CBD5E1' }}
                    />
                    <div>
                      <p className={`font-extrabold text-sm font-display transition-colors ${activeZone === zi ? 'text-[#0F172A]' : 'text-[#475569]'}`}>
                        {zone.zone}
                      </p>
                      <p className="text-[#94A3B8] text-xs mt-0.5">{zone.areas.length} areas covered</p>
                    </div>
                  </div>
                  <span className={`text-xs font-extrabold px-2.5 py-1 rounded-xl transition-all ${activeZone === zi ? 'text-white' : 'text-[#94A3B8] bg-[#F8FAFC]'}`}
                    style={activeZone === zi ? { backgroundColor: zone.color } : {}}>
                    {zone.areas.length}
                  </span>
                </div>
              </motion.button>
            ))}

            <Link to="/service-areas"
              className="flex items-center justify-center gap-2 py-3.5 rounded-2xl border-2 border-dashed border-[#0F6CBD]/25 text-[#0F6CBD] text-sm font-bold hover:bg-[#E8F3FC] hover:border-[#0F6CBD]/50 transition-all duration-200">
              View All 50+ Areas <FiArrowRight size={14} />
            </Link>
          </div>

          {/* Area pills panel */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div key={activeZone}
                initial={{ opacity:0, y:12, scale:0.99 }}
                animate={{ opacity:1, y:0, scale:1 }}
                exit={{ opacity:0, y:-12, scale:0.99 }}
                transition={{ duration:0.25, ease:[0.22,1,0.36,1] }}
                className="rounded-3xl p-7 h-full border"
                style={{
                  background:`linear-gradient(135deg, ${serviceAreas[activeZone].bg}90, white 60%)`,
                  borderColor:`${serviceAreas[activeZone].color}20`,
                  boxShadow:`0 8px 40px ${serviceAreas[activeZone].color}10`
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor:`${serviceAreas[activeZone].color}15` }}>
                    <FiMapPin size={18} style={{ color:serviceAreas[activeZone].color }} />
                  </div>
                  <div>
                    <p className="font-extrabold text-lg text-[#0F172A] font-display">{serviceAreas[activeZone].zone}</p>
                    <p className="text-[#94A3B8] text-sm">{serviceAreas[activeZone].areas.length} areas · All services available</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5 mb-6">
                  {serviceAreas[activeZone].areas.map((area, ai) => (
                    <motion.span key={area}
                      initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }}
                      transition={{ delay:ai*0.025, ease:[0.22,1,0.36,1] }}
                      className="px-3.5 py-1.5 rounded-xl text-sm font-semibold border transition-all duration-150 cursor-default hover:shadow-sm"
                      style={{ background:'white', color:serviceAreas[activeZone].color, borderColor:`${serviceAreas[activeZone].color}25` }}
                    >
                      {area}
                    </motion.span>
                  ))}
                </div>

                <div className="pt-5 border-t" style={{ borderColor:`${serviceAreas[activeZone].color}15` }}>
                  <p className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider mb-3">Services available in this area</p>
                  <div className="flex flex-wrap gap-2">
                    {['🏃 Physiotherapy','👩‍⚕️ Nursing','👴 Elder Care','🏥 Surgery Rehab','🧠 Stroke Rehab','🦴 Ortho Rehab'].map(s => (
                      <span key={s} className="px-3 py-1 rounded-xl text-xs font-semibold bg-white border border-[#E2E8F0] text-[#475569]">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Not in list CTA */}
        <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-5 p-6 rounded-2xl"
          style={{ background:'linear-gradient(135deg,#E8F3FC,#E0F7F3)', border:'1.5px solid rgba(15,108,189,0.12)' }}>
          <div>
            <p className="font-extrabold text-[#0F172A] text-base font-display">Don't see your area?</p>
            <p className="text-[#64748B] text-sm mt-0.5">WhatsApp us your pincode — we confirm coverage in minutes.</p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="https://wa.me/919535659295" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 text-white font-bold px-5 py-2.5 rounded-xl text-sm hover:opacity-90 transition-opacity"
              style={{ background:'linear-gradient(135deg,#25D366,#20bd59)', boxShadow:'0 4px 16px rgba(37,211,102,0.35)' }}>
              <FaWhatsapp size={16}/> Check My Area
            </a>
            <Link to="/service-areas"
              className="flex items-center gap-2 font-bold px-5 py-2.5 rounded-xl text-sm text-white transition-all hover:opacity-90"
              style={{ background:'linear-gradient(135deg,#0F6CBD,#0e7fd4)', boxShadow:'0 4px 16px rgba(15,108,189,0.35)' }}>
              All Areas <FiArrowRight size={13}/>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
