import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'

const team = [
  {
    name: 'Apoorv Sharma',
    role: 'Co-Founder & CEO',
    title: 'Designer & Developer',
    bio: 'Creating meaningful solutions for contemporary problems while leveraging modern tech and automations.',
    tags: ['Design', 'Strategy', 'Web Dev'],
    linkedin: 'https://www.linkedin.com/in/apoorvsh001/',
    initials: 'AS',
    color: 'linear-gradient(135deg, #6D28D9, #8B5CF6)',
  },
  {
    name: 'Rohit Soni',
    role: 'Co-Founder & CTO',
    title: 'AI Engineer',
    bio: 'AI enthusiast building SaaS products and powerful end-to-end solutions with customised AI workflows.',
    tags: ['AI/ML', 'SaaS', 'Architecture'],
    linkedin: 'https://www.linkedin.com/in/rohit-soni-204a1032b/',
    initials: 'RS',
    color: 'linear-gradient(135deg, #4C1D95, #6D28D9)',
  },
]

function TeamCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -8 }}
      style={{
        background: '#fff',
        border: '1px solid rgba(109,40,217,0.1)',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 4px 32px rgba(109,40,217,0.06), 0 1px 3px rgba(0,0,0,0.05)',
        flex: 1,
        minWidth: '300px',
        maxWidth: '440px',
        transition: 'box-shadow 0.35s ease',
        cursor: 'pointer',
      }}
      onClick={() => window.open(member.linkedin, '_blank')}
    >
      {/* Avatar */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div style={{
          width: 72,
          height: 72,
          borderRadius: '50%',
          background: member.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-display)',
          fontSize: '1.5rem',
          fontWeight: 800,
          color: '#fff',
          letterSpacing: '-0.02em',
          boxShadow: '0 8px 32px rgba(109,40,217,0.3)',
        }}>
          {member.initials}
        </div>
      </div>

      {/* Role tag */}
      <span style={{
        display: 'inline-block',
        padding: '0.2rem 0.7rem',
        background: 'rgba(109,40,217,0.08)',
        border: '1px solid rgba(109,40,217,0.15)',
        borderRadius: '100px',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--c-accent)',
        marginBottom: '0.75rem',
      }}>
        {member.role}
      </span>

      {/* Name */}
      <h3 style={{
        fontFamily: 'var(--font-display)',
        fontSize: '1.5rem',
        fontWeight: 700,
        color: 'var(--c-text)',
        letterSpacing: '-0.025em',
        marginBottom: '0.25rem',
      }}>
        {member.name}
      </h3>

      <p style={{
        fontSize: '0.8rem',
        color: 'var(--c-accent-bright)',
        fontWeight: 500,
        marginBottom: '1rem',
      }}>
        {member.title}
      </p>

      {/* Bio */}
      <p style={{
        fontSize: '0.9rem',
        lineHeight: 1.7,
        color: 'var(--c-muted)',
        marginBottom: '1.5rem',
      }}>
        {member.bio}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
        {member.tags.map((tag) => (
          <span key={tag} style={{
            padding: '0.2rem 0.65rem',
            background: 'var(--c-surface)',
            borderRadius: '6px',
            fontSize: '0.7rem',
            fontWeight: 500,
            color: 'var(--c-text-2)',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* LinkedIn arrow */}
      <div style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--c-accent)', fontWeight: 600 }}>
          LinkedIn
        </span>
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ color: 'var(--c-accent)', fontSize: '0.8rem' }}
        >
          →
        </motion.span>
      </div>
    </motion.div>
  )
}

export default function Team() {
  return (
    <section
      id="team"
      className="section-pad"
      style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)' }}
    >
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="text-eyebrow"
            style={{ display: 'block', marginBottom: '0.75rem' }}
          >
            The Team
          </motion.span>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              color: 'var(--c-text)',
              letterSpacing: '-0.025em',
              lineHeight: 1.1,
              marginBottom: '1rem',
            }}
          >
            Built by <span style={{ color: 'var(--c-accent)' }}>builders</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{ fontSize: '0.95rem', color: 'var(--c-muted)', maxWidth: '440px', margin: '0 auto', lineHeight: 1.7 }}
          >
            Two founders obsessed with shipping systems that actually work —
            not decks, not demos.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            marginTop: '3.5rem',
            textAlign: 'center',
            padding: '2.5rem',
            background: '#fff',
            border: '1px solid rgba(109,40,217,0.1)',
            borderRadius: '20px',
            boxShadow: '0 4px 32px rgba(109,40,217,0.05)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
            fontWeight: 600,
            fontStyle: 'italic',
            color: 'var(--c-text)',
            letterSpacing: '-0.02em',
            lineHeight: 1.4,
            marginBottom: '1.25rem',
          }}>
            "We know your problems. We know your target audience and how you can grow rapidly with the help of automation."
          </p>
          <span style={{ fontSize: '0.75rem', color: 'var(--c-accent)', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            — Apoorv Sharma, Founder at FuseOne
          </span>
        </motion.blockquote>
      </div>
    </section>
  )
}
