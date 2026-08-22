import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiPhone, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa6'
import { useBooking } from '../../context/BookingContext'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

export default function ServicePageTemplate({  seoTitle,
  seoDescription,
  slug,
  badge,
  heroTitle,
  heroHighlight,
  heroSubtitle,
  serviceColor = '#0F6CBD',
  serviceBg = '#E8F3FC',
  overviewTitle,
  overviewBody,
  features,
  benefitTitle,
  benefits,
  conditions,
  processSteps,
  faqs,
  relatedServices,
}) {
  const { openBooking } = useBooking()
  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <link rel="canonical" href={`https://curexhealth.com${slug}`} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Hero */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0" style={{ background:'linear-gradient(160deg,#020D1A 0%,#041A2E 50%,#020D1A 100%)' }} aria-hidden="true">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full" style={{ background:`radial-gradient(circle,${serviceColor}35 0%,transparent 70%)` }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full" style={{ background:'radial-gradient(circle,rgba(0,184,148,0.15) 0%,transparent 70%)' }} />
          <div className="absolute inset-0 dot-grid-white opacity-20" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-6 border"
              style={{ backgroundColor:`${serviceColor}20`, color:`${serviceColor}dd`, borderColor:`${serviceColor}30` }}>
              {badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold text-white leading-tight mb-5 font-display text-balance">
              {heroTitle}
              {heroHighlight && <span className="block mt-2 gradient-text-hero">{heroHighlight}</span>}
            </h1>
            <p className="text-white/65 text-xl leading-relaxed max-w-2xl mx-auto mb-8">{heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={openBooking}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 text-white font-bold px-8 py-4 rounded-2xl text-lg shadow-lg hover:opacity-90 transition-all"
                style={{ backgroundColor: serviceColor, boxShadow: `0 8px 32px ${serviceColor}50` }}
              >
                <FiPhone size={20} /> Book This Service
              </motion.button>
              <motion.a
                href="https://wa.me/919535659295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-ghost flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-lg"
              >
                <FaWhatsapp size={22} className="text-[#25D366]" /> WhatsApp Us
              </motion.a>
            </div>
            {/* Trust strip */}
            <div className="flex items-center justify-center gap-6 flex-wrap mt-8">
              {['Verified Professionals', 'Same-day Service', '4.9★ Rated'].map((t) => (
                <div key={t} className="flex items-center gap-1.5 text-white/60 text-sm font-medium">
                  <FiCheckCircle size={15} className="text-[#34D399]" aria-hidden="true" />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-flex items-center gap-2 text-sm font-bold px-4 py-1.5 rounded-full mb-5 font-display"
                style={{ backgroundColor: serviceBg, color: serviceColor }}>
                About This Service
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-5 leading-tight font-display">
                {overviewTitle}
              </h2>
              {overviewBody.map((para, i) => (
                <p key={i} className="text-[#475569] text-lg leading-relaxed mb-4">{para}</p>
              ))}
            </motion.div>

            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="rounded-3xl p-8 border"
                style={{
                  background: `linear-gradient(135deg, ${serviceBg}cc, white)`,
                  borderColor: `${serviceColor}20`,
                  boxShadow: `0 8px 40px ${serviceColor}12`
                }}>
                <h3 className="font-extrabold text-xl text-[#0F172A] mb-6 font-display">What's Included</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {features.map((f) => (
                    <div key={f} className="flex items-center gap-3">
                      <FiCheckCircle size={18} className="flex-shrink-0" style={{ color: serviceColor }} aria-hidden="true" />
                      <span className="text-[#334155] text-sm font-medium">{f}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 pt-6 border-t" style={{ borderColor: `${serviceColor}20` }}>
                  <button
                    onClick={openBooking}
                    className="w-full flex items-center justify-center gap-2 text-white font-bold py-3.5 rounded-2xl text-sm hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: serviceColor }}
                  >
                    <FiPhone size={16} /> Book Now — We Come to You
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      {benefits && benefits.length > 0 && (
        <section className="py-16 lg:py-20 bg-[#F8FAFC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <span className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-1.5 rounded-full mb-4" style={{ backgroundColor: serviceBg, color: serviceColor }}>
                Key Benefits
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A]" >
                {benefitTitle || 'Why Choose Home-Based Care'}
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4" style={{ backgroundColor: serviceBg }}>
                    {b.emoji}
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-2" >{b.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Conditions treated */}
      {conditions && conditions.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0F172A]" >
                Conditions We Treat
              </h2>
            </motion.div>
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-wrap gap-3 justify-center"
            >
              {conditions.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 rounded-2xl text-sm font-semibold border"
                  style={{ backgroundColor: serviceBg, color: serviceColor, borderColor: `${serviceColor}25` }}
                >
                  {c}
                </span>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Process */}
      {processSteps && processSteps.length > 0 && (
        <section className="py-12 sm:py-16 lg:py-20" style={{ background: `linear-gradient(135deg, ${serviceColor}f0, ${serviceColor}cc)` }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white" >
                How It Works
              </h2>
              <p className="text-white/80 mt-3 text-lg">Getting care at home is simple</p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.step}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white/20 border border-white/30 flex flex-col items-center justify-center mx-auto mb-4">
                    <span className="text-white/60 text-[10px] font-bold">{step.step}</span>
                    <span className="text-white text-xl">{step.emoji}</span>
                  </div>
                  <h3 className="text-white font-bold text-base mb-2" >{step.title}</h3>
                  <p className="text-white/75 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0F172A]" >
                Frequently Asked Questions
              </h2>
            </motion.div>
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.q}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.04)]"
                >
                  <h3 className="font-bold text-[#0F172A] text-base mb-2" >{faq.q}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-[#0F172A]" >
                Related Services
              </h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((s, i) => (
                <motion.div key={s.slug} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-[0_2px_16px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.09)] transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4" style={{ backgroundColor: s.bg }}>
                    {s.emoji}
                  </div>
                  <h3 className="font-bold text-[#0F172A] text-base mb-2" >{s.title}</h3>
                  <p className="text-[#64748B] text-sm mb-4">{s.desc}</p>
                  <Link to={s.slug} className="flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all" style={{ color: s.color }}>
                    Learn More <FiArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16" style={{ background: `linear-gradient(135deg, ${serviceColor}, #00B894)` }}>
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" >
              Ready to Get Started?
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Book your home session today. Our care coordinator will call you within 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openBooking}
                className="flex items-center justify-center gap-2 bg-white text-[#0F6CBD] font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-lg">
                <FiPhone size={20} /> Book Home Visit
              </button>
              <a href="https://wa.me/919535659295" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/25 transition-colors text-lg">
                <FaWhatsapp size={22} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

