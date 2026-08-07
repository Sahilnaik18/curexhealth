import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'

const serviceLinks = [
  { name: 'Home Physiotherapy',     to: '/services/home-physiotherapy' },
  { name: 'Nursing Care',           to: '/services/nursing-care' },
  { name: 'Elder Care',             to: '/services/elder-care' },
  { name: 'Post Surgery Rehab',     to: '/services/post-surgery-rehabilitation' },
  { name: 'Stroke Rehabilitation',  to: '/services/stroke-rehabilitation' },
  { name: 'Sports Injury Rehab',    to: '/services/sports-injury-rehabilitation' },
  { name: 'Orthopedic Rehab',       to: '/services/orthopedic-rehabilitation' },
]
const companyLinks = [
  { name: 'About Us',     to: '/about' },
  { name: 'Service Areas',to: '/service-areas' },
  { name: 'FAQ',          to: '/faq' },
  { name: 'Contact Us',   to: '/contact' },
]
const legalLinks = [
  { name: 'Privacy Policy',     to: '/privacy-policy' },
  { name: 'Terms & Conditions', to: '/terms-and-conditions' },
  { name: 'Cancellation Policy',to: '/cancellation-policy' },
]
const areas = ['Bandra','Andheri','Juhu','Powai','Malad','Borivali','Thane','Navi Mumbai','Dadar','Worli','Chembur','Kurla']
const socials = [
  { icon: <FaWhatsapp size={16} />, href:'https://wa.me/918762697832', label:'WhatsApp', hover:'#25D366' },
  { icon: <FaInstagram size={16} />, href:'https://instagram.com/curexhealth', label:'Instagram', hover:'#E1306C' },
  { icon: <FaFacebookF size={16} />, href:'https://facebook.com/curexhealth', label:'Facebook', hover:'#1877F2' },
  { icon: <FaLinkedinIn size={16} />, href:'https://linkedin.com/company/curexhealth', label:'LinkedIn', hover:'#0A66C2' },
  { icon: <FaYoutube size={16} />, href:'https://youtube.com/@curexhealth', label:'YouTube', hover:'#FF0000' },
  { icon: <FaXTwitter size={16} />, href:'https://x.com/curexhealth', label:'X / Twitter', hover:'#1DA1F2' },
]

export default function Footer() {
  const { openBooking } = useBooking()
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#0D1B2E] text-white overflow-hidden" role="contentinfo">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full" style={{ background:'radial-gradient(circle, rgba(15,108,189,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full" style={{ background:'radial-gradient(circle, rgba(0,184,148,0.06) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 dot-grid-white opacity-30" />
      </div>

      {/* CTA band */}
      <div className="relative" style={{ background:'linear-gradient(135deg, #0F6CBD 0%, #0e7fd4 40%, #00B894 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage:'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">Need healthcare at home today?</h2>
            <p className="text-white/75 mt-1 text-sm">Certified professionals available 7 days a week, 8 AM – 8 PM.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <motion.button onClick={openBooking} whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              className="btn-secondary text-sm font-bold flex items-center gap-2 px-6 py-3 rounded-2xl">
              <FiPhone size={15} /> Book Home Visit
            </motion.button>
            <motion.a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
              whileHover={{ scale:1.04, y:-2 }} whileTap={{ scale:0.97 }}
              className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-2xl text-sm shadow-glow-green hover:opacity-90 transition-opacity">
              <FaWhatsapp size={17} /> WhatsApp
            </motion.a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5 group" aria-label="Curexhealth Home">
              <div className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{ background:'linear-gradient(135deg, #0F6CBD, #00B894)', boxShadow:'0 4px 16px rgba(15,108,189,0.4)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3L12 21M4 12L20 12" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xl font-extrabold font-display group-hover:text-white transition-colors">
                  Curex<span className="text-[#34D399]">health</span>
                </p>
                <p className="text-[9px] text-white/35 font-bold tracking-[0.2em] uppercase mt-0.5">Home Healthcare</p>
              </div>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed mb-6 max-w-xs">
              Mumbai's premium home healthcare company. Certified professionals, medical-grade care — delivered to your doorstep with compassion.
            </p>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon:<FiPhone size={13}/>, text:'+91 98765 43210', href:'tel:+918762697832' },
                { icon:<FiMail size={13}/>, text:'care@curexhealth.com', href:'mailto:care@curexhealth.com' },
                { icon:<FiMapPin size={13}/>, text:'Mumbai, Maharashtra, India', href:null },
              ].map(c => (
                c.href
                  ? <a key={c.text} href={c.href} className="flex items-center gap-2.5 text-white/45 hover:text-white transition-colors text-sm group">
                      <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#0F6CBD]/30 transition-colors" style={{ background:'rgba(15,108,189,0.15)', color:'#60A5FA' }}>{c.icon}</span>
                      {c.text}
                    </a>
                  : <span key={c.text} className="flex items-center gap-2.5 text-white/35 text-sm">
                      <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background:'rgba(15,108,189,0.12)', color:'#60A5FA' }}>{c.icon}</span>
                      {c.text}
                    </span>
              ))}
            </div>
            <div className="flex items-center flex-wrap gap-2">
              {socials.map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/45 hover:text-white transition-all duration-200"
                  style={{ background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.08)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = s.hover; e.currentTarget.style.border=`1px solid ${s.hover}` }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.border='1px solid rgba(255,255,255,0.08)' }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider font-display">Our Services</h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map(s => (
                <li key={s.name}>
                  <Link to={s.to} className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <FiArrowRight size={11} className="text-[#0F6CBD] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Legal */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider font-display">Company</h3>
            <ul className="flex flex-col gap-2.5 mb-7">
              {companyLinks.map(l => (
                <li key={l.name}>
                  <Link to={l.to} className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <FiArrowRight size={11} className="text-[#00B894] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider font-display">Legal</h3>
            <ul className="flex flex-col gap-2.5">
              {legalLinks.map(l => (
                <li key={l.name}>
                  <Link to={l.to} className="text-white/30 hover:text-white/70 transition-colors text-sm flex items-center gap-2 group">
                    <FiArrowRight size={11} className="text-white/25 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider font-display">Key Areas</h3>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {areas.map(area => (
                <Link key={area} to="/service-areas"
                  className="px-2.5 py-1 rounded-lg text-white/35 text-xs font-semibold hover:text-white hover:bg-[#0F6CBD]/20 transition-all"
                  style={{ border:'1px solid rgba(255,255,255,0.07)' }}>
                  {area}
                </Link>
              ))}
              <Link to="/service-areas"
                className="px-2.5 py-1 rounded-lg text-[#60A5FA] text-xs font-bold hover:bg-[#0F6CBD]/20 transition-all"
                style={{ border:'1px solid rgba(15,108,189,0.3)', background:'rgba(15,108,189,0.12)' }}>
                +40 more →
              </Link>
            </div>
            <div className="rounded-2xl p-4" style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)' }}>
              <p className="text-white/70 font-semibold text-xs mb-1 font-display">Not in our list?</p>
              <p className="text-white/35 text-xs mb-3">WhatsApp us your pincode — confirmed in minutes.</p>
              <a href="https://wa.me/918762697832" target="_blank" rel="noopener noreferrer"
                className="text-[#34D399] font-bold text-xs hover:underline flex items-center gap-1.5">
                <FaWhatsapp size={12} /> Check Coverage →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t" style={{ borderColor:'rgba(255,255,255,0.06)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-xs text-center sm:text-left">
            © {year} Curexhealth. All rights reserved. Premium home healthcare services in Mumbai, Maharashtra.
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {legalLinks.map(l => (
              <Link key={l.name} to={l.to} className="text-white/25 hover:text-white/60 text-xs transition-colors">{l.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
