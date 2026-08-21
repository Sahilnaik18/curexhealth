import { motion } from 'framer-motion'
import SEOHead from '../seo/SEOHead'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const policies = [
  {
    icon: '✅',
    title: 'Free Cancellation — 4+ Hours Before',
    desc: 'Cancel or reschedule your appointment at no charge if you notify us at least 4 hours before the scheduled visit time.',
    bg: '#E0F7F3',
    color: '#00B894',
  },
  {
    icon: '⚠️',
    title: 'Late Cancellation — Within 4 Hours',
    desc: 'Cancellations made less than 4 hours before the appointment may incur a nominal cancellation fee of ₹200–₹500 depending on the service.',
    bg: '#FEF6E4',
    color: '#F59E0B',
  },
  {
    icon: '🚫',
    title: 'No-Show Policy',
    desc: 'If the professional arrives and the patient is unavailable without prior notice, the full session fee will be charged.',
    bg: '#FEF0F0',
    color: '#FF7675',
  },
  {
    icon: '🔄',
    title: 'Rescheduling',
    desc: 'Appointments can be rescheduled at no charge with at least 4 hours\' notice. Rescheduling is subject to availability.',
    bg: '#E8F3FC',
    color: '#0F6CBD',
  },
]

const sections = [
  {
    title: '1. How to Cancel or Reschedule',
    content: [
      'To cancel or reschedule your appointment, contact us through any of the following channels:',
      '— Call us at +91 9535659295',
      '— WhatsApp us at +91 9535659295',
      '— Email us at care@curexhealth.com',
      'Please provide your name, booking reference (if available), and the reason for cancellation or rescheduling. Cancellations must be explicitly confirmed by our team — simply not being available does not constitute a cancellation.',
    ],
  },
  {
    title: '2. Refund Policy for Prepaid Packages',
    content: [
      'If you have purchased a prepaid session package:',
      '**Unused Sessions:** Unused sessions in a prepaid package are fully refundable if the package was not yet commenced and cancellation is requested within 48 hours of purchase.',
      '**Partially Used Packages:** Refunds for partially used packages will be calculated on a pro-rata basis, less any applicable cancellation fees for sessions cancelled within 4 hours.',
      '**Refund Processing:** Approved refunds are processed within 5–7 business days to the original payment method.',
      'Packages purchased during promotional periods may have different refund terms, which will be communicated at the time of purchase.',
    ],
  },
  {
    title: '3. Cancellation by Curexhealth',
    content: [
      'In rare circumstances, Curexhealth may need to cancel or reschedule an appointment due to professional unavailability, inclement weather, or other force majeure events.',
      'In such cases, we will:',
      '— Notify you as early as possible',
      '— Offer an immediate reschedule at no additional charge',
      '— Provide a full refund for prepaid sessions if rescheduling is not possible',
      'We sincerely apologise for any inconvenience caused by such circumstances.',
    ],
  },
  {
    title: '4. Emergency Cancellations',
    content: [
      'We understand that medical emergencies and unforeseen situations can arise. In genuine emergency situations (hospitalisation, family emergency, etc.), cancellation fees may be waived at the discretion of our care team.',
      'To request an emergency waiver, please contact us immediately and provide a brief explanation. Our team will review all such requests with empathy and fairness.',
    ],
  },
  {
    title: '5. Service-Specific Policies',
    content: [
      '**Nursing Care (24-hour / Live-in packages):** For round-the-clock nursing packages, a minimum 24 hours\' notice is required for cancellation. Cancellations with less than 24 hours\' notice will incur a fee equivalent to 1 day of the agreed package rate.',
      '**Elder Care packages:** Long-term elder care arrangements require 7 days\' written notice for termination. This allows time to ensure a safe transition of care for the patient.',
      '**Single-session services:** Standard 4-hour cancellation policy applies.',
    ],
  },
  {
    title: '6. Contact for Cancellations',
    content: [
      'For all cancellations, rescheduling, and refund queries, please reach out to:',
      '**Phone / WhatsApp:** +91 9535659295',
      '**Email:** care@curexhealth.com',
      '**Hours:** Monday to Sunday, 8 AM to 8 PM',
    ],
  },
]

export default function CancellationPolicy() {
  return (
    <>
      <SEOHead
        title="Cancellation & Refund Policy | Curexhealth Home Healthcare Mumbai"
        description="Curexhealth's cancellation and refund policy for home healthcare services in Mumbai. Free cancellation window, rescheduling options, and refund process explained."
        canonical="/cancellation-policy"
        noIndex={true}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-[#E8F3FC] via-white to-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-[#E8F3FC] text-[#0F6CBD] font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
              🔄 Policy
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4 leading-tight" >
              Cancellation &<br />Refund Policy
            </h1>
            <p className="text-[#64748B] text-lg mb-2">
              Effective Date: <strong>1 January 2024</strong> | Last Updated: <strong>1 August 2026</strong>
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              We understand that plans change. Our cancellation policy is designed to be fair to both our patients and our healthcare professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Summary cards */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {policies.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: p.bg, borderColor: `${p.color}25` }}
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-bold text-[#0F172A] text-base mb-2" >{p.title}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed policy */}
      <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-10">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-[#F1F5F9] pb-10 last:border-0"
              >
                <h2 className="text-xl font-bold text-[#0F172A] mb-4" >
                  {sec.title}
                </h2>
                <div className="flex flex-col gap-3">
                  {sec.content.map((para, pi) => (
                    <p key={pi} className="text-[#475569] text-base leading-relaxed">
                      {para.startsWith('**') ? (
                        <>
                          <strong className="text-[#334155] font-semibold">{para.match(/\*\*(.*?)\*\*/)?.[1]}</strong>
                          {para.replace(/\*\*(.*?)\*\*/, '')}
                        </>
                      ) : para}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick contact */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="bg-white rounded-3xl p-8 border border-[#E2E8F0] shadow-[0_8px_48px_rgba(0,0,0,0.07)]">
              <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3" >
                Need to Cancel or Reschedule?
              </h2>
              <p className="text-[#64748B] mb-7">Contact us immediately — we'll make it easy for you.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+918762697832"
                  className="flex items-center justify-center gap-2 bg-[#0F6CBD] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:bg-[#0A5299] transition-colors">
                  <FiPhone size={18} /> Call Us
                </a>
                <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:opacity-90 transition-opacity">
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


