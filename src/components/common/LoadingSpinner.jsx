import { motion } from 'framer-motion'

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col items-center gap-6"
      >
        {/* Animated logo mark */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full"
            style={{ background: 'conic-gradient(#0F6CBD, #00B894, transparent)', padding: 2 }}
          >
            <div className="w-full h-full rounded-full bg-white" />
          </motion.div>

          {/* Inner pulse */}
          <motion.div
            animate={{ scale: [0.9, 1.05, 0.9], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute inset-3 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0F6CBD, #00B894)' }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 4v16M4 12h16" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </motion.div>
        </div>

        {/* Brand name */}
        <div className="text-center">
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[#0F172A] font-extrabold text-xl font-display"
          >
            Curex<span className="text-[#0F6CBD]">health</span>
          </motion.p>
          <p className="text-[#94A3B8] text-xs mt-1 tracking-widest uppercase font-medium">Loading...</p>
        </div>

        {/* Progress dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map(i => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full bg-[#0F6CBD]"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
