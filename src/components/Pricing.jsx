import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import anime from '../lib/anime'
import { useEffect, useRef } from 'react'

const plans = {
  monthly: [
    {
      name: 'Starter',
      price: 120,
      desc: 'For solo founders and small teams exploring automation.',
      features: [
        '3 workflow automations',
        '2 AI integrations',
        'Email + Slack support',
        '1 revision cycle',
        'Monthly check-in call',
      ],
      popular: false,
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: 350,
      desc: 'For scaling teams that need serious automation infrastructure.',
      features: [
        'Unlimited automations',
        '5 AI integrations',
        'Dedicated Slack channel',
        'Weekly strategy calls',
        'Priority builds',
        'Custom SaaS features',
      ],
      popular: true,
      cta: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: 2100,
      desc: 'Full-scale AI transformation for established organizations.',
      features: [
        'Everything in Pro',
        'Dedicated engineer',
        'Custom AI model fine-tuning',
        'SLA guarantees',
        'Quarterly executive reviews',
        'Whitelabel options',
      ],
      popular: false,
      cta: 'Book a Call',
    },
  ],
  yearly: [
    { name: 'Starter', price: 96, desc: 'For solo founders and small teams exploring automation.', features: ['3 workflow automations', '2 AI integrations', 'Email + Slack support', '1 revision cycle', 'Monthly check-in call'], popular: false, cta: 'Get Started' },
    { name: 'Pro', price: 280, desc: 'For scaling teams that need serious automation infrastructure.', features: ['Unlimited automations', '5 AI integrations', 'Dedicated Slack channel', 'Weekly strategy calls', 'Priority builds', 'Custom SaaS features'], popular: true, cta: 'Most Popular' },
    { name: 'Enterprise', price: 1680, desc: 'Full-scale AI transformation for established organizations.', features: ['Everything in Pro', 'Dedicated engineer', 'Custom AI model fine-tuning', 'SLA guarantees', 'Quarterly executive reviews', 'Whitelabel options'], popular: false, cta: 'Book a Call' },
  ],
}

function PriceDisplay({ value }) {
  const ref = useRef(null)
  const prevRef = useRef(value)

  useEffect(() => {
    if (prevRef.current !== value && ref.current) {
      anime({
        targets: ref.current,
        opacity: [0, 1],
        translateY: [10, 0],
        duration: 400,
        easing: 'easeOutExpo',
      })
    }
    prevRef.current = value
  }, [value])

  return (
    <span
      ref={ref}
      style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 300,
        color: 'var(--c-text)',
        letterSpacing: '-0.03em',
      }}
    >
      ${value}
    </span>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  return (
    <section id="pricing" className="section-pad" style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.span
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-eyebrow" style={{ display: 'block', marginBottom: '1rem', textAlign: 'center' }}
        >
          Transparent Pricing
        </motion.span>
        <motion.h2
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          className="text-headline" style={{ marginBottom: '2rem', textAlign: 'center' }}
        >
          Invest in <em style={{ color: 'var(--c-accent)' }}>outcomes</em>
        </motion.h2>

        {/* Toggle */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '4rem' }}
        >
          <div style={{
            display: 'inline-flex',
            background: 'var(--c-surface2)',
            border: '1px solid var(--c-border)',
            borderRadius: '100px',
            padding: '4px',
            gap: '2px',
            position: 'relative',
          }}>
            {['monthly', 'yearly'].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: '0.45rem 1.2rem',
                  borderRadius: '100px',
                  border: 'none',
                  background: 'transparent',
                  color: billing === b ? '#0A0A0B' : 'var(--c-muted)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  cursor: 'pointer',
                  position: 'relative',
                  zIndex: 1,
                  transition: 'color 0.3s ease',
                }}
              >
                {billing === b && (
                  <motion.div
                    layoutId="billing-pill"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'var(--c-accent)',
                      borderRadius: '100px',
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  />
                )}
                {b} {b === 'yearly' && <span style={{ fontSize: '0.6rem', color: billing === 'yearly' ? '#0A0A0B' : 'var(--c-accent)' }}>-20%</span>}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}
        >
          {plans[billing].map((plan, i) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              style={{
                position: 'relative',
                padding: '2px',
                borderRadius: plan.popular ? '2px' : '2px',
              }}
            >
              {plan.popular && (
                <div
                  className="accent-border-animated"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '2px',
                    padding: '1px',
                  }}
                />
              )}
              <div style={{
                background: 'var(--c-base)',
                border: plan.popular ? 'none' : '1px solid var(--c-border)',
                padding: '2.5rem 2rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                position: 'relative',
                zIndex: 1,
              }}>
                {plan.popular && (
                  <span className="text-eyebrow" style={{ fontSize: '0.6rem' }}>Most Popular</span>
                )}
                <div>
                  <h3 style={{ color: 'var(--c-text)', fontSize: '1rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                    {plan.name}
                  </h3>
                  <p className="text-body" style={{ fontSize: '0.8rem' }}>{plan.desc}</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                  <PriceDisplay value={plan.price} />
                  <span className="text-label" style={{ fontSize: '0.65rem' }}>/mo</span>
                </div>

                <div style={{ flex: 1 }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      padding: '0.5rem 0',
                      borderBottom: '1px solid var(--c-border)',
                      fontSize: '0.82rem',
                      color: 'var(--c-muted)',
                      fontWeight: 300,
                    }}>
                      <span style={{ color: 'var(--c-accent)', flexShrink: 0 }}>✓</span>
                      {f}
                    </div>
                  ))}
                </div>

                <motion.a
                  href="#contact"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '0.75rem',
                    border: `1px solid ${plan.popular ? 'var(--c-accent)' : 'var(--c-border)'}`,
                    background: plan.popular ? 'var(--c-accent)' : 'transparent',
                    color: plan.popular ? '#0A0A0B' : 'var(--c-text)',
                    textDecoration: 'none',
                    fontSize: '0.72rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: plan.popular ? 600 : 400,
                    transition: 'all 0.3s ease',
                  }}
                  whileHover={{
                    background: plan.popular ? '#b8946a' : 'var(--c-accent)',
                    color: '#0A0A0B',
                    borderColor: 'var(--c-accent)',
                  }}
                >
                  {plan.cta}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
