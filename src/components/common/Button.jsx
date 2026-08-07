import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  to,
  href,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
  type = 'button',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 cursor-pointer select-none'

  const variants = {
    primary:
      'bg-[#0F6CBD] text-white hover:bg-[#0A5299] shadow-[0_4px_20px_rgba(15,108,189,0.35)] hover:shadow-[0_8px_32px_rgba(15,108,189,0.45)] active:scale-95',
    secondary:
      'bg-[#00B894] text-white hover:bg-[#009B7D] shadow-[0_4px_20px_rgba(0,184,148,0.3)] hover:shadow-[0_8px_32px_rgba(0,184,148,0.4)] active:scale-95',
    outline:
      'border-2 border-[#0F6CBD] text-[#0F6CBD] hover:bg-[#0F6CBD] hover:text-white active:scale-95',
    'outline-white':
      'border-2 border-white text-white hover:bg-white hover:text-[#0F6CBD] active:scale-95',
    ghost:
      'text-[#0F6CBD] hover:bg-[#E8F3FC] active:scale-95',
    white:
      'bg-white text-[#0F6CBD] shadow-[0_4px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)] active:scale-95',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl',
  }

  const disabledClass = disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabledClass} ${className}`

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="text-[1.1em]">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="text-[1.1em]">{icon}</span>}
    </>
  )

  if (to) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <Link to={to} className={classes} {...props}>
          {content}
        </Link>
      </motion.div>
    )
  }

  if (href) {
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-block">
        <a href={href} className={classes} {...props}>
          {content}
        </a>
      </motion.div>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {content}
    </motion.button>
  )
}
