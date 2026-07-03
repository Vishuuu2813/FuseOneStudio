import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import iconImg from '../assets/Icon.png'

const WORD1 = 'FuseOne'
const WORD2 = 'Studios'

const charVariant = {
  hidden: { y: '110%', opacity: 0 },
  visible: (i) => ({
    y: '0%',
    opacity: 1,
    transition: {
      delay: i * 0.055,
      duration: 0.55,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
  exit: (i) => ({
    y: '-110%',
    opacity: 0,
    transition: {
      delay: i * 0.03,
      duration: 0.38,
      ease: [0.76, 0, 0.24, 1],
    },
  }),
}

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState('in') // in → hold → out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('out'), 1800)
    return () => clearTimeout(t1)
  }, [])

  useEffect(() => {
    if (phase === 'out') {
      const t2 = setTimeout(() => onComplete?.(), 900)
      return () => clearTimeout(t2)
    }
  }, [phase, onComplete])

  const allChars = [...WORD1, ' ', ...WORD2]

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#FAFAFE',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          {/* Ambient radial glow */}
          <div style={{
            position: 'absolute',
            width: 500, height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 70%)',
            top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }} />

          {/* Icon — cinematic blur-up reveal */}
          <motion.img
            src={iconImg}
            alt=""
            initial={{ opacity: 0, y: 16, scale: 0.9, filter: 'blur(8px)' }}
            animate={
              phase === 'out'
                ? { opacity: 0, y: -12, scale: 1.05, filter: 'blur(4px)', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } }
                : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
            }
            style={{ width: 64, height: 64, objectFit: 'contain' }}
          />

          {/* Animated wordmark */}
          <div style={{
            overflow: 'hidden',
            display: 'flex',
            gap: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: 800,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            color: 'var(--c-text)',
          }}>
            {allChars.map((char, i) => (
              <div key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
                <motion.span
                  custom={i}
                  variants={charVariant}
                  initial="hidden"
                  animate={phase === 'out' ? 'exit' : 'visible'}
                  style={{
                    display: 'inline-block',
                    color: i >= WORD1.length + 1
                      ? 'var(--c-accent)'
                      : 'var(--c-text)',
                    whiteSpace: char === ' ' ? 'pre' : 'normal',
                    width: char === ' ' ? '0.4em' : 'auto',
                  }}
                >
                  {char}
                </motion.span>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: phase === 'out' ? 0 : 0.5 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              fontWeight: 600,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--c-muted)',
            }}
          >
            AI Automation Agency
          </motion.p>

          {/* Progress line */}
          <div style={{
            width: 48, height: '1px',
            background: 'rgba(109,40,217,0.12)',
            overflow: 'hidden', borderRadius: 1,
          }}>
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: '100%', background: 'linear-gradient(90deg, #6D28D9, #8B5CF6)' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
