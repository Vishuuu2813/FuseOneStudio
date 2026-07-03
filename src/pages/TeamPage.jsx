import { Suspense, lazy } from 'react'
import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

const Team = lazy(() => import('../components/Team'))
const FinalCTA = lazy(() => import('../components/FinalCTA'))

const Loader = () => (
  <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
    <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--c-accent), transparent)' }} />
  </div>
)

export default function TeamPage() {
  return (
    <PageWrapper>
      <section style={{
        background: 'var(--c-surface)',
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1.25rem, 5vw, 5rem) clamp(3rem, 5vw, 5rem)',
        borderBottom: '1px solid var(--c-border)',
        textAlign: 'center',
      }}>
        <motion.span
          variants={fadeUp} initial="hidden" animate="visible"
          className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}
        >
          The Builders
        </motion.span>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.03em', lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}
        >
          We are <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>FuseOne</em>
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: '1rem', color: 'var(--c-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}
        >
          A small, focused team of builders — designers, engineers, and AI strategists — who care deeply about craft and client outcomes.
        </motion.p>
      </section>

      <Suspense fallback={<Loader />}><Team /></Suspense>

      {/* Values section */}
      <section className="section-pad" style={{ background: '#fff', borderTop: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', marginBottom: '3rem',
            }}
          >
            What drives us
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: '⚡', title: 'Speed without shortcuts', desc: 'We ship fast — because velocity is a feature. But we never cut corners on quality.' },
              { icon: '🧩', title: 'Systems thinking', desc: 'We think in systems, not features. Every automation we build connects to a bigger picture.' },
              { icon: '🔍', title: 'Radical transparency', desc: 'No black boxes. You know exactly what we\'re building, why, and how it works.' },
              { icon: '❤️', title: 'Founder empathy', desc: 'We\'re builders ourselves. We know what it means to have limited time and unlimited pressure.' },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{
                  background: 'var(--c-surface)', border: '1px solid var(--c-border)',
                  borderRadius: '20px', padding: '2rem 1.5rem', textAlign: 'left',
                }}
              >
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem', color: 'var(--c-text)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--c-muted)', lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Suspense fallback={<Loader />}><FinalCTA /></Suspense>
    </PageWrapper>
  )
}
