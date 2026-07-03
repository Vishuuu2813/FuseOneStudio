import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'

const rows = [
  { feature: 'Custom-built (not a template)', us: true, them: false },
  { feature: 'AI-first architecture from day one', us: true, them: false },
  { feature: 'Dedicated Slack channel (not a ticket queue)', us: true, them: false },
  { feature: 'Ships in weeks, not quarters', us: true, them: false },
  { feature: 'Performance-tied pricing available', us: true, them: false },
  { feature: 'Founders who code — no middleman layer', us: true, them: false },
  { feature: 'Ongoing iteration & post-launch support', us: true, them: false },
  { feature: 'Transparent, no lock-in contracts', us: true, them: false },
]

const Check = ({ yes }) => (
  <div style={{
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    width: 30, height: 30, borderRadius: '50%',
    background: yes ? 'rgba(109,40,217,0.1)' : 'rgba(0,0,0,0.04)',
    border: `1.5px solid ${yes ? 'rgba(109,40,217,0.4)' : 'rgba(0,0,0,0.1)'}`,
    color: yes ? '#6D28D9' : '#b0aac0',
    fontSize: '0.85rem', fontWeight: 700,
    flexShrink: 0,
  }}>
    {yes ? '✓' : '×'}
  </div>
)

export default function Comparison() {
  return (
    <section className="section-pad" style={{ background: '#fff', borderTop: '1px solid var(--c-border)' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="text-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}
          >
            Why FuseOne
          </motion.span>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700, color: 'var(--c-text)',
              letterSpacing: '-0.025em', lineHeight: 1.1,
            }}
          >
            The standard <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>raised</em>
          </motion.h2>
        </div>

        {/* Table */}
        <div style={{
          border: '1px solid rgba(109,40,217,0.1)',
          borderRadius: '20px', overflow: 'hidden',
          boxShadow: '0 4px 32px rgba(109,40,217,0.06)',
        }}>
          {/* Header row */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 130px 130px',
            padding: '1rem 1.75rem',
            background: 'var(--c-surface)',
            borderBottom: '1px solid rgba(109,40,217,0.08)',
          }}>
            <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--c-muted)' }}>
              Feature
            </span>
            <span style={{ textAlign: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--c-accent)', letterSpacing: '-0.01em' }}>
              FuseOne ✦
            </span>
            <span style={{ textAlign: 'center', fontSize: '0.7rem', fontWeight: 500, color: 'var(--c-muted)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Others
            </span>
          </div>

          {/* Data rows */}
          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {rows.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 130px 130px',
                  padding: '1rem 1.75rem',
                  borderBottom: i < rows.length - 1 ? '1px solid rgba(109,40,217,0.06)' : 'none',
                  alignItems: 'center',
                  background: i % 2 === 0 ? '#fff' : 'rgba(109,40,217,0.015)',
                  transition: 'background 0.2s ease',
                }}
              >
                <span style={{
                  fontSize: '0.9rem', color: 'var(--c-text)',
                  fontWeight: 500, lineHeight: 1.4,
                }}>
                  {row.feature}
                </span>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Check yes={row.us} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Check yes={row.them} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA under table */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '2.5rem' }}
        >
          <p style={{ fontSize: '0.9rem', color: 'var(--c-muted)', marginBottom: '1.25rem' }}>
            Sounds like a fit? Let's talk.
          </p>
          <a
            href="https://calendly.com/fuseonestudios"
            target="_blank" rel="noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.7rem 1.75rem', borderRadius: '100px',
              background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
              color: '#fff', textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: 600,
              boxShadow: '0 4px 20px rgba(109,40,217,0.3)',
            }}
          >
            Book a Free Strategy Call →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
