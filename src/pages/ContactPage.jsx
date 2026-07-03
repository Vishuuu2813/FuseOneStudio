import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'

export default function ContactPage() {
  const isMobile = useIsMobile()

  return (
    <PageWrapper>
      <section style={{
        background: 'var(--c-surface)',
        padding: 'clamp(4rem, 8vw, 8rem) clamp(1.25rem, 5vw, 5rem) clamp(3rem, 5vw, 5rem)',
        borderBottom: '1px solid var(--c-border)',
        textAlign: 'center',
      }}>
        <motion.span variants={fadeUp} initial="hidden" animate="visible"
          className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}>
          Get In Touch
        </motion.span>
        <motion.h1 variants={fadeUp} initial="hidden" animate="visible"
          style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.03em', lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}>
          Let's build something <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>remarkable</em>
        </motion.h1>
        <motion.p variants={fadeUp} initial="hidden" animate="visible"
          style={{ fontSize: '1rem', color: 'var(--c-muted)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
          30-minute free strategy call. No sales pitch — just a conversation about your biggest automation opportunity.
        </motion.p>
      </section>

      <section className="section-pad" style={{ background: '#fff' }}>
        <div style={{
          maxWidth: '960px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '4rem',
        }}>
          {/* Left: info */}
          <div>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '1.5rem', letterSpacing: '-0.025em' }}>
              How we work together
            </motion.h2>
            {[
              { step: '01', title: 'Book a free call', desc: 'Schedule 30 minutes via Calendly — pick a time that works for you.' },
              { step: '02', title: 'Audit & roadmap', desc: 'We map your workflows, identify AI opportunities, and propose a build plan.' },
              { step: '03', title: 'Build & launch', desc: 'We ship your automation in 2–4 weeks, with daily updates and zero surprises.' },
              { step: '04', title: 'Iterate & scale', desc: 'Ongoing support. We refine, expand, and evolve your systems as you grow.' },
            ].map((s, i) => (
              <motion.div key={s.step}
                initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'flex', gap: '1.25rem', marginBottom: '1.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-display)', fontSize: '0.7rem', fontWeight: 800, color: '#fff',
                }}>
                  {s.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.25rem' }}>{s.title}</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--c-muted)', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: contact options */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div style={{
              background: 'var(--c-surface)', border: '1px solid var(--c-border)',
              borderRadius: '24px', padding: '2.5rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.25rem',
            }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.25rem' }}>
                Start with a free call
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--c-muted)', lineHeight: 1.7 }}>
                No commitment. Just 30 minutes to explore whether we're the right fit for your needs.
              </p>
              <motion.a href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(109,40,217,0.45)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                  padding: '1rem', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
                  color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700,
                  boxShadow: '0 4px 20px rgba(109,40,217,0.3)',
                }}>
                📅 Book Free Strategy Call →
              </motion.a>

              <div style={{ height: 1, background: 'var(--c-border)' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { icon: '✉', label: 'Email Us', value: 'info@fuseonestudios.com', href: 'mailto:info@fuseonestudios.com' },
                  { icon: '📸', label: 'Instagram', value: '@fuseonestudios', href: 'https://instagram.com/fuseonestudios' },
                  { icon: '𝕏', label: 'Twitter / X', value: '@FuseOneStudio', href: 'https://x.com/FuseOneStudio' },
                  { icon: 'in', label: 'LinkedIn', value: 'FuseOne Studios', href: 'https://linkedin.com/company/fuseone' },
                ].map((c) => (
                  <a key={c.label} href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined}
                    rel="noreferrer"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '0.75rem',
                      textDecoration: 'none', padding: '0.75rem 1rem',
                      borderRadius: '10px', border: '1px solid var(--c-border)',
                      background: '#fff', transition: 'border-color 0.2s ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--c-accent)'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--c-border)'}
                  >
                    <span style={{ width: 32, height: 32, borderRadius: '8px', background: 'var(--c-accent-dim)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, color: 'var(--c-accent)', flexShrink: 0 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--c-muted)', fontWeight: 500 }}>{c.label}</div>
                      <div style={{ fontSize: '0.82rem', color: 'var(--c-text)', fontWeight: 600 }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
