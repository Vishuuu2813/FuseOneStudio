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
      whileHover={{ opacity: 1, scale: 1.05 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        padding: '0.6rem 1.5rem',
        border: '1px solid var(--c-border)',
        borderRadius: '4px',
        opacity: 0.35,
        transition: 'opacity 0.3s ease, scale 0.3s ease',
        flexShrink: 0,
      }}
    >
      <span style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.65rem',
        letterSpacing: '0.1em',
        color: 'var(--c-accent)',
        fontWeight: 600,
      }}>
        {logo.abbr}
      </span>
      <span style={{ color: 'var(--c-text)', fontSize: '0.85rem', fontWeight: 300 }}>
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
