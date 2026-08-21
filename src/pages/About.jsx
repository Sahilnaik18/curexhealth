import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCheckCircle, FiPhone, FiArrowRight } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { FaHeart, FaStar, FaLocationDot, FaShieldHalved, FaAward, FaUsers } from 'react-icons/fa6'
import SectionHeader from '../components/common/SectionHeader'
import { teamMembers } from '../data/team'
import { useBooking } from '../context/BookingContext'
import PageHero from '../components/common/PageHero'
import AnimatedCounter from '../components/common/AnimatedCounter'
import SEOHead from '../seo/SEOHead'
import { PAGE_SEO } from '../seo/seoConfig'
import { localBusinessSchema, breadcrumbSchema } from '../seo/schemas'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.1 } }),
}

const values = [
  { icon: <FaHeart size={22} />, title: 'Patient-First Always', desc: 'Every decision starts with one question: "Is this best for the patient?" No exceptions.', color: '#FF7675', bg: '#FEF0F0' },
  { icon: <FaShieldHalved size={22} />, title: 'Uncompromising Quality', desc: 'We set the highest clinical standards and hold every professional accountable to them, every single day.', color: '#0F6CBD', bg: '#E8F3FC' },
  { icon: <FaStar size={22} />, title: 'Continuous Excellence', desc: 'Healthcare evolves — so do we. Our professionals undergo regular training and certification updates.', color: '#FDCB6E', bg: '#FEF6E4' },
  { icon: <FaLocationDot size={22} />, title: 'Accessible to All', desc: 'Premium healthcare should not be a privilege. We make expert care accessible to every home in Mumbai.', color: '#00B894', bg: '#E0F7F3' },
  { icon: <FaAward size={22} />, title: 'Clinical Excellence', desc: 'Every professional on our network meets rigorous clinical standards — from certification to bedside manner.', color: '#5B4FCF', bg: '#EEF0FD' },
  { icon: <FaUsers size={22} />, title: 'Family-Centred Care', desc: 'We involve families in care planning and keep them informed every step of the way.', color: '#E17055', bg: '#FDF0EC' },
]

const milestones = [
  { year: '2025', title: 'Curexhealth Launches', desc: 'Starting with certified physiotherapists, nurses, and healthcare specialists bringing premium care to homes across Mumbai.' },
  { year: 'Q2 2025', title: 'Expand Service Areas', desc: 'Growing our coverage to reach 20+ key areas in Mumbai with comprehensive home healthcare services.' },
  { year: 'Q3 2025', title: 'Specialized Programs', desc: 'Adding elder care, stroke rehabilitation, and sports injury recovery programs to our service portfolio.' },
  { year: 'Q4 2025', title: 'Technology Integration', desc: 'Launching patient app for seamless booking, digital health records, and real-time professional tracking.' },
  { year: '2026', title: 'NABH Recognition', desc: 'Working towards NABH accreditation to validate our commitment to clinical excellence and quality processes.' },
  { year: 'Future', title: 'Mumbai-Wide Coverage', desc: 'Our vision: Making premium home healthcare accessible to every neighborhood across Greater Mumbai.' },
]

const accreditations = [
  { label: 'NABH Recognised', icon: '🏆', desc: 'National Accreditation Board for Hospitals' },
  { label: 'ISO 9001:2015', icon: '✅', desc: 'Quality Management Certified' },
  { label: 'BPT / MPT Certified', icon: '🎓', desc: 'All physiotherapists degree-qualified' },
  { label: '4.9★ Google Rating', icon: '⭐', desc: 'Based on 3,200+ patient reviews' },
]

export default function About() {
  const { openBooking } = useBooking()
  const seo = PAGE_SEO.about
  return (
    <>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonical={seo.canonical}
        schemas={[
          localBusinessSchema,
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About Us', path: '/about' },
          ]),
        ]}
      />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <PageHero
        badge="🌟 About Curexhealth"
        title="Redefining Home Healthcare"
        highlight="in Mumbai"
        subtitle="Born from a simple belief — that premium, compassionate healthcare should come to you. On a mission to make world-class medical care accessible to every home in Mumbai."
        dark
      />

      {/* ── Stats ─────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-[#F1F5F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { to: 10000, suffix:'+', label:'Patients Served',      sublabel:'Across Mumbai',        color:'#0F6CBD', bg:'#E8F3FC' },
              { to: 150,   suffix:'+', label:'Expert Professionals',  sublabel:'Verified & certified', color:'#00B894', bg:'#E0F7F3' },
              { to: 4.9,   suffix:'★', label:'Average Rating',        sublabel:'3,200+ reviews',       color:'#F59E0B', bg:'#FEF6E4', decimals:1 },
              { to: 50,    suffix:'+', label:'Areas in Mumbai',        sublabel:'Growing every month',  color:'#E17055', bg:'#FDF0EC' },
            ].map((stat, i) => (
              <motion.div key={stat.label} custom={i} initial="hidden" whileInView="visible" viewport={{ once:true }} variants={fadeUp}
                whileHover={{ y:-4, scale:1.02 }}
                className="rounded-2xl p-6 text-center border border-[#E2E8F0] shadow-card transition-all duration-200"
                style={{ backgroundColor: stat.bg }}>
                <AnimatedCounter to={stat.to} suffix={stat.suffix} decimals={stat.decimals||0} color={stat.color}
                  className="text-4xl font-extrabold font-display block mb-1" />
                <p className="text-[#0F172A] font-bold text-sm mb-0.5 font-display">{stat.label}</p>
                <p className="text-[#94A3B8] text-xs">{stat.sublabel}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission & Story ───────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">

            {/* Mission */}
            <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <span className="inline-flex items-center gap-2 bg-[#E8F3FC] text-[#0F6CBD] font-semibold text-sm px-4 py-1.5 rounded-full mb-5">
                🎯 Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mb-5 leading-tight" >
                Healthcare That Comes
                <span className="block text-[#0F6CBD]">Directly to You</span>
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-5">
                Curexhealth was founded with a clear vision: to make premium, certified healthcare accessible to every home in Mumbai — without the chaos of hospitals or the compromise on quality.
              </p>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                We're building Mumbai's most trusted full-spectrum home healthcare company — connecting patients with verified professionals across 50+ areas for physiotherapy, nursing care, elder care, and specialized rehabilitation services.
              </p>
              <div className="flex flex-col gap-3 mb-8">
                {[
                  'NABH-recognised quality processes',
                  'Rigorous 10-step professional verification',
                  'Personalised care plans for every patient',
                  '100% satisfaction guarantee on all services',
                  'Available 7 days a week, 8 AM to 8 PM',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <FiCheckCircle size={17} className="text-[#00B894] flex-shrink-0" aria-hidden="true" />
                    <span className="text-[#334155] font-medium text-sm">{item}</span>
                  </div>
                ))}
              </div>

              {/* Accreditations */}
              <div className="grid grid-cols-2 gap-3">
                {accreditations.map((a) => (
                  <div key={a.label} className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="text-xl flex-shrink-0">{a.icon}</span>
                    <div>
                      <p className="text-[#0F172A] font-bold text-xs">{a.label}</p>
                      <p className="text-[#94A3B8] text-[10px]">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-[#E2E8F0] shadow-[0_4px_32px_rgba(0,0,0,0.06)]">
                <h3 className="text-[#0F172A] font-bold text-xl mb-7" >
                  Our Journey
                </h3>
                <div className="relative flex flex-col gap-0">
                  {/* Timeline vertical line */}
                  <div className="absolute left-[11px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#0F6CBD] via-[#00B894] to-[#0F6CBD]" aria-hidden="true" />
                  {milestones.map((m, i) => (
                    <motion.div
                      key={m.year}
                      custom={i}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={fadeUp}
                      className="flex gap-5 pb-6 last:pb-0"
                    >
                      <div className="flex flex-col items-center flex-shrink-0 pt-1.5">
                        <div
                          className="w-[22px] h-[22px] rounded-full border-3 border-white shadow-[0_0_0_3px_rgba(15,108,189,0.25)] relative z-10"
                          style={{ backgroundColor: i % 2 === 0 ? '#0F6CBD' : '#00B894' }}
                          aria-hidden="true"
                        />
                      </div>
                      <div className="pb-1">
                        <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-lg mb-1.5" style={{ backgroundColor: i % 2 === 0 ? '#E8F3FC' : '#E0F7F3', color: i % 2 === 0 ? '#0F6CBD' : '#00B894' }}>
                          {m.year}
                        </span>
                        <h4 className="text-[#0F172A] font-bold text-sm mb-1" >
                          {m.title}
                        </h4>
                        <p className="text-[#64748B] text-xs leading-relaxed">{m.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────── */}
      <section className="py-16 lg:py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="💙 Our Values"
            title="The Principles That"
            titleHighlight="Guide Everything We Do"
            subtitle="These aren't just words on a wall — they're the foundation of every visit, every care plan, and every patient interaction."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-6 border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.09)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: v.bg, color: v.color }} aria-hidden="true">
                  {v.icon}
                </div>
                <h3 className="text-[#0F172A] font-bold text-base mb-2" >{v.title}</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────── */}
      <section id="team" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            badge="👩‍⚕️ Leadership Team"
            title="The Experts Behind"
            titleHighlight="Curexhealth"
            subtitle="Our leadership team combines deep clinical expertise with genuine empathy — building a healthcare company Mumbai can truly rely on."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.11)] transition-all duration-300"
              >
                {/* Avatar */}
                <div
                  className="h-40 flex items-center justify-center relative"
                  style={{ background: `linear-gradient(135deg, ${member.color}18, ${member.color}08)` }}
                >
                  <div
                    className="w-[72px] h-[72px] rounded-full border-4 border-white shadow-[0_8px_24px_rgba(0,0,0,0.15)] flex items-center justify-center text-white text-xl font-extrabold"
                    style={{ backgroundColor: member.color }}
                    aria-label={`${member.name} avatar`}
                  >
                    {member.initials}
                  </div>
                  <span
                    className="absolute bottom-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-lg"
                    style={{ backgroundColor: `${member.color}20`, color: member.color }}
                  >
                    ✓ Verified
                  </span>
                </div>
                {/* Info */}
                <div className="p-5">
                  <h3 className="text-[#0F172A] font-bold text-sm mb-0.5" >{member.name}</h3>
                  <p className="font-semibold text-xs mb-1" style={{ color: member.color }}>{member.role}</p>
                  <p className="text-[#94A3B8] text-xs mb-3">{member.speciality}</p>
                  <span
                    className="inline-block px-2.5 py-0.5 rounded-lg text-[10px] font-bold mb-3"
                    style={{ backgroundColor: `${member.color}15`, color: member.color }}
                  >
                    {member.experience}
                  </span>
                  <p className="text-[#64748B] text-xs leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.p
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-[#94A3B8] text-sm mt-8"
          >
            Plus 150+ verified physiotherapists, nurses, and specialists across all service areas in Mumbai.
          </motion.p>
        </div>
      </section>

      {/* ── Why Us Strip ─────────────────────────────────────── */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { emoji: '🏥', title: '7 Specialised Services', desc: 'Physiotherapy, nursing, elder care, surgery rehab & more' },
              { emoji: '⚡', title: 'Same-day Booking', desc: 'Professional at your door within 2–4 hours of booking' },
              { emoji: '🔒', title: '10-Step Verification', desc: 'Background checks, credentials & clinical assessment' },
              { emoji: '💯', title: 'Satisfaction Guarantee', desc: 'Not happy? We replace the professional at no charge' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-center"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-bold text-[#0F172A] text-sm mb-1.5" >{item.title}</h3>
                <p className="text-[#94A3B8] text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services CTA ─────────────────────────────────────── */}
      <section className="py-16 bg-gradient-to-r from-[#0F6CBD] to-[#00B894]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4" >
              Experience the Curexhealth Difference
            </h2>
            <p className="text-white/80 text-lg mb-8">
              Join families across Mumbai who are choosing premium home healthcare.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={openBooking}
                className="flex items-center justify-center gap-2 bg-white text-[#0F6CBD] font-bold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <FiPhone size={20} /> Book Home Visit
              </button>
              <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-white/15 border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/25 transition-colors">
                <FaWhatsapp size={22} /> WhatsApp
              </a>
              <Link to="/services"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white/50 text-white font-bold px-8 py-4 rounded-2xl hover:border-white hover:bg-white/10 transition-all">
                Our Services <FiArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

