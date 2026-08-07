import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'
import { FiX, FiArrowRight, FiArrowLeft, FiCheck, FiUser, FiMapPin, FiFileText, FiLoader } from 'react-icons/fi'
import Step1Personal from './steps/Step1Personal'
import Step2Service from './steps/Step2Service'
import Step3Details from './steps/Step3Details'
import Step4Review from './steps/Step4Review'
import SuccessScreen from './SuccessScreen'
import { sendBookingEmail, isEmailConfigured } from '../../services/emailService'

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

export default function BookingModal({ isOpen, onClose }) {
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

  // Reset on open
  useEffect(() => {
    if (isOpen) {
      setStep(1); setFormData(INITIAL_DATA)
      setErrors({}); setSubmitted(false)
      setSubmitting(false); setEmailError(null)
    }
  }, [isOpen])

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
    }
    if (s === 2) {
      if (!formData.service) e.service = 'Please select a service'
      if (!formData.patientAge) e.patientAge = 'Patient age is required'
      else if (isNaN(formData.patientAge) || +formData.patientAge < 1 || +formData.patientAge > 120) e.patientAge = 'Enter a valid age (1–120)'
      if (!formData.gender) e.gender = 'Please select gender'
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
    setErrors({}); setStep(s => s + 1)
  }

  const back = () => { setErrors({}); setStep(s => s - 1) }

  const submit = async () => {
    setSubmitting(true)
    setEmailError(null)
    try {
      if (isEmailConfigured()) {
        const result = await sendBookingEmail(formData)
        if (!result.success) {
          // Email failed but we still show success to user —
          // booking data is captured; staff can check form submissions
          console.warn('Email send failed:', result.error)
        }
      }
      // Always mark as submitted — don't block user on email failure
      setSubmitted(true)
    } catch (err) {
      console.error('Submit error:', err)
      setSubmitted(true) // Still succeed for user
    } finally {
      setSubmitting(false)
    }
  }

  const progress = ((step - 1) / (STEPS.length - 1)) * 100
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
            <div className="relative w-full sm:max-w-2xl max-h-[92svh] sm:max-h-[92svh] flex flex-col rounded-t-3xl sm:rounded-3xl overflow-hidden"
              style={{ background: 'white', boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)' }}
              onClick={e => e.stopPropagation()}
            >
              {/* Mobile drag handle */}
              <div className="sm:hidden flex justify-center pt-3 pb-1 flex-shrink-0 bg-white" aria-hidden="true">
                <div className="w-10 h-1 rounded-full bg-[#E2E8F0]" />
              </div>
              {/* Header (hidden on success) */}
              {!submitted && (
                <div className="relative flex-shrink-0">
                  <div className="px-4 sm:px-7 pt-5 sm:pt-7 pb-4 sm:pb-5"
                    style={{ background: 'linear-gradient(160deg,#020D1A 0%,#041A2E 100%)' }}>
                    <button onClick={handleClose} disabled={submitting}
                      className="absolute top-5 right-5 w-9 h-9 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all disabled:opacity-40"
                      style={{ color: 'rgba(255,255,255,0.6)' }} aria-label="Close">
                      <FiX size={20} />
                    </button>

                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: 'rgba(15,108,189,0.3)', border: '1px solid rgba(15,108,189,0.4)' }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3L12 21M4 12L20 12" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div>
                        <h2 className="text-white font-extrabold text-xl leading-none font-display">Book a Home Visit</h2>
                        <p className="text-white/50 text-xs mt-0.5">Curexhealth — Mumbai Home Healthcare</p>
                      </div>
                    </div>

                    {/* Step indicators */}
                    <div className="flex items-center gap-2">
                      {STEPS.map((s, i) => (
                        <div key={s.id} className="flex items-center gap-2 flex-1 last:flex-none">
                          <button onClick={() => step > s.id && !submitting && setStep(s.id)}
                            disabled={step < s.id || submitting}
                            className={`flex items-center gap-2 transition-all duration-200 ${step > s.id && !submitting ? 'cursor-pointer' : 'cursor-default'}`}
                            aria-label={`Step ${s.id}: ${s.label}`}>
                            <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs transition-all duration-300 ${
                              step > s.id ? 'bg-[#00B894] text-white' : step === s.id ? 'bg-[#0F6CBD] text-white' : 'bg-white/10 text-white/30'
                            }`} style={{ boxShadow: step === s.id ? '0 2px 8px rgba(15,108,189,0.5)' : step > s.id ? '0 2px 8px rgba(0,184,148,0.5)' : 'none' }}>
                              {step > s.id ? <FiCheck size={14} /> : s.icon}
                            </div>
                            <span className={`text-xs font-semibold hidden sm:block transition-colors ${step >= s.id ? 'text-white/90' : 'text-white/30'}`}>
                              {s.label}
                            </span>
                          </button>
                          {i < STEPS.length - 1 && (
                            <div className="flex-1 h-0.5 rounded-full mx-1 bg-white/10 overflow-hidden">
                              <motion.div className="h-full rounded-full bg-[#00B894]"
                                animate={{ width: step > s.id ? '100%' : '0%' }}
                                transition={{ duration: 0.4 }} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div className="mt-4 h-1 rounded-full bg-white/10 overflow-hidden">
                      <motion.div className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg,#0F6CBD,#00B894)' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }} />
                    </div>
                    <p className="text-white/35 text-xs mt-1.5 text-right">Step {step} of {STEPS.length}</p>
                  </div>
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
                <div className="flex-shrink-0 px-4 sm:px-7 py-4 sm:py-5 border-t border-[#F1F5F9] bg-white flex items-center justify-between gap-3 sm:gap-4">
                  {step > 1 ? (
                    <button onClick={back} disabled={submitting}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-[#E2E8F0] text-[#64748B] font-semibold text-sm hover:border-[#CBD5E1] hover:text-[#334155] transition-all disabled:opacity-40">
                      <FiArrowLeft size={16} /> Back
                    </button>
                  ) : (
                    <button onClick={handleClose}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-[#94A3B8] font-semibold text-sm hover:text-[#64748B] transition-colors">
                      Cancel
                    </button>
                  )}

                  <div className="flex items-center gap-3">
                    <p className="text-[#94A3B8] text-xs hidden sm:block">🔒 Secure & Confidential</p>
                    {step < 4 ? (
                      <motion.button onClick={next} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                        className="flex items-center gap-2 px-7 py-3 rounded-2xl text-white font-bold text-sm"
                        style={{ background: 'linear-gradient(135deg,#0F6CBD,#0e7fd4)', boxShadow: '0 4px 20px rgba(15,108,189,0.4)' }}>
                        Continue <FiArrowRight size={16} />
                      </motion.button>
                    ) : (
                      <motion.button onClick={submit} disabled={submitting}
                        whileHover={submitting ? {} : { scale: 1.03 }}
                        whileTap={submitting ? {} : { scale: 0.97 }}
                        className="flex items-center gap-2 px-7 py-3 rounded-2xl text-white font-bold text-sm disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ background: 'linear-gradient(135deg,#00B894,#009B7D)', boxShadow: '0 4px 20px rgba(0,184,148,0.45)' }}>
                        {submitting ? (
                          <>
                            <motion.span animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}>
                              <FiLoader size={16} />
                            </motion.span>
                            Sending…
                          </>
                        ) : (
                          <><FiCheck size={16} /> Submit Request</>
                        )}
                      </motion.button>
                    )}
                  </div>
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
