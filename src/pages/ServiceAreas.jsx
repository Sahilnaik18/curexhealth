import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { serviceAreas } from '../data/areas'
import PageHero from '../components/common/PageHero'
import SEOHead from '../seo/SEOHead'
import { PAGE_SEO } from '../seo/seoConfig'
import { localBusinessSchema, homeVisitSchema, breadcrumbSchema } from '../seo/schemas'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.07 } }),
}

export default function ServiceAreas() {
  const seo = PAGE_SEO.serviceAreas
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
            { name: 'Service Areas', path: '/service-areas' },
          ]),
        ]}
      />

      {/* Hero */}
      <PageHero
        badge={<><FiMapPin size={14} /> Service Areas</>}
        title="We Come to Your Home"
        highlight="Across Mumbai"
        subtitle="Serving 50+ areas across Mumbai, Thane & Navi Mumbai — our network grows every month."
        showCTA
      />

      {/* Zone cards */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
            {serviceAreas.map((zone, zi) => (
              <motion.div
                key={zone.zone}
                custom={zi}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.05)] overflow-hidden"
              >
                {/* Zone header */}
                <div className="flex items-center gap-3 px-6 py-4 border-b border-[#F1F5F9]" style={{ backgroundColor: zone.bg }}>
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: zone.color }} aria-hidden="true" />
                  <h2 className="font-bold text-lg" style={{ color: zone.color, fontFamily: 'Manrope, sans-serif' }}>
                    {zone.zone}
                  </h2>
                  <span className="ml-auto text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ backgroundColor: `${zone.color}20`, color: zone.color }}>
                    {zone.areas.length} areas
                  </span>
                </div>
                {/* Areas */}
                <div className="p-6">
                  <div className="flex flex-wrap gap-2.5">
                    {zone.areas.map((area) => (
                      <span
                        key={area}
                        className="px-3.5 py-1.5 rounded-xl text-sm font-medium border transition-all hover:shadow-sm cursor-default"
                        style={{ backgroundColor: zone.bg, color: zone.color, borderColor: `${zone.color}25` }}
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Not in list section */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-[0_8px_48px_rgba(0,0,0,0.07)]">
              <div className="text-5xl mb-5">📍</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3" >
                Don't See Your Area?
              </h2>
              <p className="text-[#64748B] text-lg mb-6">
                We are expanding rapidly across Mumbai. WhatsApp us your pincode and we'll confirm if we can serve you — often within minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:opacity-90 transition-opacity">
                  <FaWhatsapp size={20} /> Check Your Pincode
                </a>
                <a href="tel:+918762697832"
                  className="flex items-center justify-center gap-2 bg-[#0F6CBD] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:bg-[#0A5299] transition-colors">
                  <FiPhone size={18} /> Call Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services available */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-3" >
              Services Available Across All Areas
            </h2>
            <p className="text-[#64748B] mb-8">All our services are available across every area we serve</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                '🏃 Home Physiotherapy', '👩‍⚕️ Nursing Care', '👴 Elder Care',
                '🏥 Post Surgery Rehab', '🧠 Stroke Rehabilitation',
                '🏅 Sports Injury Rehab', '🦴 Orthopedic Rehab',
              ].map((s) => (
                <span key={s} className="px-4 py-2 bg-[#E8F3FC] text-[#0F6CBD] text-sm font-semibold rounded-2xl border border-[#0F6CBD]/20">
                  {s}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Link to="/services" className="inline-flex items-center gap-2 bg-[#0F6CBD] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:bg-[#0A5299] transition-colors">
                View All Services →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

