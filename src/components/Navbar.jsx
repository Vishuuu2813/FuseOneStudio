import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { Link, NavLink as RouterNavLink, useLocation } from 'react-router-dom'
import { useMagnetic } from '../hooks/useMagnetic'
import { useIsMobile } from '../hooks/useIsMobile'
import anime from '../lib/anime'
import iconImg from '../assets/Icon.png'

const navLinks = [
  { label: 'Services', to: '/services' },
  { label: 'Work',     to: '/work' },
  { label: 'Pricing',  to: '/pricing' },
  { label: 'Team',     to: '/team' },
  { label: 'Collab ✦', to: '/collab' },
]

function NavLink({ label, to }) {
  const lineRef = useRef(null)
  const hovered  = useRef(false)
  const location = useLocation()
  const isActive = location.pathname === to

  const handleEnter = () => {
    if (hovered.current) return
    hovered.current = true
    anime({ targets: lineRef.current, strokeDashoffset: [anime.setDashoffset, 0], duration: 300, easing: 'easeInOutCubic' })
  }
  const handleLeave = () => {
    hovered.current = false
    anime({ targets: lineRef.current, strokeDashoffset: [0, anime.setDashoffset], duration: 220, easing: 'easeInOutCubic' })
  }

  return (
    <Link
      to={to}
      style={{
        position: 'relative', textDecoration: 'none',
        fontSize: '0.95rem', fontWeight: isActive ? 700 : 500,
        paddingBottom: '3px', letterSpacing: '-0.01em',
        color: isActive ? 'var(--c-accent)' : 'var(--c-text-2)',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave}
    >
      {label}
      <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1.5px', overflow: 'visible' }} aria-hidden>
        <line ref={lineRef} x1="0" y1="0" x2="100%" y2="0"
          stroke="var(--c-accent)" strokeWidth="1.5"
          strokeDashoffset={isActive ? 0 : undefined}
        />
      </svg>
    </Link>
  )
}

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = useIsMobile()
  const location = useLocation()
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic(0.3)

  useEffect(() => scrollY.on('change', (v) => setScrolled(v > 60)), [scrollY])
  // Close mobile menu on route change
  useEffect(() => setMobileOpen(false), [location.pathname])

  return (
    <>
      <motion.nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: `0 ${isMobile ? '1.25rem' : 'clamp(1.5rem, 4vw, 5rem)'}`,
        height: '64px',
        background: scrolled || mobileOpen ? 'rgba(250,250,254,0.95)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(24px) saturate(1.8)' : 'none',
        borderBottom: scrolled || mobileOpen ? '1px solid rgba(109,40,217,0.1)' : '1px solid transparent',
        transition: 'background 0.35s ease, border-color 0.35s ease',
      }}>
        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
            <img src={iconImg} alt="FuseOne Studios" style={{ height: 34, width: 34, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.025em', color: 'var(--c-text)' }}>
              FuseOne <span style={{ color: 'var(--c-accent)' }}>Studios</span>
            </span>
          </Link>
        </motion.div>

        {/* Desktop nav */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}
          >
            {navLinks.map((l) => <NavLink key={l.label} {...l} />)}
          </motion.div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {!isMobile && (
            <motion.div ref={ref} style={{ x: springX, y: springY }}
              onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
              <motion.a
                href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.04, boxShadow: '0 6px 28px rgba(109,40,217,0.45)' }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                  padding: '0.6rem 1.4rem', borderRadius: '100px',
                  background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
                  color: '#fff', textDecoration: 'none', fontSize: '0.88rem', fontWeight: 600,
                  boxShadow: '0 2px 16px rgba(109,40,217,0.3)', letterSpacing: '-0.01em',
                }}
              >
                Book a Call →
              </motion.a>
            </motion.div>
          )}

          {/* Hamburger */}
          {isMobile && (
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                width: 40, height: 40, display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: '5px',
                background: 'transparent', border: 'none', cursor: 'pointer', padding: 0,
              }}
              aria-label="Toggle menu"
            >
              {[0, 1, 2].map((i) => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 1.5,
                  background: 'var(--c-text)', borderRadius: 2,
                  transition: 'all 0.3s ease',
                  transform: mobileOpen
                    ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                    : i === 2 ? 'rotate(-45deg) translate(4.5px, -4.5px)'
                    : 'scaleX(0)' : 'none',
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      {isMobile && mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed', top: 64, left: 0, right: 0, zIndex: 999,
            background: 'rgba(250,250,254,0.97)', backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(109,40,217,0.1)',
            padding: '1.5rem 1.5rem 2rem',
            display: 'flex', flexDirection: 'column', gap: '0',
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.label} to={l.to}
              onClick={() => setMobileOpen(false)}
              style={{
                padding: '1rem 0', borderBottom: '1px solid var(--c-border)',
                color: location.pathname === l.to ? 'var(--c-accent)' : 'var(--c-text)',
                textDecoration: 'none', fontSize: '1.1rem',
                fontWeight: location.pathname === l.to ? 700 : 600,
                letterSpacing: '-0.02em',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileOpen(false)}
            style={{
              display: 'block', textAlign: 'center', marginTop: '1.5rem',
              padding: '0.9rem', borderRadius: '100px',
              background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
              color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700,
            }}
          >
            Contact Us →
          </Link>
        </motion.div>
      )}
    </>
  )
}
