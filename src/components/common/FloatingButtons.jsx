import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'

export default function FloatingButtons() {
  const [visible, setVisible]       = useState(false)
  const [showLabels, setShowLabels] = useState(true)
  const { openBooking }             = useBooking()

  useEffect(() => {
    // Show after 1s on mount — always visible
    const show = setTimeout(() => setVisible(true), 800)
    // Hide labels after 4.5s
    const hideLabels = setTimeout(() => setShowLabels(false), 4500)
    // Re-show when user scrolls enough
    const onScroll = () => {
      if (window.scrollY > 80) setVisible(true)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(show)
      clearTimeout(hideLabels)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const spring = { type: 'spring', stiffness: 300, damping: 28 }

  return (
    <div
      className="fixed bottom-5 right-4 sm:bottom-6 sm:right-5 z-[9990] flex flex-col items-end gap-3"
      role="complementary"
      aria-label="Quick contact options"
    >
      <AnimatePresence>
        {visible && (
          <>
            {/* Book Home Visit button */}
            <motion.div
              key="book"
              initial={{ opacity: 0, x: 72, scale: 0.6 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 72, scale: 0.6 }}
              transition={{ ...spring, delay: 0.1 }}
              className="relative flex items-center"
            >
              {/* Label tooltip */}
              <AnimatePresence>
                {showLabels && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.9, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.2, delay: 0.15 }}
                    className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="relative bg-white text-[#0F6CBD] text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#E2E8F0]">
                      Book Home Visit
                      <div className="absolute -right-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-r border-t border-[#E2E8F0] rotate-45" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                onClick={openBooking}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Book a home healthcare visit"
                className="w-13 h-13 sm:w-14 sm:h-14 w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-2xl flex items-center justify-center text-white relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0F6CBD, #0e7fd4)',
                  boxShadow: '0 6px 20px rgba(15,108,189,0.55), inset 0 1px 0 rgba(255,255,255,0.18)',
                }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)' }} aria-hidden="true" />
                <FiPhone size={21} strokeWidth={2.2} />
              </motion.button>
            </motion.div>

            {/* WhatsApp button */}
            <motion.div
              key="whatsapp"
              initial={{ opacity: 0, x: 72, scale: 0.6 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 72, scale: 0.6 }}
              transition={spring}
              className="relative flex items-center"
            >
              {/* Label tooltip */}
              <AnimatePresence>
                {showLabels && (
                  <motion.div
                    initial={{ opacity: 0, x: 8, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 8, scale: 0.9, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    className="absolute right-[calc(100%+10px)] top-1/2 -translate-y-1/2 pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="relative bg-white text-[#25D366] text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-[#E2E8F0]">
                      Chat on WhatsApp
                      <div className="absolute -right-[5px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-white border-r border-t border-[#E2E8F0] rotate-45" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.a
                href="https://wa.me/919535659295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Chat with us on WhatsApp"
                className="w-[52px] h-[52px] sm:w-[56px] sm:h-[56px] rounded-2xl flex items-center justify-center relative overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #25D366, #20bd59)',
                  boxShadow: '0 6px 20px rgba(37,211,102,0.55), inset 0 1px 0 rgba(255,255,255,0.18)',
                }}
              >
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 55%)' }} aria-hidden="true" />
                <FaWhatsapp size={25} className="text-white" />
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
