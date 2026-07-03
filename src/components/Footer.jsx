import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'
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
  { label: 'info@fuseonestudios.com', href: 'mailto:info@fuseonestudios.com', icon: '✉' },
  { label: 'Instagram', href: 'https://instagram.com/fuseonestudios', icon: '↗' },
  { label: 'X (Twitter)', href: 'https://x.com/FuseOneStudio', icon: '↗' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/fuseone', icon: '↗' },
]
const tools = ['Make.com', 'Zapier', 'n8n', 'OpenAI', 'HubSpot', 'Notion', 'Airtable', 'Stripe']

const linkStyle = {
  fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)',
  textDecoration: 'none', fontWeight: 400, transition: 'color 0.2s ease',
}

export default function Footer() {
  const isMobile = useIsMobile()
  const pad = isMobile ? '1.25rem' : 'clamp(1.5rem, 5vw, 5rem)'

  return (
    <footer style={{ background: '#0D0B1A', overflow: 'hidden', position: 'relative' }}>
      {/* CTA band */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.07)', padding: `clamp(2.5rem, 5vw, 4.5rem) ${pad}`, position: 'relative' }}>
        <div style={{
          position: 'absolute', width: 500, height: 250, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(109,40,217,0.2) 0%, transparent 70%)',
          top: '-40%', left: '50%', transform: 'translateX(-50%)', pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr auto', gap: '2rem', alignItems: 'center' }}>
          <div>
            <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: '0.75rem' }}>
              Ready to automate?
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: isMobile ? 'clamp(1.6rem, 7vw, 2.5rem)' : 'clamp(2rem, 3.5vw, 3rem)',
              fontWeight: 800, color: '#F0EEFF', letterSpacing: '-0.03em', lineHeight: 1.05,
            }}>
              Let's build something{' '}
              <span style={{ background: 'linear-gradient(135deg, #A78BFA, #7C3AFF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                remarkable.
              </span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: isMobile ? 'flex-start' : 'flex-end' }}>
            <motion.a
              href="https://calendly.com/fuseonestudios" target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.03, boxShadow: '0 8px 40px rgba(109,40,217,0.6)' }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.85rem 1.75rem', borderRadius: '100px',
                background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
                color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600,
                boxShadow: '0 4px 24px rgba(109,40,217,0.4)', whiteSpace: 'nowrap',
              }}>
              Schedule a Free Meeting →
            </motion.a>
            <a href="mailto:info@fuseonestudios.com" style={{ fontSize: '0.78rem', color: 'rgba(167,139,250,0.6)', textDecoration: 'none' }}>
              or email us directly ↗
            </a>
          </div>
        </div>
      </div>

      {/* Links grid */}
      <div style={{
        maxWidth: '1200px', margin: '0 auto',
        padding: `clamp(2.5rem, 4vw, 4rem) ${pad}`,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr 1fr' : '2fr 1fr 1fr 1fr',
        gap: isMobile ? '2rem' : '3rem',
      }}>
        {/* Brand */}
        <div style={{ gridColumn: isMobile ? '1 / -1' : 'auto' }}>
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '1rem' }}>
            <img src={iconImg} alt="" style={{ height: 32, width: 32, objectFit: 'contain' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.025em', color: '#F0EEFF' }}>
              FuseOne <span style={{ color: '#8B5CF6' }}>Studios</span>
            </span>
          </a>
          <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(167,139,250,0.5)', maxWidth: '260px', marginBottom: '1.25rem' }}>
            AI automation for ambitious businesses. We replace manual work with intelligent systems that scale with you.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
            {tools.map((t) => (
              <span key={t} style={{ padding: '0.2rem 0.6rem', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '6px', fontSize: '0.65rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: '1rem' }}>Services</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {services.map((s) => (
              <a key={s.label} href={s.href} style={linkStyle}
                onMouseEnter={(e) => e.target.style.color = '#A78BFA'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >{s.label}</a>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: '1rem' }}>Company</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {company.map((l) => (
              <a key={l.label} href={l.href} target={l.external ? '_blank' : undefined} rel={l.external ? 'noreferrer' : undefined}
                style={linkStyle}
                onMouseEnter={(e) => e.target.style.color = '#A78BFA'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >{l.label}</a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8B5CF6', marginBottom: '1rem' }}>Connect</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {contact.map((c) => (
              <a key={c.label} href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{ ...linkStyle, display: 'flex', alignItems: 'center', gap: '0.4rem' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#A78BFA' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
              >
                <span style={{ fontSize: '0.7rem', opacity: 0.5 }}>{c.icon}</span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.06)',
        padding: `1.25rem ${pad}`,
        maxWidth: '1200px', margin: '0 auto',
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center',
        gap: '0.5rem',
      }}>
        <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', fontWeight: 500 }}>
          © {new Date().getFullYear()} FuseOne Studios — All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {['Privacy Policy', 'Terms of Service'].map((t) => (
            <a key={t} href="#" style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>{t}</a>
          ))}
        </div>
        <a href="https://fuseonestudios.com" style={{ fontSize: '0.78rem', color: 'rgba(167,139,250,0.3)', textDecoration: 'none' }}>
          fuseonestudios.com ↗
        </a>
      </div>
    </footer>
  )
}
