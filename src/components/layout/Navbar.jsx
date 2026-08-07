import { useState, useEffect, useRef, useCallback } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { useBooking } from '../../context/BookingContext'

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
  { name: 'Services',      to: '/services', hasDropdown: true },
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
  const { openBooking } = useBooking()
  const dropdownRef = useRef(null)
  const menuRef     = useRef(null)

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
      {/* ── Top info bar ─────────────────────────────────── */}
      <motion.div
        animate={{ height: scrolled ? 0 : 'auto', opacity: scrolled ? 0 : 1 }}
        transition={{ duration: 0.25 }}
        className="overflow-hidden bg-gradient-to-r from-[#0F6CBD] to-[#0A5299]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between gap-4">
          <p className="text-white/90 text-xs font-medium hidden sm:block">
            🏠 Mumbai's premium home healthcare — certified professionals at your doorstep
          </p>
          <p className="text-white/90 text-xs font-semibold sm:hidden">Mumbai's #1 Home Healthcare</p>
          <div className="flex items-center gap-4 flex-shrink-0">
            <a href="tel:+918762697832"
              className="flex items-center gap-1.5 text-white/85 hover:text-white text-xs font-semibold transition-colors"
              aria-label="Call Curexhealth: +91 98765 43210">
              <FiPhone size={12} aria-hidden="true" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="https://wa.me/918762697832"
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/85 hover:text-white text-xs font-semibold transition-colors"
              aria-label="WhatsApp Curexhealth">
              <FaWhatsapp size={13} aria-hidden="true" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </motion.div>

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
        className="sticky top-0 z-50"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
              aria-label="Curexhealth — Home"
            >
              <motion.div
                whileHover={{ rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.4 }}
                className="w-9 h-9 rounded-[10px] flex items-center justify-center flex-shrink-0"
                style={{
                  background: 'linear-gradient(135deg, #0F6CBD, #0e7fd4)',
                  boxShadow: '0 4px 14px rgba(15,108,189,0.4)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 3L12 21M4 12L20 12" stroke="white" strokeWidth="2.8" strokeLinecap="round"/>
                </svg>
              </motion.div>
              <div>
                <p className="text-[1.2rem] font-extrabold text-[#0F172A] leading-none font-display group-hover:text-[#0F6CBD] transition-colors duration-200">
                  Curex<span className="text-[#0F6CBD]">health</span>
                </p>
                <p className="text-[9px] text-[#94A3B8] font-bold tracking-[0.18em] uppercase mt-0.5">
                  Home Healthcare
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation" ref={dropdownRef}>
              {NAV_LINKS.map(link =>
                link.hasDropdown ? (
                  <div key={link.name} className="relative">
                    <button
                      onMouseEnter={() => setOpenDropdown(true)}
                      onMouseLeave={() => setOpenDropdown(false)}
                      onClick={() => setOpenDropdown(o => !o)}
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 ${
                        isServicesActive || openDropdown
                          ? 'bg-[#E8F3FC] text-[#0F6CBD]'
                          : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F6CBD]'
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
                        isActive ? 'bg-[#E8F3FC] text-[#0F6CBD]' : 'text-[#475569] hover:bg-[#F8FAFC] hover:text-[#0F6CBD]'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:+918762697832"
                className="flex items-center gap-1.5 text-[#475569] font-semibold text-sm hover:text-[#0F6CBD] transition-colors"
                aria-label="Call us">
                <FiPhone size={15} aria-hidden="true" />
                <span>Call Now</span>
              </a>
              <motion.button
                onClick={openBooking}
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.97 }}
                className="text-white font-bold text-sm px-5 py-2.5 rounded-2xl transition-all"
                style={{
                  background: 'linear-gradient(135deg, #0F6CBD, #0e7fd4)',
                  boxShadow: '0 4px 16px rgba(15,108,189,0.38)',
                }}
                aria-label="Book a home healthcare visit"
              >
                Book Home Visit
              </motion.button>
            </div>

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
                  link.hasDropdown ? (
                    <div key={link.name}>
                      <button
                        onClick={() => setMobileServicesOpen(o => !o)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${
                          isServicesActive ? 'bg-[#E8F3FC] text-[#0F6CBD]' : 'text-[#334155] hover:bg-[#F8FAFC]'
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
                                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-[#475569] hover:bg-[#E8F3FC] hover:text-[#0F6CBD] transition-all"
                                >
                                  <span className="text-base" aria-hidden="true">{item.emoji}</span>
                                  {item.name}
                                </Link>
                              ))}
                              <Link to="/services" className="px-4 py-2 text-[#0F6CBD] text-sm font-bold hover:underline">
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
                          isActive ? 'bg-[#E8F3FC] text-[#0F6CBD]' : 'text-[#334155] hover:bg-[#F8FAFC]'
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  )
                )}

                {/* Mobile CTAs */}
                <div className="mt-3 pt-4 border-t border-[#F1F5F9] flex flex-col gap-3">
                  <a href="tel:+918762697832"
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-[#0F6CBD] text-[#0F6CBD] font-bold text-sm hover:bg-[#E8F3FC] transition-colors"
                    aria-label="Call Curexhealth">
                    <FiPhone size={16} aria-hidden="true" />
                    Call +91 98765 43210
                  </a>
                  <button
                    onClick={() => { setMobileOpen(false); openBooking() }}
                    className="flex items-center justify-center gap-2 py-3 rounded-2xl text-white font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #0F6CBD, #0e7fd4)', boxShadow: '0 4px 16px rgba(15,108,189,0.4)' }}
                    aria-label="Book a home healthcare visit"
                  >
                    Book Home Visit
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  )
}
