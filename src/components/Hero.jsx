import { Suspense, lazy, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, charReveal, fadeUp } from '../lib/animations'
import { useMagnetic } from '../hooks/useMagnetic'
import { useIsMobile } from '../hooks/useIsMobile'
import iconImg from '../assets/Icon.png'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  const mouse = useRef({ x: 0, y: 0 })
  const isMobile = useIsMobile()
  const { ref: ctaRef, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic(0.4)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: (e.clientX / window.innerWidth - 0.5) * 2, y: -(e.clientY / window.innerHeight - 0.5) * 2 }
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="hero"
      className="hero-mesh"
      style={{
        position: 'relative', width: '100%',
        minHeight: '100vh', display: 'flex', alignItems: 'center',
        overflow: 'hidden', paddingTop: '64px',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, opacity: 0.25 }}>
        <Suspense fallback={null}><HeroScene mouse={mouse} /></Suspense>
      </div>

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(109,40,217,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(109,40,217,0.04) 1px, transparent 1px)',
        backgroundSize: '48px 48px', pointerEvents: 'none',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
      }} />

      {/* Main layout */}
      <div style={{
        position: 'relative', zIndex: 10, width: '100%',
        maxWidth: '1200px', margin: '0 auto',
        padding: `clamp(2.5rem, 6vh, 5rem) ${isMobile ? '1.25rem' : 'clamp(1.5rem, 5vw, 5rem)'}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 360px',
        gap: isMobile ? '2.5rem' : '3rem',
        alignItems: 'center',
      }}>
        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            style={{ marginBottom: '1.5rem' }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.3rem 0.9rem', borderRadius: '100px',
              background: 'rgba(109,40,217,0.07)', border: '1px solid rgba(109,40,217,0.15)',
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', color: 'var(--c-accent)',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--c-accent)', display: 'inline-block' }} />
              New Gen AI Automation Partner
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={staggerContainer(0.07, 0.3)} initial="hidden" animate="visible">
            <motion.h1 variants={charReveal} className="text-display"
              style={{ display: 'block', color: 'var(--c-text)', marginBottom: '0.12em' }}>
              Automate Smarter,
            </motion.h1>
            <motion.h1 variants={charReveal} className="text-display text-gradient" style={{ display: 'block' }}>
              Scale Faster.
            </motion.h1>
          </motion.div>

          {/* Subtext */}
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            style={{
              marginTop: '1.5rem', marginBottom: '2.25rem',
              fontSize: isMobile ? '0.95rem' : '1.05rem', lineHeight: 1.7,
              color: 'var(--c-text-2)', maxWidth: '460px', fontWeight: 400,
            }}>
            FuseOne Studios helps businesses harness AI — custom automations,
            intelligent integrations, and SaaS builds that deliver measurable results fast.
          </motion.p>

          {/* CTAs */}
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
            <motion.div
              ref={ctaRef} style={{ x: springX, y: springY }}
              onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
              <motion.a
                href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(109,40,217,0.5)' }}
                whileTap={{ scale: 0.97 }} transition={{ duration: 0.2 }}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.85rem 1.75rem', borderRadius: '100px',
                  background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AFF 100%)',
                  color: '#fff', textDecoration: 'none',
                  fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.01em',
                  boxShadow: '0 4px 24px rgba(109,40,217,0.35)',
                }}>
                Book A Free Call →
              </motion.a>
            </motion.div>
            <motion.a href="#work"
              whileHover={{ color: 'var(--c-accent)' }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.85rem 1.5rem', borderRadius: '100px',
                border: '1px solid var(--c-border)', color: 'var(--c-text-2)',
                textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
                background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                transition: 'color 0.2s ease',
              }}>
              See Case Studies
            </motion.a>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            style={{ display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {[['1000+', 'Happy Users'], ['500+', 'Hrs Saved/Mo'], ['4.8★', 'Avg Rating']].map(([num, label]) => (
              <div key={label}>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--c-accent)', letterSpacing: '-0.02em', display: 'block' }}>{num}</span>
                <span style={{ fontSize: '0.7rem', color: 'var(--c-muted)', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right: icon visual — hidden on mobile */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '420px' }}
          >
            <div style={{
              position: 'absolute', width: 280, height: 280, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(109,40,217,0.12) 0%, transparent 70%)',
            }} />
            <img src={iconImg} alt="FuseOne Studios" style={{
              width: 180, height: 180, objectFit: 'contain', position: 'relative', zIndex: 1,
              animation: 'breathe 4s ease-in-out infinite',
            }} />

            {/* Floating cards */}
            {[
              { top: '6%', right: '-4%', num: '70%', label: 'Faster Workflows', delay: 1.2, dark: false },
              { bottom: '8%', left: '-4%', num: '92%', label: 'AI Accuracy', delay: 1.4, dark: false },
              { bottom: '22%', right: '-8%', num: '4.8★', label: 'Client Rating', delay: 1.6, dark: true },
            ].map((c, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: c.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  position: 'absolute',
                  ...(c.top && { top: c.top }), ...(c.bottom && { bottom: c.bottom }),
                  ...(c.right && { right: c.right }), ...(c.left && { left: c.left }),
                  background: c.dark ? 'linear-gradient(135deg, #6D28D9, #7C3AFF)' : '#fff',
                  border: c.dark ? 'none' : '1px solid rgba(109,40,217,0.12)',
                  borderRadius: '14px', padding: '0.9rem 1.1rem', zIndex: 2,
                  boxShadow: c.dark ? '0 8px 32px rgba(109,40,217,0.35)' : '0 4px 24px rgba(109,40,217,0.1)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: c.dark ? '#fff' : 'var(--c-accent)', letterSpacing: '-0.03em' }}>{c.num}</div>
                <div style={{ fontSize: '0.65rem', color: c.dark ? 'rgba(255,255,255,0.7)' : 'var(--c-muted)', fontWeight: 500, marginTop: '0.1rem' }}>{c.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* Bottom fade */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '100px', background: 'linear-gradient(to bottom, transparent, var(--c-base))', pointerEvents: 'none', zIndex: 5 }} />

      {/* Scroll cue */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 10 }}>
        <motion.div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--c-accent), transparent)', originY: 0 }}
          animate={{ scaleY: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }} />
      </motion.div>
    </section>
  )
}
