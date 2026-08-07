import { motion } from 'framer-motion'
import SEOHead from '../seo/SEOHead'

const sections = [
  {
    title: '1. Acceptance of Terms',
    content: [
      'By accessing or using Curexhealth\'s website, mobile platform, or services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.',
      'These Terms constitute a legally binding agreement between you ("User", "Patient", "Client") and Curexhealth ("Company", "We", "Us"). These terms govern your use of all services provided by Curexhealth, including home physiotherapy, nursing care, elder care, and all other healthcare services.',
    ],
  },
  {
    title: '2. Services Provided',
    content: [
      'Curexhealth provides home-based healthcare services including but not limited to:',
      '— Home Physiotherapy',
      '— Nursing Care',
      '— Elder Care',
      '— Post Surgery Rehabilitation',
      '— Stroke Rehabilitation',
      '— Sports Injury Rehabilitation',
      '— Orthopedic Rehabilitation',
      'All services are provided by independently verified healthcare professionals. Curexhealth acts as a platform connecting patients with qualified professionals and is responsible for ensuring the quality and credentials of all professionals on our network.',
    ],
  },
  {
    title: '3. Booking & Appointments',
    content: [
      'Bookings may be made via phone, WhatsApp, or through our website. All appointments are subject to availability of qualified professionals in your area.',
      'We will confirm your appointment within 15 minutes of booking. In rare cases where a professional is unavailable for your selected time, we will offer alternative slots.',
      'Patients are responsible for ensuring a safe, accessible environment for the healthcare professional to work in. Any health information provided at the time of booking must be accurate and complete.',
    ],
  },
  {
    title: '4. Fees & Payments',
    content: [
      'Service fees are communicated at the time of booking. Fees are payable upon completion of each session unless otherwise agreed in a package arrangement.',
      'We accept UPI, bank transfer, credit/debit cards, and cash. Invoices are provided for all services.',
      'Package fees paid in advance are subject to our Cancellation Policy. Please review the Cancellation Policy before making advance payments.',
    ],
  },
  {
    title: '5. Patient Responsibilities',
    content: [
      'As a patient or client, you agree to:',
      '— Provide accurate and complete medical history and health information',
      '— Ensure a safe and accessible space for the healthcare professional to work',
      '— Be present or ensure an adult is present during the session',
      '— Follow the treatment plan and recommendations provided by the professional',
      '— Treat all Curexhealth professionals with respect and dignity',
      '— Notify us of any changes in health condition that may affect the treatment plan',
    ],
  },
  {
    title: '6. Professional Conduct',
    content: [
      'All Curexhealth professionals are bound by a Code of Professional Conduct which requires them to:',
      '— Maintain patient confidentiality at all times',
      '— Provide care that meets established clinical standards',
      '— Report any concerns regarding patient safety promptly',
      '— Maintain appropriate professional boundaries',
      '— Adhere to all infection control and safety protocols',
      'Complaints regarding professional conduct should be reported to our care team immediately at care@curexhealth.com.',
    ],
  },
  {
    title: '7. Medical Disclaimer',
    content: [
      'Curexhealth provides healthcare services through qualified professionals. However, the information provided on our website is for general informational purposes only and does not constitute medical advice.',
      'In a medical emergency, please call 112 (emergency services) immediately. Curexhealth services are not intended as emergency medical care.',
      'Treatment recommendations are the professional opinion of the assigned healthcare professional based on their clinical assessment. Patients are encouraged to consult their primary physician for comprehensive medical guidance.',
    ],
  },
  {
    title: '8. Limitation of Liability',
    content: [
      'To the fullest extent permitted by law, Curexhealth shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.',
      'Our total liability for any claim arising from the services provided shall not exceed the fee paid for the specific service that gave rise to the claim.',
      'We do not guarantee specific treatment outcomes, as healthcare results depend on many individual factors including the patient\'s condition, compliance, and response to treatment.',
    ],
  },
  {
    title: '9. Intellectual Property',
    content: [
      'All content on the Curexhealth website — including text, graphics, logos, and design — is the property of Curexhealth and is protected by applicable intellectual property laws.',
      'You may not reproduce, distribute, or use any content from this website without prior written permission from Curexhealth.',
    ],
  },
  {
    title: '10. Governing Law',
    content: [
      'These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms or the use of our services shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra.',
      'We encourage users to first attempt resolution through our customer care team before pursuing legal action.',
    ],
  },
  {
    title: '11. Changes to Terms',
    content: [
      'Curexhealth reserves the right to modify these Terms and Conditions at any time. Material changes will be communicated via email or a prominent notice on our website. Continued use of our services constitutes acceptance of revised terms.',
    ],
  },
]

export default function TermsAndConditions() {
  return (
    <>
      <SEOHead
        title="Terms and Conditions | Curexhealth Home Healthcare Mumbai"
        description="Curexhealth Terms and Conditions — the rules, obligations, and guidelines governing the use of our home healthcare services in Mumbai."
        canonical="/terms-and-conditions"
        noIndex={true}
      />

      <section className="bg-gradient-to-br from-[#E8F3FC] via-white to-white py-14 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 bg-[#E8F3FC] text-[#0F6CBD] font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
              📄 Legal
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] mb-4 leading-tight" >
              Terms & Conditions
            </h1>
            <p className="text-[#64748B] text-lg mb-2">
              Effective Date: <strong>1 January 2024</strong> | Last Updated: <strong>1 August 2026</strong>
            </p>
            <p className="text-[#475569] text-lg leading-relaxed">
              Please read these Terms and Conditions carefully before using Curexhealth's services. They define your rights and responsibilities as a user of our platform.
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
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="border-b border-[#F1F5F9] pb-10 last:border-0"
              >
                <h2 className="text-xl font-bold text-[#0F172A] mb-4" >
                  {sec.title}
                </h2>
                <div className="flex flex-col gap-3">
                  {sec.content.map((para, pi) => (
                    <p key={pi} className="text-[#475569] text-base leading-relaxed">{para}</p>
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


