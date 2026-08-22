import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import PageHero from '../components/common/PageHero'
import SEOHead from '../seo/SEOHead'
import { PAGE_SEO } from '../seo/seoConfig'
import { localBusinessSchema, breadcrumbSchema } from '../seo/schemas'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

const quickAreas = [
  'Bandra', 'Andheri', 'Juhu', 'Powai', 'Malad', 'Borivali',
  'Thane', 'Navi Mumbai', 'Dadar', 'Worli', 'Chembur', 'Kurla',
]

export default function Contact() {
  const seo = PAGE_SEO.contact
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Contact', path: '/contact' },
          ]),
        ]}
      />

      {/* Hero */}
      <PageHero
        badge="📞 Get in Touch"
        title="Book Your Home"
        highlight="Healthcare Visit"
        subtitle="Call, WhatsApp, or fill the form — we confirm your appointment within 15 minutes, 7 days a week."
        showCTA
      />

      {/* Main content */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 sm:gap-10">

            {/* Sidebar — full width */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-col gap-5">

              {/* WhatsApp CTA card */}
              <div className="bg-gradient-to-br from-[#0F6CBD] to-[#00B894] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2" >Prefer to talk directly?</h3>
                <p className="text-white/80 text-sm mb-5">Our care coordinators are ready — Mon to Sun, 8 AM to 8 PM.</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+919535659295" className="flex items-center gap-3 bg-white text-[#0F6CBD] font-bold px-4 py-3 rounded-xl hover:bg-white/95 transition-colors text-sm">
                    <FiPhone size={17} /> +91 9535659295
                  </a>
                  <a href="https://wa.me/919535659295" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-4 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
                    <FaWhatsapp size={18} /> Chat on WhatsApp
                  </a>
                  <a href="mailto:supportcurexhealth@gmail.com"
                    className="flex items-center gap-3 bg-white/15 border border-white/30 text-white font-bold px-4 py-3 rounded-xl hover:bg-white/25 transition-colors text-sm">
                    <FiMail size={17} /> supportcurexhealth@gmail.com
                  </a>
                </div>
              </div>

              {/* Service areas */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <div className="flex items-center gap-2 mb-4">
                  <FiMapPin size={16} className="text-[#0F6CBD]" />
                  <h3 className="text-[#0F172A] font-bold text-base" >Key Service Areas</h3>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {quickAreas.map(a => (
                    <span key={a} className="px-2.5 py-1 bg-[#E8F3FC] text-[#0F6CBD] text-xs font-semibold rounded-lg">{a}</span>
                  ))}
                </div>
                <Link to="/service-areas" className="text-[#0F6CBD] font-semibold text-sm hover:underline flex items-center gap-1.5">
                  View all 50+ areas →
                </Link>
              </div>

              {/* Social media */}
              <div className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-[0_2px_16px_rgba(0,0,0,0.04)]">
                <h3 className="text-[#0F172A] font-bold text-base mb-4" >Follow Us</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: <FaInstagram size={16} />, label: 'Instagram', href: 'https://instagram.com/curexhealth', bg: '#FEE2F8', color: '#E1306C' },
                    { icon: <FaFacebookF size={16} />, label: 'Facebook', href: 'https://facebook.com/curexhealth', bg: '#EEF3FD', color: '#1877F2' },
                    { icon: <FaWhatsapp size={16} />, label: 'WhatsApp', href: 'https://wa.me/919535659295', bg: '#E8F8EF', color: '#25D366' },
                  ].map(s => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all hover:scale-105 hover:shadow-md"
                      style={{ backgroundColor: s.bg, color: s.color }}>
                      {s.icon} {s.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* FAQ link */}
              <div className="bg-[#E8F3FC] rounded-2xl p-5 border border-[#0F6CBD]/15 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[#0F172A] font-bold text-sm" >Have more questions?</p>
                  <p className="text-[#64748B] text-xs mt-0.5">Browse our full FAQ page</p>
                </div>
                <Link to="/faq" className="flex-shrink-0 bg-[#0F6CBD] text-white font-bold text-xs px-4 py-2.5 rounded-xl hover:bg-[#0A5299] transition-colors">
                  View FAQs →
                </Link>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* How booking works strip */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-[#0F172A] text-center mb-8" >
            How Booking Works
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { step: '01', emoji: '📞', title: 'Call or Submit Form', desc: 'Reach us by phone, WhatsApp, or the form above — takes under 60 seconds.' },
              { step: '02', emoji: '✅', title: 'Confirmed in 15 Mins', desc: 'Our coordinator calls you back, confirms details and assigns the right professional.' },
              { step: '03', emoji: '🚗', title: 'Professional Arrives', desc: 'Fully equipped professional arrives at your home on time — every time.' },
              { step: '04', emoji: '📋', title: 'Care & Follow-up', desc: 'Receive expert care at home. Digital reports and follow-up reminders included.' },
            ].map((s, i) => (
              <motion.div key={s.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-[#F8FAFC] rounded-2xl p-5 border border-[#E2E8F0] text-center">
                <div className="w-12 h-12 rounded-xl bg-[#E8F3FC] flex items-center justify-center mx-auto mb-4 text-xl">
                  {s.emoji}
                </div>
                <span className="text-[#0F6CBD] text-xs font-bold tracking-widest">{s.step}</span>
                <h3 className="text-[#0F172A] font-bold text-sm mt-1 mb-2" >{s.title}</h3>
                <p className="text-[#64748B] text-xs leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

