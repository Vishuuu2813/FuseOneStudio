import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp, clipWipe, viewportOnce } from '../lib/animations'
import { useIsMobile } from '../hooks/useIsMobile'
import anime from '../lib/anime'

const steps = [
  {
    num: '01',
    label: 'Workflow Assessment',
    desc: 'We map every repetitive touchpoint in your operations — no assumptions, just process archaeology. The result is a ranked list of automation opportunities with projected ROI.',
    tag: 'Discovery',
  },
  {
    num: '02',
    label: 'Deploy with Confidence',
    desc: 'Custom-built automations, integrations, and AI layers shipped iteratively. Each system is tested in a staging environment before it touches your live workflow.',
    tag: 'Build',
  },
  {
    num: '03',
    label: 'Ongoing Support',
    desc: 'Automation is a living system. We monitor, iterate, and expand as your business grows — with a dedicated Slack channel, not a ticket queue.',
    tag: 'Scale',
  },
]

const stats = [
  { value: 1000, suffix: '+', label: 'Happy Users' },
  { value: 500, suffix: '+', label: 'Hours Saved / Mo' },
  { value: 4.8, suffix: '', label: 'Avg. Rating' },
]

function StatCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const animated = useRef(false)
  const isDecimal = String(value).includes('.')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const obj = { val: 0 }
        anime({
          targets: obj,
          val: value,
          round: isDecimal ? 10 : 1,
          duration: 1800,
          easing: 'easeOutExpo',
          update: () => {
            el.textContent = isDecimal
              ? (obj.val / 10).toFixed(1) + suffix
              : Math.round(obj.val) + suffix
          },
        })
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, suffix, isDecimal])

  return (
    <div style={{ textAlign: 'left' }}>
      <div
        ref={ref}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 4rem)',
          fontWeight: 800,
          color: 'var(--c-accent)',
          letterSpacing: '-0.04em',
          lineHeight: 1,
        }}
      >
        0{suffix}
      </div>
      <p className="text-label" style={{ marginTop: '0.4rem', fontSize: '0.65rem' }}>{label}</p>
    </div>
  )
}

export default function Process() {
  const isMobile = useIsMobile()

  return (
    <section id="process" className="section-pad" style={{ background: 'var(--c-base)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '1.5rem' : '4rem',
          marginBottom: isMobile ? '3.5rem' : '6rem',
          alignItems: 'end',
        }}>
          <div>
            <motion.span
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
              className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem' }}
            >
              How we work
            </motion.span>
            <motion.h2
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
              className="text-headline"
            >
              Three steps to <em style={{ color: 'var(--c-accent)' }}>clarity</em>
            </motion.h2>
          </div>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="text-body" style={{ alignSelf: 'end', fontSize: '0.92rem' }}
          >
            We don\'t sell you on complexity. Our process is designed to get visible
            results in weeks, not quarters.
          </motion.p>
        </div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={clipWipe}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '50px 1fr' : '80px 1fr',
                gap: isMobile ? '1rem' : '2rem',
                padding: '2.5rem 0',
                borderBottom: '1px solid var(--c-border)',
                position: 'relative',
              }}
            >
              {/* Step number — dark + visible */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: isMobile ? '2.5rem' : '3.5rem',
                fontWeight: 800,
                lineHeight: 1,
                color: 'var(--c-accent)',
                opacity: 0.22,
                userSelect: 'none',
                letterSpacing: '-0.04em',
              }}>
                {step.num}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem', alignItems: 'start' }}>
                <div>
                  <span className="text-label" style={{ color: 'var(--c-accent)', display: 'block', marginBottom: '0.5rem' }}>
                    {step.tag}
                  </span>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.25rem, 2.2vw, 1.9rem)',
                    fontWeight: 700,
                    color: 'var(--c-text)',
                    marginBottom: '0.75rem',
                    letterSpacing: '-0.025em',
                  }}>
                    {step.label}
                  </h3>
                  <p className="text-body" style={{ maxWidth: '480px', fontSize: '0.88rem' }}>{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer(0.15, 0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '2.5rem',
            marginTop: isMobile ? '3.5rem' : '6rem',
            paddingTop: isMobile ? '2.5rem' : '4rem',
            borderTop: '1px solid var(--c-border)',
          }}
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCounter {...stat} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
