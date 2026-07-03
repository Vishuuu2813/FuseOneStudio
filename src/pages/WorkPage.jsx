import { Suspense, lazy } from 'react'
import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

const Projects = lazy(() => import('../components/Projects'))
const Testimonials = lazy(() => import('../components/Testimonials'))
const FinalCTA = lazy(() => import('../components/FinalCTA'))

const Loader = () => (
  <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
    <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--c-accent), transparent)' }} />
  </div>
)

export default function WorkPage() {
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
          Case Studies
        </motion.span>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.03em', lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}
        >
          Results that <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>speak</em> for themselves
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: '1rem', color: 'var(--c-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}
        >
          Real projects. Real outcomes. From healthcare automation to e-commerce AI — see how FuseOne Studios transforms business operations.
        </motion.p>
      </section>

      <Suspense fallback={<Loader />}><Projects /></Suspense>
      <Suspense fallback={<Loader />}><Testimonials /></Suspense>
      <Suspense fallback={<Loader />}><FinalCTA /></Suspense>
    </PageWrapper>
  )
}
