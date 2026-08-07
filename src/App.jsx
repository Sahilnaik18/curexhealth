import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/common/ScrollToTop'
import ScrollToTopButton from './components/common/ScrollToTopButton'
import LoadingSpinner from './components/common/LoadingSpinner'
import FloatingButtons from './components/common/FloatingButtons'

const Home               = lazy(() => import('./pages/Home'))
const About              = lazy(() => import('./pages/About'))
const Services           = lazy(() => import('./pages/Services'))
const ServiceAreas       = lazy(() => import('./pages/ServiceAreas'))
const FAQ                = lazy(() => import('./pages/FAQ'))
const Contact            = lazy(() => import('./pages/Contact'))
const NotFound           = lazy(() => import('./pages/NotFound'))

const HomePhysiotherapy      = lazy(() => import('./pages/services/HomePhysiotherapy'))
const NursingCare            = lazy(() => import('./pages/services/NursingCare'))
const ElderCare              = lazy(() => import('./pages/services/ElderCare'))
const PostSurgeryRehab       = lazy(() => import('./pages/services/PostSurgeryRehab'))
const StrokeRehab            = lazy(() => import('./pages/services/StrokeRehab'))
const SportsInjuryRehab      = lazy(() => import('./pages/services/SportsInjuryRehab'))
const OrthopedicRehab        = lazy(() => import('./pages/services/OrthopedicRehab'))

const PrivacyPolicy          = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions     = lazy(() => import('./pages/TermsAndConditions'))
const CancellationPolicy     = lazy(() => import('./pages/CancellationPolicy'))

const pageVariants = {
  initial:  { opacity: 0, y: 16, filter: 'blur(3px)' },
  animate:  { opacity: 1, y: 0,  filter: 'blur(0px)' },
  exit:     { opacity: 0, y: -8 },
}
const pageTransition = { duration: 0.4, ease: [0.22, 1, 0.36, 1] }

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        style={{ willChange: 'opacity, transform' }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Routes location={location}>
            <Route path="/"                                         element={<Home />} />
            <Route path="/about"                                    element={<About />} />
            <Route path="/services"                                 element={<Services />} />
            <Route path="/service-areas"                            element={<ServiceAreas />} />
            <Route path="/faq"                                      element={<FAQ />} />
            <Route path="/contact"                                  element={<Contact />} />
            <Route path="/services/home-physiotherapy"              element={<HomePhysiotherapy />} />
            <Route path="/services/nursing-care"                    element={<NursingCare />} />
            <Route path="/services/elder-care"                      element={<ElderCare />} />
            <Route path="/services/post-surgery-rehabilitation"     element={<PostSurgeryRehab />} />
            <Route path="/services/stroke-rehabilitation"           element={<StrokeRehab />} />
            <Route path="/services/sports-injury-rehabilitation"    element={<SportsInjuryRehab />} />
            <Route path="/services/orthopedic-rehabilitation"       element={<OrthopedicRehab />} />
            <Route path="/privacy-policy"                           element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions"                     element={<TermsAndConditions />} />
            <Route path="/cancellation-policy"                      element={<CancellationPolicy />} />
            <Route path="/privacy"                                  element={<PrivacyPolicy />} />
            <Route path="/terms"                                    element={<TermsAndConditions />} />
            <Route path="*"                                         element={<NotFound />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1" role="main">
        <AnimatedRoutes />
      </main>
      <Footer />
      <FloatingButtons />
      <ScrollToTopButton />
    </div>
  )
}
