import { motion } from 'framer-motion'
import { FiCheckCircle, FiCalendar, FiClock, FiThumbsUp } from 'react-icons/fi'
import { FaWhatsapp, FaShieldAlt } from 'react-icons/fa'
import { useBooking } from '../../context/BookingContext'
import heroImage from '../../assets/hero.png'

export default function Hero() {
  const { openBooking } = useBooking()

  return (
    <section className="relative bg-white min-h-[90vh] flex items-center overflow-hidden -mt-8 -mb-8" aria-label="Welcome to Curexhealth">
      <div className="w-full pl-4 sm:pl-6 lg:pl-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-12 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col items-start lg:pl-12 xl:pl-16">
            {/* Tag */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6"
            >
              <p className="text-[#0A9C6F] text-sm font-bold tracking-wider uppercase">
                Premium Home Healthcare in Mumbai
              </p>
              <div className="h-0.5 w-16 bg-[#0A9C6F] mt-2" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight mb-4"
            >
              Expert Care,
              <br />
              <span className="text-[#0A9C6F]">Delivered Home.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#4a4a4a] text-base sm:text-lg leading-relaxed mb-6 max-w-xl"
            >
              Certified professionals. Compassionate care.
              <br />
              Right at your doorstep.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[#6a6a6a] text-sm sm:text-base leading-relaxed mb-8 max-w-xl"
            >
              Physiotherapists, nurses, and healthcare specialists bring hospital-quality care to the comfort of your home — so you can focus on what matters most.
            </motion.p>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-6 mb-8"
            >
              {[
                { Icon: FaShieldAlt, title: 'Verified', subtitle: 'Professionals', color: '#0A9C6F' },
                { Icon: FiClock, title: 'Same-day', subtitle: 'Service', color: '#0A9C6F' },
                { Icon: FiThumbsUp, title: '100%', subtitle: 'Satisfaction', color: '#0A9C6F' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0A9C6F]/10 rounded-lg flex items-center justify-center">
                    <item.Icon size={24} style={{ color: item.color }} />
                  </div>
                  <div>
                    <p className="text-[#1a1a1a] font-bold text-sm">{item.title}</p>
                    <p className="text-[#6a6a6a] text-xs">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <motion.button
                onClick={() => openBooking()}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#0A9C6F] hover:bg-[#098c63] text-white font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center gap-3 shadow-lg transition-colors"
                aria-label="Book a home healthcare visit"
              >
                <FiCalendar size={20} />
                Book Home Visit
              </motion.button>
              
              <motion.a
                href="https://wa.me/919535659295"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-gray-50 text-[#0A9C6F] font-bold text-base px-8 py-4 rounded-lg flex items-center justify-center gap-3 border-2 border-[#0A9C6F] transition-colors"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp size={22} />
                WhatsApp Us
              </motion.a>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full lg:ml-8 xl:ml-12"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img 
                src={heroImage}
                alt="Healthcare professional providing compassionate care to elderly patient at home" 
                className="w-full h-auto object-cover min-h-[500px] lg:min-h-[600px]"
              />
              {/* White gradient overlay on left edge */}
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white via-white/50 to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
