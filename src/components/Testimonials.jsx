import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/animations'
import anime from '../lib/anime'

const testimonials = [
  {
    quote: "FuseOne didn't just save us time — they fundamentally changed how we operate. Our sales team now closes deals that would have died in a inbox.",
    author: 'Marcus T.',
    role: 'CEO, GrowthOps',
    rating: 5,
  },
  {
    quote: "We tried two other automation agencies before FuseOne. The difference is they actually understand the business context, not just the technical config.",
    author: 'Priya S.',
    role: 'Head of Operations, HealthBridge',
    rating: 5,
  },
  {
    quote: "The ROI was measurable within 30 days. We saved $12K/month in manual processing costs on month one alone.",
    author: 'Daniel K.',
    role: 'COO, ShopWave',
    rating: 5,
  },
]

function RingAvatar({ author, isActive }) {
  const ringRef = useRef(null)

  useEffect(() => {
    if (isActive && ringRef.current) {
      anime({
        targets: ringRef.current,
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 600,
        easing: 'easeInOutCubic',
      })
    }
  }, [isActive])

  const initials = author.split(' ').map(w => w[0]).join('')

  return (
    <div style={{ position: 'relative', width: 52, height: 52, flexShrink: 0 }}>
      <div style={{
        width: 44,
        height: 44,
        borderRadius: '50%',
        background: 'var(--c-surface2)',
        border: '1px solid var(--c-border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-display)',
        fontSize: '1.1rem',
        color: 'var(--c-accent)',
        position: 'absolute',
        top: 4,
        left: 4,
      }}>
        {initials}
      </div>
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}
        aria-hidden
      >
        <circle
          ref={ringRef}
          cx="26"
          cy="26"
          r="24"
          fill="none"
          stroke="var(--c-accent)"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

export default function Testimonials() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(timer)
  }, [])

  const t = testimonials[idx]

  return (
    <section style={{ padding: 'clamp(5rem,10vw,9rem) clamp(1.5rem, 6vw, 6rem)', background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <motion.span
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-eyebrow" style={{ display: 'block', marginBottom: '3rem', textAlign: 'center' }}
        >
          Client Stories
        </motion.span>

        <AnimatePresence mode="wait">
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ textAlign: 'center' }}
          >
            {/* Open quote mark */}
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '6rem',
              color: 'var(--c-accent)',
              opacity: 0.2,
              lineHeight: 0.5,
              marginBottom: '1.5rem',
              userSelect: 'none',
            }}>
              "
            </div>

            <blockquote style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.3rem, 2.5vw, 2rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--c-text)',
              lineHeight: 1.4,
              letterSpacing: '-0.01em',
              marginBottom: '2.5rem',
            }}>
              {t.quote}
            </blockquote>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
              <RingAvatar author={t.author} isActive={true} />
              <div style={{ textAlign: 'left' }}>
                <p style={{ color: 'var(--c-text)', fontSize: '0.9rem', fontWeight: 500 }}>{t.author}</p>
                <p className="text-label">{t.role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot indicators */}
        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginTop: '2.5rem' }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              style={{
                width: i === idx ? '24px' : '6px',
                height: '6px',
                borderRadius: '3px',
                background: i === idx ? 'var(--c-accent)' : 'var(--c-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
