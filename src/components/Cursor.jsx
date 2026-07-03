import { useEffect, useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const ringX = useMotionValue(-100)
  const ringY = useMotionValue(-100)

  const springConfig = { stiffness: 500, damping: 28, mass: 0.5 }
  const ringConfig = { stiffness: 120, damping: 20, mass: 0.8 }

  const sx = useSpring(cursorX, springConfig)
  const sy = useSpring(cursorY, springConfig)
  const rx = useSpring(ringX, ringConfig)
  const ry = useSpring(ringY, ringConfig)

  const dotRef = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      cursorX.set(e.clientX - 4)
      cursorY.set(e.clientY - 4)
      ringX.set(e.clientX - 18)
      ringY.set(e.clientY - 18)
    }

    const onEnterInteractive = () => {
      dotRef.current?.style.setProperty('transform', 'scale(2.5)')
      ringRef.current?.style.setProperty('opacity', '0')
    }

    const onLeaveInteractive = () => {
      dotRef.current?.style.setProperty('transform', 'scale(1)')
      ringRef.current?.style.setProperty('opacity', '1')
    }

    window.addEventListener('mousemove', onMove)

    const interactives = document.querySelectorAll('a, button, [data-cursor]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    const observer = new MutationObserver(() => {
      const all = document.querySelectorAll('a, button, [data-cursor]')
      all.forEach((el) => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMove)
      observer.disconnect()
    }
  }, [cursorX, cursorY, ringX, ringY])

  return (
    <>
      {/* Dot */}
      <motion.div
        ref={dotRef}
        style={{ x: sx, y: sy }}
        className="fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-difference"
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#F5F3EF',
            transition: 'transform 0.2s ease',
          }}
        />
      </motion.div>

      {/* Ring */}
      <motion.div
        ref={ringRef}
        style={{ x: rx, y: ry }}
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
      >
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            border: '1px solid rgba(134,59,255,0.6)',
            transition: 'opacity 0.3s ease',
          }}
        />
      </motion.div>
    </>
  )
}
