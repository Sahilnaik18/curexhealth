import ServicePageTemplate from '../../components/services/ServicePageTemplate'
import SEOHead from '../../seo/SEOHead'
import { PAGE_SEO } from '../../seo/seoConfig'
import { medicalServiceSchema, breadcrumbSchema } from '../../seo/schemas'

const benefits = [
  { emoji: '🏠', title: 'Hospital-Grade Care at Home', desc: 'Receive the same quality of clinical nursing care you would in a hospital — in the comfort of your own home.' },
  { emoji: '🔒', title: 'Certified & Verified Nurses', desc: 'Every nurse is B.Sc/GNM certified, background-checked, and undergoes mandatory clinical skills assessment.' },
  { emoji: '⏰', title: 'Flexible Scheduling', desc: 'Choose from morning, afternoon, or evening shifts. We offer hourly, daily, and round-the-clock nursing packages.' },
  { emoji: '❤️', title: 'Compassionate Approach', desc: 'Our nurses go beyond clinical duties — they offer emotional support, dignity, and genuine compassion to every patient.' },
  { emoji: '📱', title: 'Real-Time Updates', desc: 'Daily care reports and real-time updates shared with family members for complete peace of mind.' },
  { emoji: '💊', title: 'Medication Management', desc: 'Accurate medication administration, injection services, and strict adherence to prescribed dosage schedules.' },
]

const conditions = [
  'Post-operative recovery', 'Diabetic wound care', 'Bed sore management', 'Catheter care',
  'IV infusion therapy', 'Tracheostomy care', 'Nasogastric feeding', 'Cancer care support',
  'ICU step-down care', 'Palliative & end-of-life care', 'Chronic disease management', 'Dementia care',
]

const processSteps = [
  { step: '01', emoji: '📞', title: 'Call or WhatsApp', desc: 'Describe your nursing requirement and patient condition. We respond within 15 minutes.' },
  { step: '02', emoji: '👩‍⚕️', title: 'Nurse Assignment', desc: 'We match you with a certified nurse based on your specific clinical needs and location.' },
  { step: '03', emoji: '🏠', title: 'Professional Arrives', desc: 'Your nurse arrives on time, fully equipped, and immediately begins patient assessment and care.' },
  { step: '04', emoji: '📋', title: 'Care Reports', desc: 'Daily nursing notes, vitals records, and progress reports shared digitally with family.' },
]

const faqs = [
  { q: 'What is the minimum booking duration for nursing care?', a: 'We offer flexible packages starting from a minimum 4-hour shift. We also provide 8-hour, 12-hour, and 24-hour nursing care options depending on patient needs.' },
  { q: 'Can you provide a full-time live-in nurse?', a: 'Yes. We offer round-the-clock, 24/7 nursing care including live-in options. Please contact our care team to discuss your specific requirements and a customised package.' },
  { q: 'Are your nurses trained in ICU and critical care?', a: 'Several of our nurses have ICU and critical care backgrounds. When you book, please specify your patient\'s condition and we will assign the most appropriately qualified nurse.' },
  { q: 'What if I am not satisfied with the assigned nurse?', a: 'We offer a nurse replacement guarantee. If you are not fully satisfied with your assigned nurse, we will replace them promptly at no additional charge.' },
]

const relatedServices = [
  { slug: '/services/elder-care', emoji: '👴', title: 'Elder Care', desc: 'Comprehensive, compassionate care plans for senior citizens.', color: '#FDCB6E', bg: '#FEF6E4' },
  { slug: '/services/post-surgery-rehabilitation', emoji: '🏥', title: 'Post Surgery Rehab', desc: 'Expert recovery support after any surgical procedure.', color: '#5B4FCF', bg: '#EEF0FD' },
  { slug: '/services/home-physiotherapy', emoji: '🏃', title: 'Home Physiotherapy', desc: 'Certified physiotherapy delivered at your doorstep.', color: '#0F6CBD', bg: '#E8F3FC' },
]

export default function NursingCare() {
  return (
    <ServicePageTemplate
      seoTitle="Nursing Care at Home in Mumbai | Certified Home Nurses – Curexhealth"
      seoDescription="Professional nursing care at home in Mumbai. Curexhealth provides certified nurses for wound care, IV infusion, post-operative care, diabetic management & more. Available 24/7 across 50+ areas."
      slug="/services/nursing-care"
      badge="👩‍⚕️ Nursing Care"
      heroTitle="Professional Nursing Care"
      heroHighlight="at Your Home in Mumbai"
      heroSubtitle="Certified nurses provide hospital-grade clinical care at your doorstep — from wound management to round-the-clock patient monitoring."
      serviceColor="#00B894"
      serviceBg="#E0F7F3"
      overviewTitle="Expert Nursing Care — Without Leaving Home"
      overviewBody={[
        'Curexhealth\'s home nursing service connects patients in Mumbai with certified, experienced nurses who deliver comprehensive clinical care at home. From post-operative wound care and IV infusions to diabetic management and palliative support — our nurses handle it all with expertise and compassion.',
        'Available for hourly shifts, full-day care, or live-in arrangements, our nursing team provides families with the peace of mind that their loved ones are in safe, professional hands.',
      ]}
      features={[
        'Wound dressing & care',
        'IV infusion therapy',
        'Catheter management',
        'Post-operative monitoring',
        'Diabetic care & insulin',
        'Palliative & supportive nursing',
        'Vitals monitoring',
        'Medication administration',
        'Nasogastric tube care',
        'Tracheostomy management',
        'Bed sore prevention & care',
        'Daily care report & documentation',
      ]}
      benefitTitle="Why Home Nursing Care Works"
      benefits={benefits}
      conditions={conditions}
      processSteps={processSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
