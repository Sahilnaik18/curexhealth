import ServicePageTemplate from '../../components/services/ServicePageTemplate'
import SEOHead from '../../seo/SEOHead'
import { PAGE_SEO } from '../../seo/seoConfig'
import { medicalServiceSchema, breadcrumbSchema } from '../../seo/schemas'

const benefits = [
  { emoji: '❤️', title: 'Dignity & Respect', desc: 'We treat every senior with the highest dignity, respect, and cultural sensitivity — because they deserve nothing less.' },
  { emoji: '🏠', title: 'Familiar Surroundings', desc: 'Seniors thrive best at home. Familiar surroundings reduce anxiety, improve mood, and support faster recovery.' },
  { emoji: '👨‍👩‍👧', title: 'Family Peace of Mind', desc: 'We keep families informed and involved, providing daily updates and transparent care reports.' },
  { emoji: '💊', title: 'Medication Adherence', desc: 'Our caregivers ensure accurate, timely medication administration with full documentation.' },
  { emoji: '🚶', title: 'Mobility & Independence', desc: 'Targeted mobility exercises and assistive training help seniors maintain independence for longer.' },
  { emoji: '🧠', title: 'Cognitive Stimulation', desc: 'Structured activities and engagement programmes support cognitive health and emotional wellbeing.' },
]

const conditions = [
  'Age-related mobility decline', 'Post-hip/knee replacement care', 'Dementia & Alzheimer\'s',
  'Parkinson\'s disease', 'Diabetes management', 'Hypertension monitoring',
  'Arthritis & joint pain', 'Fall prevention', 'Post-stroke recovery',
  'General frailty & weakness', 'Chronic illness management', 'End-of-life & palliative care',
]

const processSteps = [
  { step: '01', emoji: '📞', title: 'Initial Consultation', desc: 'Call us to discuss your senior\'s health condition, care needs, and family expectations.' },
  { step: '02', emoji: '📋', title: 'Care Plan Design', desc: 'Our care coordinator develops a personalised care plan tailored to your senior\'s medical and personal needs.' },
  { step: '03', emoji: '👴', title: 'Caregiver Introduction', desc: 'Your assigned caregiver is introduced to your family and the senior before care begins.' },
  { step: '04', emoji: '🔄', title: 'Ongoing Review', desc: 'Weekly care reviews, health assessments, and plan adjustments ensure continuously improving care.' },
]

const faqs = [
  { q: 'What is the difference between elder care and nursing care?', a: 'Elder care focuses on daily living assistance, mobility support, companionship, and non-medical care needs, while nursing care is clinically focused. We often combine both services for seniors who need holistic support.' },
  { q: 'Do you provide live-in caregivers for seniors?', a: 'Yes, we offer live-in, 24-hour, and daytime caregivers depending on the level of support required. All caregivers are trained, verified, and matched based on the senior\'s personality and medical needs.' },
  { q: 'How do you handle seniors with dementia or Alzheimer\'s?', a: 'Our caregivers are specifically trained in dementia care techniques including validation therapy, structured routines, safe wandering management, and family caregiver support. Patience and empathy are central to our approach.' },
  { q: 'Can you provide both elder care and physiotherapy together?', a: 'Absolutely. Many of our seniors benefit from combined care packages — a caregiver for daily assistance alongside a physiotherapist for mobility and strength. We coordinate the two services seamlessly.' },
]

const relatedServices = [
  { slug: '/services/nursing-care', emoji: '👩‍⚕️', title: 'Nursing Care', desc: 'Professional nursing for medical and clinical care needs.', color: '#00B894', bg: '#E0F7F3' },
  { slug: '/services/home-physiotherapy', emoji: '🏃', title: 'Home Physiotherapy', desc: 'Expert physiotherapy to improve mobility and reduce pain.', color: '#0F6CBD', bg: '#E8F3FC' },
  { slug: '/services/post-surgery-rehabilitation', emoji: '🏥', title: 'Post Surgery Rehab', desc: 'Recovery care after orthopaedic or other surgeries.', color: '#5B4FCF', bg: '#EEF0FD' },
]

export default function ElderCare() {
  return (
    <ServicePageTemplate
      seoTitle="Elder Care at Home in Mumbai | Senior Care Services – Curexhealth"
      seoDescription="Compassionate elder care services at home in Mumbai. Curexhealth provides trained caregivers for senior citizens — daily assistance, mobility support, medication management, dementia care & more."
      slug="/services/elder-care"
      badge="👴 Elder Care"
      heroTitle="Compassionate Elder Care"
      heroHighlight="at Home in Mumbai"
      heroSubtitle="Trained caregivers and healthcare specialists provide comprehensive, dignified care for senior citizens — in the comfort and familiarity of home."
      serviceColor="#F59E0B"
      serviceBg="#FEF6E4"
      overviewTitle="Premium Elder Care — Where Every Senior Is Family"
      overviewBody={[
        'Curexhealth\'s elder care service is designed around one core belief: every senior deserves to age with dignity, comfort, and expert support in their own home. Our trained caregivers and healthcare professionals provide comprehensive daily assistance, health monitoring, and compassionate companionship.',
        'From mobility support and medication management to dementia care and fall prevention — we create personalised care plans that respect each senior\'s independence while ensuring their safety and health.',
      ]}
      features={[
        'Personalised care plans',
        'Daily mobility assistance',
        'Medication management',
        'Companion & social care',
        'Fall prevention programme',
        'Dementia & Alzheimer care',
        'Physiotherapy integration',
        'Health vitals monitoring',
        'Nutritional guidance',
        'Personal hygiene assistance',
        'Family progress reporting',
        'Emergency response protocol',
      ]}
      benefitTitle="Why Home Elder Care is Best for Seniors"
      benefits={benefits}
      conditions={conditions}
      processSteps={processSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
