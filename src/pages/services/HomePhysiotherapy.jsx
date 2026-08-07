import ServicePageTemplate from '../../components/services/ServicePageTemplate'
import SEOHead from '../../seo/SEOHead'
import { PAGE_SEO } from '../../seo/seoConfig'
import { medicalServiceSchema, breadcrumbSchema } from '../../seo/schemas'

const benefits = [
  { emoji: '🏠', title: 'Heal in Comfort', desc: 'Recover faster in a familiar environment. Home-based physio delivers equal or better outcomes than clinic visits.' },
  { emoji: '⏰', title: 'Save Time & Effort', desc: 'No travel, no waiting room. Your therapist arrives equipped and ready — exactly when you need them.' },
  { emoji: '🎯', title: 'Personalised Treatment', desc: 'Each session is tailored to your specific condition, home environment, and recovery goals.' },
  { emoji: '👨‍👩‍👧', title: 'Family Involvement', desc: 'Family members can observe, learn exercises, and support your recovery between sessions.' },
  { emoji: '📊', title: 'Consistent Progress Tracking', desc: 'Regular assessments, digital reports, and goal-based milestones ensure transparent recovery progress.' },
  { emoji: '🩺', title: 'NABH-Qualified Therapists', desc: 'All our physiotherapists are BPT/MPT certified with verified clinical experience and background checks.' },
]

const conditions = [
  'Back pain & spondylitis', 'Neck pain & cervical issues', 'Knee pain & knee OA',
  'Frozen shoulder', 'Post-fracture rehabilitation', 'Post-surgery recovery',
  'Stroke & neurological rehab', 'Sciatica', 'Plantar fasciitis',
  'Hip replacement rehab', 'Cerebral palsy', 'Parkinson\'s disease management',
]

const processSteps = [
  { step: '01', emoji: '📞', title: 'Book a Session', desc: 'Call or WhatsApp us with your condition and preferred time. Confirmed within 15 minutes.' },
  { step: '02', emoji: '🔍', title: 'Initial Assessment', desc: 'Your therapist conducts a detailed musculoskeletal assessment and designs your personalised plan.' },
  { step: '03', emoji: '💪', title: 'Therapy Sessions', desc: 'Evidence-based treatment using manual therapy, exercises, and electrotherapy at your home.' },
  { step: '04', emoji: '📋', title: 'Track & Recover', desc: 'Progress is monitored every session. Plans are adjusted as you improve towards full recovery.' },
]

const faqs = [
  { q: 'What equipment does the physiotherapist bring?', a: 'Our physiotherapists arrive fully equipped with TENS/EMS machines, ultrasound therapy units, resistance bands, hot/cold packs, and all necessary clinical tools. You do not need to arrange any equipment.' },
  { q: 'How many sessions will I need?', a: 'The number of sessions depends on your condition, severity, and recovery goals. Your therapist will give you an estimated plan after the initial assessment. Most acute conditions require 6–12 sessions.' },
  { q: 'Is home physiotherapy as effective as clinic physiotherapy?', a: 'Yes — multiple studies show home physiotherapy is equally or more effective for most conditions, primarily because patients are more relaxed, exercises can be adapted to the home environment, and compliance tends to be higher.' },
  { q: 'Can I choose my physiotherapist?', a: 'Absolutely. After your first session, you may request the same therapist for continuity. We believe consistent therapist-patient relationships lead to better outcomes.' },
]

const relatedServices = [
  { slug: '/services/post-surgery-rehabilitation', emoji: '🏥', title: 'Post Surgery Rehab', desc: 'Expert recovery care after any surgical procedure.', color: '#5B4FCF', bg: '#EEF0FD' },
  { slug: '/services/stroke-rehabilitation', emoji: '🧠', title: 'Stroke Rehabilitation', desc: 'Neurological rehab to restore movement and function.', color: '#E17055', bg: '#FDF0EC' },
  { slug: '/services/orthopedic-rehabilitation', emoji: '🦴', title: 'Orthopedic Rehab', desc: 'Targeted rehab for bone, joint, and muscle conditions.', color: '#FF7675', bg: '#FEF0F0' },
]

export default function HomePhysiotherapy() {
  const seo = PAGE_SEO.homePhysiotherapy
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          medicalServiceSchema({
            name: 'Home Physiotherapy',
            description: seo.description,
            url: seo.canonical,
            conditions: ['Back pain','Neck pain','Knee pain','Post-surgical rehabilitation','Stroke','Sciatica','Frozen shoulder','Parkinson\'s disease'],
          }),
          breadcrumbSchema([
            { name:'Home', path:'/' },
            { name:'Services', path:'/services' },
            { name:'Home Physiotherapy', path:seo.canonical },
          ]),
        ]}
      />
      <ServicePageTemplate
      seoTitle="Home Physiotherapy in Mumbai | Certified Physio at Home – Curexhealth"
      seoDescription="Book certified physiotherapists at home in Mumbai. Curexhealth provides expert home physiotherapy for back pain, post-surgery recovery, stroke rehab, sports injuries & more. Available across 50+ areas."
      slug="/services/home-physiotherapy"
      badge="🏃 Home Physiotherapy"
      heroTitle="Expert Physiotherapy"
      heroHighlight="Delivered to Your Home in Mumbai"
      heroSubtitle="Certified physiotherapists bring clinic-grade treatment, equipment, and expertise to your doorstep. No travel. No waiting. Just expert care."
      serviceColor="#0F6CBD"
      serviceBg="#E8F3FC"
      overviewTitle="Clinic-Quality Physiotherapy — in Your Living Room"
      overviewBody={[
        'Curexhealth\'s home physiotherapy service brings certified BPT/MPT physiotherapists directly to your home across Mumbai. Whether you\'re recovering from surgery, managing chronic pain, or rehabilitating a neurological condition — our therapists design evidence-based treatment plans tailored to your specific needs.',
        'Each session includes a thorough assessment, hands-on manual therapy, electrotherapy using portable equipment, and a progressive home exercise programme. Your recovery is our priority — not clinic logistics.',
      ]}
      features={[
        'Post-surgical rehabilitation',
        'Orthopedic physiotherapy',
        'Neurological rehab',
        'Sports injury recovery',
        'Geriatric physiotherapy',
        'Pediatric physiotherapy',
        'Manual therapy',
        'Electrotherapy (TENS/EMS)',
        'Ultrasound therapy',
        'Home exercise programming',
        'Posture correction',
        'Balance & gait training',
      ]}
      benefitTitle="Why Home Physiotherapy Works Better"
      benefits={benefits}
      conditions={conditions}
      processSteps={processSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    />
    </>
  )
}
