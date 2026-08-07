import { FiMapPin, FiCalendar, FiClock } from 'react-icons/fi'
import { FormField, Input, Textarea } from '../FormField'

const areas = [
  'Bandra', 'Andheri West', 'Andheri East', 'Juhu', 'Vile Parle', 'Santacruz',
  'Khar', 'Jogeshwari', 'Goregaon', 'Malad', 'Kandivali', 'Borivali', 'Dahisar',
  'Dadar', 'Matunga', 'Sion', 'Kurla', 'Ghatkopar', 'Vikhroli', 'Bhandup',
  'Mulund', 'Powai', 'Hiranandani', 'Chandivali', 'Worli', 'Lower Parel',
  'Prabhadevi', 'Wadala', 'Chembur', 'Parel', 'Thane West', 'Thane East',
  'Navi Mumbai', 'Vashi', 'Kopar Khairane', 'Belapur', 'Kharghar', 'Panvel',
  'Dombivli', 'Kalyan', 'Other',
]

const timeSlots = [
  '8:00 AM – 9:00 AM',
  '9:00 AM – 10:00 AM',
  '10:00 AM – 11:00 AM',
  '11:00 AM – 12:00 PM',
  '12:00 PM – 1:00 PM',
  '2:00 PM – 3:00 PM',
  '3:00 PM – 4:00 PM',
  '4:00 PM – 5:00 PM',
  '5:00 PM – 6:00 PM',
  '6:00 PM – 7:00 PM',
  '7:00 PM – 8:00 PM',
]

// Min date = today
const today = new Date().toISOString().split('T')[0]
// Max date = 30 days from now
const maxDate = new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0]

export default function Step3Details({ data, errors, update }) {
  return (
    <div>
      <div className="mb-6">
        <div className="flex items-center gap-2.5 mb-1">
          <div className="w-8 h-8 rounded-lg bg-[#EEF0FD] flex items-center justify-center flex-shrink-0">
            <FiMapPin size={16} className="text-[#5B4FCF]" />
          </div>
          <h3 className="text-[#0F172A] font-extrabold text-xl" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Visit & Medical Details
          </h3>
        </div>
        <p className="text-[#64748B] text-sm ml-10">Help us prepare for the best possible home visit.</p>
      </div>

      <div className="flex flex-col gap-5">
        {/* Medical condition */}
        <FormField label="Medical Condition / Reason for Visit" required error={errors.condition}
          hint="E.g. knee pain after surgery, back pain, stroke recovery, wound care…">
          <Textarea
            name="condition"
            value={data.condition}
            onChange={e => update({ condition: e.target.value })}
            placeholder="Briefly describe the patient's condition or reason for the home visit…"
            rows={3}
            required
            error={errors.condition}
          />
        </FormField>

        {/* Address */}
        <FormField label="Home Address" required error={errors.address}>
          <div className="relative">
            <FiMapPin size={16} className="absolute left-3.5 top-3.5 text-[#94A3B8]" />
            <Textarea
              name="address"
              value={data.address}
              onChange={e => update({ address: e.target.value })}
              placeholder="Flat / House no., Building name, Street…"
              rows={2}
              required
              error={errors.address}
              className="pl-10"
            />
          </div>
        </FormField>

        {/* Area + Pincode */}
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Area" required error={errors.area}>
            <select
              name="area"
              value={data.area}
              onChange={e => update({ area: e.target.value })}
              required
              className={`w-full px-4 py-3 rounded-xl border text-sm bg-[#F8FAFC] transition-all duration-150 focus:outline-none focus:bg-white focus:ring-2 cursor-pointer ${
                errors.area ? 'border-red-400 focus:border-red-500 focus:ring-red-400/15' : 'border-[#E2E8F0] focus:border-[#0F6CBD] focus:ring-[#0F6CBD]/15'
              } text-[#0F172A]`}
            >
              <option value="">Select area</option>
              {areas.map(a => <option key={a} value={a}>{a}</option>)}
            </select>
            {errors.area && <p role="alert" className="text-red-500 text-xs flex items-center gap-1 mt-1"><span>⚠</span> {errors.area}</p>}
          </FormField>

          <FormField label="Pincode" required error={errors.pincode}>
            <Input
              type="text"
              name="pincode"
              value={data.pincode}
              onChange={e => update({ pincode: e.target.value })}
              placeholder="6-digit pincode"
              maxLength={6}
              required
              error={errors.pincode}
            />
          </FormField>
        </div>

        {/* Date + Time */}
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Preferred Date" required error={errors.preferredDate}>
            <div className="relative">
              <FiCalendar size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8]" />
              <Input
                type="date"
                name="preferredDate"
                value={data.preferredDate}
                onChange={e => update({ preferredDate: e.target.value })}
                min={today}
                max={maxDate}
                required
                error={errors.preferredDate}
                className="pl-10"
              />
            </div>
          </FormField>

          <FormField label="Preferred Time" required error={errors.preferredTime}>
            <div className="relative">
              <FiClock size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#94A3B8] pointer-events-none" />
              <select
                name="preferredTime"
                value={data.preferredTime}
                onChange={e => update({ preferredTime: e.target.value })}
                required
                className={`w-full pl-10 pr-4 py-3 rounded-xl border text-sm bg-[#F8FAFC] transition-all duration-150 focus:outline-none focus:bg-white focus:ring-2 cursor-pointer ${
                  errors.preferredTime ? 'border-red-400 focus:border-red-500 focus:ring-red-400/15' : 'border-[#E2E8F0] focus:border-[#0F6CBD] focus:ring-[#0F6CBD]/15'
                } text-[#0F172A]`}
              >
                <option value="">Select slot</option>
                {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
              {errors.preferredTime && <p role="alert" className="text-red-500 text-xs flex items-center gap-1 mt-1"><span>⚠</span> {errors.preferredTime}</p>}
            </div>
          </FormField>
        </div>

        {/* Additional notes */}
        <FormField label="Additional Notes" hint="Any special requirements, access instructions, or information for the professional">
          <Textarea
            name="notes"
            value={data.notes}
            onChange={e => update({ notes: e.target.value })}
            placeholder="E.g. third floor, no lift, need female therapist, bring specific equipment…"
            rows={3}
          />
        </FormField>
      </div>
    </div>
  )
}
