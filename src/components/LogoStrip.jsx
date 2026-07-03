import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, viewportOnce } from '../lib/animations'

const logos = [
  { name: 'OpenAI', abbr: 'OAI' },
  { name: 'Zapier', abbr: 'ZAP' },
  { name: 'Salesforce', abbr: 'SF' },
  { name: 'HubSpot', abbr: 'HS' },
  { name: 'Notion', abbr: 'NTN' },
  { name: 'Stripe', abbr: 'STR' },
  { name: 'Airtable', abbr: 'AIR' },
  { name: 'Make.com', abbr: 'MKE' },
]

const doubled = [...logos, ...logos]

function LogoChip({ logo }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, borderColor: 'var(--c-accent)', background: 'rgba(109,40,217,0.06)' }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.55rem 1.25rem',
        border: '1px solid rgba(109,40,217,0.15)',
        borderRadius: '8px',
        background: '#fff',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
        flexShrink: 0,
        transition: 'all 0.2s ease',
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.6rem',
        letterSpacing: '0.08em',
        color: 'var(--c-accent)',
        fontWeight: 700,
        opacity: 0.7,
      }}>
        {logo.abbr}
      </span>
      <span style={{ color: 'var(--c-text-2)', fontSize: '0.88rem', fontWeight: 600 }}>
        {logo.name}
      </span>
    </motion.div>
  )
}


export default function LogoStrip() {
  return (
    <section style={{ padding: '4rem 0', borderTop: '1px solid var(--c-border)', overflow: 'hidden' }}>
      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="text-label"
        style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--c-muted)' }}
      >
        Integrations & platforms we build with
      </motion.p>

      <div style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Fade edges */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to right, var(--c-base), transparent)',
          zIndex: 1, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '120px',
          background: 'linear-gradient(to left, var(--c-base), transparent)',
          zIndex: 1, pointerEvents: 'none',
        }} />

        <div
          className="marquee-track"
          style={{ display: 'flex', gap: '1rem', width: 'max-content' }}
        >
          {doubled.map((logo, i) => (
            <LogoChip key={i} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
