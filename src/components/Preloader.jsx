import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import iconImg from '../assets/Icon.png'

export default function Preloader({ onComplete }) {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDone(true)
      setTimeout(() => onComplete?.(), 650)
    }, 2000)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <motion.div
      animate={done ? { y: '-100%' } : { y: 0 }}
      transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        background: '#FAFAFE',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
      }}
    >
      {/* Subtle gradient wash behind the icon */}
      <div style={{
        position: 'absolute',
        width: 480, height: 480,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(109,40,217,0.07) 0%, transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
      }} />

      {/* Icon — cinematic reveal, NOT bouncing */}
      <motion.img
        src={iconImg}
        alt="FuseOne Studios"
        initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: 80,
          height: 80,
          objectFit: 'contain',
          animation: 'breathe 3s ease-in-out infinite',
        }}
      />

      {/* Wordmark */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        style={{ textAlign: 'center' }}
      >
        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.25rem',
          fontWeight: 700,
          letterSpacing: '-0.025em',
          color: 'var(--c-text)',
        }}>
          FuseOne Studios
        </div>
        <p style={{
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--c-muted)',
          marginTop: '0.3rem',
        }}>
          AI Automation Agency
        </p>
      </motion.div>

      {/* Thin progress line */}
      <div style={{ width: 64, height: '1px', background: 'rgba(109,40,217,0.12)', borderRadius: '1px', overflow: 'hidden' }}>
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ height: '100%', background: 'linear-gradient(90deg, #6D28D9, #8B5CF6)' }}
        />
      </div>
    </motion.div>
  )
}
