import { motion } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa6'
import { FiMapPin } from 'react-icons/fi'

const testimonials = [
  {
    id: 1,
    name: 'Amit Joshi',
    role: 'Patient – Diagnostic Tests',
    location: 'Juhu, Mumbai',
    text: 'Booked a home blood test at 7 AM and the technician was at my door by 7:15 AM! Reports came digitally by afternoon. The entire experience was seamless and professional. Will definitely use Curexhealth again.',
    avatar: 'AJ',
    avatarColor: '#10b981'
  },
  {
    id: 2,
    name: 'Sneha Patil',
    role: 'Patient – Physiotherapy',
    location: 'Andheri, Mumbai',
    text: 'The physiotherapist was very knowledgeable and polite. My back pain has improved a lot after just a few sessions. It\'s so convenient to get expert care at home. Highly recommended Curexhealth!"',
    avatar: 'SP',
    avatarColor: '#3B82F6'
  },
  {
    id: 3,
    name: 'Ramesh Kulkarni',
    role: 'Patient\'s Relative – Nursing Care',
    location: 'Bandra, Mumbai',
    text: 'We had booked a nurse for post-surgery care for my father. The nurse was experienced, compassionate, and took great care. It gave us a lot of peace of mind. Thank you Curexhealth!"',
    avatar: 'RK',
    avatarColor: '#A78BFA'
  },
  {
    id: 4,
    name: 'Priya Shah',
    role: 'Patient\'s Relative – Doctor Visit',
    location: 'Goregaon, Mumbai',
    text: 'Curexhealth is a blessing! The doctor visit at home was so convenient, especially for my elderly parents. The doctor was very professional and spent time understanding their condition."',
    avatar: 'PS',
    avatarColor: '#F87171'
  }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1]
    }
  })
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC] relative overflow-hidden" aria-label="Patient testimonials">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-40 pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#d1fae5] text-[#0A9C6F] text-xs font-bold px-5 py-2 rounded-full mb-6 border border-[#0A9C6F]/20">
            ⭐ Patient Stories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4 font-display leading-tight">
            Trusted by Thousands<br />
            <span className="text-[#0A9C6F]">Across Mumbai</span>
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real stories from real patients. Their words are our greatest achievement.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E2E8F0] hover:border-[#0A9C6F]/30 transition-all duration-300 cursor-default"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.06)' }}
            >
              {/* Quote Icon */}
              <FaQuoteLeft size={32} className="text-[#0A9C6F]/15 mb-4" aria-hidden="true" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} size={16} className="text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-[#334155] text-sm sm:text-base leading-relaxed mb-6">
                {testimonial.text}
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#F1F5F9]">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-base flex-shrink-0"
                  style={{ 
                    backgroundColor: testimonial.avatarColor,
                    boxShadow: `0 4px 12px ${testimonial.avatarColor}40`
                  }}
                >
                  {testimonial.avatar}
                </div>
                <div className="flex-1">
                  <p className="text-[#0F172A] font-bold text-base font-display">
                    {testimonial.name}
                  </p>
                  <p className="text-[#64748B] text-xs sm:text-sm">
                    {testimonial.role}
                  </p>
                  <p className="text-[#64748B] text-xs flex items-center gap-1 mt-1">
                    <FiMapPin size={12} className="text-[#0A9C6F]" />
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
