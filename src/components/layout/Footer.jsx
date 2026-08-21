import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube, FaXTwitter } from 'react-icons/fa6'
import { FiPhone, FiMail, FiMapPin, FiArrowRight } from 'react-icons/fi'
import { useBooking } from '../../context/BookingContext'
import logo from '../../assets/logo.png'

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

      {/* Main footer grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group" aria-label="Curexhealth Home">
              <img src={logo} alt="Curexhealth" className="h-12 w-auto" />
            </Link>
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon:<FiPhone size={13}/>, text:'+91 9535659295', href:'tel:+919535659295' },
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

          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider font-display">Company</h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map(l => (
                <li key={l.name}>
                  <Link to={l.to} className="text-white/40 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                    <FiArrowRight size={11} className="text-[#00B894] group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider font-display">Legal</h3>
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
