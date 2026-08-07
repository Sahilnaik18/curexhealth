import { FiUser, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { FormField, Input } from '../FormField'

export default function Step1Personal({ data, errors, update }) {
  const handleSameAsPhone = (e) => {
    const checked = e.target.checked
    update({ sameAsPhone: checked, whatsapp: checked ? data.mobile : '' })
  }

  const handleMobile = (e) => {
    update({ mobile: e.target.value, whatsapp: data.sameAsPhone ? e.target.value : data.whatsapp })
  }

  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#E8F3FC] flex items-center justify-center flex-shrink-0">
            <FiUser size={16} className="text-[#0F6CBD]" />
          </div>
          <h3 className="text-[#0F172A] font-extrabold text-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Patient Information
          </h3>
        </div>
        <p className="text-[#64748B] text-sm ml-10">Tell us about the patient who needs care.</p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Patient name */}
        <FormField label="Patient Name" required error={errors.patientName}>
          <div className="relative">
            <FiUser size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <Input
              type="text"
              name="patientName"
              value={data.patientName}
              onChange={e => update({ patientName: e.target.value })}
              placeholder="Full name of the patient"
              required
              aria-required="true"
              error={errors.patientName}
              className="pl-10"
            />
          </div>
        </FormField>

        {/* Mobile */}
        <FormField label="Mobile Number" required error={errors.mobile} hint="We'll call you on this number to confirm">
          <div className="relative">
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <span className="text-[#94A3B8] text-sm">🇮🇳</span>
              <span className="text-[#94A3B8] text-sm font-medium">+91</span>
            </div>
            <Input
              type="tel"
              name="mobile"
              value={data.mobile}
              onChange={handleMobile}
              placeholder="10-digit mobile number"
              required
              maxLength={10}
              aria-required="true"
              error={errors.mobile}
              className="pl-16"
            />
          </div>
        </FormField>

        {/* WhatsApp */}
        <FormField label="WhatsApp Number" error={errors.whatsapp} hint="We'll send booking confirmation on WhatsApp">
          <div className="space-y-2">
            <label className="flex items-center gap-2.5 cursor-pointer w-fit group">
              <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all duration-150 flex-shrink-0 ${
                data.sameAsPhone ? 'bg-[#0F6CBD] border-[#0F6CBD]' : 'border-[#CBD5E1] group-hover:border-[#0F6CBD]'
              }`}>
                {data.sameAsPhone && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <input type="checkbox" className="sr-only" checked={data.sameAsPhone} onChange={handleSameAsPhone} />
              <span className="text-[#475569] text-sm font-medium">Same as mobile number</span>
            </label>
            {!data.sameAsPhone && (
              <div className="relative">
                <FaWhatsapp size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#25D366]" />
                <Input
                  type="tel"
                  name="whatsapp"
                  value={data.whatsapp}
                  onChange={e => update({ whatsapp: e.target.value })}
                  placeholder="WhatsApp number"
                  maxLength={10}
                  error={errors.whatsapp}
                  className="pl-10"
                />
              </div>
            )}
            {data.sameAsPhone && data.mobile && (
              <div className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-[#E8F8EF] border border-[#25D366]/20">
                <FaWhatsapp size={14} className="text-[#25D366]" />
                <span className="text-[#25D366] text-sm font-semibold">+91 {data.mobile}</span>
              </div>
            )}
          </div>
        </FormField>

        {/* Email */}
        <FormField label="Email Address" error={errors.email} hint="Optional — for digital session reports">
          <div className="relative">
            <FiMail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <Input
              type="email"
              name="email"
              value={data.email}
              onChange={e => update({ email: e.target.value })}
              placeholder="your@email.com (optional)"
              error={errors.email}
              className="pl-10"
            />
          </div>
        </FormField>
      </div>

      {/* Trust note */}
      <div className="mt-6 flex items-start gap-2.5 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
        <span className="text-base flex-shrink-0 mt-0.5">🔒</span>
        <p className="text-[#64748B] text-xs leading-relaxed">
          Your personal information is <strong className="text-[#334155]">completely confidential</strong>. We only use it to confirm and deliver your booking. We never share data with third parties.
        </p>
      </div>
    </div>
  )
}
