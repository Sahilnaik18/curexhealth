import { motion } from 'framer-motion'
import { FiEdit2, FiUser, FiPhone, FiMail, FiMapPin, FiCalendar, FiClock, FiFileText } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'

const SERVICE_LABELS = {
  'home-physiotherapy': '🏃 Home Physiotherapy',
  'nursing-care': '👩‍⚕️ Nursing Care',
  'elder-care': '👴 Elder Care',
  'post-surgery-rehabilitation': '🏥 Post Surgery Rehabilitation',
  'stroke-rehabilitation': '🧠 Stroke Rehabilitation',
  'sports-injury-rehabilitation': '🏅 Sports Injury Rehabilitation',
  'orthopedic-rehabilitation': '🦴 Orthopedic Rehabilitation',
  'other': '💬 Other / Not Sure',
}

function ReviewRow({ icon, label, value, empty }) {
  if (!value) return null
  return (
    <div className="flex items-start gap-3 py-2.5 border-b border-[#F1F5F9] last:border-0">
      <div className="w-7 h-7 rounded-lg bg-[#F1F5F9] flex items-center justify-center flex-shrink-0 mt-0.5">
        <span className="text-[#64748B]">{icon}</span>
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-[#94A3B8] text-[10px] font-semibold uppercase tracking-wide">{label}</p>
        <p className="text-[#0F172A] font-semibold text-sm mt-0.5 break-words">{value}</p>
      </div>
    </div>
  )
}

function Section({ title, step, onEdit, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl border border-[#E2E8F0] shadow-[0_2px_12px_rgba(0,0,0,0.04)] overflow-hidden"
    >
      <div className="flex items-center justify-between px-5 py-3.5 bg-[#F8FAFC] border-b border-[#F1F5F9]">
        <p className="text-[#0F172A] font-bold text-sm" style={{ fontFamily: 'Manrope, sans-serif' }}>{title}</p>
        <button
          type="button"
          onClick={() => onEdit(step)}
          className="flex items-center gap-1.5 text-[#0F6CBD] text-xs font-bold hover:underline"
          aria-label={`Edit ${title}`}
        >
          <FiEdit2 size={12} /> Edit
        </button>
      </div>
      <div className="px-5 py-1">{children}</div>
    </motion.div>
  )
}

export default function Step4Review({ data, onEdit }) {
  const whatsappNum = data.sameAsPhone ? data.mobile : data.whatsapp

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#E0F7F3] flex items-center justify-center flex-shrink-0">
            <span className="text-lg">✅</span>
          </div>
          <h3 className="text-[#0F172A] font-extrabold text-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Review Your Booking
          </h3>
        </div>
        <p className="text-[#64748B] text-sm ml-10">Please review all details before confirming. You can edit any section.</p>
      </div>

      <div className="flex flex-col gap-4">
        {/* Personal */}
        <Section title="👤 Personal Information" step={1} onEdit={onEdit}>
          <ReviewRow icon={<FiUser size={13} />} label="Patient Name" value={data.patientName} />
          <ReviewRow icon={<FiPhone size={13} />} label="Mobile Number" value={`+91 ${data.mobile}`} />
          <ReviewRow icon={<FaWhatsapp size={13} />} label="WhatsApp" value={whatsappNum ? `+91 ${whatsappNum}` : null} />
          <ReviewRow icon={<FiMail size={13} />} label="Email" value={data.email || null} />
        </Section>

        {/* Service */}
        <Section title="🏥 Service Details" step={2} onEdit={onEdit}>
          <ReviewRow icon={<FiFileText size={13} />} label="Service Required" value={SERVICE_LABELS[data.service]} />
          <ReviewRow icon={<FiUser size={13} />} label="Patient Age" value={data.patientAge ? `${data.patientAge} years` : null} />
          <ReviewRow icon={<FiUser size={13} />} label="Gender" value={data.gender ? data.gender.charAt(0).toUpperCase() + data.gender.slice(1) : null} />
        </Section>

        {/* Visit details */}
        <Section title="📍 Visit Details" step={3} onEdit={onEdit}>
          <ReviewRow icon={<FiFileText size={13} />} label="Medical Condition" value={data.condition} />
          <ReviewRow icon={<FiMapPin size={13} />} label="Address" value={`${data.address}, ${data.area} – ${data.pincode}`} />
          <ReviewRow icon={<FiCalendar size={13} />} label="Preferred Date" value={data.preferredDate ? new Date(data.preferredDate).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : null} />
          <ReviewRow icon={<FiClock size={13} />} label="Preferred Time" value={data.preferredTime} />
          {data.notes && <ReviewRow icon={<FiFileText size={13} />} label="Additional Notes" value={data.notes} />}
        </Section>
      </div>

      {/* Confirm note */}
      <div className="mt-5 p-4 rounded-2xl flex items-start gap-3"
        style={{ background: 'linear-gradient(135deg, #E8F3FC, #E0F7F3)', border: '1.5px solid rgba(15,108,189,0.15)' }}>
        <span className="text-xl flex-shrink-0 mt-0.5">📱</span>
        <div>
          <p className="text-[#0F172A] font-bold text-sm mb-0.5" style={{ fontFamily: 'Manrope, sans-serif' }}>
            What happens after you confirm?
          </p>
          <p className="text-[#475569] text-xs leading-relaxed">
            Our care coordinator will <strong>call you within 15 minutes</strong> and send a <strong>WhatsApp confirmation</strong> with your booking details and the professional's profile.
          </p>
        </div>
      </div>
    </div>
  )
}
