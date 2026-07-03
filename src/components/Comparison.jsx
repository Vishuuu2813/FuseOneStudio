import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'

const rows = [
  { feature: 'Custom-built (not template)', us: true, them: false },
  { feature: 'AI-first architecture', us: true, them: false },
  { feature: 'Dedicated Slack channel', us: true, them: false },
  { feature: 'Async-first, no retainer lock-in', us: true, them: false },
  { feature: 'Performance-tied pricing available', us: true, them: false },
  { feature: 'Specialist in AI + automation', us: true, them: false },
  { feature: 'Ship in weeks, not months', us: true, them: true },
  { feature: 'Ongoing iteration & support', us: true, them: false },
]

const Tick = ({ yes }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, scale: 0.5 },
      visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } }
    }}
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: yes ? 'rgba(134,59,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: `1px solid ${yes ? 'var(--c-accent)' : 'var(--c-border)'}`,
      color: yes ? 'var(--c-accent)' : 'var(--c-muted)',
      fontSize: '0.75rem',
      fontWeight: 600,
    }}
  >
    {yes ? '✓' : '×'}
  </motion.div>
)

export default function Comparison() {
  return (
    <section className="section-pad" style={{ background: 'var(--c-base)', borderTop: '1px solid var(--c-border)' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.span
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}
        >
          Why FuseOne
        </motion.span>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-headline" style={{ marginBottom: '3.5rem' }}
        >
          The standard <em style={{ color: 'var(--c-accent)' }}>raised</em>
        </motion.h2>

        {/* Table header */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 100px 100px', gap: '1rem', padding: '0 0 1rem', borderBottom: '1px solid var(--c-border)', marginBottom: '0.5rem' }}>
          <span className="text-label">Feature</span>
          <span className="text-label" style={{ textAlign: 'center', color: 'var(--c-accent)' }}>FuseOne</span>
          <span className="text-label" style={{ textAlign: 'center' }}>Others</span>
        </div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {rows.map((row, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 100px 100px',
                gap: '1rem',
                padding: '1rem 0',
                borderBottom: '1px solid var(--c-border)',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'var(--c-text)', fontSize: '0.9rem', fontWeight: 300 }}>{row.feature}</span>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Tick yes={row.us} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Tick yes={row.them} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
