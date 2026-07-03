import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/animations'
import { useRef } from 'react'

const team = [
  {
    name: 'Apoorv Sharma',
    role: 'Co-Founder & CEO',
    initials: 'AS',
    quote: 'Automation is an act of respect for your team\'s time.',
  },
  {
    name: 'Rohit Soni',
    role: 'Co-Founder & CTO',
    initials: 'RS',
    quote: 'Every manual process is a bug waiting to be fixed.',
  },
]

export default function FounderQuote() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40])

  return (
    <section ref={ref} className="section-pad" style={{ background: 'var(--c-surface)', position: 'relative', overflow: 'hidden' }}>

      {/* Background text watermark */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '-5%',
        transform: 'translateY(-50%)',
        fontFamily: 'var(--font-display)',
        fontSize: '20vw',
        fontWeight: 700,
        color: 'transparent',
        WebkitTextStroke: '1px rgba(255,255,255,0.03)',
        whiteSpace: 'nowrap',
        userSelect: 'none',
        pointerEvents: 'none',
        zIndex: 0,
      }}>
        FuseOne
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Pull quote */}
        <div style={{ maxWidth: '780px', marginBottom: '6rem' }}>
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="text-eyebrow" style={{ display: 'block', marginBottom: '2rem' }}
          >
            Our belief
          </motion.span>
          <motion.blockquote
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              color: 'var(--c-text)',
              lineHeight: 1.25,
              letterSpacing: '-0.02em',
            }}
          >
            "The best automation is the kind your team doesn't even notice —
            because it <em style={{ color: 'var(--c-accent)' }}>just works</em>,
            every time, without them having to think about it."
          </motion.blockquote>
        </div>

        {/* Team */}
        <motion.div
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', maxWidth: '600px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              style={{
                padding: '2rem',
                border: '1px solid var(--c-border)',
                background: 'var(--c-base)',
              }}
            >
              {/* Avatar */}
              <div style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'var(--c-surface2)',
                border: '1px solid var(--c-border-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '1.2rem',
                color: 'var(--c-accent)',
                marginBottom: '1.25rem',
              }}>
                {member.initials}
              </div>

              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontStyle: 'italic',
                color: 'var(--c-muted)',
                marginBottom: '1rem',
                lineHeight: 1.5,
              }}>
                "{member.quote}"
              </p>
              <p style={{ color: 'var(--c-text)', fontSize: '0.85rem', fontWeight: 500 }}>{member.name}</p>
              <p className="text-label" style={{ marginTop: '0.2rem' }}>{member.title || member.role.replace('Co-Founder & ', '')}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
