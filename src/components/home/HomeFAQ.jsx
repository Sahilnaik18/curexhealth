import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { faqs } from '../../data/faqs'

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      className={`rounded-2xl overflow-hidden border transition-all duration-200 ${
        isOpen ? 'border-[#0F6CBD]/25 shadow-card-md' : 'border-[#E2E8F0] bg-white hover:border-[#CBD5E1]'
      }`}
      style={{ background: isOpen ? 'linear-gradient(135deg,#F0F7FF,white)' : 'white' }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors font-display ${isOpen ? 'text-[#0F6CBD]' : 'text-[#0F172A]'}`}>
          {faq.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 0 : 0, backgroundColor: isOpen ? '#0F6CBD' : '#F1F5F9' }}
          className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-200"
          style={{ color: isOpen ? 'white' : '#64748B' }}
          aria-hidden="true"
        >
          <AnimatePresence mode="wait">
            {isOpen
              ? <motion.span key="minus" initial={{ rotate:-90,opacity:0 }} animate={{ rotate:0,opacity:1 }} exit={{ rotate:90,opacity:0 }} transition={{ duration:0.15 }}><FiMinus size={15}/></motion.span>
              : <motion.span key="plus" initial={{ rotate:90,opacity:0 }} animate={{ rotate:0,opacity:1 }} exit={{ rotate:-90,opacity:0 }} transition={{ duration:0.15 }}><FiPlus size={15}/></motion.span>
            }
          </AnimatePresence>
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height:0, opacity:0 }}
            animate={{ height:'auto', opacity:1 }}
            exit={{ height:0, opacity:0 }}
            transition={{ duration:0.22, ease:'easeInOut' }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="h-px bg-[#E8F3FC] mb-4" aria-hidden="true" />
              <p className="text-[#475569] text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function HomeFAQ() {
  const [openId, setOpenId] = useState(1)

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden" aria-label="FAQ">
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 sm:gap-12 items-start">

          {/* Left panel */}
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
              <span className="inline-flex items-center gap-2 bg-[#E8F3FC] text-[#0F6CBD] text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                ❓ FAQ
              </span>
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-5 font-display leading-tight">
                Got Questions?<span className="block text-[#0F6CBD]">We've Got Answers.</span>
              </h2>
              <p className="text-[#64748B] text-lg mb-8 leading-relaxed">
                Everything you need to know about booking and receiving home healthcare with Curexhealth.
              </p>

              {/* Contact card */}
              <div className="rounded-2xl p-6 text-white relative overflow-hidden"
                style={{ background:'linear-gradient(135deg,#0F6CBD,#00B894)' }}>
                <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage:'radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px)', backgroundSize:'20px 20px' }} aria-hidden="true" />
                <div className="relative">
                  <p className="font-extrabold text-lg mb-1.5 font-display">Still have questions?</p>
                  <p className="text-white/75 text-sm mb-5">Our care coordinators are here to help — 7 days a week, 8 AM to 8 PM.</p>
                  <div className="flex flex-col gap-2.5">
                    <a href="tel:+919535659295"
                      className="flex items-center gap-2.5 bg-white font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-white/95 transition-colors"
                      style={{ color:'#0F6CBD' }}>
                      <FiPhone size={15}/> +91 9535659295
                    </a>
                    <a href="https://wa.me/919535659295" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 bg-white/15 border border-white/30 text-white font-bold px-4 py-2.5 rounded-xl text-sm hover:bg-white/25 transition-colors">
                      <FaWhatsapp size={15}/> Chat on WhatsApp
                    </a>
                    <Link to="/faq"
                      className="flex items-center gap-2.5 bg-white/10 border border-white/20 text-white/85 font-semibold px-4 py-2.5 rounded-xl text-sm hover:bg-white/20 transition-colors">
                      📋 View All FAQs →
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Accordion */}
          <motion.div initial={{ opacity:0, x:24 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
            className="lg:col-span-3 flex flex-col gap-3"
            aria-label="Frequently asked questions">
            {faqs.slice(0,6).map(faq => (
              <FAQItem key={faq.id} faq={faq}
                isOpen={openId === faq.id}
                onToggle={() => setOpenId(openId === faq.id ? null : faq.id)} />
            ))}
            <div className="text-center pt-2">
              <Link to="/faq" className="inline-flex items-center gap-2 text-[#0F6CBD] font-bold text-sm hover:underline">
                See all FAQs →
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
