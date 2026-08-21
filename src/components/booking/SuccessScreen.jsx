import { motion } from 'framer-motion'
import { FiX, FiPhone, FiMail, FiCheckCircle, FiHome } from 'react-icons/fi'

// ─── Animated SVG checkmark ───────────────────────────────
function AnimatedCheck() {
  return (
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" aria-hidden="true">
      <motion.circle cx="35" cy="35" r="33"
        fill="#D1F4E0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />
      <motion.path d="M22 35L30 43L48 25"
        stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
      />
    </svg>
  )
}

// ─── Confetti dots around checkmark ───────────────────────
function Confetti() {
  const dots = [
    { x: -40, y: -30, color: '#F59E0B', size: 5, delay: 0.1 },
    { x: -50, y: 10, color: '#EF4444', size: 4, delay: 0.15 },
    { x: -30, y: 40, color: '#10B981', size: 4, delay: 0.2 },
    { x: 40, y: -30, color: '#3B82F6', size: 5, delay: 0.12 },
    { x: 50, y: 10, color: '#F59E0B', size: 5, delay: 0.18 },
    { x: 30, y: 40, color: '#8B5CF6', size: 4, delay: 0.22 },
    { x: 0, y: -50, color: '#EF4444', size: 4, delay: 0.14 },
    { x: 0, y: 50, color: '#3B82F6', size: 5, delay: 0.25 },
  ]
  
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {dots.map((dot, i) => (
        <motion.div key={i}
          initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0], 
            scale: [0, 1, 1, 0.5],
            x: dot.x * 0.3,
            y: dot.y * 0.3,
          }}
          transition={{ duration: 1.2, delay: dot.delay, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 rounded-full"
          style={{ 
            width: dot.size, 
            height: dot.size, 
            backgroundColor: dot.color,
            marginLeft: -dot.size / 2,
            marginTop: -dot.size / 2,
          }}
        />
      ))}
    </div>
  )
}

// ─── Main Success Screen ──────────────────────────────────
export default function SuccessScreen({ formData, onClose }) {
  return (
    <div className="relative px-6 py-8 flex flex-col items-center text-center bg-white max-h-[90vh] overflow-y-auto">
      {/* Close */}
      <button onClick={onClose}
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all"
        aria-label="Close">
        <FiX size={20} />
      </button>

      {/* Checkmark with confetti */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="relative mb-5"
      >
        <AnimatedCheck />
        <Confetti />
      </motion.div>

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-6"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Thank You, Curex! 🎉
        </h2>
        <p className="text-base font-semibold text-[#10B981] mb-2">
          Your booking request has been received.
        </p>
        <p className="text-gray-600 text-sm max-w-md mx-auto">
          Our care team has been notified. <span className="font-semibold text-gray-900">We will contact you</span> to confirm your appointment.
        </p>
      </motion.div>

      {/* Warning Box */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full bg-[#FEF3C7] border-l-4 border-[#F59E0B] rounded-lg p-3 mb-5 flex items-start gap-3"
      >
        <div className="flex-shrink-0 mt-0.5">
          <svg className="w-5 h-5 text-[#D97706]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="text-left">
          <h3 className="text-[#92400E] font-bold text-sm mb-0.5">
            Appointment Not Yet Confirmed
          </h3>
          <p className="text-[#92400E] text-xs leading-relaxed">
            Your slot is <span className="font-semibold">not booked yet</span>. Our care coordinator will call you to confirm availability, assign a professional, and confirm the appointment.
          </p>
        </div>
      </motion.div>

      {/* What Happens Next */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.7, duration: 0.5 }}
        className="w-full bg-gray-50 rounded-lg p-5 mb-5"
      >
        <h3 className="text-[#10B981] font-bold text-xs uppercase tracking-wide mb-3 text-left">
          WHAT HAPPENS NEXT
        </h3>
        <div className="space-y-3">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.85 }}
            className="flex items-start gap-3 text-left"
          >
            <div className="flex-shrink-0 w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <FiMail className="text-[#10B981]" size={18} />
            </div>
            <p className="text-gray-700 text-sm pt-1.5">
              Your booking details have been sent to our team
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.95 }}
            className="flex items-start gap-3 text-left"
          >
            <div className="flex-shrink-0 w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <FiPhone className="text-[#10B981]" size={18} />
            </div>
            <p className="text-gray-700 text-sm pt-1.5">
              Our coordinator will call to confirm your appointment
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.05 }}
            className="flex items-start gap-3 text-left"
          >
            <div className="flex-shrink-0 w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <FiCheckCircle className="text-[#10B981]" size={18} />
            </div>
            <p className="text-gray-700 text-sm pt-1.5">
              Once confirmed, your professional will be assigned
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.15 }}
            className="flex items-start gap-3 text-left"
          >
            <div className="flex-shrink-0 w-9 h-9 bg-white rounded-full flex items-center justify-center">
              <FiHome className="text-[#10B981]" size={18} />
            </div>
            <p className="text-gray-700 text-sm pt-1.5">
              Verified professional arrives at your home on schedule
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* Call Button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 1.25 }}
        className="w-full"
      >
        <a href="tel:+919535659295"
          className="w-full flex items-center justify-center gap-3 py-3.5 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded-lg transition-all shadow-lg hover:shadow-xl">
          <FiPhone size={18} /> 
          Call Us: +91 9535659295
        </a>
        <p className="text-gray-500 text-xs text-center mt-2">
          Mon–Sun 8 AM – 8 PM  •  We'll also reach you within 30 minutes
        </p>
      </motion.div>
    </div>
  )
}
