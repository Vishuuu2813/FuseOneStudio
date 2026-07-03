import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'

const crodServices = [
  { icon: '🎨', title: 'Brand Identity', desc: 'Full brand systems — logos, color palettes, typography, and visual guidelines.' },
  { icon: '🖥️', title: 'UI/UX Design', desc: 'High-fidelity interface design and user experience research for digital products.' },
  { icon: '📱', title: 'Motion & Animation', desc: 'Micro-interactions, transitions, and animated brand assets.' },
  { icon: '🗂️', title: 'Design Systems', desc: 'Scalable component libraries and Figma design systems for SaaS products.' },
]

const collabProjects = [
  { title: 'FuseOne Studio Rebrand', tag: 'Brand + Web', desc: 'Crodonian led the visual identity system for FuseOne\'s premium rebrand — color palette, icon system, and the cinematic design language.', year: '2025' },
  { title: 'AI Dashboard UI Kit', tag: 'Product Design', desc: 'A shared component library built for AI-first SaaS dashboards — used across multiple FuseOne client projects.', year: '2025' },
  { title: 'Motion Language Guidelines', tag: 'Motion Design', desc: 'Defined the animation easing curves, timing functions, and motion principles for FuseOne\'s premium interactive experiences.', year: '2024' },
]

export default function CollabPage() {
  const isMobile = useIsMobile()

  return (
    <PageWrapper>
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(160deg, #0D0B1A 0%, #1A0F3D 50%, #0D0B1A 100%)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem) clamp(4rem, 7vw, 7rem)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(109,40,217,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 1.25rem 0.5rem 0.5rem', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(167,139,250,0.2)', marginBottom: '2.5rem' }}>
            <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>Collaboration</span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>FuseOne Studios × Crodonian</span>
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, color: '#F0EEFF', letterSpacing: '-0.035em', lineHeight: 1.0, marginBottom: '1.5rem' }}>
            Where automation<br />meets{' '}
            <span style={{ background: 'linear-gradient(135deg, #A78BFA, #7C3AFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>premium design</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75, maxWidth: '560px', margin: '0 auto 2.5rem' }}>
            FuseOne Studios partners with <strong style={{ color: 'rgba(167,139,250,0.9)' }}>Crodonian</strong> — a design-first studio specializing in brand identity and product UI — delivering solutions where intelligence and aesthetics are inseparable.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <a href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
              style={{ padding: '0.85rem 1.75rem', borderRadius: '100px', background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 4px 24px rgba(109,40,217,0.5)' }}>
              Work With Us →
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Crodonian */}
      <section className="section-pad" style={{ background: 'var(--c-base)', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2.5rem' : '5rem', alignItems: 'center' }}>
          <div>
            <motion.span className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About Crodonian</motion.span>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
              Design that <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>elevates</em> intelligence
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontSize: '0.95rem', color: 'var(--c-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Crodonian is a design studio focused on building premium visual identities for technology-driven brands — from brand marks to full product interfaces.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontSize: '0.95rem', color: 'var(--c-muted)', lineHeight: 1.8 }}>
              Together, Crodonian and FuseOne Studios bridge the gap between powerful AI systems and the beautiful interfaces users enjoy using.
            </motion.p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {[{ num: '50+', label: 'Brand identities delivered' }, { num: '100%', label: 'Client satisfaction' }, { num: '3+', label: 'Years of premium design' }, { num: '∞', label: 'Attention to detail' }].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', border: '1px solid var(--c-border)', borderRadius: '20px', padding: '1.75rem 1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--c-accent)', letterSpacing: '-0.04em', marginBottom: '0.4rem' }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--c-muted)', fontWeight: 500, lineHeight: 1.5 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad" style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em' }}>
              Design services for modern tech brands
            </motion.h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)', gap: '1.25rem' }}>
            {crodServices.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', border: '1px solid var(--c-border)', borderRadius: '20px', padding: '2rem 1.5rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.78rem', color: 'var(--c-muted)', lineHeight: 1.7 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-pad" style={{ background: '#fff', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', marginBottom: '2.5rem', textAlign: 'center' }}>
            What we've built together
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {collabProjects.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', gap: '1.5rem', alignItems: 'center', background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderRadius: '20px', padding: '2rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.6rem', flexWrap: 'wrap' }}>
                    <span style={{ padding: '0.2rem 0.7rem', borderRadius: '100px', background: 'rgba(109,40,217,0.08)', border: '1px solid rgba(109,40,217,0.15)', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--c-accent)' }}>{p.tag}</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--c-muted)', fontWeight: 500 }}>{p.year}</span>
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--c-text)', marginBottom: '0.5rem' }}>{p.title}</h3>
                  <p style={{ fontSize: '0.84rem', color: 'var(--c-muted)', lineHeight: 1.7 }}>{p.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 56, height: 56, borderRadius: '14px', background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>✦</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad" style={{ background: 'var(--c-surface)', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          Want both <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>power and beauty</em>?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: '0.95rem', color: 'var(--c-muted)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Ask about our full-stack AI + Design collab packages.
        </motion.p>
        <motion.a href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 2rem', borderRadius: '100px', background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)', color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 4px 24px rgba(109,40,217,0.35)' }}>
          Book a Free Call →
        </motion.a>
      </section>
    </PageWrapper>
  )
}
