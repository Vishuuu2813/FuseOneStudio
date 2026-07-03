import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'

// Real Crodonian data sourced from their FinalCrodonian codebase
const crodValues = [
  {
    icon: '⚡',
    color: 'rgba(59,130,246,0.1)',
    borderColor: 'rgba(59,130,246,0.2)',
    iconColor: '#60A5FA',
    title: 'High Performance',
    desc: 'Obsessing over milliseconds. Optimized rendering and scalable backends are the default standard.',
  },
  {
    icon: '🛡️',
    color: 'rgba(139,92,246,0.1)',
    borderColor: 'rgba(139,92,246,0.2)',
    iconColor: '#A78BFA',
    title: 'Secure & Resilient',
    desc: 'Security-first architecture. Building robust systems that survive the harshest edge cases.',
  },
  {
    icon: '❤️',
    color: 'rgba(239,68,68,0.1)',
    borderColor: 'rgba(239,68,68,0.2)',
    iconColor: '#F87171',
    title: 'Developer Experience',
    desc: 'Clean code, comprehensive docs, and an unwavering commitment to maintainable codebases.',
  },
]

const crodServices = [
  {
    icon: '🎨',
    title: 'Brand Identity & Design Systems',
    desc: 'Full brand systems — logos, color palettes, typography, and scalable Figma component libraries for modern tech products.',
    tags: ['Figma', 'Brand Systems', 'Design Tokens'],
  },
  {
    icon: '🖥️',
    title: 'Frontend Engineering',
    desc: 'High-performance React/Next.js frontends with pixel-perfect UI, micro-interactions, and accessibility-first architecture.',
    tags: ['React', 'Next.js', 'TypeScript'],
  },
  {
    icon: '⚙️',
    title: 'Backend & API Development',
    desc: 'Scalable Node.js backends, REST/GraphQL APIs, and database architecture built for reliability and growth.',
    tags: ['Node.js', 'GraphQL', 'MongoDB'],
  },
  {
    icon: '🚀',
    title: 'Full-Stack SaaS Products',
    desc: 'End-to-end SaaS builds from architecture to deployment — auth, billing, dashboards, and custom product features.',
    tags: ['SaaS', 'AWS', 'Docker'],
  },
]

const crodTeam = [
  {
    initials: 'VS',
    name: 'Vishwas Saxena',
    role: 'Founder & CTO',
    bio: 'Engineering leader focused on scalable architectures. Builds SaaS, ERP, LMS, and CRM platforms with AI automation.',
    skills: ['React', 'Node.js', 'AWS', 'System Design'],
    color: 'linear-gradient(135deg, #1D4ED8, #4C1D95)',
  },
]

const collabProjects = [
  {
    title: 'FuseOne Studio Rebrand',
    tag: 'Brand + Web',
    desc: 'Crodonian led the full visual identity system — color palette, icon system, and cinematic design language used across the FuseOne platform.',
    year: '2025',
  },
  {
    title: 'AI Dashboard UI Kit',
    tag: 'Product Design',
    desc: 'A shared component library for AI-first SaaS dashboards — built together, used across multiple FuseOne client projects.',
    year: '2025',
  },
  {
    title: 'Motion Design Language',
    tag: 'Motion Design',
    desc: 'Defined the animation easing curves, timing, and motion principles powering FuseOne\'s premium interactions.',
    year: '2024',
  },
]

export default function CollabPage() {
  const isMobile = useIsMobile()

  return (
    <PageWrapper>
      {/* ── Hero ─────────────────────────────────── */}
      <section style={{
        background: 'linear-gradient(160deg, #060610 0%, #0F0B2E 50%, #060610 100%)',
        padding: 'clamp(5rem, 10vw, 9rem) clamp(1.25rem, 5vw, 5rem) clamp(4rem, 7vw, 7rem)',
        textAlign: 'center', position: 'relative', overflow: 'hidden',
      }}>
        {/* grid texture */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 0%, transparent 100%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(59,130,246,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          {/* Pill badge */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '0.4rem 1.25rem 0.4rem 0.4rem', borderRadius: '100px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '2.5rem' }}>
            <span style={{ padding: '0.25rem 0.75rem', borderRadius: '100px', background: 'linear-gradient(135deg, #1D4ED8, #4C1D95)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>Collaboration</span>
            <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', fontWeight: 500, fontFamily: 'monospace' }}>FuseOne Studios × Crodonian</span>
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontFamily: 'var(--font-display)', fontSize: isMobile ? 'clamp(2rem, 8vw, 3rem)' : 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, color: '#F0F4FF', letterSpacing: '-0.035em', lineHeight: 1.0, marginBottom: '1.5rem' }}>
            Engineering meets{' '}
            <span style={{ background: 'linear-gradient(135deg, #60A5FA, #A78BFA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              design excellence
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: isMobile ? '0.95rem' : '1.05rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.8, maxWidth: '580px', margin: '0 auto 2.5rem' }}>
            FuseOne Studios partners with <strong style={{ color: 'rgba(147,197,253,0.9)' }}>Crodonian</strong> — a premium full-stack studio built by obsessed engineers and designers — to deliver solutions where intelligence and aesthetics are inseparable.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
              style={{ padding: '0.85rem 1.75rem', borderRadius: '100px', background: 'linear-gradient(135deg, #1D4ED8, #6D28D9)', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 700, boxShadow: '0 4px 24px rgba(29,78,216,0.4)' }}>
              Work With Both Of Us →
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── What is Crodonian ─────────────────── */}
      <section className="section-pad" style={{ background: 'var(--c-base)', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '2.5rem' : '5rem', alignItems: 'center' }}>
          <div>
            <motion.span className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              About Crodonian
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', marginBottom: '1.25rem' }}>
              A collective of obsessed <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>tinkerers</em>
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontSize: '0.95rem', color: 'var(--c-muted)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              Crodonian is a full-stack design and engineering studio — open-source contributors, system architects, and UI craftspeople united by deep technical rigor and a commitment to shipping premium digital experiences.
            </motion.p>
            <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontSize: '0.95rem', color: 'var(--c-muted)', lineHeight: 1.8 }}>
              Together with FuseOne Studios, Crodonian closes the gap between powerful AI systems and the beautiful, performant interfaces users enjoy every day.
            </motion.p>
          </div>
          {/* Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {[
              { num: '50+', label: 'Projects shipped' },
              { num: '100%', label: 'Client satisfaction' },
              { num: '3+', label: 'Years of premium craft' },
              { num: '∞', label: 'Attention to detail' },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', border: '1px solid var(--c-border)', borderRadius: '20px', padding: '1.75rem 1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--c-accent)', letterSpacing: '-0.04em', marginBottom: '0.4rem' }}>{s.num}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--c-muted)', fontWeight: 500, lineHeight: 1.5 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Crodonian Values (from their TeamSection) ── */}
      <section style={{ background: 'var(--c-surface)', padding: 'clamp(3rem, 5vw, 5rem) clamp(1.25rem, 5vw, 5rem)', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', padding: '0.35rem 1rem 0.35rem 0.6rem', borderRadius: '100px', background: 'rgba(109,40,217,0.06)', border: '1px solid rgba(109,40,217,0.15)', marginBottom: '2.5rem' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#60A5FA', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
            <span style={{ fontSize: '0.72rem', fontFamily: 'monospace', color: 'var(--c-muted)', fontWeight: 500 }}>const crodonian = new Studio();</span>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {crodValues.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ background: '#fff', border: '1px solid var(--c-border)', borderRadius: '20px', padding: '2rem 1.75rem' }}>
                <div style={{ width: 48, height: 48, borderRadius: '12px', background: v.color, border: `1px solid ${v.borderColor}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '1.25rem' }}>{v.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--c-text)', marginBottom: '0.5rem' }}>{v.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--c-muted)', lineHeight: 1.75 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Crodonian Services ────────────────── */}
      <section className="section-pad" style={{ background: '#fff', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <motion.span className="text-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              What Crodonian Offers
            </motion.span>
            <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em' }}>
              Engineering excellence for modern tech brands
            </motion.h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1.25rem' }}>
            {crodServices.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderRadius: '20px', padding: '2rem' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1rem', color: 'var(--c-text)', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'var(--c-muted)', lineHeight: 1.75, marginBottom: '1rem' }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                  {s.tags.map((t) => (
                    <span key={t} style={{ padding: '0.2rem 0.65rem', background: '#fff', border: '1px solid var(--c-border)', borderRadius: '6px', fontSize: '0.68rem', fontWeight: 500, color: 'var(--c-text-2)', fontFamily: 'monospace' }}>{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Crodonian Team ────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--c-surface)', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <motion.span className="text-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            Crodonian Team
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', marginBottom: '3rem' }}>
            The builders behind Crodonian
          </motion.h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {crodTeam.map((m, i) => (
              <motion.div key={m.name}
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                style={{ background: '#fff', border: '1px solid rgba(109,40,217,0.1)', borderRadius: '24px', padding: '2.5rem', maxWidth: '380px', boxShadow: '0 4px 32px rgba(109,40,217,0.06)', textAlign: 'center', width: '100%' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: m.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 800, color: '#fff', margin: '0 auto 1.25rem', boxShadow: '0 8px 32px rgba(29,78,216,0.3)' }}>
                  {m.initials}
                </div>
                <span style={{ display: 'inline-block', padding: '0.2rem 0.7rem', background: 'rgba(29,78,216,0.08)', border: '1px solid rgba(29,78,216,0.15)', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1D4ED8', marginBottom: '0.75rem' }}>{m.role}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', marginBottom: '0.25rem' }}>{m.name}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--c-muted)', marginBottom: '1.25rem' }}>{m.bio}</p>
                <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                  {m.skills.map((sk) => (
                    <span key={sk} style={{ padding: '0.2rem 0.65rem', background: 'var(--c-surface)', borderRadius: '6px', fontSize: '0.7rem', fontWeight: 500, color: 'var(--c-text-2)', fontFamily: 'monospace' }}>{sk}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Joint Projects ────────────────────── */}
      <section className="section-pad" style={{ background: '#fff', borderBottom: '1px solid var(--c-border)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', marginBottom: '2.5rem', textAlign: 'center' }}>
            What we've built together
          </motion.h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {collabProjects.map((p, i) => (
              <motion.div key={p.title}
                initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
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
                  <div style={{ width: 56, height: 56, borderRadius: '14px', background: 'linear-gradient(135deg, #1D4ED8, #6D28D9)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', flexShrink: 0 }}>✦</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────── */}
      <section className="section-pad" style={{ background: 'var(--c-surface)', textAlign: 'center' }}>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          Want <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>AI power</em> + <em style={{ color: '#1D4ED8', fontStyle: 'italic' }}>design craft</em>?
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ fontSize: '0.95rem', color: 'var(--c-muted)', maxWidth: '440px', margin: '0 auto 2rem', lineHeight: 1.7 }}>
          Book a call with FuseOne Studios and ask about our full-stack AI + Design collab packages.
        </motion.p>
        <motion.a href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
          whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.98 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.95rem 2rem', borderRadius: '100px', background: 'linear-gradient(135deg, #1D4ED8, #6D28D9)', color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 700, boxShadow: '0 4px 24px rgba(29,78,216,0.35)' }}>
          Book a Free Call →
        </motion.a>
      </section>
    </PageWrapper>
  )
}
