import { useState } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'

const projects = [
  {
    id: 'sales',
    title: 'Sales Workflow Optimization',
    client: 'B2B SaaS',
    metric: '70%',
    metricLabel: 'Reduction in manual tasks',
    desc: 'End-to-end CRM automation with AI-powered lead scoring, automated follow-up sequences, and real-time deal health monitoring.',
    color: '#1A1A1D',
    accentColor: '#863bff',
    category: 'Automation',
  },
  {
    id: 'healthcare',
    title: 'Healthcare Intake Automation',
    client: 'Medical Group',
    metric: '55%',
    metricLabel: 'Faster intake processing',
    desc: 'Patient intake forms, insurance verification, and appointment scheduling fully automated — 38% reduction in admin overhead.',
    color: '#131315',
    accentColor: '#863bff',
    category: 'Healthcare',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Product Tagging',
    client: 'Retail Brand',
    metric: '92%',
    metricLabel: 'Tagging accuracy (AI-powered)',
    desc: 'Computer vision + LLM pipeline that auto-tags 10,000+ SKUs daily with 92% accuracy. Manual review time down 80%, revenue attribution improved 30%.',
    color: '#1A1A1D',
    accentColor: '#863bff',
    category: 'AI / ML',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      layoutId={`project-${project.id}`}
      variants={fadeUp}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        position: 'relative',
        background: project.color,
        border: '1px solid var(--c-border)',
        overflow: 'hidden',
        flexShrink: 0,
        width: 'clamp(340px, 36vw, 480px)',
        minHeight: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '2.5rem',
      }}
    >
      {/* Huge metric as background text */}
      <motion.div
        animate={{ opacity: hovered ? 0.06 : 0.04, scale: hovered ? 1.05 : 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '-5%',
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(8rem, 18vw, 14rem)',
          fontWeight: 700,
          color: 'var(--c-accent)',
          lineHeight: 1,
          pointerEvents: 'none',
          userSelect: 'none',
          WebkitTextStroke: '1px var(--c-accent)',
        }}
      >
        {project.metric}
      </motion.div>

      {/* Category tag */}
      <span className="text-eyebrow" style={{ marginBottom: '1.5rem', display: 'block' }}>
        {project.category}
      </span>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
          fontWeight: 300,
          color: 'var(--c-text)',
          marginBottom: '0.75rem',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        {project.title}
      </h3>

      {/* Sliding desc on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-body"
            style={{ marginBottom: '1.25rem' }}
          >
            {project.desc}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Client + metric */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <span className="text-label">{project.client}</span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ color: 'var(--c-accent)', fontSize: '1.5rem', fontFamily: 'var(--font-display)', fontWeight: 300 }}>
            {project.metric}
          </div>
          <span className="text-label" style={{ fontSize: '0.65rem' }}>{project.metricLabel}</span>
        </div>
      </div>

      {/* Gold overlay on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(134,59,255,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" style={{ padding: 'clamp(5rem,10vw,9rem) 0', background: 'var(--c-surface)', overflow: 'hidden' }}>
      <div style={{ padding: '0 clamp(1.5rem, 6vw, 6rem)', marginBottom: '3rem' }}>
        <motion.span
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}
        >
          Case Studies
        </motion.span>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="text-headline"
          >
            Work that moves <em style={{ color: 'var(--c-accent)' }}>numbers</em>
          </motion.h2>
          <motion.a
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            href="#contact"
            className="text-label"
            style={{ color: 'var(--c-accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            whileHover={{ gap: '0.8rem' }}
          >
            All projects <span>→</span>
          </motion.a>
        </div>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div
        variants={staggerContainer(0.12)}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        style={{
          display: 'flex',
          gap: '1.5rem',
          paddingLeft: 'clamp(1.5rem, 6vw, 6rem)',
          paddingRight: 'clamp(1.5rem, 6vw, 6rem)',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollbarWidth: 'none',
          paddingBottom: '1rem',
        }}
      >
        {projects.map((project, i) => (
          <div key={project.id} style={{ scrollSnapAlign: 'start' }}>
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </motion.div>
    </section>
  )
}
