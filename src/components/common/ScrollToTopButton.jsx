import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronUp } from 'react-icons/fi'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      const docH = document.documentElement.scrollHeight - window.innerHeight
      setVisible(scrollY > 400)
      setProgress(docH > 0 ? (scrollY / docH) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const r = 18
  const circ = 2 * Math.PI * r
  const dash = (progress / 100) * circ

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-[7.5rem] right-4 sm:bottom-32 sm:right-5 z-[9985] w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center"
          style={{ filter: 'drop-shadow(0 4px 12px rgba(15,108,189,0.4))' }}
        >
          {/* Circular progress */}
          <svg width="48" height="48" viewBox="0 0 48 48" className="absolute inset-0" aria-hidden="true">
            {/* Track */}
            <circle cx="24" cy="24" r={r}
              fill="none" stroke="rgba(15,108,189,0.15)" strokeWidth="2.5" />
            {/* Progress */}
            <circle cx="24" cy="24" r={r}
              fill="none"
              stroke="url(#progress-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={`${dash} ${circ - dash}`}
              strokeDashoffset={circ * 0.25}
              style={{ transition: 'stroke-dasharray 0.1s ease' }}
            />
            <defs>
              <linearGradient id="progress-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0F6CBD" />
                <stop offset="100%" stopColor="#00B894" />
              </linearGradient>
            </defs>
          </svg>
          {/* Button face */}
          <div className="relative w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0F6CBD, #0e7fd4)', boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.2)' }}>
            <FiChevronUp size={18} className="text-white" strokeWidth={2.5} />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
