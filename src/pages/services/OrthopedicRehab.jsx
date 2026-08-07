import ServicePageTemplate from '../../components/services/ServicePageTemplate'
import SEOHead from '../../seo/SEOHead'
import { PAGE_SEO } from '../../seo/seoConfig'
import { medicalServiceSchema, breadcrumbSchema } from '../../seo/schemas'

const benefits = [
  { emoji: '🦴', title: 'Specialised Orthopedic Expertise', desc: 'Our therapists have advanced training in musculoskeletal and orthopedic rehabilitation — not just general physiotherapy.' },
  { emoji: '😌', title: 'Effective Pain Relief', desc: 'Manual therapy, joint mobilisation, and electrotherapy provide measurable relief from chronic orthopedic pain.' },
  { emoji: '🔄', title: 'Restore Full Range of Motion', desc: 'Progressive mobilisation and stretching programmes restore joint flexibility and prevent long-term stiffness.' },
  { emoji: '💪', title: 'Rebuild Functional Strength', desc: 'Targeted strengthening programmes address muscle imbalances contributing to joint pain and instability.' },
  { emoji: '🏠', title: 'Home-Based Convenience', desc: 'Avoid hospital travel and clinic queues. Expert orthopedic care comes to you — where you\'re most comfortable.' },
  { emoji: '📈', title: 'Long-Term Results', desc: 'We address root causes — not just symptoms — ensuring lasting improvement and reduced risk of recurrence.' },
]

const conditions = [
  'Knee osteoarthritis', 'Hip osteoarthritis', 'Total knee replacement rehab',
  'Total hip replacement rehab', 'Cervical (neck) spondylosis', 'Lumbar spondylosis',
  'Disc herniation (slipped disc)', 'Frozen shoulder', 'Osteoporosis management',
  'Rheumatoid arthritis', 'Post-fracture rehabilitation', 'Carpal tunnel syndrome',
  'Plantar fasciitis', 'Fibromyalgia', 'Tendinitis',
]

const processSteps = [
  { step: '01', emoji: '🔍', title: 'Orthopedic Assessment', desc: 'Comprehensive musculoskeletal evaluation including posture analysis, joint mobility, and strength testing.' },
  { step: '02', emoji: '📋', title: 'Treatment Plan', desc: 'A personalised rehabilitation plan targeting your specific orthopedic condition and functional goals.' },
  { step: '03', emoji: '🤲', title: 'Manual Therapy & Exercise', desc: 'Combination of joint mobilisation, manual therapy, electrotherapy, and progressive therapeutic exercises.' },
  { step: '04', emoji: '🎯', title: 'Functional Restoration', desc: 'Focus on restoring daily function — walking, climbing stairs, lifting — and preventing recurrence.' },
]

const faqs = [
  { q: 'Is physiotherapy effective for knee and hip osteoarthritis?', a: 'Yes. Physiotherapy is a first-line, evidence-based treatment for osteoarthritis. Regular therapeutic exercises, manual therapy, and weight management guidance can significantly reduce pain, improve mobility, and delay the need for surgery.' },
  { q: 'How does home orthopedic rehab work after joint replacement?', a: 'After your surgeon clears you for home rehab, our therapist visits your home to begin progressive exercises — starting with gentle range of motion work and advancing to strength training and functional activities over 6–12 weeks.' },
  { q: 'Can physiotherapy help with a slipped disc without surgery?', a: 'In most cases, yes. The majority of disc herniations respond well to conservative physiotherapy management including specific exercises, manual therapy, and postural retraining. Surgery is typically a last resort.' },
  { q: 'What equipment is used for orthopedic physiotherapy at home?', a: 'Our therapists bring portable ultrasound machines, TENS/EMS units, hot and cold therapy equipment, resistance bands, and exercise tools. Everything you need is brought to your home — you don\'t need any equipment.' },
]

const relatedServices = [
  { slug: '/services/post-surgery-rehabilitation', emoji: '🏥', title: 'Post Surgery Rehab', desc: 'Specialised recovery after knee, hip, and spinal surgery.', color: '#5B4FCF', bg: '#EEF0FD' },
  { slug: '/services/home-physiotherapy', emoji: '🏃', title: 'Home Physiotherapy', desc: 'Comprehensive physiotherapy for all conditions.', color: '#0F6CBD', bg: '#E8F3FC' },
  { slug: '/services/sports-injury-rehabilitation', emoji: '🏅', title: 'Sports Injury Rehab', desc: 'Expert rehab for sports-related injuries.', color: '#00B894', bg: '#E0F7F3' },
]

export default function OrthopedicRehab() {
  return (
    <ServicePageTemplate
      seoTitle="Orthopedic Rehabilitation at Home in Mumbai – Curexhealth"
      seoDescription="Expert orthopedic rehabilitation at home in Mumbai. Curexhealth provides certified physiotherapists for knee/hip replacement rehab, spondylosis, disc herniation, arthritis, frozen shoulder & more."
      slug="/services/orthopedic-rehabilitation"
      badge="🦴 Orthopedic Rehab"
      heroTitle="Orthopedic Rehabilitation"
      heroHighlight="Expert Care for Bones & Joints"
      heroSubtitle="Certified orthopedic physiotherapists treat bone, joint, and musculoskeletal conditions at your home in Mumbai — with precision, expertise, and lasting results."
      serviceColor="#FF7675"
      serviceBg="#FEF0F0"
      overviewTitle="Comprehensive Orthopedic Rehab at Your Doorstep"
      overviewBody={[
        'Orthopedic conditions — from arthritis and spondylosis to joint replacements and fractures — can significantly limit daily function and quality of life. Curexhealth\'s orthopedic rehabilitation programme brings specialist-trained physiotherapists to your home in Mumbai, providing targeted treatment that addresses both symptoms and root causes.',
        'Our therapists combine manual therapy, joint mobilisation, and evidence-based therapeutic exercise to reduce pain, restore mobility, rebuild strength, and prevent recurrence — all without you having to leave home.',
      ]}
      features={[
        'Joint mobilisation & manipulation',
        'Manual therapy techniques',
        'TENS & ultrasound therapy',
        'Progressive strengthening',
        'Postural correction',
        'Spinal stabilisation exercises',
        'Joint replacement rehab (knee/hip)',
        'Fracture rehabilitation',
        'Arthritis pain management',
        'Ergonomic advice',
        'Core strengthening',
        'Home exercise programme',
      ]}
      benefitTitle="Why Choose Home-Based Orthopedic Rehab"
      benefits={benefits}
      conditions={conditions}
      processSteps={processSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
