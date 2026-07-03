import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'

const services = [
  {
    id: 'automation',
    title: 'Workflow Automation',
    short: 'Eliminate repetitive work at scale',
    desc: 'We identify every bottleneck in your operations and replace it with an intelligent system. CRM syncs, email sequences, data entry, report generation — automated end-to-end.',
    tools: ['Zapier', 'Make.com', 'n8n', 'Custom APIs'],
    result: '70% average reduction in manual touchpoints',
  },
  {
    id: 'saas',
    title: 'SaaS Development',
    short: 'From zero to production-ready product',
    desc: 'Full-stack SaaS builds with AI capabilities baked in from day one. We handle architecture, auth, billing, dashboards, and the custom AI features that set your product apart.',
    tools: ['React', 'Node.js', 'Supabase', 'OpenAI'],
    result: '12-week average from concept to launch',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    short: 'Language models that actually work in production',
    desc: 'LLM integrations that go beyond simple chat — document processing, structured extraction, multi-step reasoning, fine-tuned classifiers for your specific domain.',
    tools: ['GPT-4', 'Claude', 'Mistral', 'LangChain'],
    result: '92% accuracy on domain-specific tasks',
  },
  {
    id: 'data',
    title: 'Data Pipelines',
    short: 'Clean, reliable data flowing where you need it',
    desc: 'ETL pipelines, real-time data streaming, warehouse integrations, and analytics dashboards. Your team makes decisions on current data, not last month\'s exports.',
    tools: ['dbt', 'Airflow', 'BigQuery', 'Snowflake'],
    result: 'Sub-60s data freshness for most pipelines',
  },
  {
    id: 'voice',
    title: 'Voice & Conversational AI',
    short: 'Intelligent voice systems for customer ops',
    desc: 'AI phone agents, support chatbots, and conversational interfaces that handle tier-1 support, appointment booking, and lead qualification without a human in the loop.',
    tools: ['Whisper', 'ElevenLabs', 'Twilio', 'Retell'],
    result: '55% reduction in support ticket volume',
  },
]

const visualAnimations = {
  automation: '⟳',
  saas: '◈',
  ai: '◉',
  data: '⊞',
  voice: '◎',
}

export default function Services() {
  const [active, setActive] = useState(services[0].id)
  const activeService = services.find((s) => s.id === active)
  const isMobile = useIsMobile()

  return (
    <section id="services" className="section-pad" style={{ background: 'var(--c-base)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.span
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}
        >
          What we build
        </motion.span>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-headline" style={{ marginBottom: '4rem' }}
        >
          Every service, <em style={{ color: 'var(--c-accent)' }}>engineered</em>
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '0' : '4rem', alignItems: 'start' }}>

          {/* Left: Tab list */}
          <div style={{ position: 'relative' }}>
            {services.map((service) => (
              <motion.div
                key={service.id}
                onClick={() => setActive(service.id)}
                style={{
                  padding: '1.5rem 1.5rem 1.5rem 2rem',
                  borderBottom: '1px solid var(--c-border)',
                  cursor: 'pointer',
                  position: 'relative',
                  background: active === service.id ? 'rgba(134,59,255,0.04)' : 'transparent',
                  transition: 'background 0.3s ease',
                }}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Active indicator line */}
                {active === service.id && (
                  <motion.div
                    layoutId="service-indicator"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: '2px',
                      background: 'var(--c-accent)',
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                <h3 style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: active === service.id ? 700 : 500,
                  color: active === service.id ? 'var(--c-text)' : 'var(--c-muted)',
                  marginBottom: '0.25rem',
                  transition: 'color 0.3s ease, font-weight 0.3s ease',
                }}>
                  {service.title}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--c-muted)', fontWeight: 300 }}>
                  {service.short}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right: Detail panel */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Visual symbol with premium micro-interactions */}
                <motion.div
                  animate={
                    active === 'automation'
                      ? { rotate: 360 }
                      : active === 'saas'
                      ? { scale: [1, 1.12, 1], rotate: [0, 90, 180, 270, 360] }
                      : active === 'ai'
                      ? { scale: [0.95, 1.1, 0.95], opacity: [0.12, 0.25, 0.12] }
                      : active === 'data'
                      ? { y: [0, -6, 0] }
                      : { scale: [1, 1.08, 1] }
                  }
                  transition={{
                    duration: active === 'automation' ? 12 : active === 'saas' ? 8 : 4,
                    repeat: Infinity,
                    ease: active === 'automation' ? 'linear' : 'easeInOut',
                  }}
                  style={{
                    fontSize: '4rem',
                    color: 'var(--c-accent)',
                    opacity: 0.15,
                    fontFamily: 'monospace',
                    lineHeight: 1,
                    marginBottom: '1.5rem',
                    userSelect: 'none',
                    display: 'inline-block',
                  }}
                >
                  {visualAnimations[active]}
                </motion.div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 700,
                  color: 'var(--c-text)',
                  marginBottom: '1rem',
                  letterSpacing: '-0.025em',
                }}>
                  {activeService.title}
                </h3>

                <p className="text-body" style={{ marginBottom: '2rem' }}>
                  {activeService.desc}
                </p>

                {/* Tools */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {activeService.tools.map((tool) => (
                    <span key={tool} style={{
                      padding: '0.3rem 0.8rem',
                      border: '1px solid var(--c-border)',
                      fontSize: '0.7rem',
                      letterSpacing: '0.08em',
                      color: 'var(--c-muted)',
                      textTransform: 'uppercase',
                    }}>
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div style={{
                  padding: '1rem 1.25rem',
                  border: '1px solid var(--c-border-accent)',
                  background: 'var(--c-accent-dim)',
                }}>
                  <span className="text-eyebrow" style={{ display: 'block', marginBottom: '0.3rem', fontSize: '0.6rem' }}>
                    Typical result
                  </span>
                  <span style={{ color: 'var(--c-text)', fontSize: '0.9rem', fontWeight: 400 }}>
                    {activeService.result}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
