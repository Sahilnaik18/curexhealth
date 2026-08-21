import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus, FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import PageHero from '../components/common/PageHero'
import SEOHead from '../seo/SEOHead'
import { PAGE_SEO } from '../seo/seoConfig'
import { localBusinessSchema, faqSchema, breadcrumbSchema } from '../seo/schemas'

const faqCategories = [
  {
    category: 'General',
    icon: '💬',
    faqs: [
      { q: 'What is Curexhealth?', a: 'Curexhealth is Mumbai\'s premium home healthcare company. We connect patients with certified physiotherapists, nurses, and healthcare professionals who visit your home to provide medical-grade care across 50+ areas in Mumbai.' },
      { q: 'Which areas in Mumbai do you serve?', a: 'We serve 50+ areas across Mumbai including Bandra, Andheri, Juhu, Powai, Malad, Borivali, Thane, Navi Mumbai, Dadar, Worli, Chembur, Kurla, Ghatkopar, Goregaon, and many more. Contact us to confirm availability in your area.' },
      { q: 'What are your working hours?', a: 'Our services are available 7 days a week from 8 AM to 8 PM. For emergency nursing care, we can often arrange services outside standard hours. Contact our helpline to check availability.' },
      { q: 'How quickly can you send a professional to my home?', a: 'For urgent requests, we aim to dispatch a professional within 2–4 hours. For scheduled appointments, you can book up to 7 days in advance. Emergency nursing care is available within 1–2 hours.' },
    ],
  },
  {
    category: 'Booking & Payment',
    icon: '📅',
    faqs: [
      { q: 'How do I book a home healthcare service?', a: 'You can book in 3 easy ways: (1) Call our helpline at +91 9535659295, (2) WhatsApp us, or (3) Fill the booking form on our website. Our coordinator will confirm your appointment within 15 minutes.' },
      { q: 'What are your payment options?', a: 'We accept UPI, bank transfer, credit/debit cards, and cash. Payment can be made after the session is completed for most services. For nursing care packages, advance payment may be required.' },
      { q: 'Do you accept health insurance?', a: 'We work with several major insurance providers and TPAs. We assist with documentation required for insurance claims. Please contact our team with your insurance details for specific coverage information.' },
      { q: 'Is there a cancellation fee?', a: 'You can cancel or reschedule up to 4 hours before your appointment at no charge. Cancellations within 4 hours may incur a nominal cancellation fee. Please refer to our Cancellation Policy for full details.' },
    ],
  },
  {
    category: 'About Our Professionals',
    icon: '👨‍⚕️',
    faqs: [
      { q: 'Are all your professionals verified?', a: 'Absolutely. Every Curexhealth professional undergoes a rigorous 10-step vetting process including credential verification, criminal background checks, clinical skills assessment, and regular performance reviews. We accept only the top 10% of applicants.' },
      { q: 'What qualifications do your physiotherapists have?', a: 'All physiotherapists are BPT (Bachelor of Physiotherapy) or MPT (Master of Physiotherapy) qualified from recognised Indian universities. Many hold additional certifications in specialised areas such as neurology, orthopaedics, or sports physiotherapy.' },
      { q: 'Can I request the same professional for future sessions?', a: 'Yes. After your first session, you can request the same professional for continuity of care. We believe consistent caregiver-patient relationships lead to significantly better outcomes.' },
      { q: 'What equipment do professionals bring to home visits?', a: 'Physiotherapists bring portable TENS/EMS units, ultrasound therapy devices, resistance bands, hot/cold packs, and all relevant clinical tools. Nurses bring their complete kit including wound care supplies, IV equipment, and medication.' },
    ],
  },
  {
    category: 'Services',
    icon: '🏥',
    faqs: [
      { q: 'What services does Curexhealth offer?', a: 'We offer: Home Physiotherapy, Nursing Care, Elder Care, Post Surgery Rehabilitation, Stroke Rehabilitation, Sports Injury Rehabilitation, and Orthopedic Rehabilitation — all delivered at your home across Mumbai.' },
      { q: 'Can I book physiotherapy and nursing care together?', a: 'Yes. Many patients benefit from combined care packages. We coordinate multiple services seamlessly — for example, a nurse for wound care and a physiotherapist for mobility — ensuring a fully integrated care experience.' },
      { q: 'Do you provide physiotherapy for children?', a: 'Yes. We provide paediatric physiotherapy for children with developmental delays, cerebral palsy, torticollis, and post-injury conditions. Our therapists are experienced in age-appropriate therapeutic approaches for children.' },
      { q: 'Is home physiotherapy effective for serious conditions?', a: 'Yes. Multiple clinical studies demonstrate that home physiotherapy is equally effective as clinic-based care for most conditions. Patients often show higher compliance and faster recovery due to personalised attention and the comfort of their home environment.' },
    ],
  },
  {
    category: 'Safety & Quality',
    icon: '🛡️',
    faqs: [
      { q: 'What safety protocols do professionals follow?', a: 'All professionals follow strict infection control protocols including hand hygiene compliance, equipment sanitisation before and after each session, use of PPE when required, and adherence to clinical best practices. Patient safety is always our first priority.' },
      { q: 'What happens if I am not satisfied with the service?', a: 'We offer a 100% satisfaction guarantee. If you are not fully satisfied with any session, contact us immediately and we will arrange a replacement professional or refund at no additional cost to you.' },
      { q: 'Is my personal and medical information secure?', a: 'Yes. Curexhealth strictly adheres to data protection guidelines. All patient information is handled confidentially and is never shared with third parties without explicit consent. Please see our Privacy Policy for complete details.' },
    ],
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border border-[#E2E8F0] rounded-2xl overflow-hidden bg-white shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.07)] transition-shadow duration-200">
      <button
        className="w-full flex items-start justify-between gap-4 p-5 sm:p-6 text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-base leading-snug transition-colors ${isOpen ? 'text-[#0F6CBD]' : 'text-[#0F172A]'}`}
          
        >
          {faq.q}
        </span>
        <span className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${isOpen ? 'bg-[#0F6CBD] text-white' : 'bg-[#F1F5F9] text-[#64748B]'}`}
          aria-hidden="true"
        >
          {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="px-5 sm:px-6 pb-5 sm:pb-6">
              <div className="h-px bg-[#F1F5F9] mb-4" aria-hidden="true" />
              <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openItems, setOpenItems] = useState({ '0-0': true })
  const [activeCategory, setActiveCategory] = useState(0)
  const seo = PAGE_SEO.faq

  // Flatten all FAQs for schema
  const allFaqs = faqCategories.flatMap(c => c.faqs.map(f => ({ question: f.q, answer: f.a })))
  const toggle = (key) => setOpenItems(prev => ({ ...prev, [key]: !prev[key] }))

  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          faqSchema(allFaqs),
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'FAQ', path: '/faq' },
          ]),
        ]}
      />

      {/* Hero */}
      <PageHero
        badge="❓ Frequently Asked Questions"
        title="Got Questions?"
        highlight="We've Got Answers."
        subtitle="Everything you need to know about home healthcare in Mumbai with Curexhealth."
      />

      {/* FAQ content */}
      <section className="py-14 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* Category sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 flex flex-col gap-2">
                <p className="text-[#94A3B8] text-xs font-semibold uppercase tracking-widest mb-2">Categories</p>
                {faqCategories.map((cat, i) => (
                  <button
                    key={cat.category}
                    onClick={() => setActiveCategory(i)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold text-left transition-all duration-150 ${
                      activeCategory === i
                        ? 'bg-[#E8F3FC] text-[#0F6CBD]'
                        : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F6CBD]'
                    }`}
                  >
                    <span>{cat.icon}</span>
                    {cat.category}
                  </button>
                ))}
              </div>
            </div>

            {/* FAQ list */}
            <div className="lg:col-span-3">
              {faqCategories.map((cat, ci) => (
                <div key={cat.category} className={activeCategory !== ci ? 'hidden' : ''}>
                  <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6 flex items-center gap-2" >
                    <span>{cat.icon}</span> {cat.category}
                  </h2>
                  <div className="flex flex-col gap-3">
                    {cat.faqs.map((faq, fi) => {
                      const key = `${ci}-${fi}`
                      return (
                        <motion.div key={faq.q} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: fi * 0.05 }}>
                          <FAQItem faq={faq} isOpen={!!openItems[key]} onToggle={() => toggle(key)} />
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="py-14 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-gradient-to-br from-[#0F6CBD] to-[#00B894] rounded-3xl p-8 sm:p-10 text-white">
              <h2 className="text-2xl sm:text-3xl font-extrabold mb-3" >
                Still have questions?
              </h2>
              <p className="text-white/80 mb-7 text-lg">
                Our care coordinators are here to help — 7 days a week, 8 AM to 8 PM.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918762697832"
                  className="flex items-center justify-center gap-2 bg-white text-[#0F6CBD] font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                  <FiPhone size={18} /> Call Us Now
                </a>
                <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-white/15 border-2 border-white text-white font-bold px-7 py-3.5 rounded-2xl hover:bg-white/25 transition-colors">
                  <FaWhatsapp size={20} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

