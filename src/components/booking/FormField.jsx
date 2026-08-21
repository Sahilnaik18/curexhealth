export function FormField({ label, required, error, children, hint }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[#1E293B] font-semibold text-sm flex items-center gap-1.5">
        {label}
        {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[#64748B] text-xs">{hint}</p>}
      {error && (
        <p role="alert" className="text-red-500 text-xs flex items-center gap-1">
          <span aria-hidden="true">⚠</span> {error}
        </p>
      )}
    </div>
  )
}

const base = 'w-full px-4 py-3.5 rounded-xl border-2 text-[#0F172A] placeholder-[#94A3B8] text-sm bg-white transition-all duration-200 focus:outline-none'
const ok = 'border-[#E2E8F0] hover:border-[#CBD5E1] focus:border-[#0A9C6F] focus:ring-4 focus:ring-[#0A9C6F]/10'
const err = 'border-red-300 focus:border-red-500 focus:ring-4 focus:ring-red-500/10'

export function Input({ error, className = '', ...props }) {
  return <input className={`${base} ${error ? err : ok} ${className}`} {...props} />
}

export function Select({ error, className = '', children, ...props }) {
  return (
    <select className={`${base} ${error ? err : ok} ${className} cursor-pointer appearance-none bg-no-repeat`} 
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L6 6L11 1' stroke='%2394A3B8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
        backgroundPosition: 'right 1rem center'
      }}
      {...props}>
      {children}
    </select>
  )
}

export function Textarea({ error, className = '', ...props }) {
  return <textarea className={`${base} ${error ? err : ok} ${className} resize-none`} {...props} />
}
