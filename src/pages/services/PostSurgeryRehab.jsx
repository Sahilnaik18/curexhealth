import ServicePageTemplate from '../../components/services/ServicePageTemplate'
import SEOHead from '../../seo/SEOHead'
import { PAGE_SEO } from '../../seo/seoConfig'
import { medicalServiceSchema, breadcrumbSchema } from '../../seo/schemas'

const benefits = [
  { emoji: '⚡', title: 'Faster Recovery', desc: 'Early, targeted physiotherapy significantly reduces recovery time and helps you return to normal life sooner.' },
  { emoji: '😌', title: 'Reduced Pain', desc: 'Evidence-based techniques including manual therapy and electrotherapy help manage post-operative pain effectively.' },
  { emoji: '💪', title: 'Restore Strength & Mobility', desc: 'Progressive exercises rebuild muscle strength and joint range of motion lost during surgery and immobilisation.' },
  { emoji: '🚫', title: 'Prevent Complications', desc: 'Active rehabilitation prevents deep vein thrombosis, muscle atrophy, and post-surgical stiffness.' },
  { emoji: '🏠', title: 'Recover at Home', desc: 'Home-based rehabilitation is more comfortable, lowers infection risk, and often leads to better adherence.' },
  { emoji: '📊', title: 'Goal-Based Milestones', desc: 'Clear recovery milestones and regular assessments keep you informed and motivated throughout rehabilitation.' },
]

const conditions = [
  'Knee replacement (TKR)', 'Hip replacement (THR)', 'ACL reconstruction',
  'Rotator cuff repair', 'Spinal surgery recovery', 'Cardiac surgery rehab',
  'Abdominal surgery recovery', 'Joint arthroscopy', 'Fracture fixation surgery',
  'Ankle/foot surgery', 'Shoulder surgery', 'Wrist & hand surgery',
]

const processSteps = [
  { step: '01', emoji: '📋', title: 'Pre-Surgery Consultation', desc: 'Optional pre-surgery physio assessment to prepare your body and set baseline measurements.' },
  { step: '02', emoji: '🏥', title: 'Post-Surgery Clearance', desc: 'Once cleared by your surgeon, we begin home rehab within 24–48 hours of discharge.' },
  { step: '03', emoji: '💪', title: 'Progressive Rehab', desc: 'Staged rehabilitation — from basic mobility to full strength restoration — at your pace at home.' },
  { step: '04', emoji: '🎯', title: 'Return to Function', desc: 'Final phase focuses on returning you to daily activities, work, or sport safely and confidently.' },
]

const faqs = [
  { q: 'When can I start post-surgery physiotherapy at home?', a: 'This depends on your surgery type and your surgeon\'s clearance. For most procedures, home physiotherapy can begin within 24–72 hours of discharge. We coordinate directly with your surgical team when needed.' },
  { q: 'What surgeries do you support for home rehabilitation?', a: 'We support rehabilitation after all major and minor surgeries including joint replacements (hip, knee), spinal surgery, cardiac surgery, abdominal procedures, ACL and rotator cuff repairs, and fracture fixation surgeries.' },
  { q: 'Will the physiotherapist coordinate with my surgeon?', a: 'Yes. Our therapists follow surgeon-prescribed protocols and can liaise with your surgical team to ensure the rehabilitation plan is safe, appropriate, and aligned with your post-operative instructions.' },
  { q: 'How long does post-surgery rehabilitation take?', a: 'Recovery timelines vary by surgery type and individual health. Minor procedures may require 4–6 weeks of rehab; major joint replacements typically need 3–6 months. Your therapist will provide a clear timeline after assessment.' },
]

const relatedServices = [
  { slug: '/services/home-physiotherapy', emoji: '🏃', title: 'Home Physiotherapy', desc: 'Comprehensive physiotherapy for all conditions at home.', color: '#0F6CBD', bg: '#E8F3FC' },
  { slug: '/services/orthopedic-rehabilitation', emoji: '🦴', title: 'Orthopedic Rehab', desc: 'Specialised rehab for bone and joint conditions.', color: '#FF7675', bg: '#FEF0F0' },
  { slug: '/services/nursing-care', emoji: '👩‍⚕️', title: 'Nursing Care', desc: 'Professional wound care and post-operative nursing.', color: '#00B894', bg: '#E0F7F3' },
]

export default function PostSurgeryRehab() {
  return (
    <ServicePageTemplate
      seoTitle="Post Surgery Rehabilitation at Home in Mumbai – Curexhealth"
      seoDescription="Expert post-surgery rehabilitation at home in Mumbai. Curexhealth provides certified physiotherapists for knee replacement, hip replacement, spinal surgery, cardiac rehab & more. Fast recovery at home."
      slug="/services/post-surgery-rehabilitation"
      badge="🏥 Post Surgery Rehab"
      heroTitle="Post Surgery Rehabilitation"
      heroHighlight="at Home — Recover Faster"
      heroSubtitle="Expert physiotherapy and recovery care after surgery, delivered at your home in Mumbai. Our certified therapists help you regain strength, mobility, and independence safely."
      serviceColor="#5B4FCF"
      serviceBg="#EEF0FD"
      overviewTitle="Expert Post-Surgical Recovery at Your Home"
      overviewBody={[
        'Surgery is just the first step — recovery is where the real work happens. Curexhealth\'s post-surgery rehabilitation programme brings certified physiotherapists to your home within 24–48 hours of your hospital discharge, ensuring your recovery begins immediately and progresses safely.',
        'Our therapists follow internationally validated post-operative protocols and work in coordination with your surgical team. From wound management support to progressive strength and mobility restoration — every session is designed to get you back to full function as quickly and safely as possible.',
      ]}
      features={[
        'Post-operative physiotherapy',
        'Wound care support',
        'Pain management therapy',
        'Muscle strength rebuilding',
        'Joint mobility restoration',
        'Scar tissue mobilisation',
        'Breathing & lung exercises',
        'DVT prevention exercises',
        'Gait & balance retraining',
        'ADL (daily living) training',
        'Coordination with surgical team',
        'Progressive return-to-function plan',
      ]}
      benefitTitle="The Curexhealth Advantage for Post-Surgical Rehab"
      benefits={benefits}
      conditions={conditions}
      processSteps={processSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
