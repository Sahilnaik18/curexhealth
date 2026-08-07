import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPhone, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { services } from '../data/services'
import { useBooking } from '../context/BookingContext'
import PageHero from '../components/common/PageHero'
import SEOHead from '../seo/SEOHead'
import { PAGE_SEO } from '../seo/seoConfig'
import { localBusinessSchema, breadcrumbSchema, homeVisitSchema } from '../seo/schemas'

const iconMap = {
  FaPersonWalking: '🏃',
  FaUserNurse: '👩‍⚕️',
  FaPersonCane: '👴',
  FaHospital: '🏥',
  FaBrain: '🧠',
  FaPersonRunning: '🏅',
  FaBone: '🦴',
}

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

export default function Services() {
  const { openBooking } = useBooking()
  const seo = PAGE_SEO.services
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          localBusinessSchema,
          homeVisitSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Services', path: '/services' },
          ]),
        ]}
      />

      {/* Hero */}
      <PageHero
        badge="🏥 All Services"
        title="Premium Home Healthcare"
        highlight="in Mumbai"
        subtitle="From physiotherapy to elder care — all delivered by certified professionals across 50+ areas in Mumbai. No travel, no queues."
        showCTA
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group bg-white rounded-2xl p-7 border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.11)] transition-all duration-300 flex flex-col"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: service.bgColor }}
                  aria-hidden="true"
                >
                  {iconMap[service.icon]}
                </div>
                <h2 className="text-[#0F172A] font-bold text-xl mb-3" >
                  {service.title}
                </h2>
                <p className="text-[#64748B] text-sm leading-relaxed mb-5 flex-1">{service.shortDesc}</p>
                <ul className="flex flex-col gap-2 mb-6">
                  {service.features.slice(0, 4).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[#475569] text-sm">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: service.color }} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.slug}
                  className="flex items-center gap-2 text-sm font-semibold mt-auto group/link transition-colors"
                  style={{ color: service.color }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <span>View Full Service</span>
                  <FiArrowRight size={15} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us strip */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '✅', title: '100% Verified', desc: 'All professionals background-checked & credential-verified' },
              { emoji: '⚡', title: 'Same-day Service', desc: 'Book today, therapist at your door within hours' },
              { emoji: '⭐', title: '4.9★ Rated', desc: 'Consistently rated by 3,200+ satisfied patients' },
              { emoji: '📍', title: '50+ Areas', desc: 'Serving all major areas across Mumbai metropolitan region' },
            ].map((item, i) => (
              <motion.div key={item.title} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center">
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-[#0F172A] text-base mb-1" >{item.title}</h3>
                <p className="text-[#64748B] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#0F6CBD] to-[#00B894]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" >
            Not sure which service you need?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Our care coordinators will guide you to the right service — call or WhatsApp us now.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openBooking}
              className="flex items-center justify-center gap-2 bg-white text-[#0F6CBD] font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <FiPhone size={20} /> Book Home Visit
            </button>
            <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/25 transition-colors">
              <FaWhatsapp size={22} /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

