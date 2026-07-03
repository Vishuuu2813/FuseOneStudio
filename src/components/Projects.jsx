import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'

const projects = [
  {
    id: 'sales',
    title: 'Sales Workflow Optimization',
    client: 'B2B SaaS',
    metric: '70%',
    metricLabel: 'Reduction in manual tasks',
    desc: 'End-to-end CRM automation with AI-powered lead scoring, automated follow-up sequences, and real-time deal health monitoring.',
    tag: 'Automation',
    year: '2025',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d0f5e 100%)',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Intake Automation',
    client: 'Medical Group',
    metric: '55%',
    metricLabel: 'Faster intake processing',
    desc: 'Patient intake forms, insurance verification, and appointment scheduling fully automated — 38% reduction in admin overhead.',
    tag: 'Healthcare',
    year: '2024',
    gradient: 'linear-gradient(135deg, #0a1628 0%, #1a2d5a 100%)',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Product Tagging',
    client: 'Retail Brand',
    metric: '92%',
    metricLabel: 'AI tagging accuracy',
    desc: 'Computer vision + LLM pipeline that auto-tags 10,000+ SKUs daily. Manual review time down 80%, revenue attribution improved 30%.',
    tag: 'AI / ML',
    year: '2024',
    gradient: 'linear-gradient(135deg, #1a0a2e 0%, #3d1a6e 100%)',
  },
  {
    id: 'chatbot',
    title: 'AI Customer Support Bot',
    client: 'E-commerce Brand',
    metric: '24/7',
    metricLabel: 'Autonomous support',
    desc: 'GPT-powered support agent trained on product knowledge base — resolves 78% of tickets without human escalation.',
    tag: 'Chatbots',
    year: '2025',
    gradient: 'linear-gradient(135deg, #0d1a0a 0%, #1a3d1a 100%)',
  },
]

function ProjectCard({ project, isMobile }) {
  return (
    <motion.div
      whileHover={isMobile ? {} : { y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'relative',
        background: project.gradient,
        borderRadius: '20px',
        overflow: 'hidden',
        flexShrink: 0,
        width: isMobile ? '100%' : 'clamp(320px, 32vw, 420px)',
        height: isMobile ? 'auto' : '520px',
        minHeight: isMobile ? '360px' : 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: isMobile ? '1.75rem' : '2.5rem',
        border: '1px solid rgba(255,255,255,0.07)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.25)',
      }}
    >
      {/* Giant metric watermark */}
      <div style={{
        position: 'absolute',
        top: '5%', right: '-2%',
        fontFamily: 'var(--font-display)',
        fontSize: isMobile ? 'clamp(5rem, 12vw, 7rem)' : 'clamp(6rem, 14vw, 10rem)',
        fontWeight: 900,
        color: 'rgba(255,255,255,0.06)',
        lineHeight: 1,
        userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>
        {project.metric}
      </div>

      {/* Tag + year */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: isMobile ? '2.5rem' : 'auto' }}>
        <span style={{
          fontSize: '0.65rem', fontWeight: 600,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: '#A78BFA', paddingTop: '0.25rem',
        }}>
          {project.tag}
        </span>
        <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)', fontWeight: 500 }}>
          {project.year}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.3rem, 2vw, 1.85rem)',
          fontWeight: 700,
          color: '#F0EEFF',
          letterSpacing: '-0.025em',
          lineHeight: 1.15,
          marginBottom: '0.75rem',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.82rem',
          lineHeight: 1.6,
          color: 'rgba(255,255,255,0.5)',
          marginBottom: '1.5rem',
        }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem' }}>
          <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
            {project.client}
          </span>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#A78BFA', letterSpacing: '-0.03em' }}>
              {project.metric}
            </div>
            <div style={{ fontSize: '0.55rem', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {project.metricLabel}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const isMobile = useIsMobile()
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })
  // Map scroll progress → horizontal translate of cards (desktop only)
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-55%'])

  if (isMobile) {
    return (
      <section
        id="work"
        className="section-pad"
        style={{
          background: 'var(--c-base)',
          borderTop: '1px solid var(--c-border)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'block', marginBottom: '0.5rem',
            fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--c-accent)',
          }}>
            Case Studies
          </span>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.8rem',
            fontWeight: 800,
            color: 'var(--c-text)',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
          }}>
            Work that moves <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>numbers</em>
          </h2>
        </div>

        {/* Vertical list of beautiful cards on mobile */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isMobile={true} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="work"
      style={{
        position: 'relative',
        height: `${projects.length * 60}vh`,
        background: 'var(--c-base)',
      }}
    >
      {/* Sticky container */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {/* Header */}
        <div style={{ padding: '0 clamp(1.25rem, 5vw, 5rem)', marginBottom: '2.5rem' }}>
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{
              display: 'block', marginBottom: '0.75rem',
              fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.14em',
              textTransform: 'uppercase', color: 'var(--c-accent)',
            }}
          >
            Case Studies
          </motion.span>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                color: 'var(--c-text)',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
              }}
            >
              Work that moves <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>numbers</em>
            </motion.h2>
            <span style={{ fontSize: '0.75rem', color: 'var(--c-muted)' }}>
              Scroll to explore →
            </span>
          </div>
        </div>

        {/* Horizontally scrolling cards */}
        <motion.div
          style={{
            display: 'flex',
            gap: '1.5rem',
            paddingLeft: 'clamp(1.25rem, 5vw, 5rem)',
            paddingRight: 'clamp(1.25rem, 5vw, 5rem)',
            x,
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isMobile={false} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
