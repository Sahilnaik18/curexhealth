import { FiUser } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import { FormField, Input, Select } from '../FormField'

const genderOptions = [
  { value: 'male', label: 'Male', icon: '♂' },
  { value: 'female', label: 'Female', icon: '♀' },
  { value: 'other', label: 'Other / Prefer not to say', icon: '⚧' },
]

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
      {/* Header with icon */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#0A9C6F]/10 flex items-center justify-center">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-[#0A9C6F]">
            <path d="M20 21C20 19.6044 20 18.9067 19.8278 18.3389C19.44 17.0605 18.4395 16.06 17.1611 15.6722C16.5933 15.5 15.8956 15.5 14.5 15.5H9.5C8.10444 15.5 7.40665 15.5 6.83886 15.6722C5.56045 16.06 4.56004 17.0605 4.17224 18.3389C4 18.9067 4 19.6044 4 21M16.5 7.5C16.5 9.98528 14.4853 12 12 12C9.51472 12 7.5 9.98528 7.5 7.5C7.5 5.01472 9.51472 3 12 3C14.4853 3 16.5 5.01472 16.5 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-[#0F172A] mb-2">Patient Information</h3>
        <p className="text-[#64748B] text-sm">Tell us about the patient who needs care.</p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Patient name */}
        <FormField label="Patient Name" required error={errors.patientName}>
          <div className="relative">
            <FiUser size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
            <Input
              type="text"
              name="patientName"
              value={data.patientName}
              onChange={e => update({ patientName: e.target.value })}
              placeholder="Enter patient full name"
              required
              aria-required="true"
              error={errors.patientName}
              className="pl-12"
            />
          </div>
        </FormField>

        {/* Mobile */}
        <FormField label="Mobile Number" required error={errors.mobile} hint="We'll call you on this number to confirm">
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none">
              <span className="text-base">🇮🇳</span>
              <span className="text-[#334155] font-medium">+91</span>
            </div>
            <Input
              type="tel"
              name="mobile"
              value={data.mobile}
              onChange={handleMobile}
              placeholder="Enter 10-digit mobile number"
              required
              maxLength={10}
              aria-required="true"
              error={errors.mobile}
              className="pl-20"
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0A9C6F] hover:text-[#098c63] transition-colors"
              aria-label="Call"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </button>
          </div>
        </FormField>

        {/* WhatsApp */}
        <FormField label="WhatsApp Number" error={errors.whatsapp} hint="We'll send booking confirmation on WhatsApp">
          <div className="space-y-3">
            <label className="flex items-center gap-2.5 cursor-pointer w-fit group">
              <div className={`w-5 h-5 rounded-md flex items-center justify-center transition-all duration-200 ${
                data.sameAsPhone ? 'bg-[#0A9C6F]' : 'border-2 border-[#CBD5E1] group-hover:border-[#0A9C6F]'
              }`}>
                {data.sameAsPhone && (
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                    <path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
              <input type="checkbox" className="sr-only" checked={data.sameAsPhone} onChange={handleSameAsPhone} />
              <span className="text-[#334155] text-sm font-medium">Same as mobile number</span>
            </label>
            {!data.sameAsPhone && (
              <div className="relative">
                <FaWhatsapp size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25D366]" />
                <Input
                  type="tel"
                  name="whatsapp"
                  value={data.whatsapp}
                  onChange={e => update({ whatsapp: e.target.value })}
                  placeholder="Enter WhatsApp number"
                  maxLength={10}
                  error={errors.whatsapp}
                  className="pl-12"
                />
              </div>
            )}
          </div>
        </FormField>

        {/* Email */}
        <FormField label="Email Address" error={errors.email} hint="Optional — for digital session reports">
          <div className="relative">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <Input
              type="email"
              name="email"
              value={data.email}
              onChange={e => update({ email: e.target.value })}
              placeholder="Enter email address (optional)"
              error={errors.email}
              className="pl-12"
            />
          </div>
        </FormField>

        {/* Age + Gender row */}
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Patient Age" required error={errors.patientAge}>
            <div className="relative">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              <Input
                type="number"
                name="patientAge"
                value={data.patientAge}
                onChange={e => update({ patientAge: e.target.value })}
                placeholder="Enter age"
                min={1}
                max={120}
                required
                aria-required="true"
                error={errors.patientAge}
                className="pl-12"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B] text-sm font-medium">yrs</span>
            </div>
          </FormField>

          <FormField label="Gender" required error={errors.gender}>
            <Select
              name="gender"
              value={data.gender}
              onChange={e => update({ gender: e.target.value })}
              required
              aria-required="true"
              error={errors.gender}
              className="pl-12"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%2394A3B8' stroke-width='2' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E")`,
                backgroundPosition: '1rem center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <option value="">Select gender</option>
              {genderOptions.map(g => (
                <option key={g.value} value={g.value}>{g.icon} {g.label}</option>
              ))}
            </Select>
          </FormField>
        </div>
      </div>

      {/* Trust note */}
      <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-[#0A9C6F]/5 border border-[#0A9C6F]/10">
        <div className="w-6 h-6 rounded-full bg-[#0A9C6F] flex items-center justify-center flex-shrink-0 mt-0.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div>
          <p className="text-[#0A9C6F] font-semibold text-sm mb-1">Your personal information is completely confidential</p>
          <p className="text-[#64748B] text-xs leading-relaxed">
            We only use it to confirm and deliver your booking. We never share data with third parties.
          </p>
        </div>
      </div>
    </div>
  )
}
