import { SITE } from './seoConfig'

/**
 * Schema.org JSON-LD definitions for Curexhealth.
 * All schemas validated against schema.org specifications.
 */

// ─── Local Business + Medical Organization ────────────────
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'MedicalOrganization', 'HealthAndBeautyBusiness'],
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: 'Curexhealth Home Healthcare',
  description: 'Mumbai\'s premium home healthcare company providing certified physiotherapists, nurses, elder care specialists, and rehabilitation professionals for home visits across 50+ areas.',
  url: SITE.url,
  logo: {
    '@type': 'ImageObject',
    url: SITE.logoUrl,
    width: '512',
    height: '512',
  },
  image: SITE.ogImage,
  telephone: SITE.phone,
  email: SITE.email,
  foundingDate: SITE.founded,
  priceRange: SITE.priceRange,
  currenciesAccepted: 'INR',
  paymentAccepted: 'Cash, Credit Card, UPI, Bank Transfer',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '20:00',
    },
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mumbai',
    addressRegion: 'Maharashtra',
    addressCountry: 'IN',
    postalCode: SITE.address.postalCode,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '19.0760',
    longitude: '72.8777',
  },
  areaServed: {
    '@type': 'City',
    name: 'Mumbai',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.rating,
    reviewCount: SITE.reviewCount,
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    SITE.social.instagram,
    SITE.social.facebook,
    SITE.social.twitter,
    SITE.social.linkedin,
    SITE.social.youtube,
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Home Healthcare Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Home Physiotherapy', areaServed: 'Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Nursing Care at Home', areaServed: 'Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Elder Care', areaServed: 'Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Post Surgery Rehabilitation', areaServed: 'Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stroke Rehabilitation', areaServed: 'Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sports Injury Rehabilitation', areaServed: 'Mumbai' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Orthopedic Rehabilitation', areaServed: 'Mumbai' } },
    ],
  },
}

// ─── Website schema ───────────────────────────────────────
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  description: 'Premium home healthcare services in Mumbai — physiotherapy, nursing, elder care & rehabilitation at your doorstep.',
  publisher: { '@id': `${SITE.url}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE.url}/?s={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
  inLanguage: 'en-IN',
}

// ─── BreadcrumbList generator ─────────────────────────────
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  }
}

// ─── Medical Service schema generator ────────────────────
export function medicalServiceSchema({ name, description, url, conditions = [] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MedicalTherapy',
    name,
    description,
    url: `${SITE.url}${url}`,
    relevantSpecialty: {
      '@type': 'MedicalSpecialty',
      name: 'Physical Medicine and Rehabilitation',
    },
    recognizingAuthority: {
      '@type': 'Organization',
      name: 'National Accreditation Board for Hospitals (NABH)',
    },
    provider: { '@id': `${SITE.url}/#organization` },
    areaServed: { '@type': 'City', name: 'Mumbai' },
    ...(conditions.length > 0 && {
      medicineSystem: 'Western medicine',
      relevantCondition: conditions.map(c => ({ '@type': 'MedicalCondition', name: c })),
    }),
  }
}

// ─── FAQ Page schema generator ────────────────────────────
export function faqSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

// ─── Service Area (Home visit) schema ─────────────────────
export const homeVisitSchema = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: `${SITE.name} – Home Healthcare`,
  serviceType: 'Home Healthcare Visit',
  areaServed: [
    'Bandra', 'Andheri', 'Juhu', 'Powai', 'Malad', 'Borivali',
    'Thane', 'Navi Mumbai', 'Dadar', 'Worli', 'Chembur', 'Kurla',
    'Goregaon', 'Kandivali', 'Ghatkopar', 'Vikhroli', 'Mulund',
  ].map(area => ({ '@type': 'City', name: `${area}, Mumbai` })),
  provider: { '@id': `${SITE.url}/#organization` },
}

// ─── Review schema (aggregate) ────────────────────────────
export const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Curexhealth Home Healthcare Services',
  description: 'Premium home healthcare in Mumbai',
  brand: {
    '@type': 'Brand',
    name: SITE.name,
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: SITE.rating,
    reviewCount: SITE.reviewCount,
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Priya Sharma' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'After my knee replacement surgery, Curexhealth sent a wonderful physiotherapist to my home within hours. The recovery has been incredible.',
      datePublished: '2024-06-15',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Rajesh Mehta' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'My father needed daily nursing care after his stroke. Curexhealth provided an exceptional nurse who was genuinely caring. The peace of mind is priceless.',
      datePublished: '2024-07-20',
    },
    {
      '@type': 'Review',
      author: { '@type': 'Person', name: 'Sunita Patil' },
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      reviewBody: 'Within 3 weeks of physiotherapy at home, I was pain-free from severe back pain. The convenience of home visits made all the difference.',
      datePublished: '2024-08-05',
    },
  ],
}
