import { useEffect, useRef, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'
import anime from '../lib/anime'
import iconImg from '../assets/Icon.png'

const navLinks = [
  { label: 'Process', href: '#process' },
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
]

function NavLink({ label, href }) {
  const lineRef = useRef(null)
  const hovered = useRef(false)
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
    <a href={href} style={{ position: 'relative', color: 'var(--c-text-2)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 500, paddingBottom: '2px' }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      {label}
      <svg style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', overflow: 'visible' }} aria-hidden>
        <line ref={lineRef} x1="0" y1="0" x2="100%" y2="0" stroke="var(--c-accent)" strokeWidth="1.5" />
      </svg>
    </a>
  )
}

export default function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic(0.3)
  useEffect(() => scrollY.on('change', (v) => setScrolled(v > 60)), [scrollY])

  return (
    <motion.nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(1.25rem, 4vw, 4rem)', height: '64px',
      background: scrolled ? 'rgba(250,250,254,0.88)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px) saturate(1.8)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(109,40,217,0.1)' : '1px solid transparent',
      transition: 'background 0.35s ease, border-color 0.35s ease',
    }}>
      {/* Logo */}
      <motion.a href="/" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
        style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
        <img src={iconImg} alt="" style={{ height: 28, width: 28, objectFit: 'contain' }} />
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700,
          letterSpacing: '-0.025em', color: 'var(--c-text)',
        }}>
          FuseOne <span style={{ color: 'var(--c-accent)' }}>Studios</span>
        </span>
      </motion.a>

      {/* Links */}
      <motion.div
        initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}
        className="hidden md:flex"
      >
        {navLinks.map((l) => <NavLink key={l.label} {...l} />)}
      </motion.div>

      {/* CTA */}
      <motion.div ref={ref} style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}>
        <motion.a
          href="https://calendly.com/fuseonestudios"
          target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.03, boxShadow: '0 4px 24px rgba(109,40,217,0.4)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '0.48rem 1.2rem', borderRadius: '100px',
            background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
            color: '#fff', textDecoration: 'none',
            fontSize: '0.8rem', fontWeight: 600,
            boxShadow: '0 2px 14px rgba(109,40,217,0.3)',
            letterSpacing: '-0.01em',
          }}
        >
          Automate Now
        </motion.a>
      </motion.div>
    </motion.nav>
  )
}
