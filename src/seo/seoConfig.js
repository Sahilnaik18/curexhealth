/**
 * Central SEO configuration for all pages.
 * Used by the <SEOHead> component on every page.
 */

export const SITE = {
  name: 'Curexhealth',
  tagline: 'Premium Home Healthcare in Mumbai',
  url: 'https://curexhealth.com',
  email: 'care@curexhealth.com',
  phone: '+918762697832',
  phoneDisplay: '+91 8762697832',
  address: {
    street: 'Mumbai',
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'IN',
    postalCode: '400001',
  },
  social: {
    instagram: 'https://instagram.com/curexhealth',
    facebook: 'https://facebook.com/curexhealth',
    twitter: 'https://twitter.com/curexhealth',
    linkedin: 'https://linkedin.com/company/curexhealth',
    youtube: 'https://youtube.com/@curexhealth',
  },
  ogImage: 'https://curexhealth.com/og-image.png',
  logoUrl: 'https://curexhealth.com/favicon.svg',
  twitterHandle: '@curexhealth',
  founded: '2019',
  rating: '4.9',
  reviewCount: '3200',
  priceRange: '₹₹',
  openingHours: 'Mo-Su 08:00-20:00',
}

export const PAGE_SEO = {
  home: {
    title: 'Curexhealth – Premium Home Healthcare in Mumbai | Physiotherapy, Nursing & Rehab',
    description: 'Mumbai\'s trusted home healthcare service. Certified physiotherapists, nurses & specialists visit your home. Post-surgery rehab, stroke rehab, elder care & more. 50+ areas. Book now!',
    keywords: 'home healthcare Mumbai, physiotherapy at home Mumbai, nursing care at home Mumbai, home physiotherapist Mumbai, post surgery rehabilitation Mumbai, stroke rehabilitation home, elder care Mumbai',
    canonical: '/',
  },
  about: {
    title: 'About Curexhealth – Mumbai\'s Premium Home Healthcare Company Since 2019',
    description: 'Learn about Curexhealth — Mumbai\'s most trusted home healthcare company. 10,000+ patients served, 150+ certified professionals, 50+ areas. Our mission, values & expert team.',
    keywords: 'about Curexhealth, home healthcare company Mumbai, certified physiotherapists Mumbai, home nursing Mumbai',
    canonical: '/about',
  },
  services: {
    title: 'Home Healthcare Services in Mumbai – Physiotherapy, Nursing, Rehab | Curexhealth',
    description: 'Complete home healthcare services in Mumbai: physiotherapy, nursing care, elder care, post-surgery rehab, stroke rehab, sports injury rehab & orthopedic rehab — certified professionals at your door.',
    keywords: 'home healthcare services Mumbai, home physiotherapy, home nursing, elder care, post surgery rehab Mumbai',
    canonical: '/services',
  },
  serviceAreas: {
    title: 'Home Healthcare Service Areas in Mumbai – 50+ Locations | Curexhealth',
    description: 'Curexhealth serves 50+ areas across Mumbai, Thane & Navi Mumbai — Bandra, Andheri, Juhu, Powai, Thane & more. Check if we serve your area. Same-day service available.',
    keywords: 'home healthcare Bandra, home physiotherapy Andheri, nursing care Juhu, home healthcare Thane, physiotherapy Navi Mumbai',
    canonical: '/service-areas',
  },
  faq: {
    title: 'Frequently Asked Questions – Home Healthcare Mumbai | Curexhealth',
    description: 'Answers to common questions about Curexhealth home healthcare: booking process, professional qualifications, service areas, pricing, safety protocols & more.',
    keywords: 'home healthcare FAQ Mumbai, physiotherapy home visit questions, nursing care home booking',
    canonical: '/faq',
  },
  contact: {
    title: 'Book Home Healthcare Visit in Mumbai – Contact Curexhealth',
    description: 'Book a home healthcare visit in Mumbai. Call +91 98765 43210, WhatsApp, or fill our form — confirmed within 30 minutes. Physiotherapy, nursing, elder care & more.',
    keywords: 'book home physiotherapy Mumbai, home healthcare booking Mumbai, home nurse Mumbai contact',
    canonical: '/contact',
  },

  // Service detail pages
  homePhysiotherapy: {
    title: 'Home Physiotherapy in Mumbai – Certified Physio at Your Doorstep | Curexhealth',
    description: 'Book certified physiotherapists at home in Mumbai. Post-surgery rehab, back pain, stroke, sports injury & more. TENS, ultrasound & manual therapy. 50+ areas. Same-day available.',
    keywords: 'home physiotherapy Mumbai, physiotherapist home visit Mumbai, physio at home Mumbai, post surgery physiotherapy home Mumbai, back pain physiotherapy home',
    canonical: '/services/home-physiotherapy',
  },
  nursingCare: {
    title: 'Nursing Care at Home in Mumbai – Certified Home Nurses | Curexhealth',
    description: 'Professional nursing care at home in Mumbai. Wound care, IV infusion, catheter management, post-op care & 24/7 nursing. Certified nurses. 50+ Mumbai areas.',
    keywords: 'home nursing care Mumbai, nurse at home Mumbai, wound care home Mumbai, IV infusion home Mumbai, post operative nursing home',
    canonical: '/services/nursing-care',
  },
  elderCare: {
    title: 'Elder Care at Home in Mumbai – Senior Care Services | Curexhealth',
    description: 'Compassionate elder care at home in Mumbai. Daily assistance, medication management, dementia care, fall prevention & companion care for seniors. Trained caregivers.',
    keywords: 'elder care Mumbai, senior care home Mumbai, old age care Mumbai, dementia care at home Mumbai, home caregiver for elderly Mumbai',
    canonical: '/services/elder-care',
  },
  postSurgeryRehab: {
    title: 'Post Surgery Rehabilitation at Home in Mumbai – Expert Recovery | Curexhealth',
    description: 'Expert post-surgery rehabilitation at home in Mumbai. Knee replacement, hip replacement, spinal surgery, cardiac rehab & more. Certified physios within 48 hrs of discharge.',
    keywords: 'post surgery rehabilitation Mumbai, knee replacement rehab home Mumbai, hip replacement physiotherapy home, post operative physiotherapy Mumbai',
    canonical: '/services/post-surgery-rehabilitation',
  },
  strokeRehab: {
    title: 'Stroke Rehabilitation at Home in Mumbai – Neurological Physiotherapy | Curexhealth',
    description: 'Specialised stroke rehabilitation at home in Mumbai. Neuroplasticity-based physio for hemiplegia, gait retraining, upper limb rehab & speech support. Certified neuro physios.',
    keywords: 'stroke rehabilitation Mumbai, stroke physiotherapy home Mumbai, hemiplegia rehab Mumbai, neurological physiotherapy home Mumbai, stroke recovery home',
    canonical: '/services/stroke-rehabilitation',
  },
  sportsInjuryRehab: {
    title: 'Sports Injury Rehabilitation at Home in Mumbai | Curexhealth',
    description: 'Sport-specific injury rehabilitation at home in Mumbai. ACL, rotator cuff, ankle, hamstring recovery & return-to-sport protocols. Certified sports physiotherapists.',
    keywords: 'sports injury rehabilitation Mumbai, ACL rehab Mumbai, sports physiotherapy home Mumbai, sports injury physio at home',
    canonical: '/services/sports-injury-rehabilitation',
  },
  orthopedicRehab: {
    title: 'Orthopedic Rehabilitation at Home in Mumbai – Bone & Joint Care | Curexhealth',
    description: 'Expert orthopedic rehabilitation at home in Mumbai. Arthritis, spondylosis, disc herniation, joint replacement & fracture rehab. Certified ortho physiotherapists.',
    keywords: 'orthopedic rehabilitation Mumbai, joint pain physiotherapy home Mumbai, arthritis treatment home Mumbai, spondylosis treatment home',
    canonical: '/services/orthopedic-rehabilitation',
  },
}
