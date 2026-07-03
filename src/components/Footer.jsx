import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/animations'
import iconImg from '../assets/Icon.png'

const services = [
  { label: 'Workflow Automation', href: '#services' },
  { label: 'SaaS Development', href: '#services' },
  { label: 'AI Integration', href: '#services' },
  { label: 'Data Pipelines', href: '#services' },
  { label: 'Voice & Conversational AI', href: '#services' },
  { label: 'Custom Chatbots', href: '#services' },
]

const company = [
  { label: 'Our Process', href: '#process' },
  { label: 'Case Studies', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Our Team', href: '#team' },
  { label: 'Book a Call', href: 'https://calendly.com/fuseonestudios', external: true },
]

const contact = [
  { label: 'info@fuseone.studio', href: 'mailto:info@fuseone.studio', icon: '✉' },
  { label: 'Instagram', href: 'https://instagram.com/fuseonestudios', icon: '↗' },
  { label: 'X (Twitter)', href: 'https://x.com/FuseOneStudio', icon: '↗' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/fuseone', icon: '↗' },
]

const tools = ['Make.com', 'Zapier', 'n8n', 'OpenAI', 'HubSpot', 'Notion', 'Airtable', 'Stripe']

export default function Footer() {
  return (
    <footer style={{ background: '#0D0B1A', overflow: 'hidden', position: 'relative' }}>

      {/* ── CTA band at top of footer ── */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 5vw, 5rem)',
        position: 'relative',
      }}>
        {/* Purple glow */}
        <div style={{
          position: 'absolute',
          width: 600, height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(109,40,217,0.25) 0%, transparent 70%)',
          top: '-50%', left: '50%', transform: 'translateX(-50%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr auto',
          gap: '3rem', alignItems: 'center',
        }}>
          <div>
            <motion.p
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
              style={{
                fontSize: '0.7rem', fontWeight: 600,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: '#8B5CF6', marginBottom: '0.75rem',
              }}
            >
              Ready to automate?
            </motion.p>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                color: '#F0EEFF',
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                maxWidth: '600px',
              }}
            >
              Let's build something{' '}
              <span style={{
                background: 'linear-gradient(135deg, #A78BFA, #7C3AFF)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                remarkable.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-end' }}
          >
            <motion.a
              href="https://calendly.com/fuseonestudios"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(109,40,217,0.6)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.9rem 2rem', borderRadius: '100px',
                background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
                color: '#fff', textDecoration: 'none',
                fontSize: '0.95rem', fontWeight: 600,
                boxShadow: '0 4px 28px rgba(109,40,217,0.4)',
                letterSpacing: '-0.01em', whiteSpace: 'nowrap',
              }}
            >
              Schedule a Free Meeting →
            </motion.a>
            <a
              href="mailto:info@fuseone.studio"
              style={{ fontSize: '0.8rem', color: 'rgba(167,139,250,0.7)', textDecoration: 'none' }}
            >
              or email us directly ↗
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: 'clamp(3rem, 5vw, 5rem) clamp(1.5rem, 5vw, 5rem)',
        display: 'grid',
        gridTemplateColumns: '2fr 1fr 1fr 1fr',
        gap: '3rem',
      }}>

        {/* Brand column */}
        <div>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '1.25rem' }}>
            <img src={iconImg} alt="" style={{ height: 36, width: 36, objectFit: 'contain' }} />
            <span style={{
              fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700,
              letterSpacing: '-0.025em', color: '#F0EEFF',
            }}>
              FuseOne <span style={{ color: '#8B5CF6' }}>Studios</span>
            </span>
          </a>
          <p style={{
            fontSize: '0.875rem', lineHeight: 1.75,
            color: 'rgba(167,139,250,0.55)', maxWidth: '260px', marginBottom: '1.5rem',
          }}>
            AI automation for ambitious businesses. We replace manual work with intelligent systems that scale with you.
          </p>

          {/* Tool chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {tools.map((t) => (
              <span key={t} style={{
                padding: '0.2rem 0.6rem',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: '6px',
                fontSize: '0.65rem',
                color: 'rgba(255,255,255,0.3)',
                fontWeight: 500,
                letterSpacing: '0.04em',
              }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Services column */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: '1.25rem' }}>
            Services
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {services.map((s) => (
              <a key={s.label} href={s.href} style={{
                fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)',
                textDecoration: 'none', fontWeight: 400,
                transition: 'color 0.2s ease',
              }}
                onMouseEnter={(e) => e.target.style.color = '#A78BFA'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Company column */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: '1.25rem' }}>
            Company
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {company.map((l) => (
              <a
                key={l.label} href={l.href}
                target={l.external ? '_blank' : undefined}
                rel={l.external ? 'noreferrer' : undefined}
                style={{
                  fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none', fontWeight: 400,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = '#A78BFA'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Contact column */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: '1.25rem' }}>
            Connect
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {contact.map((c) => (
              <a
                key={c.label} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none', fontWeight: 400,
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#A78BFA' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
              >
                <span style={{ fontSize: '0.75rem', opacity: 0.5 }}>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: '1.5rem clamp(1.5rem, 5vw, 5rem)',
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem',
      }}>
        <p style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>
          © {new Date().getFullYear()} FuseOne Studios Pvt. Ltd. — All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {['Privacy Policy', 'Terms of Service'].map((t) => (
            <a key={t} href="#" style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>
              {t}
            </a>
          ))}
        </div>
        <a href="https://fuseone.studio" style={{ fontSize: '0.72rem', color: 'rgba(167,139,250,0.3)', textDecoration: 'none' }}>
          fuseone.studio ↗
        </a>
      </div>
    </footer>
  )
}
