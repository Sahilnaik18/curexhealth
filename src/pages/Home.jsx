import SEOHead from '../seo/SEOHead'
import { PAGE_SEO } from '../seo/seoConfig'
import { localBusinessSchema, websiteSchema, reviewSchema, faqSchema, breadcrumbSchema } from '../seo/schemas'
import { faqs } from '../data/faqs'
import Hero from '../components/home/Hero'
import Services from '../components/home/Services'
import TrustedBy from '../components/home/TrustedBy'
import HowItWorks from '../components/home/HowItWorks'
import Testimonials from '../components/home/Testimonials'

const seo = PAGE_SEO.home

export default function Home() {
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        ogType="website"
        schemas={[
          localBusinessSchema,
          websiteSchema,
          reviewSchema,
          faqSchema(faqs.slice(0, 5).map(f => ({ question: f.question, answer: f.answer }))),
          breadcrumbSchema([{ name: 'Home', path: '/' }]),
        ]}
      />
      <Hero />
      <Services />
      <TrustedBy />
      <HowItWorks />
      <Testimonials />
    </>
  )
}
