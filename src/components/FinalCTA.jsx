import { Suspense, lazy, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import { useMagnetic } from '../hooks/useMagnetic'
import anime from '../lib/anime'

const HeroScene = lazy(() => import('./HeroScene'))

export default function FinalCTA() {
  const mouse = useRef({ x: 0, y: 0 })
  const lineRef = useRef(null)
  const { ref, springX, springY, handleMouseMove, handleMouseLeave } = useMagnetic(0.5)

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: -(e.clientY / window.innerHeight - 0.5) * 2,
      }
    }
    window.addEventListener('mousemove', onMove)
    anime({
      targets: lineRef.current,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 900,
      easing: 'easeInOutCubic',
    })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        padding: 'clamp(6rem, 14vw, 12rem) clamp(1.5rem, 6vw, 6rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'var(--c-base)',
        borderTop: '1px solid var(--c-border)',
      }}
    >
      {/* Dimmer 3D scene */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
        <Suspense fallback={null}>
          <HeroScene mouse={mouse} />
        </Suspense>
      </div>
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 0%, var(--c-base) 75%)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', marginBottom: '2rem' }}
        >
          <svg width="40" height="1" aria-hidden>
            <line ref={lineRef} x1="0" y1="0" x2="40" y2="0" stroke="var(--c-accent)" strokeWidth="1" />
          </svg>
          <span className="text-eyebrow">Ready to Begin</span>
          <svg width="40" height="1" aria-hidden style={{ transform: 'scaleX(-1)' }}>
            <line x1="0" y1="0" x2="40" y2="0" stroke="var(--c-accent)" strokeWidth="1" strokeDasharray="40" strokeDashoffset="0" />
          </svg>
        </motion.div>

        <motion.h2
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-display"
          style={{ maxWidth: '800px', margin: '0 auto 1.5rem' }}
        >
          <motion.span variants={fadeUp} style={{ display: 'block' }}>Let's build</motion.span>
          <motion.em variants={fadeUp} style={{ display: 'block', color: 'var(--c-accent-light)', fontStyle: 'italic' }}>something</motion.em>
          <motion.span variants={fadeUp} style={{ display: 'block' }}>exceptional</motion.span>
        </motion.h2>

        <motion.p
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-body"
          style={{ maxWidth: '440px', margin: '0 auto 2.5rem', textAlign: 'center' }}
        >
          Book a 30-minute discovery call. No sales pitch — just an honest conversation
          about what automation can do for your business.
        </motion.p>

        <motion.div
          ref={ref}
          style={{ x: springX, y: springY }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <motion.a
            href="https://calendly.com/fuseonestudios"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              padding: '1rem 2.5rem',
              background: 'transparent',
              border: '1px solid var(--c-accent)',
              color: 'var(--c-accent-light)',
              textDecoration: 'none',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              fontWeight: 500,
              position: 'relative',
              overflow: 'hidden',
            }}
            whileHover={{ color: '#fff' }}
          >
            <motion.span
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, var(--c-accent-dark), var(--c-accent))',
                scaleX: 0,
                originX: 0,
              }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
            <span style={{ position: 'relative', zIndex: 1 }}>Book a Free Call</span>
            <span style={{ position: 'relative', zIndex: 1 }}>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
