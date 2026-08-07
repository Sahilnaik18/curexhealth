import { FiFileText } from 'react-icons/fi'
import { FormField, Input, Select } from '../FormField'

const services = [
  { value: 'home-physiotherapy', label: '🏃 Home Physiotherapy', desc: 'Certified physio at your home' },
  { value: 'nursing-care', label: '👩‍⚕️ Nursing Care', desc: 'Professional nursing at home' },
  { value: 'elder-care', label: '👴 Elder Care', desc: 'Compassionate senior care' },
  { value: 'post-surgery-rehabilitation', label: '🏥 Post Surgery Rehabilitation', desc: 'Expert recovery after surgery' },
  { value: 'stroke-rehabilitation', label: '🧠 Stroke Rehabilitation', desc: 'Neurological rehab at home' },
  { value: 'sports-injury-rehabilitation', label: '🏅 Sports Injury Rehabilitation', desc: 'Sport-specific recovery' },
  { value: 'orthopedic-rehabilitation', label: '🦴 Orthopedic Rehabilitation', desc: 'Bone & joint rehab' },
  { value: 'other', label: '💬 Other / Not Sure', desc: "We'll guide you to the right service" },
]

const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: 'other', label: 'Other / Prefer not to say' },
]

export default function Step2Service({ data, errors, update }) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#E0F7F3] flex items-center justify-center flex-shrink-0">
            <FiFileText size={16} className="text-[#00B894]" />
          </div>
          <h3 className="text-[#0F172A] font-extrabold text-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Service & Patient Details
          </h3>
        </div>
        <p className="text-[#64748B] text-sm ml-10">Select the service and tell us about the patient.</p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Service selection — visual cards */}
        <FormField label="Select Service" required error={errors.service}>
          <div className="grid sm:grid-cols-2 gap-2.5 mt-1">
            {services.map(s => (
              <button
                key={s.value}
                type="button"
                onClick={() => update({ service: s.value })}
                className={`flex items-center gap-3 p-3.5 rounded-xl border-2 text-left transition-all duration-150 group ${
                  data.service === s.value
                    ? 'border-[#0F6CBD] bg-[#E8F3FC] shadow-[0_2px_12px_rgba(15,108,189,0.15)]'
                    : 'border-[#E2E8F0] bg-white hover:border-[#0F6CBD]/40 hover:bg-[#F8FAFC]'
                }`}
                aria-pressed={data.service === s.value}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0 transition-all ${
                  data.service === s.value ? 'bg-[#0F6CBD]/15 scale-110' : 'bg-[#F1F5F9] group-hover:scale-105'
                }`}>
                  {s.label.split(' ')[0]}
                </div>
                <div className="min-w-0">
                  <p className={`font-semibold text-xs leading-snug truncate ${data.service === s.value ? 'text-[#0F6CBD]' : 'text-[#334155]'}`}>
                    {s.label.split(' ').slice(1).join(' ')}
                  </p>
                  <p className="text-[#94A3B8] text-[10px] truncate">{s.desc}</p>
                </div>
                {data.service === s.value && (
                  <div className="ml-auto w-5 h-5 rounded-full bg-[#0F6CBD] flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L4 7L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
          {errors.service && <p role="alert" className="text-red-500 text-xs flex items-center gap-1 mt-1"><span>⚠</span> {errors.service}</p>}
        </FormField>

        {/* Age + Gender row */}
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Patient Age" required error={errors.patientAge}>
            <div className="relative">
              <Input
                type="number"
                name="patientAge"
                value={data.patientAge}
                onChange={e => update({ patientAge: e.target.value })}
                placeholder="Age in years"
                min={1}
                max={120}
                required
                aria-required="true"
                error={errors.patientAge}
              />
              <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] text-xs font-medium">yrs</span>
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
            >
              <option value="">Select gender</option>
              {genderOptions.map(g => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </Select>
          </FormField>
        </div>
      </div>

      {/* Info note */}
      <div className="mt-6 flex items-start gap-2.5 p-3.5 rounded-xl bg-[#E0F7F3]/50 border border-[#00B894]/15">
        <span className="text-base flex-shrink-0 mt-0.5">💡</span>
        <p className="text-[#475569] text-xs leading-relaxed">
          Not sure which service you need? Select <strong>"Other / Not Sure"</strong> and our care coordinator will guide you to the right service when they call back.
        </p>
      </div>
    </div>
  )
}
