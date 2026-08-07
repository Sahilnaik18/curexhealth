import ServicePageTemplate from '../../components/services/ServicePageTemplate'
import SEOHead from '../../seo/SEOHead'
import { PAGE_SEO } from '../../seo/seoConfig'
import { medicalServiceSchema, breadcrumbSchema } from '../../seo/schemas'

const benefits = [
  { emoji: '⚡', title: 'Sport-Specific Recovery', desc: 'Recovery programmes are designed around your specific sport, position, and performance demands — not generic protocols.' },
  { emoji: '🏠', title: 'Rehab Without Disruption', desc: 'Continue your recovery at home without disrupting training schedules or daily routines.' },
  { emoji: '🔬', title: 'Evidence-Based Protocols', desc: 'All treatment follows current sports medicine research and return-to-sport guidelines validated by international bodies.' },
  { emoji: '📊', title: 'Performance Benchmarks', desc: 'We use functional strength tests and movement screening to determine when you are truly ready to return to sport.' },
  { emoji: '🛡️', title: 'Injury Prevention Education', desc: 'Beyond recovery, we teach injury mechanics, movement correction, and prevention strategies to reduce re-injury risk.' },
  { emoji: '🎯', title: 'Rapid Return to Sport', desc: 'Structured, progressive rehabilitation minimises downtime and safely accelerates your return to peak performance.' },
]

const conditions = [
  'ACL & PCL tears', 'MCL/LCL sprains', 'Meniscus injuries', 'Rotator cuff tears',
  'Tennis & golfer\'s elbow', 'Ankle sprains & fractures', 'Hamstring tears',
  'Groin & hip flexor injuries', 'Achilles tendinopathy', 'Stress fractures',
  'Shin splints', 'Patellofemoral pain (runner\'s knee)', 'IT band syndrome', 'Shoulder dislocations',
]

const processSteps = [
  { step: '01', emoji: '🔍', title: 'Injury Assessment', desc: 'Detailed biomechanical and functional assessment to accurately diagnose the injury and identify contributing factors.' },
  { step: '02', emoji: '📋', title: 'Rehab Plan', desc: 'A sport-specific, phased rehabilitation plan is designed with clear milestones and timelines.' },
  { step: '03', emoji: '💪', title: 'Progressive Training', desc: 'Staged rehab progressing from pain management to strength, then to sport-specific movement patterns.' },
  { step: '04', emoji: '🏆', title: 'Return to Sport', desc: 'Functional testing confirms readiness before full return — protecting you from premature re-injury.' },
]

const faqs = [
  { q: 'How quickly can I return to sport after an injury?', a: 'Return-to-sport timelines depend on injury type and severity. Minor sprains may recover in 2–4 weeks, while ACL reconstruction typically requires 9–12 months. Your therapist will provide a personalised timeline based on your assessment.' },
  { q: 'Do you work with professional athletes?', a: 'Yes. We work with professional athletes, semi-professionals, and amateur sports enthusiasts. Our sports rehabilitation programme is designed to meet the demands of all levels of athletic performance.' },
  { q: 'Can I do sports rehab at home effectively?', a: 'Absolutely. Home-based sports rehabilitation is highly effective for most injuries. Our therapists bring portable equipment and design home exercise programmes that match clinic-based outcomes. Regular in-home sessions ensure proper technique and progression.' },
  { q: 'Do you provide injury prevention assessments?', a: 'Yes. We offer sport-specific movement screenings and biomechanical assessments to identify injury risk factors and design corrective programmes — helping athletes stay injury-free throughout their season.' },
]

const relatedServices = [
  { slug: '/services/home-physiotherapy', emoji: '🏃', title: 'Home Physiotherapy', desc: 'Comprehensive physiotherapy for all musculoskeletal conditions.', color: '#0F6CBD', bg: '#E8F3FC' },
  { slug: '/services/orthopedic-rehabilitation', emoji: '🦴', title: 'Orthopedic Rehab', desc: 'Targeted rehab for bone, joint, and soft tissue conditions.', color: '#FF7675', bg: '#FEF0F0' },
  { slug: '/services/post-surgery-rehabilitation', emoji: '🏥', title: 'Post Surgery Rehab', desc: 'Expert recovery care after ACL, rotator cuff, and other surgeries.', color: '#5B4FCF', bg: '#EEF0FD' },
]

export default function SportsInjuryRehab() {
  return (
    <ServicePageTemplate
      seoTitle="Sports Injury Rehabilitation at Home in Mumbai – Curexhealth"
      seoDescription="Expert sports injury rehabilitation at home in Mumbai. Curexhealth provides certified sports physiotherapists for ACL recovery, rotator cuff rehab, ankle injuries, and return-to-sport programmes."
      slug="/services/sports-injury-rehabilitation"
      badge="🏅 Sports Injury Rehab"
      heroTitle="Sports Injury Rehabilitation"
      heroHighlight="Back to Peak Performance"
      heroSubtitle="Sport-specific, evidence-based rehabilitation delivered at your home in Mumbai. Our certified sports physiotherapists help you recover fully and return to your sport safely."
      serviceColor="#00B894"
      serviceBg="#E0F7F3"
      overviewTitle="Get Back in the Game — Faster & Stronger"
      overviewBody={[
        'Sports injuries don\'t just affect athletes — they affect confidence, livelihood, and quality of life. Curexhealth\'s sports injury rehabilitation programme brings certified sports physiotherapists to your home in Mumbai, delivering science-backed treatment tailored to your sport, your injury, and your performance goals.',
        'From acute injury management to return-to-sport testing, our therapists follow internationally validated protocols to ensure your recovery is not just fast — but complete. We treat the injury, address the root cause, and equip you to perform better and stay injury-free.',
      ]}
      features={[
        'ACL & knee ligament rehab',
        'Shoulder & rotator cuff rehab',
        'Ankle & foot injury recovery',
        'Muscle strain & tear management',
        'Sports massage therapy',
        'Kinesio taping',
        'Return-to-sport testing',
        'Biomechanical analysis',
        'Strength & conditioning',
        'Speed & agility restoration',
        'Injury prevention programme',
        'Sport-specific functional training',
      ]}
      benefitTitle="Why Choose Curexhealth for Sports Rehab"
      benefits={benefits}
      conditions={conditions}
      processSteps={processSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
