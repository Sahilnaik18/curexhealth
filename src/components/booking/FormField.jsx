export function FormField({ label, required, error, children, hint }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[#334155] font-semibold text-sm flex items-center gap-1">
        {label}
        {required && <span className="text-red-500 text-xs" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[#94A3B8] text-xs">{hint}</p>}
      {error && (
        <p role="alert" className="text-red-500 text-xs flex items-center gap-1">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  )
}

const base = 'w-full px-4 py-3 rounded-xl border text-[#0F172A] placeholder-[#94A3B8] text-sm bg-[#F8FAFC] transition-all duration-150 focus:outline-none focus:bg-white focus:ring-2'
const ok = 'border-[#E2E8F0] focus:border-[#0F6CBD] focus:ring-[#0F6CBD]/15'
const err = 'border-red-400 focus:border-red-500 focus:ring-red-400/15 bg-red-50/30'

export function Input({ error, className = '', ...props }) {
  return <input className={`${base} ${error ? err : ok} ${className}`} {...props} />
}

export function Select({ error, className = '', children, ...props }) {
  return (
    <select className={`${base} ${error ? err : ok} ${className} cursor-pointer`} {...props}>
      {children}
    </select>
  )
}

export function Textarea({ error, className = '', ...props }) {
  return <textarea className={`${base} ${error ? err : ok} ${className} resize-none`} {...props} />
}
