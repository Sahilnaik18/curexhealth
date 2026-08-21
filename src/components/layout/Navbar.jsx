import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useBooking } from '../../context/BookingContext'
import logo from '../../assets/logo.png'

const SERVICES = [
  { name: 'Home Physiotherapy',       to: '/services/home-physiotherapy',           emoji: '🏃' },
  { name: 'Nursing Care',             to: '/services/nursing-care',                 emoji: '👩‍⚕️' },
  { name: 'Elder Care',               to: '/services/elder-care',                   emoji: '👴' },
  { name: 'Post Surgery Rehab',       to: '/services/post-surgery-rehabilitation',  emoji: '🏥' },
  { name: 'Stroke Rehabilitation',    to: '/services/stroke-rehabilitation',        emoji: '🧠' },
  { name: 'Sports Injury Rehab',      to: '/services/sports-injury-rehabilitation', emoji: '🏅' },
  { name: 'Orthopedic Rehab',         to: '/services/orthopedic-rehabilitation',    emoji: '🦴' },
]

const NAV_LINKS = [
  { name: 'Home',          to: '/' },
  { name: 'Services',      to: '/#services' },
  { name: 'Service Areas', to: '/service-areas' },
  { name: 'About Us',      to: '/about' },
  { name: 'FAQ',           to: '/faq' },
  { name: 'Contact',       to: '/contact' },
]

function DropdownMenu({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.97 }}
          transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 w-72 z-50 rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.98)',
            backdropFilter: 'blur(24px)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.12), 0 0 0 1px rgba(15,108,189,0.08)',
          }}
          role="menu"
          aria-label="Services menu"
        >
          <div className="h-0.5 w-full bg-gradient-to-r from-[#0F6CBD] to-[#00B894]" aria-hidden="true" />
          <div className="p-2">
            {SERVICES.map(item => (
              <Link
                key={item.to}
                to={item.to}
                role="menuitem"
                onClick={onClose}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-semibold text-[#334155] hover:bg-[#E8F3FC] hover:text-[#0F6CBD] transition-all duration-150 group focus-visible:bg-[#E8F3FC] focus-visible:text-[#0F6CBD]"
              >
                <span className="text-base w-6 text-center group-hover:scale-110 transition-transform duration-200 select-none" aria-hidden="true">
                  {item.emoji}
                </span>
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="h-px bg-[#F1F5F9] my-1.5" aria-hidden="true" />
            <Link
              to="/services"
              role="menuitem"
              onClick={onClose}
              className="flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl text-sm font-bold text-[#0F6CBD] hover:bg-[#E8F3FC] transition-all w-full focus-visible:bg-[#E8F3FC]"
            >
              View All Services →
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled]               = useState(false)
  const [mobileOpen, setMobileOpen]           = useState(false)
  const [openDropdown, setOpenDropdown]       = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location   = useLocation()
  const navigate   = useNavigate()
  const { openBooking } = useBooking()
  const dropdownRef = useRef(null)
  const menuRef     = useRef(null)

  /* Handle Services link click - scroll to services section */
  const handleServicesClick = (e) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 100)
    } else {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setMobileOpen(false)
  }

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* Close on route change */
  useEffect(() => {
    setMobileOpen(false)
    setOpenDropdown(false)
  }, [location.pathname])

  /* Prevent body scroll when mobile menu open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  /* Close dropdown on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  /* Trap focus in mobile menu */
  useEffect(() => {
    if (!mobileOpen) return
    const el = menuRef.current
    if (!el) return
    const first = el.querySelector('a, button')
    first?.focus()
  }, [mobileOpen])

  const closeDropdown = useCallback(() => setOpenDropdown(false), [])
  const isServicesActive = location.pathname.startsWith('/services')

  return (
    <>
      {/* ── Main navbar ──────────────────────────────────── */}
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,1)',
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(0px)',
          boxShadow: scrolled
            ? '0 4px 32px rgba(0,0,0,0.07), 0 1px 0 rgba(15,108,189,0.05)'
            : '0 1px 0 rgba(226,232,240,0.8)',
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 w-full z-50"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center flex-shrink-0"
              aria-label="Curexhealth — Home"
            >
              <img 
                src={logo} 
                alt="Curexhealth Logo" 
                className="h-12 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation" ref={dropdownRef}>
              {NAV_LINKS.map(link =>
                link.name === 'Services' ? (
                  <button
                    key={link.name}
                    onClick={handleServicesClick}
                    className="px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 text-[#1a1a1a] hover:text-[#0A9C6F]"
                  >
                    {link.name}
                  </button>
                ) : link.hasDropdown ? (
                  <div key={link.name} className="relative">
                    <button
                      onMouseEnter={() => setOpenDropdown(true)}
                      onMouseLeave={() => setOpenDropdown(false)}
                      onClick={() => setOpenDropdown(o => !o)}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                        isServicesActive || openDropdown
                          ? 'text-[#0A9C6F]'
                          : 'text-[#1a1a1a] hover:text-[#0A9C6F]'
                      }`}
                      aria-haspopup="true"
                      aria-expanded={openDropdown}
                    >
                      {link.name}
                      <motion.span
                        animate={{ rotate: openDropdown ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        aria-hidden="true"
                      >
                        <FiChevronDown size={14} />
                      </motion.span>
                    </button>
                    <div onMouseEnter={() => setOpenDropdown(true)} onMouseLeave={() => setOpenDropdown(false)}>
                      <DropdownMenu isOpen={openDropdown} onClose={closeDropdown} />
                    </div>
                  </div>
                ) : (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                        isActive ? 'text-[#0A9C6F]' : 'text-[#1a1a1a] hover:text-[#0A9C6F]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              )}
            </nav>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(o => !o)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[#334155] hover:bg-[#F1F5F9] transition-colors"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen
                  ? <motion.span key="x"    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><FiX size={22} /></motion.span>
                  : <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }}  animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><FiMenu size={22} /></motion.span>
                }
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* ── Mobile menu ─────────────────────────────────── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              ref={menuRef}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden border-t border-[#F1F5F9]"
              style={{ background: 'rgba(255,255,255,0.99)', backdropFilter: 'blur(20px)' }}
              role="navigation"
              aria-label="Mobile navigation"
            >
              <div className="px-4 pt-3 pb-5 flex flex-col gap-0.5 max-h-[78vh] overflow-y-auto">
                {NAV_LINKS.map((link, i) =>
                  link.name === 'Services' ? (
                    <button
                      key={link.name}
                      onClick={handleServicesClick}
                      className="w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition-colors text-[#1a1a1a] hover:text-[#0A9C6F]"
                    >
                      {link.name}
                    </button>
                  ) : link.hasDropdown ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileServicesOpen(o => !o)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                          isServicesActive ? 'text-[#01534F]' : 'text-[#1a1a1a] hover:text-[#01534F]'
                        }`}
                        aria-expanded={mobileServicesOpen}
                      >
                        <span>{link.name}</span>
                        <motion.span animate={{ rotate: mobileServicesOpen ? 180 : 0 }} transition={{ duration: 0.2 }} aria-hidden="true">
                          <FiChevronDown size={15} />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 flex flex-col gap-0.5 pb-1">
                              {SERVICES.map(item => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-[#1a1a1a] hover:text-[#01534F] transition-all"
                                >
                                  <span className="text-base" aria-hidden="true">{item.emoji}</span>
                                  {item.name}
                                </Link>
                              ))}
                              <Link to="/services" className="px-4 py-2 text-[#01534F] text-sm font-bold hover:underline">
                                View All Services →
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `px-4 py-3 rounded-xl font-semibold text-sm transition-colors block ${
                          isActive ? 'text-[#01534F]' : 'text-[#1a1a1a] hover:text-[#01534F]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )
                )}

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
