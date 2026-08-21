import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiActivity } from 'react-icons/fi'
import { FaCheck } from 'react-icons/fa6'
import { useBooking } from '../../context/BookingContext'

// Import service images
import homePhysioImg from '../../assets/services/home-physiotherapy.jpg'
import nursingCareImg from '../../assets/services/nursing-care.jpg'
import elderCareImg from '../../assets/services/elder-care.jpg'
import postSurgeryImg from '../../assets/services/post-surgery-rehab.jpg'
import strokeRehabImg from '../../assets/services/stroke-rehabilitation.jpg'
import sportsInjuryImg from '../../assets/services/sports-injury-rehab.jpg'
import orthopedicRehabImg from '../../assets/services/orthopedic-rehab.jpg'
import womensHealthImg from '../../assets/services/womens-health-care.jpg'

const services = [
  { 
    title:'Home Physiotherapy',  
    desc:'Certified physios bring TENS, ultrasound & manual therapy to your living room.', 
    slug:'/services/home-physiotherapy',          
    features:['Post-surgery rehab','Back & neck pain','Neuro rehab'],
    image: homePhysioImg
  },
  { 
    title:'Nursing Care',        
    desc:'Wound care, IV infusion, catheter management & 24/7 patient monitoring.',        
    slug:'/services/nursing-care',                
    features:['Wound dressing','IV therapy','Post-op care'],
    image: nursingCareImg
  },
  { 
    title:'Elder Care',           
    desc:'Compassionate caregivers for seniors — mobility, medication & companion care.',    
    slug:'/services/elder-care',                  
    features:['Daily assistance','Dementia care','Fall prevention'],
    image: elderCareImg
  },
  { 
    title:'Post Surgery Rehab',  
    desc:'Expert home rehab after knee, hip, spinal or cardiac surgery within 48 hrs.',     
    slug:'/services/post-surgery-rehabilitation',  
    features:['Joint replacement','Scar mobilisation','Strength training'],
    image: postSurgeryImg
  },
  { 
    title:'Stroke Rehabilitation',
    desc:'Neuroplasticity-based physio restoring movement, speech & independence.',         
    slug:'/services/stroke-rehabilitation',        
    features:['Gait retraining','Upper limb rehab','Family training'],
    image: strokeRehabImg
  },
  { 
    title:'Sports Injury Rehab', 
    desc:'Sport-specific recovery for ACL, rotator cuff & ankle — return to sport safely.', 
    slug:'/services/sports-injury-rehabilitation', 
    features:['ACL rehab','Kinesio taping','Return-to-sport'],
    image: sportsInjuryImg
  },
  { 
    title:'Orthopedic Rehab',    
    desc:'Targeted rehab for arthritis, spondylosis, disc herniation & fractures.',        
    slug:'/services/orthopedic-rehabilitation',    
    features:['Arthritis mgmt','Spinal rehab','Joint mobilisation'],
    image: orthopedicRehabImg
  },
  { 
    title:'Women\'s Health Care',    
    desc:'Specialized care for new mothers — postnatal recovery, breastfeeding support & pregnancy physiotherapy.',        
    slug:'/services/womens-health-care',    
    features:['Postnatal care','Lactation support','Pregnancy physio'],
    image: womensHealthImg
  },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: i => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: [0.22,1,0.36,1] } }),
}

export default function Services() {
  const { openBooking } = useBooking()
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-[#F8FAFC] relative overflow-hidden" aria-labelledby="services-heading">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div initial={{ opacity:0, y:22 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          className="text-center mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-[#0A9C6F]/10 text-[#0A9C6F] text-xs sm:text-sm font-bold px-5 py-2 rounded-full mb-5 border border-[#0A9C6F]/20">
            <FiActivity size={16} />
            What We Offer
          </span>
          <h2 id="services-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F172A] mb-4 font-display leading-tight">
            Comprehensive Home <span className="text-[#0A9C6F]">Healthcare</span> Services
          </h2>
          <p className="text-[#64748B] text-base sm:text-lg max-w-3xl mx-auto">
            All services delivered by certified professionals across 50+ areas in Mumbai — no travel, no queues.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" role="list">
          {services.map((service, i) => (
            <motion.article 
              key={service.slug} 
              custom={i} 
              variants={cardVariants} 
              initial="hidden" 
              whileInView="visible" 
              viewport={{ once:true }}
              whileHover={{ y:-8 }}
              className="group relative rounded-3xl overflow-hidden bg-white flex flex-col transition-all duration-300 border border-[#E2E8F0]"
              style={{ boxShadow:'0 4px 24px rgba(0,0,0,0.06)' }}
              role="listitem"
            >
              {/* Image Placeholder - Ready for future images */}
              <div className="relative h-48 bg-gradient-to-br from-[#0A9C6F]/10 to-[#0A9C6F]/5 overflow-hidden rounded-t-3xl">
                {service.image ? (
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover object-[center_30%]" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-2xl bg-[#0A9C6F]/10 flex items-center justify-center">
                      <FiActivity size={28} className="text-[#0A9C6F]" />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-extrabold text-[#0F172A] text-base mb-2 font-display leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#64748B] text-xs leading-relaxed mb-4">
                  {service.desc}
                </p>

                {/* Feature list with icons */}
                <ul className="flex flex-col gap-2 mb-4 flex-1">
                  {service.features.map(feature => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-[#334155]">
                      <div className="w-6 h-6 rounded-lg bg-[#0A9C6F]/10 flex items-center justify-center flex-shrink-0">
                        <FaCheck size={10} className="text-[#0A9C6F]" />
                      </div>
                      <span className="font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-[#F1F5F9]">
                  <Link 
                    to={service.slug}
                    className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2.5 rounded-xl border-2 border-[#E2E8F0] text-[#0F172A] hover:border-[#0A9C6F] hover:text-[#0A9C6F] transition-all duration-200 whitespace-nowrap"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn More
                    <FiArrowRight size={14} />
                  </Link>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openBooking(service.title);
                    }}
                    className="flex-1 flex items-center justify-center text-xs font-bold px-3 py-2.5 rounded-xl bg-[#0A9C6F] text-white hover:bg-[#0A9C6F]/90 transition-all duration-200 shadow-lg shadow-[#0A9C6F]/25"
                    aria-label={`Book ${service.title}`}
                  >
                    Book
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
