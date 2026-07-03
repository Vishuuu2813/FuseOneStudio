import { Suspense, lazy } from 'react'
import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'

const Pricing = lazy(() => import('../components/Pricing'))
const Comparison = lazy(() => import('../components/Comparison'))
const FinalCTA = lazy(() => import('../components/FinalCTA'))

const Loader = () => (
  <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
    <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--c-accent), transparent)' }} />
  </div>
)

const faqs = [
  { q: 'What is included in the Starter plan?', a: 'The Starter plan includes 3 workflow automations, 2 AI integrations, email + Slack support, one revision cycle, and a monthly check-in call.' },
  { q: 'Can I switch plans later?', a: 'Absolutely. You can upgrade or downgrade anytime — no lock-in contracts, ever.' },
  { q: 'How secure is my data?', a: 'All data is handled under strict security protocols. We use end-to-end encryption for data in transit and never share your business data with third parties.' },
  { q: 'Do you offer a free trial?', a: 'Yes — all plans include a 14-day free trial. No credit card required to start.' },
  { q: 'How does the 2% donation work?', a: 'We donate 2% of all profits to upskilling students in AI & tech — because we believe in building the ecosystem, not just billing it.' },
  { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, UPI, and bank transfers. Invoicing available for Enterprise clients.' },
]

export default function PricingPage() {
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
          Transparent Pricing
        </motion.span>
        <motion.h1
          variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.03em', lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}
        >
          Invest in <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>outcomes</em>, not hours
        </motion.h1>
        <motion.p
          variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: '1rem', color: 'var(--c-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}
        >
          No hidden fees. No lock-in. Every plan includes a 14-day free trial — cancel anytime.
        </motion.p>
      </section>

      <Suspense fallback={<Loader />}><Pricing /></Suspense>
      <Suspense fallback={<Loader />}><Comparison /></Suspense>

      {/* FAQ */}
      <section className="section-pad" style={{ background: '#fff', borderTop: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '780px', margin: '0 auto' }}>
          <motion.h2
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
              fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em',
              marginBottom: '2.5rem', textAlign: 'center',
            }}
          >
            Questions answered
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {faqs.map((f, i) => (
              <motion.details
                key={i}
                initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                style={{
                  borderBottom: '1px solid var(--c-border)',
                  padding: '1.25rem 0',
                  cursor: 'pointer',
                }}
              >
                <summary style={{
                  fontFamily: 'var(--font-body)', fontWeight: 600,
                  fontSize: '0.95rem', color: 'var(--c-text)',
                  listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  cursor: 'pointer',
                }}>
                  {f.q}
                  <span style={{ color: 'var(--c-accent)', fontSize: '1.1rem', flexShrink: 0, marginLeft: '1rem' }}>+</span>
                </summary>
                <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--c-muted)', lineHeight: 1.75, paddingRight: '2rem' }}>
                  {f.a}
                </p>
              </motion.details>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '2rem', fontSize: '0.85rem', color: 'var(--c-muted)' }}
          >
            Still have questions?{' '}
            <a href="mailto:info@fuseonestudios.com" style={{ color: 'var(--c-accent)', textDecoration: 'none', fontWeight: 600 }}>
              Email us →
            </a>
          </motion.p>
        </div>
      </section>

      <Suspense fallback={<Loader />}><FinalCTA /></Suspense>
    </PageWrapper>
  )
}
