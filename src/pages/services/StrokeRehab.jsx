import ServicePageTemplate from '../../components/services/ServicePageTemplate'
import SEOHead from '../../seo/SEOHead'
import { PAGE_SEO } from '../../seo/seoConfig'
import { medicalServiceSchema, breadcrumbSchema } from '../../seo/schemas'

const benefits = [
  { emoji: '🧠', title: 'Neuroplasticity-Based Approach', desc: 'Our therapists use evidence-based neuroplasticity techniques to help the brain rewire and restore lost functions.' },
  { emoji: '🏠', title: 'Rehabilitate in Familiar Surroundings', desc: 'Home-based rehab allows practice in real-life contexts — stairs, kitchen, bathroom — accelerating functional recovery.' },
  { emoji: '👨‍👩‍👧', title: 'Family Training', desc: 'We train family members and caregivers to support exercises between sessions, maximising recovery momentum.' },
  { emoji: '💬', title: 'Speech & Cognitive Support', desc: 'Coordination with speech therapists and cognitive specialists for comprehensive post-stroke rehabilitation.' },
  { emoji: '🔄', title: 'Consistent, Long-Term Care', desc: 'Stroke recovery takes time. Our therapists provide consistent, long-term support adapted to every stage of recovery.' },
  { emoji: '📈', title: 'Outcome-Focused Progress', desc: 'Standardised assessments (Barthel Index, Berg Balance) track measurable progress throughout rehabilitation.' },
]

const conditions = [
  'Hemiplegia (one-sided weakness)', 'Hemiparesis', 'Spasticity management',
  'Balance & coordination deficits', 'Foot drop', 'Shoulder subluxation',
  'Dysphagia (swallowing difficulty)', 'Aphasia (speech difficulty)', 'Cognitive impairment',
  'Upper limb dysfunction', 'Gait abnormalities', 'Sensory deficits',
]

const processSteps = [
  { step: '01', emoji: '🏥', title: 'Post-Stroke Assessment', desc: 'Comprehensive neurological assessment covering motor function, balance, cognition, and daily living abilities.' },
  { step: '02', emoji: '📋', title: 'Rehab Goal Setting', desc: 'Short and long-term goals are set collaboratively with the patient and family based on the assessment.' },
  { step: '03', emoji: '💪', title: 'Neurological Rehab Sessions', desc: 'Task-specific training, constraint-induced therapy, functional electrical stimulation, and manual techniques.' },
  { step: '04', emoji: '📈', title: 'Progress Review & Adaptation', desc: 'Regular reassessments and plan adjustments to match the patient\'s evolving recovery trajectory.' },
]

const faqs = [
  { q: 'When should stroke rehabilitation begin?', a: 'Stroke rehabilitation should begin as early as possible — ideally within 24–72 hours of the stroke (once medically stable) and continued consistently at home after hospital discharge. Early rehabilitation significantly improves outcomes.' },
  { q: 'How long does stroke rehabilitation take?', a: 'Stroke recovery is highly individual. Significant neurological recovery typically occurs within the first 6 months, but meaningful improvement can continue for years with consistent therapy. Long-term maintenance exercises are essential.' },
  { q: 'What does a stroke physiotherapy session at home involve?', a: 'Sessions include: balance and gait training, upper and lower limb exercises, spasticity management, task-specific functional training (dressing, walking, using stairs), and family/caregiver education.' },
  { q: 'Do you work with speech therapists for stroke patients?', a: 'Yes. For patients with aphasia or dysphagia, we can coordinate and collaborate with qualified speech-language therapists to ensure a holistic, multidisciplinary approach to post-stroke recovery.' },
]

const relatedServices = [
  { slug: '/services/home-physiotherapy', emoji: '🏃', title: 'Home Physiotherapy', desc: 'Comprehensive home physiotherapy for neurological conditions.', color: '#0F6CBD', bg: '#E8F3FC' },
  { slug: '/services/nursing-care', emoji: '👩‍⚕️', title: 'Nursing Care', desc: 'Clinical nursing support for stroke patients at home.', color: '#00B894', bg: '#E0F7F3' },
  { slug: '/services/elder-care', emoji: '👴', title: 'Elder Care', desc: 'Holistic care support for senior stroke survivors.', color: '#F59E0B', bg: '#FEF6E4' },
]

export default function StrokeRehab() {
  return (
    <ServicePageTemplate
      seoTitle="Stroke Rehabilitation at Home in Mumbai | Neurological Physio – Curexhealth"
      seoDescription="Specialised stroke rehabilitation at home in Mumbai. Curexhealth provides certified neurological physiotherapists for stroke recovery, hemiplegia rehab, gait training, and functional restoration."
      slug="/services/stroke-rehabilitation"
      badge="🧠 Stroke Rehabilitation"
      heroTitle="Stroke Rehabilitation"
      heroHighlight="at Home — Restore, Rebuild, Recover"
      heroSubtitle="Certified neurological physiotherapists use evidence-based techniques to help stroke survivors regain movement, function, and independence — in the comfort of home."
      serviceColor="#E17055"
      serviceBg="#FDF0EC"
      overviewTitle="Expert Neurological Rehab for Stroke Survivors"
      overviewBody={[
        'Stroke can dramatically alter a person\'s life — but with the right rehabilitation, significant recovery is possible. Curexhealth\'s stroke rehabilitation programme brings experienced neurological physiotherapists to your home in Mumbai, providing consistent, expert care that maximises recovery potential.',
        'Our therapists use internationally validated neuroplasticity-based techniques including task-specific training, constraint-induced movement therapy, and neurodevelopmental approaches. We work closely with the patient, their family, and their medical team to ensure a comprehensive, coordinated recovery journey.',
      ]}
      features={[
        'Neurological assessment (Barthel/Berg)',
        'Gait & walking retraining',
        'Upper limb motor recovery',
        'Spasticity management',
        'Balance & coordination training',
        'Functional electrical stimulation',
        'Constraint-induced therapy',
        'Shoulder subluxation management',
        'Cognitive & sensory retraining',
        'ADL (daily living) training',
        'Caregiver & family training',
        'Long-term maintenance programme',
      ]}
      benefitTitle="Why Home-Based Stroke Rehab Leads to Better Outcomes"
      benefits={benefits}
      conditions={conditions}
      processSteps={processSteps}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  )
}
