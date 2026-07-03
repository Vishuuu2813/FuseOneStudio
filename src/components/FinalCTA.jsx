import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'
import iconImg from '../assets/Icon.png'

const reasons = [
  { icon: '⚡', title: 'Ships in Weeks', desc: 'Visible results in 2–4 weeks. Not quarters.' },
  { icon: '🧠', title: 'Built by Builders', desc: 'Founders who code, not a reseller layer.' },
  { icon: '📈', title: 'ROI-Focused', desc: 'Every automation maps to a measurable metric.' },
  { icon: '🔒', title: 'White-Glove Support', desc: 'Dedicated Slack channel, not a ticket queue.' },
]

export default function FinalCTA() {
  const isMobile = useIsMobile()

  return (
    <section id="contact" style={{
      position: 'relative', overflow: 'hidden',
      background: 'var(--c-base)',
      padding: `clamp(3.5rem, 7vw, 7rem) ${isMobile ? '1.25rem' : 'clamp(1.5rem, 5vw, 5rem)'}`,
      borderTop: '1px solid var(--c-border)',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(109,40,217,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Badge */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.3rem 0.9rem', borderRadius: '100px',
            background: 'rgba(109,40,217,0.07)', border: '1px solid rgba(109,40,217,0.15)',
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--c-accent)',
          }}>
            <img src={iconImg} alt="" style={{ width: 16, height: 16, objectFit: 'contain' }} />
            Free Strategy Call
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: isMobile ? 'clamp(1.8rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5.5vw, 4.5rem)',
            fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.035em',
            lineHeight: 1.05, textAlign: 'center', marginBottom: '1.25rem',
          }}>
          Your automation journey{' '}
          <span style={{ background: 'linear-gradient(135deg, #6D28D9, #8B5CF6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            starts with a call.
          </span>
        </motion.h2>

        <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ fontSize: '1rem', color: 'var(--c-text-2)', lineHeight: 1.7, maxWidth: '480px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
          30 minutes. No sales pitch. We'll map your biggest automation opportunities and show you exactly how we'd build them.
        </motion.p>

        {/* CTAs */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3.5rem', flexDirection: isMobile ? 'column' : 'row', alignItems: 'center' }}>
          <motion.a
            href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.04, boxShadow: '0 12px 48px rgba(109,40,217,0.55)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.95rem 2rem', borderRadius: '100px',
              background: 'linear-gradient(135deg, #6D28D9 0%, #7C3AFF 100%)',
              color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700,
              boxShadow: '0 6px 32px rgba(109,40,217,0.4)', letterSpacing: '-0.01em',
              width: isMobile ? '100%' : 'auto', justifyContent: isMobile ? 'center' : 'flex-start',
            }}>
            📅 Schedule Free Meeting →
          </motion.a>
          <motion.a href="mailto:info@fuseonestudios.com"
            whileHover={{ borderColor: 'var(--c-accent)', color: 'var(--c-accent)' }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.95rem 1.75rem', borderRadius: '100px',
              border: '1px solid var(--c-border)', color: 'var(--c-text-2)',
              textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500,
              background: '#fff', boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              transition: 'all 0.2s ease',
              width: isMobile ? '100%' : 'auto', justifyContent: 'center',
            }}>
            ✉ Email Us Directly
          </motion.a>
        </motion.div>

        {/* Reason cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: '1rem',
        }}>
          {reasons.map((r, i) => (
            <motion.div key={r.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: '#fff', border: '1px solid rgba(109,40,217,0.08)',
                borderRadius: '16px', padding: '1.25rem',
                boxShadow: '0 1px 8px rgba(109,40,217,0.05)',
              }}>
              <div style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{r.icon}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.3rem' }}>{r.title}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--c-muted)', lineHeight: 1.6 }}>{r.desc}</div>
            </motion.div>
          ))}
        </div>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
          style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.8rem', color: 'var(--c-muted)' }}>
          Trusted by <strong style={{ color: 'var(--c-accent)' }}>1,000+</strong> businesses — avg. <strong style={{ color: 'var(--c-accent)' }}>4.8★</strong> rating
        </motion.p>
      </div>
    </section>
  )
}
