import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi'
import { FaWhatsapp, FaInstagram, FaFacebookF } from 'react-icons/fa'
import { useBooking } from '../context/BookingContext'
import PageHero from '../components/common/PageHero'
import SEOHead from '../seo/SEOHead'
import { PAGE_SEO } from '../seo/seoConfig'
import { localBusinessSchema, breadcrumbSchema } from '../seo/schemas'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } }),
}

const contactCards = [
  { icon: <FiPhone size={20} />, label: 'Call Us', value: '+91 98765 43210', sub: 'Mon–Sun, 8 AM – 8 PM', href: 'tel:+918762697832', color: '#0F6CBD', bg: '#E8F3FC' },
  { icon: <FaWhatsapp size={20} />, label: 'WhatsApp', value: 'Chat Instantly', sub: 'Fastest response', href: 'https://wa.me/918762697832', color: '#25D366', bg: '#E8F8EF' },
  { icon: <FiMail size={20} />, label: 'Email', value: 'care@curexhealth.com', sub: 'Reply within 4 hours', href: 'mailto:care@curexhealth.com', color: '#E17055', bg: '#FDF0EC' },
  { icon: <FiClock size={20} />, label: 'Working Hours', value: 'Mon–Sun, 8 AM – 8 PM', sub: 'Including public holidays', href: null, color: '#5B4FCF', bg: '#EEF0FD' },
]

const serviceOptions = [
  { value: 'home-physiotherapy', label: 'Home Physiotherapy' },
  { value: 'nursing-care', label: 'Nursing Care' },
  { value: 'elder-care', label: 'Elder Care' },
  { value: 'post-surgery-rehabilitation', label: 'Post Surgery Rehabilitation' },
  { value: 'stroke-rehabilitation', label: 'Stroke Rehabilitation' },
  { value: 'sports-injury-rehabilitation', label: 'Sports Injury Rehabilitation' },
  { value: 'orthopedic-rehabilitation', label: 'Orthopedic Rehabilitation' },
  { value: 'other', label: 'Other / Not Sure' },
]

const quickAreas = [
  'Bandra', 'Andheri', 'Juhu', 'Powai', 'Malad', 'Borivali',
  'Thane', 'Navi Mumbai', 'Dadar', 'Worli', 'Chembur', 'Kurla',
]

export default function Contact() {
  const { openBooking } = useBooking()
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', service: '', area: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!formData.name.trim()) e.name = 'Name is required'
    if (!formData.phone.trim()) e.phone = 'Phone number is required'
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid 10-digit mobile number'
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email address'
    if (!formData.service) e.service = 'Please select a service'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors(prev => ({ ...prev, [e.target.name]: '' }))
  }

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

      {/* Contact cards */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactCards.map((c, i) => (
              <motion.div key={c.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                {c.href ? (
                  <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex flex-col gap-2 p-5 rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.1)] transition-all duration-200 group h-full">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform" style={{ backgroundColor: c.bg, color: c.color }}>{c.icon}</div>
                    <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wide">{c.label}</p>
                    <p className="text-[#0F172A] font-bold text-sm leading-snug group-hover:text-[#0F6CBD] transition-colors" >{c.value}</p>
                    <p className="text-[#94A3B8] text-xs">{c.sub}</p>
                  </a>
                ) : (
                  <div className="flex flex-col gap-2 p-5 rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_2px_12px_rgba(0,0,0,0.04)] h-full">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: c.bg, color: c.color }}>{c.icon}</div>
                    <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-wide">{c.label}</p>
                    <p className="text-[#0F172A] font-bold text-sm leading-snug" >{c.value}</p>
                    <p className="text-[#94A3B8] text-xs">{c.sub}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main form + sidebar */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10">

            {/* Booking form — 3 cols */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-3">
              {/* Booking modal CTA banner */}
              <div className="mb-5 rounded-2xl overflow-hidden">
                <button
                  onClick={openBooking}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left transition-all hover:opacity-95"
                  style={{ background: 'linear-gradient(135deg, #0F6CBD, #00B894)' }}
                >
                  <div>
                    <p className="text-white font-extrabold text-base" >
                      ✨ Use Our Premium Booking Form
                    </p>
                    <p className="text-white/80 text-sm mt-0.5">
                      Step-by-step guided booking — takes 2 minutes
                    </p>
                  </div>
                  <div className="flex-shrink-0 bg-white/20 border border-white/30 text-white font-bold text-sm px-4 py-2.5 rounded-xl hover:bg-white/30 transition-colors whitespace-nowrap">
                    Open Form →
                  </div>
                </button>
              </div>

              <div className="bg-white rounded-3xl p-8 shadow-[0_8px_48px_rgba(0,0,0,0.07)] border border-[#E2E8F0]">
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-20 h-20 rounded-full bg-[#E0F7F3] flex items-center justify-center mx-auto mb-5">
                      <FiCheckCircle size={36} className="text-[#00B894]" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#0F172A] mb-3" >
                      Thank You, {formData.name}!
                    </h3>
                    <p className="text-[#64748B] mb-2 text-base">We've received your request.</p>
                    <p className="text-[#475569] mb-6">Our care coordinator will call you within <strong className="text-[#0F6CBD]">15 minutes</strong> to confirm your booking.</p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
                      <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-2.5 rounded-xl text-sm">
                        <FaWhatsapp size={16} /> Chat on WhatsApp
                      </a>
                      <a href="tel:+918762697832"
                        className="flex items-center justify-center gap-2 bg-[#0F6CBD] text-white font-bold px-5 py-2.5 rounded-xl text-sm">
                        <FiPhone size={15} /> Call Us Now
                      </a>
                    </div>
                    <button onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', service: '', area: '', message: '' }) }}
                      className="text-[#0F6CBD] font-semibold hover:underline text-sm">
                      Submit another request →
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="text-2xl font-extrabold text-[#0F172A] mb-1" >Book a Home Visit</h2>
                      <p className="text-[#64748B] text-sm">Fill the form — we'll call back within 15 minutes to confirm.</p>
                    </div>
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                      {/* Name + Phone */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-[#334155] font-semibold text-sm mb-1.5">Full Name <span className="text-red-500" aria-hidden="true">*</span></label>
                          <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                            placeholder="Your full name" required aria-required="true" aria-invalid={!!errors.name}
                            className={`w-full px-4 py-3 rounded-xl border text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0F6CBD] focus:ring-2 focus:ring-[#0F6CBD]/20 transition-all bg-[#F8FAFC] ${errors.name ? 'border-red-400' : 'border-[#E2E8F0]'}`} />
                          {errors.name && <p role="alert" className="text-red-500 text-xs mt-1">{errors.name}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-[#334155] font-semibold text-sm mb-1.5">Mobile Number <span className="text-red-500" aria-hidden="true">*</span></label>
                          <input id="phone" type="tel" name="phone" value={formData.phone} onChange={handleChange}
                            placeholder="10-digit mobile" required aria-required="true" aria-invalid={!!errors.phone}
                            className={`w-full px-4 py-3 rounded-xl border text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0F6CBD] focus:ring-2 focus:ring-[#0F6CBD]/20 transition-all bg-[#F8FAFC] ${errors.phone ? 'border-red-400' : 'border-[#E2E8F0]'}`} />
                          {errors.phone && <p role="alert" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                        </div>
                      </div>
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-[#334155] font-semibold text-sm mb-1.5">Email <span className="text-[#94A3B8] font-normal">(optional)</span></label>
                        <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                          placeholder="your@email.com" aria-invalid={!!errors.email}
                          className={`w-full px-4 py-3 rounded-xl border text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0F6CBD] focus:ring-2 focus:ring-[#0F6CBD]/20 transition-all bg-[#F8FAFC] ${errors.email ? 'border-red-400' : 'border-[#E2E8F0]'}`} />
                        {errors.email && <p role="alert" className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      {/* Service + Area */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="service" className="block text-[#334155] font-semibold text-sm mb-1.5">Service Required <span className="text-red-500" aria-hidden="true">*</span></label>
                          <select id="service" name="service" value={formData.service} onChange={handleChange}
                            required aria-required="true" aria-invalid={!!errors.service}
                            className={`w-full px-4 py-3 rounded-xl border text-[#0F172A] text-sm focus:outline-none focus:border-[#0F6CBD] focus:ring-2 focus:ring-[#0F6CBD]/20 transition-all bg-[#F8FAFC] cursor-pointer ${errors.service ? 'border-red-400' : 'border-[#E2E8F0]'}`}>
                            <option value="">-- Select service --</option>
                            {serviceOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                          </select>
                          {errors.service && <p role="alert" className="text-red-500 text-xs mt-1">{errors.service}</p>}
                        </div>
                        <div>
                          <label htmlFor="area" className="block text-[#334155] font-semibold text-sm mb-1.5">Your Area <span className="text-[#94A3B8] font-normal">(optional)</span></label>
                          <input id="area" type="text" name="area" value={formData.area} onChange={handleChange}
                            placeholder="e.g. Bandra, Andheri…"
                            className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0F6CBD] focus:ring-2 focus:ring-[#0F6CBD]/20 transition-all bg-[#F8FAFC]" />
                        </div>
                      </div>
                      {/* Message */}
                      <div>
                        <label htmlFor="message" className="block text-[#334155] font-semibold text-sm mb-1.5">Additional Information <span className="text-[#94A3B8] font-normal">(optional)</span></label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange}
                          placeholder="Briefly describe your condition or any specific requirements…"
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-[#E2E8F0] text-[#0F172A] placeholder-[#94A3B8] text-sm focus:outline-none focus:border-[#0F6CBD] focus:ring-2 focus:ring-[#0F6CBD]/20 transition-all resize-none bg-[#F8FAFC]" />
                      </div>
                      <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2.5 bg-[#0F6CBD] text-white font-bold py-4 rounded-2xl text-base shadow-[0_4px_20px_rgba(15,108,189,0.4)] hover:bg-[#0A5299] hover:shadow-[0_8px_32px_rgba(15,108,189,0.5)] transition-all duration-200">
                        <FiSend size={18} /> Request a Callback
                      </motion.button>
                      <p className="text-[#94A3B8] text-xs text-center">🔒 Your information is confidential and never shared with third parties.</p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2 flex flex-col gap-5">

              {/* WhatsApp CTA card */}
              <div className="bg-gradient-to-br from-[#0F6CBD] to-[#00B894] rounded-2xl p-6 text-white">
                <h3 className="font-bold text-xl mb-2" >Prefer to talk directly?</h3>
                <p className="text-white/80 text-sm mb-5">Our care coordinators are ready — Mon to Sun, 8 AM to 8 PM.</p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+918762697832" className="flex items-center gap-3 bg-white text-[#0F6CBD] font-bold px-4 py-3 rounded-xl hover:bg-white/95 transition-colors text-sm">
                    <FiPhone size={17} /> +91 98765 43210
                  </a>
                  <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-[#25D366] text-white font-bold px-4 py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
                    <FaWhatsapp size={18} /> Chat on WhatsApp
                  </a>
                  <a href="mailto:care@curexhealth.com"
                    className="flex items-center gap-3 bg-white/15 border border-white/30 text-white font-bold px-4 py-3 rounded-xl hover:bg-white/25 transition-colors text-sm">
                    <FiMail size={17} /> care@curexhealth.com
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
                    { icon: <FaWhatsapp size={16} />, label: 'WhatsApp', href: 'https://wa.me/918762697832', bg: '#E8F8EF', color: '#25D366' },
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

