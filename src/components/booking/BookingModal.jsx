import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { FiX, FiArrowRight, FiArrowLeft, FiCheck, FiUser, FiMapPin, FiFileText, FiLoader } from 'react-icons/fi'
import Step1Personal from './steps/Step1Personal'
import Step2Service from './steps/Step2Service'
import Step3Details from './steps/Step3Details'
import Step4Review from './steps/Step4Review'
import SuccessScreen from './SuccessScreen'
import { sendToGoogleSheets, isSheetsConfigured } from '../../services/googleSheetsService'

const STEPS = [
  { id: 1, label: 'Personal Info', icon: <FiUser size={15} /> },
  { id: 2, label: 'Service',       icon: <FiFileText size={15} /> },
  { id: 3, label: 'Details',       icon: <FiMapPin size={15} /> },
  { id: 4, label: 'Review',        icon: <FiCheck size={15} /> },
]

const INITIAL_DATA = {
  patientName: '', mobile: '', whatsapp: '', sameAsPhone: false, email: '',
  service: '', patientAge: '', gender: '',
  condition: '', address: '', area: '', pincode: '',
  preferredDate: '', preferredTime: '', notes: '',
}

export default function BookingModal({ isOpen, onClose, preSelectedService }) {
  const [step, setStep]               = useState(1)
  const [formData, setFormData]       = useState(INITIAL_DATA)
  const [errors, setErrors]           = useState({})
  const [submitted, setSubmitted]     = useState(false)
  const [submitting, setSubmitting]   = useState(false)
  const [emailError, setEmailError]   = useState(null)
  const [isClosing, setIsClosing]     = useState(false)

  // Lock body scroll
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Reset on open and set pre-selected service
  useEffect(() => {
    if (isOpen) {
      // Map service title to service value
      let serviceValue = ''
      if (preSelectedService) {
        // Create mapping based on slug patterns
        const titleToSlug = {
          'Home Physiotherapy': 'home-physiotherapy',
          'Nursing Care': 'nursing-care',
          'Elder Care': 'elder-care',
          'Post Surgery Rehab': 'post-surgery-rehabilitation',
          'Stroke Rehabilitation': 'stroke-rehabilitation',
          'Sports Injury Rehab': 'sports-injury-rehabilitation',
          'Orthopedic Rehab': 'orthopedic-rehabilitation',
          'Women\'s Health Care': 'womens-health-care'
        }
        
        serviceValue = titleToSlug[preSelectedService] || ''
      }
      
      setStep(1)
      const newFormData = {
        ...INITIAL_DATA,
        service: serviceValue
      }
      setFormData(newFormData)
      setErrors({})
      setSubmitted(false)
      setSubmitting(false)
      setEmailError(null)
    }
  }, [isOpen, preSelectedService])

  // Escape key
  useEffect(() => {
    const h = (e) => { if (e.key === 'Escape' && isOpen && !submitted && !submitting) handleClose() }
    window.addEventListener('keydown', h)
    return () => window.removeEventListener('keydown', h)
  }, [isOpen, submitted, submitting])

  const handleClose = useCallback(() => {
    if (submitting) return
    setIsClosing(true)
    setTimeout(() => { setIsClosing(false); onClose() }, 280)
  }, [onClose, submitting])

  const update = useCallback((fields) => {
    setFormData(prev => ({ ...prev, ...fields }))
    setErrors(prev => {
      const next = { ...prev }
      Object.keys(fields).forEach(k => delete next[k])
      return next
    })
  }, [])

  const validate = (s) => {
    const e = {}
    if (s === 1) {
      if (!formData.patientName.trim()) e.patientName = 'Please enter the patient name'
      if (!formData.mobile.trim()) e.mobile = 'Mobile number is required'
      else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\s/g, ''))) e.mobile = 'Enter a valid 10-digit Indian mobile number'
      if (!formData.sameAsPhone && formData.whatsapp && !/^[6-9]\d{9}$/.test(formData.whatsapp.replace(/\s/g, ''))) e.whatsapp = 'Enter a valid WhatsApp number'
      if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) e.email = 'Enter a valid email address'
      if (!formData.patientAge) e.patientAge = 'Patient age is required'
      else if (isNaN(formData.patientAge) || +formData.patientAge < 1 || +formData.patientAge > 120) e.patientAge = 'Enter a valid age (1–120)'
      if (!formData.gender) e.gender = 'Please select gender'
    }
    if (s === 2) {
      if (!formData.service) e.service = 'Please select a service'
    }
    if (s === 3) {
      if (!formData.condition.trim()) e.condition = 'Please describe the medical condition'
      if (!formData.address.trim()) e.address = 'Address is required'
      if (!formData.area.trim()) e.area = 'Area is required'
      if (!formData.pincode.trim()) e.pincode = 'Pincode is required'
      else if (!/^\d{6}$/.test(formData.pincode)) e.pincode = 'Enter a valid 6-digit pincode'
      if (!formData.preferredDate) e.preferredDate = 'Please select a preferred date'
      if (!formData.preferredTime) e.preferredTime = 'Please select a preferred time'
    }
    return e
  }

  const next = () => {
    const e = validate(step)
    if (Object.keys(e).length) { setErrors(e); return }
    setErrors({})
    
    // Skip Step 2 if service is already selected (from service card click)
    if (step === 1 && formData.service) {
      setStep(3) // Go directly to Step 3 (Details)
    } else {
      setStep(s => s + 1)
    }
  }

  const back = () => { 
    setErrors({})
    
    // Skip Step 2 when going back if service was pre-selected
    if (step === 3 && formData.service && preSelectedService) {
      setStep(1) // Go back to Step 1, skip Step 2
    } else {
      setStep(s => s - 1)
    }
  }

  const submit = async () => {
    setSubmitting(true)
    setEmailError(null)
    try {
      // Send booking data to Google Sheets
      if (isSheetsConfigured()) {
        const result = await sendToGoogleSheets(formData)
        if (!result.success) {
          console.warn('Google Sheets submission failed:', result.error)
          // Still show success to user - they can contact via WhatsApp
        }
      } else {
        console.warn('Google Sheets not configured yet')
        // Still show success - bookings can be handled via WhatsApp/Phone
      }
      // Always mark as submitted - user experience is smooth
      setSubmitted(true)
    } catch (err) {
      console.error('Submit error:', err)
      setSubmitted(true) // Still succeed for user
    } finally {
      setSubmitting(false)
    }
  }

  // Calculate actual step number accounting for skipped Step 2
  const getActualStepNumber = () => {
    if (formData.service && preSelectedService) {
      // Step 2 is skipped
      if (step === 1) return 1
      if (step === 3) return 2
      if (step === 4) return 3
    }
    return step
  }

  // Calculate total steps accounting for skipped Step 2
  const getTotalSteps = () => {
    return (formData.service && preSelectedService) ? 3 : 4
  }

  const actualStep = getActualStepNumber()
  const totalSteps = getTotalSteps()
  const progress = ((actualStep - 1) / (totalSteps - 1)) * 100
  if (!isOpen && !isClosing) return null

  const modal = (
    <AnimatePresence>
      {(isOpen && !isClosing) && (
        <>
          {/* Backdrop */}
          <motion.div key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9998]"
            style={{ background: 'rgba(2,13,26,0.88)', backdropFilter: 'blur(10px)' }}
            onClick={!submitted && !submitting ? handleClose : undefined}
            aria-hidden="true"
          />

          {/* Modal */}
          <motion.div key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4"
            role="dialog" aria-modal="true" aria-label="Book a home healthcare visit"
          >
            <div className="relative w-full sm:max-w-2xl max-h-[92svh] sm:max-h-[92svh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden bg-white shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button - top right */}
              {!submitted && (
                <button onClick={handleClose} disabled={submitting}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-[#F1F5F9] hover:bg-[#E2E8F0] text-[#64748B] hover:text-[#334155] transition-all disabled:opacity-40"
                  aria-label="Close">
                  <FiX size={20} />
                </button>
              )}
              
              {/* Mobile drag handle */}
              <div className="sm:hidden flex justify-center pt-3 pb-1 flex-shrink-0 bg-white" aria-hidden="true">
                <div className="w-10 h-1.5 rounded-full bg-[#E2E8F0]" />
              </div>
              {/* Header (hidden on success) */}
              {!submitted && (
                <div className="relative flex-shrink-0 bg-white border-b border-[#F1F5F9] px-4 sm:px-7 pt-16 sm:pt-12 pb-6">
                  {/* Progress bar at bottom of header */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#F1F5F9]">
                    <motion.div 
                      className="h-full bg-[#0A9C6F]"
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }} 
                    />
                  </div>
                  
                  <p className="text-[#94A3B8] text-xs font-medium uppercase tracking-wider mb-2">Step {actualStep} of {totalSteps}</p>
                </div>
              )}

              {/* Body */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div key="success"
                      initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>
                      <SuccessScreen formData={formData} onClose={handleClose} />
                    </motion.div>
                  ) : (
                    <motion.div key={`step-${step}`}
                      initial={{ opacity: 0, x: 28 }} animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -28 }}
                      transition={{ duration: 0.24, ease: 'easeInOut' }}
                      className="p-4 sm:p-7">
                      {step === 1 && <Step1Personal data={formData} errors={errors} update={update} />}
                      {step === 2 && <Step2Service  data={formData} errors={errors} update={update} />}
                      {step === 3 && <Step3Details  data={formData} errors={errors} update={update} />}
                      {step === 4 && <Step4Review   data={formData} onEdit={setStep} />}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              {!submitted && (
                <div className="flex-shrink-0 px-4 sm:px-7 py-5 sm:py-6 border-t border-[#F1F5F9] bg-white flex items-center justify-between gap-4">
                  {step > 1 ? (
                    <button onClick={back} disabled={submitting}
                      className="px-6 py-3.5 rounded-xl text-[#64748B] font-semibold text-sm hover:text-[#334155] hover:bg-[#F8FAFC] transition-all disabled:opacity-40">
                      Cancel
                    </button>
                  ) : (
                    <button onClick={handleClose}
                      className="px-6 py-3.5 rounded-xl text-[#64748B] font-semibold text-sm hover:text-[#334155] hover:bg-[#F8FAFC] transition-colors">
                      Cancel
                    </button>
                  )}

                  {step < 4 ? (
                    <motion.button onClick={next} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0A9C6F] hover:bg-[#098c63] text-white font-bold text-sm shadow-lg shadow-[#0A9C6F]/25 transition-colors">
                      Continue 
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </motion.button>
                  ) : (
                    <motion.button onClick={submit} disabled={submitting}
                      whileHover={submitting ? {} : { scale: 1.02 }}
                      whileTap={submitting ? {} : { scale: 0.98 }}
                      className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0A9C6F] hover:bg-[#098c63] text-white font-bold text-sm disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-[#0A9C6F]/25 transition-colors">
                      {submitting ? (
                        <>
                          <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                            <FiLoader size={16} />
                          </motion.span>
                          Sending…
                        </>
                      ) : (
                        <>Submit Request</>
                      )}
                    </motion.button>
                  )}
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )

  return createPortal(modal, document.body)
}
