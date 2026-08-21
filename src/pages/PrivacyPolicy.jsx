import { motion } from 'framer-motion'
import SEOHead from '../seo/SEOHead'

const sections = [
  {
    title: '1. Information We Collect',
    content: [
      'When you use Curexhealth\'s website or services, we may collect the following types of information:',
      '**Personal Identification Information:** Name, mobile number, email address, and residential address (for service delivery).',
      '**Health Information:** Medical history, current health conditions, and details relevant to the healthcare service you require. This information is collected solely to provide appropriate care.',
      '**Usage Data:** IP address, browser type, pages visited, and session duration — collected automatically through cookies and analytics tools.',
      '**Communication Data:** Messages, call recordings (with consent), and WhatsApp communications made through our booking and support channels.',
    ],
  },
  {
    title: '2. How We Use Your Information',
    content: [
      'We use the information we collect for the following purposes:',
      '**Service Delivery:** To match you with an appropriate healthcare professional and coordinate your home visit.',
      '**Communication:** To confirm bookings, send appointment reminders, and provide service updates.',
      '**Quality Assurance:** To monitor and improve the quality of care provided by our professionals.',
      '**Legal Compliance:** To comply with applicable healthcare regulations and legal obligations in India.',
      '**Marketing:** With your consent, to send relevant healthcare information, service updates, and promotional content. You may opt out at any time.',
    ],
  },
  {
    title: '3. How We Protect Your Information',
    content: [
      'Curexhealth implements industry-standard security measures to protect your personal and health information:',
      '**Data Encryption:** All data transmitted through our website is encrypted using SSL/TLS technology.',
      '**Access Control:** Patient data is accessible only to the assigned healthcare professional and authorised Curexhealth staff members.',
      '**Confidentiality Agreements:** All professionals and staff are bound by strict confidentiality agreements.',
      '**Secure Storage:** Patient records are stored on secure, access-controlled servers.',
      'Despite these measures, no system is completely infallible. In the unlikely event of a data breach, we will notify affected users promptly in accordance with applicable laws.',
    ],
  },
  {
    title: '4. Sharing Your Information',
    content: [
      'We do not sell, rent, or trade your personal information to third parties. We may share your information only in the following circumstances:',
      '**Healthcare Professionals:** Your relevant medical information is shared with the assigned professional to enable appropriate care delivery.',
      '**Legal Requirements:** When required by law, court order, or government authority.',
      '**Service Partners:** We may share anonymised, aggregated data with trusted analytics and technology partners who assist in operating our platform.',
      '**Emergency Situations:** In a medical emergency, relevant information may be shared with emergency services to protect your safety.',
    ],
  },
  {
    title: '5. Cookies & Tracking',
    content: [
      'Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us:',
      '— Remember your preferences and personalise your experience',
      '— Analyse website traffic and usage patterns',
      '— Improve our services based on user behaviour',
      'You may disable cookies through your browser settings. Please note that disabling cookies may affect the functionality of certain website features.',
    ],
  },
  {
    title: '6. Your Rights',
    content: [
      'As a user of Curexhealth\'s services, you have the following rights regarding your personal data:',
      '**Right to Access:** Request a copy of the personal information we hold about you.',
      '**Right to Correction:** Request correction of inaccurate or incomplete information.',
      '**Right to Deletion:** Request deletion of your personal data, subject to legal retention requirements.',
      '**Right to Withdraw Consent:** Withdraw consent for marketing communications at any time.',
      'To exercise any of these rights, please contact us at privacy@curexhealth.com.',
    ],
  },
  {
    title: '7. Data Retention',
    content: [
      'We retain patient data for a minimum of 7 years as required by healthcare regulations in India. After this period, data is securely deleted unless retention is required for ongoing legal or healthcare purposes.',
      'Anonymised aggregate data may be retained indefinitely for research and service improvement purposes.',
    ],
  },
  {
    title: '8. Changes to This Policy',
    content: [
      'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify users of significant changes via email or a prominent notice on our website. The date of the latest revision is indicated at the bottom of this page.',
      'Continued use of our services after any such changes constitutes your acceptance of the revised policy.',
    ],
  },
  {
    title: '9. Contact Us',
    content: [
      'If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:',
      '**Email:** privacy@curexhealth.com',
      '**Phone:** +91 9535659295',
      '**Address:** Curexhealth, Mumbai, Maharashtra, India',
    ],
  },
]

export default function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy | Curexhealth Home Healthcare Mumbai"
        description="Curexhealth's Privacy Policy — how we collect, use, protect, and handle your personal and health information when you use our home healthcare services in Mumbai."
        canonical="/privacy-policy"
        noIndex={true}
      />

      <section className="bg-gradient-to-br from-[#E8F3FC] via-white to-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-[#E8F3FC] text-[#0F6CBD] font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
              🔒 Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4 leading-tight" >
              Privacy Policy
            </h1>
            <p className="text-[#64748B] text-lg mb-2">
              Effective Date: <strong>1 January 2024</strong> | Last Updated: <strong>1 August 2026</strong>
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              Curexhealth is committed to protecting your privacy and maintaining the confidentiality of your personal and medical information. This Privacy Policy explains how we collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col gap-10">
            {sections.map((sec, i) => (
              <motion.div
                key={sec.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.04 }}
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
    </>
  )
}


