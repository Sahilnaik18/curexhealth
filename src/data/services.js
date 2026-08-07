// ─── Core Services ────────────────────────────────────────────────────────────
export const services = [
  {
    id: 'home-physiotherapy',
    slug: '/services/home-physiotherapy',
    icon: 'FaPersonWalking',
    title: 'Home Physiotherapy',
    shortDesc: 'Certified physiotherapists bring clinic-grade treatment to your doorstep.',
    description:
      'Our experienced physiotherapists assess, diagnose, and treat musculoskeletal and neurological conditions in the comfort of your home. From post-surgery rehab to chronic pain management — we come to you.',
    features: [
      'Post-surgical rehabilitation',
      'Orthopedic physiotherapy',
      'Neurological rehab',
      'Sports injury recovery',
      'Geriatric physiotherapy',
      'Pediatric physiotherapy',
    ],
    color: '#0F6CBD',
    bgColor: '#E8F3FC',
  },
  {
    id: 'nursing-care',
    slug: '/services/nursing-care',
    icon: 'FaUserNurse',
    title: 'Nursing Care',
    shortDesc: 'Round-the-clock professional nursing care by trained nurses.',
    description:
      'Our certified nurses provide comprehensive medical care at home — from wound management and injection administration to post-operative monitoring and catheter care.',
    features: [
      'Wound dressing & care',
      'IV infusion therapy',
      'Catheter management',
      'Post-operative care',
      'Diabetic management',
      'Palliative nursing',
    ],
    color: '#00B894',
    bgColor: '#E0F7F3',
  },
  {
    id: 'elder-care',
    slug: '/services/elder-care',
    icon: 'FaPersonCane',
    title: 'Elder Care',
    shortDesc: 'Compassionate, dedicated care plans for senior citizens at home.',
    description:
      'Our senior care specialists provide comprehensive, compassionate support for elderly patients — ensuring dignity, comfort, and clinical excellence every single day.',
    features: [
      'Personalised care plans',
      'Mobility assistance',
      'Medication management',
      'Companion care',
      'Fall prevention',
      'Dementia & Alzheimer care',
    ],
    color: '#FDCB6E',
    bgColor: '#FEF6E4',
  },
  {
    id: 'post-surgery-rehabilitation',
    slug: '/services/post-surgery-rehabilitation',
    icon: 'FaHospital',
    title: 'Post Surgery Rehabilitation',
    shortDesc: 'Expert physiotherapy and recovery care after any surgical procedure.',
    description:
      'Recovering from surgery at home is more effective with the right support. Our post-surgical rehab specialists design personalised recovery programmes to restore your strength, mobility, and independence — at your own pace.',
    features: [
      'Post-operative physiotherapy',
      'Wound care management',
      'Pain management therapy',
      'Mobility & strength training',
      'Scar tissue mobilisation',
      'Breathing exercises',
    ],
    color: '#5B4FCF',
    bgColor: '#EEF0FD',
  },
  {
    id: 'stroke-rehabilitation',
    slug: '/services/stroke-rehabilitation',
    icon: 'FaBrain',
    title: 'Stroke Rehabilitation',
    shortDesc: 'Specialised neurological rehab to restore function after stroke.',
    description:
      'Stroke recovery requires consistent, expert care. Our certified neurological physiotherapists use evidence-based techniques to help stroke survivors regain movement, speech, and daily living skills in the comfort of their home.',
    features: [
      'Neurological physiotherapy',
      'Gait & balance training',
      'Upper limb rehabilitation',
      'Cognitive retraining',
      'Speech & swallowing support',
      'Family caregiver training',
    ],
    color: '#E17055',
    bgColor: '#FDF0EC',
  },
  {
    id: 'sports-injury-rehabilitation',
    slug: '/services/sports-injury-rehabilitation',
    icon: 'FaPersonRunning',
    title: 'Sports Injury Rehabilitation',
    shortDesc: 'Get athletes back on their feet with targeted sports physio.',
    description:
      'Whether you\'re a professional athlete or a weekend warrior, our sports injury rehabilitation specialists help you recover faster and return to peak performance safely — with a science-backed, sport-specific approach.',
    features: [
      'ACL / MCL injury rehab',
      'Rotator cuff rehabilitation',
      'Ankle & knee injury recovery',
      'Muscle strain & tear management',
      'Return-to-sport protocols',
      'Performance optimisation',
    ],
    color: '#00B894',
    bgColor: '#E0F7F3',
  },
  {
    id: 'orthopedic-rehabilitation',
    slug: '/services/orthopedic-rehabilitation',
    icon: 'FaBone',
    title: 'Orthopedic Rehabilitation',
    shortDesc: 'Targeted rehab for bone, joint, and musculoskeletal conditions.',
    description:
      'Our orthopedic rehabilitation programme addresses a wide range of bone, joint, and soft tissue conditions — helping patients recover from fractures, joint replacements, and chronic musculoskeletal disorders at home.',
    features: [
      'Joint replacement rehab (hip/knee)',
      'Fracture & dislocation recovery',
      'Back & neck pain management',
      'Osteoporosis management',
      'Frozen shoulder treatment',
      'Post-arthroplasty mobility training',
    ],
    color: '#FF7675',
    bgColor: '#FEF0F0',
  },
]

// ─── Process Steps ─────────────────────────────────────────────────────────────
export const processSteps = [
  {
    step: '01',
    title: 'Book Your Appointment',
    desc: 'Call us, WhatsApp, or book online in under 60 seconds. Tell us your requirement and preferred time slot.',
    icon: 'FaCalendarCheck',
  },
  {
    step: '02',
    title: 'Expert Matching',
    desc: 'We assign the best-matched verified healthcare professional based on your specific medical needs.',
    icon: 'FaUserCheck',
  },
  {
    step: '03',
    title: 'Professional Arrives',
    desc: 'Your healthcare professional arrives at your home, fully equipped, on time — every time.',
    icon: 'FaHouseChimney',
  },
  {
    step: '04',
    title: 'Treatment & Reports',
    desc: 'Receive world-class care at home. Digital reports, prescriptions, and follow-up care — all managed.',
    icon: 'FaFileMedical',
  },
]
