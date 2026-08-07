import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa6'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../../data/testimonials'

const extended = [
  ...testimonials,
  { id:6, name:'Kavita Iyer',     location:'Thane West',   role:'Patient – Stroke Rehab',    rating:5, text:"My father had a stroke and Curexhealth's neurological physiotherapist has been instrumental in his recovery. 6 months of consistent home visits and he is now walking independently. We are overwhelmed with gratitude.", avatar:'KI', avatarColor:'#5B4FCF' },
  { id:7, name:'Arjun Nambiar',  location:'Worli, Mumbai', role:'Patient – Sports Injury',   rating:5, text:"I tore my ACL during football. Curexhealth's sports physio designed a sport-specific rehab plan and got me back on the field in 8 months. Professional, knowledgeable, and genuinely invested in my recovery.", avatar:'AN', avatarColor:'#00B894' },
]

const ratingBars = [
  { stars:5, pct:88, color:'#0F6CBD' },
  { stars:4, pct:9,  color:'#00B894' },
  { stars:3, pct:2,  color:'#F59E0B' },
  { stars:2, pct:1,  color:'#E17055' },
  { stars:1, pct:0,  color:'#FF7675' },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef, { once: false })

  const go = useCallback((idx) => {
    setDirection(idx > current ? 1 : -1)
    setCurrent(idx)
  }, [current])

  const next = useCallback(() => {
    setDirection(1)
    setCurrent(c => (c + 1) % extended.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent(c => (c - 1 + extended.length) % extended.length)
  }, [])

  useEffect(() => {
    if (!inView || paused) return
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next, inView, paused])

  const variants = {
    enter:  d => ({ opacity:0, x:d*50, scale:0.97 }),
    center: { opacity:1, x:0, scale:1 },
    exit:   d => ({ opacity:0, x:-d*50, scale:0.97 }),
  }

  return (
    <section ref={sectionRef} className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden" aria-label="Patient testimonials">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} className="text-center mb-14">
          <span className="inline-flex items-center gap-2 bg-[#FEF6E4] text-[#F59E0B] text-sm font-bold px-4 py-1.5 rounded-full mb-5">⭐ Patient Stories</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4 font-display">
            Trusted by Thousands<span className="block text-[#0F6CBD]">Across Mumbai</span>
          </h2>
          <p className="text-[#64748B] text-lg max-w-2xl mx-auto">Real stories from real patients. Their words are our greatest achievement.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {/* Rating panel */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            className="bg-white rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] lg:sticky lg:top-24"
            style={{ boxShadow:'0 8px 40px rgba(0,0,0,0.06)' }}>
            <div className="text-center mb-6">
              <p className="text-6xl font-extrabold text-[#0F172A] mb-1 font-display">4.9</p>
              <div className="flex justify-center gap-1 mb-1.5">
                {[1,2,3,4,5].map(s=><FaStar key={s} size={18} className="text-yellow-400"/>)}
              </div>
              <p className="text-[#94A3B8] text-sm font-medium">Based on 3,200+ reviews</p>
            </div>

            <div className="flex flex-col gap-2.5 mb-6">
              {ratingBars.map(r => (
                <div key={r.stars} className="flex items-center gap-3">
                  <div className="flex items-center gap-1 w-12 flex-shrink-0">
                    <span className="text-[#64748B] text-xs font-medium">{r.stars}</span>
                    <FaStar size={10} className="text-yellow-400" />
                  </div>
                  <div className="flex-1 h-2 rounded-full bg-[#F1F5F9] overflow-hidden">
                    <motion.div
                      initial={{ width:0 }} whileInView={{ width:`${r.pct}%` }} viewport={{ once:true }}
                      transition={{ duration:0.9, delay:(5-r.stars)*0.07, ease:'easeOut' }}
                      className="h-full rounded-full"
                      style={{ background:`linear-gradient(90deg,${r.color},${r.color}99)` }}
                    />
                  </div>
                  <span className="text-[#94A3B8] text-xs w-8 text-right">{r.pct}%</span>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-[#F1F5F9]">
              <div className="flex items-center gap-3 p-3.5 rounded-2xl"
                style={{ background:'linear-gradient(135deg,#E8F3FC,#E0F7F3)' }}>
                <span className="text-2xl">🏆</span>
                <div>
                  <p className="text-[#0F172A] font-bold text-sm font-display">Mumbai's #1</p>
                  <p className="text-[#64748B] text-xs">Home Healthcare</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Slider col */}
          <div className="lg:col-span-2">
            {/* Main slider card */}
            <div
              className="relative bg-white rounded-3xl border border-[#E2E8F0] overflow-hidden"
              style={{ boxShadow:'0 8px 48px rgba(0,0,0,0.08)' }}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div className="h-1.5 w-full" style={{ background:'linear-gradient(90deg,#0F6CBD,#00B894,#5B4FCF)' }} />

              <div className="p-8 lg:p-10 min-h-[320px] flex flex-col">
                <FaQuoteLeft size={40} className="text-[#0F6CBD]/10 mb-4 flex-shrink-0" aria-hidden="true" />

                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div key={current} custom={direction} variants={variants}
                    initial="enter" animate="center" exit="exit"
                    transition={{ duration:0.35, ease:'easeInOut' }}
                    className="flex-1 flex flex-col"
                  >
                    <div className="flex gap-1 mb-5">
                      {Array.from({ length: extended[current].rating }).map((_,i) => (
                        <motion.span key={i} initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:i*0.05 }}>
                          <FaStar size={18} className="text-yellow-400" />
                        </motion.span>
                      ))}
                    </div>

                    <blockquote className="text-[#334155] text-lg leading-relaxed font-medium mb-8 flex-1">
                      "{extended[current].text}"
                    </blockquote>

                    <div className="flex items-center gap-4 mt-auto">
                      <motion.div
                        initial={{ scale:0 }} animate={{ scale:1 }} transition={{ type:'spring', stiffness:200, delay:0.1 }}
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0"
                        style={{ backgroundColor:extended[current].avatarColor, boxShadow:`0 4px 16px ${extended[current].avatarColor}60` }}
                      >
                        {extended[current].avatar}
                      </motion.div>
                      <div>
                        <p className="text-[#0F172A] font-extrabold font-display">{extended[current].name}</p>
                        <p className="text-[#94A3B8] text-sm">{extended[current].role}</p>
                        <p className="text-[#0F6CBD] text-xs font-semibold mt-0.5">📍 {extended[current].location}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Controls */}
              <div className="px-8 lg:px-10 pb-6 pt-4 border-t border-[#F8FAFC] flex items-center gap-3">
                <button onClick={prev}
                  className="w-10 h-10 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#0F6CBD] hover:text-white hover:border-[#0F6CBD] transition-all duration-200"
                  aria-label="Previous">
                  <FiChevronLeft size={20} />
                </button>
                <div className="flex items-center gap-2 flex-1" role="tablist">
                  {extended.map((_,i) => (
                    <button key={i} onClick={() => go(i)} role="tab" aria-selected={i===current} aria-label={`Review ${i+1}`}
                      className={`rounded-full transition-all duration-300 ${i===current ? 'w-8 h-2 bg-[#0F6CBD]' : 'w-2 h-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]'}`} />
                  ))}
                </div>
                <span className="text-[#94A3B8] text-xs font-medium">{current+1}/{extended.length}</span>
                <button onClick={next}
                  className="w-10 h-10 rounded-xl border border-[#E2E8F0] flex items-center justify-center text-[#64748B] hover:bg-[#0F6CBD] hover:text-white hover:border-[#0F6CBD] transition-all duration-200"
                  aria-label="Next">
                  <FiChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Mini preview cards */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              {extended.slice(0,2).map((t,i) => (
                <motion.button key={t.id} onClick={() => go(i)}
                  initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                  transition={{ delay:i*0.1 }}
                  whileHover={{ y:-3 }}
                  className="bg-white rounded-2xl p-4 border border-[#E2E8F0] text-left transition-all duration-200 group"
                  style={{ boxShadow:'0 2px 12px rgba(0,0,0,0.04)' }}
                  onMouseEnter={e => e.currentTarget.style.boxShadow='0 8px 32px rgba(0,0,0,0.09)'}
                  onMouseLeave={e => e.currentTarget.style.boxShadow='0 2px 12px rgba(0,0,0,0.04)'}
                >
                  <div className="flex gap-0.5 mb-2">{[1,2,3,4,5].map(s=><FaStar key={s} size={10} className="text-yellow-400"/>)}</div>
                  <p className="text-[#475569] text-xs leading-relaxed line-clamp-3 mb-3">"{t.text}"</p>
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[9px] font-extrabold flex-shrink-0"
                      style={{ backgroundColor:t.avatarColor }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p className="text-[#0F172A] font-bold text-xs">{t.name}</p>
                      <p className="text-[#94A3B8] text-[10px]">{t.location}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
