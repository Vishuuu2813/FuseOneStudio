import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import logoFos from '../assets/LogoFOS.png'

const socials = [
  { label: 'X', href: 'https://x.com/FuseOneStudio' },
  { label: 'IG', href: 'https://instagram.com/fuseonestudios' },
  { label: 'FB', href: 'https://facebook.com/fuseone' },
  { label: 'LI', href: 'https://linkedin.com/company/fuseone' },
]

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#work' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: 'https://fuseone.studio/contact' },
]

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--c-border)',
      background: 'var(--c-base)',
      padding: 'clamp(3rem, 7vw, 6rem) clamp(1.5rem, 6vw, 6rem) 2rem',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '2rem', marginBottom: '3rem', alignItems: 'start' }}>
          <div>
            <a href="/" style={{ display: 'inline-block', marginBottom: '0.75rem' }}>
              <img src={logoFos} alt="FuseOne Studios" style={{ height: 32, width: 'auto', objectFit: 'contain' }} />
            </a>
            <p className="text-body" style={{ maxWidth: '300px', fontSize: '0.85rem' }}>
              AI automation for startups and scaling businesses. Built with ❤️ for AI.
            </p>
          </div>
          <nav style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-label"
                style={{ color: 'var(--c-muted)', textDecoration: 'none', transition: 'color 0.2s ease' }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--c-accent-light)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--c-muted)')}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{ height: '1px', background: 'var(--c-border)', marginBottom: '2rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="text-label" style={{ color: 'var(--c-muted)', fontSize: '0.65rem' }}>
            © {new Date().getFullYear()} FuseOne Studios. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '1px solid var(--c-border)',
                  borderRadius: '50%',
                  color: 'var(--c-muted)',
                  textDecoration: 'none',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  background: 'var(--c-accent)',
                  borderColor: 'var(--c-accent)',
                  color: '#fff',
                  boxShadow: '0 0 16px rgba(134,59,255,0.4)',
                }}
              >
                {s.label}
              </motion.a>
            ))}
          </div>
          <p className="text-label" style={{ color: 'var(--c-muted)', fontSize: '0.65rem' }}>
            fuseone.studio
          </p>
        </div>
      </div>
    </footer>
  )
}
