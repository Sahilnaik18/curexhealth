import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiX, FiPhone, FiCopy, FiCheck } from 'react-icons/fi'
import { buildStaffWhatsAppMessage } from '../../services/emailService'

const SERVICE_LABELS = {
  'home-physiotherapy':          'Home Physiotherapy',
  'nursing-care':                'Nursing Care',
  'elder-care':                  'Elder Care',
  'post-surgery-rehabilitation': 'Post Surgery Rehabilitation',
  'stroke-rehabilitation':       'Stroke Rehabilitation',
  'sports-injury-rehabilitation':'Sports Injury Rehabilitation',
  'orthopedic-rehabilitation':   'Orthopedic Rehabilitation',
  'other':                       'Healthcare Service',
}

// ─── Animated SVG checkmark ───────────────────────────────
function AnimatedCheck() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <motion.circle cx="26" cy="26" r="24"
        stroke="#00B894" strokeWidth="2.5" fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
      />
      <motion.path d="M14 26.5L22 34.5L38 18"
        stroke="#00B894" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, delay: 0.55, ease: 'easeOut' }}
      />
    </svg>
  )
}

// ─── Confetti burst ───────────────────────────────────────
function Confetti() {
  const pieces = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    color: ['#0F6CBD','#00B894','#FDCB6E','#FF7675','#5B4FCF','#34D399'][i % 6],
    x: (Math.random() * 320) - 160,
    y: -(Math.random() * 180 + 60),
    rotate: Math.random() * 360,
    w: Math.random() * 7 + 4,
    h: Math.random() * 5 + 3,
    delay: Math.random() * 0.35,
  }))
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl" aria-hidden="true">
      {pieces.map(p => (
        <motion.div key={p.id}
          initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 0 }}
          animate={{ opacity: [1, 1, 0], x: p.x, y: p.y, rotate: p.rotate, scale: [0, 1.3, 0.8] }}
          transition={{ duration: 1.3, delay: 0.25 + p.delay, ease: 'easeOut' }}
          className="absolute top-1/2 left-1/2 rounded-sm"
          style={{ width: p.w, height: p.h, backgroundColor: p.color }}
        />
      ))}
    </div>
  )
}

// ─── Staff WhatsApp tool (subtle, not patient-facing) ─────
function StaffCopyTool({ formData }) {
  const [copied, setCopied] = useState(false)
  const [open, setOpen] = useState(false)
  const msg = buildStaffWhatsAppMessage(formData)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(msg)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea')
      el.value = msg
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    }
  }

  return (
    <div className="w-full mt-4 rounded-2xl overflow-hidden border border-[#E2E8F0]">
      <button onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[#F8FAFC] text-[#64748B] text-xs font-semibold hover:bg-[#F1F5F9] transition-colors">
        <span className="flex items-center gap-2">
          <span className="text-base">📋</span>
          Staff: Copy WhatsApp follow-up message
        </span>
        <span className="text-[#94A3B8]">{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className="p-4 bg-white">
          <pre className="text-[11px] text-[#475569] leading-relaxed whitespace-pre-wrap font-mono bg-[#F8FAFC] rounded-xl p-3 mb-3 max-h-40 overflow-y-auto border border-[#E2E8F0]">
            {msg}
          </pre>
          <button onClick={copy}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
              copied
                ? 'bg-[#E0F7F3] text-[#00B894]'
                : 'bg-[#0F6CBD] text-white hover:bg-[#0A5299]'
            }`}>
            {copied ? <><FiCheck size={13}/> Copied!</> : <><FiCopy size={13}/> Copy Message</>}
          </button>
          <p className="text-[#94A3B8] text-[10px] text-center mt-2">
            Paste this in WhatsApp to contact the patient manually
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Main Success Screen ──────────────────────────────────
export default function SuccessScreen({ formData, onClose }) {
  const serviceName = SERVICE_LABELS[formData.service] || 'Healthcare Service'
  const dateDisplay = formData.preferredDate
    ? new Date(formData.preferredDate).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })
    : '—'
  const firstName = formData.patientName?.split(' ')[0] || ''

  const summaryItems = [
    { label: 'Patient',    value: formData.patientName },
    { label: 'Service',    value: serviceName },
    { label: 'Area',       value: formData.area },
    { label: 'Date',       value: dateDisplay },
    { label: 'Time Slot',  value: formData.preferredTime || '—' },
    { label: 'Contact',    value: `+91 ${formData.mobile}` },
  ]

  return (
    <div className="relative px-7 py-9 flex flex-col items-center text-center overflow-hidden">
      <Confetti />

      {/* Close */}
      <button onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#94A3B8] hover:text-[#64748B] hover:bg-[#F1F5F9] transition-all"
        aria-label="Close">
        <FiX size={18} />
      </button>

      {/* Check animation */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="w-20 h-20 rounded-full flex items-center justify-center mb-5 relative"
        style={{ background: 'linear-gradient(135deg,#E0F7F3,#CCFBF1)' }}
      >
        <AnimatedCheck />
        {/* Pulse ring */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0.5 }}
          animate={{ scale: 1.7, opacity: 0 }}
          transition={{ duration: 1.6, delay: 0.9, repeat: 2 }}
          className="absolute inset-0 rounded-full border-2 border-[#00B894]"
          aria-hidden="true"
        />
      </motion.div>

      {/* Heading */}
      <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.4, duration:0.5 }}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-2 font-display">
          Thank You{firstName ? `, ${firstName}` : ''}! 🎉
        </h2>
        <p className="text-[#00B894] font-bold text-base mb-2">Your booking request has been received.</p>
        <p className="text-[#64748B] text-sm leading-relaxed max-w-xs mx-auto">
          Our care team has been notified. <strong className="text-[#0F172A]">We will contact you</strong> to confirm your appointment.
        </p>
      </motion.div>

      {/* Important notice — no auto-confirmation */}
      <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.55, duration:0.45 }}
        className="w-full mt-5 p-4 rounded-2xl flex items-start gap-3 text-left"
        style={{ background:'linear-gradient(135deg,#FEF6E4,#FFFBF0)', border:'1.5px solid rgba(245,158,11,0.2)' }}>
        <span className="text-xl flex-shrink-0 mt-0.5">⚠️</span>
        <div>
          <p className="text-[#92400E] font-extrabold text-sm font-display">Appointment Not Yet Confirmed</p>
          <p className="text-[#78350F] text-xs leading-relaxed mt-0.5">
            Your slot is <strong>not booked yet</strong>. Our care coordinator will call you to confirm availability, assign a professional, and confirm the appointment.
          </p>
        </div>
      </motion.div>

      {/* Booking summary */}
      <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.65, duration:0.45 }}
        className="w-full mt-4 rounded-2xl p-4 text-left"
        style={{ background:'linear-gradient(135deg,#F8FAFC,white)', border:'1.5px solid #E2E8F0' }}>
        <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest mb-3">Request Summary</p>
        <div className="grid grid-cols-2 gap-2.5">
          {summaryItems.map(item => (
            <div key={item.label} className="rounded-xl p-2.5 bg-white border border-[#F1F5F9]">
              <p className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wide">{item.label}</p>
              <p className="text-[#0F172A] font-bold text-xs mt-0.5 truncate">{item.value}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* What happens next */}
      <motion.div initial={{ opacity:0, y:14 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.78, duration:0.45 }}
        className="w-full mt-4">
        <p className="text-[#94A3B8] text-[10px] font-bold uppercase tracking-widest mb-3 text-left">What happens next</p>
        <div className="flex flex-col gap-2">
          {[
            { icon:'📧', text:'Your booking details have been sent to our team',       color:'#0F6CBD', bg:'#E8F3FC' },
            { icon:'📞', text:'Our coordinator will call to confirm your appointment',  color:'#00B894', bg:'#E0F7F3' },
            { icon:'✅', text:'Once confirmed, your professional will be assigned',     color:'#5B4FCF', bg:'#EEF0FD' },
            { icon:'🏠', text:'Verified professional arrives at your home on schedule', color:'#E17055', bg:'#FDF0EC' },
          ].map((item, i) => (
            <motion.div key={i}
              initial={{ opacity:0, x:-12 }} animate={{ opacity:1, x:0 }}
              transition={{ delay:0.88 + i*0.09 }}
              className="flex items-center gap-3 p-3 rounded-xl text-left"
              style={{ backgroundColor:item.bg, border:`1px solid ${item.color}18` }}>
              <span className="text-base flex-shrink-0">{item.icon}</span>
              <p className="text-xs font-semibold" style={{ color:item.color }}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Patient action — call us */}
      <motion.div initial={{ opacity:0, y:12 }} animate={{ opacity:1, y:0 }} transition={{ delay:1.05 }}
        className="w-full mt-5">
        <a href="tel:+918762697832"
          className="w-full flex items-center justify-center gap-2.5 py-3.5 rounded-2xl font-bold text-sm text-white transition-all hover:opacity-90"
          style={{ background:'linear-gradient(135deg,#0F6CBD,#0e7fd4)', boxShadow:'0 4px 20px rgba(15,108,189,0.4)' }}>
          <FiPhone size={16} /> Call Us: +91 98765 43210
        </a>
        <p className="text-[#94A3B8] text-[11px] text-center mt-2">
          Mon–Sun 8 AM – 8 PM · We'll also reach you within 30 minutes
        </p>
      </motion.div>

      {/* Staff tool — subtle, collapsed by default */}
      <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:1.15 }}
        className="w-full">
        <StaffCopyTool formData={formData} />
      </motion.div>
    </div>
  )
}
