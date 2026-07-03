import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer, viewportOnce } from '../lib/animations'
import anime from '../lib/anime'

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
      href: 'https://calendly.com/fuseonestudios',
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
      cta: 'Start with Pro',
      href: 'https://calendly.com/fuseonestudios',
    },
    {
      name: 'Enterprise',
      price: null,
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
      href: 'https://calendly.com/fuseonestudios',
    },
  ],
  yearly: [
    {
      name: 'Starter', price: 96, desc: 'For solo founders and small teams exploring automation.',
      features: ['3 workflow automations', '2 AI integrations', 'Email + Slack support', '1 revision cycle', 'Monthly check-in call'],
      popular: false, cta: 'Get Started', href: 'https://calendly.com/fuseonestudios',
    },
    {
      name: 'Pro', price: 280, desc: 'For scaling teams that need serious automation infrastructure.',
      features: ['Unlimited automations', '5 AI integrations', 'Dedicated Slack channel', 'Weekly strategy calls', 'Priority builds', 'Custom SaaS features'],
      popular: true, cta: 'Start with Pro', href: 'https://calendly.com/fuseonestudios',
    },
    {
      name: 'Enterprise', price: null, desc: 'Full-scale AI transformation for established organizations.',
      features: ['Everything in Pro', 'Dedicated engineer', 'Custom AI model fine-tuning', 'SLA guarantees', 'Quarterly executive reviews', 'Whitelabel options'],
      popular: false, cta: 'Book a Call', href: 'https://calendly.com/fuseonestudios',
    },
  ],
}

function PriceDisplay({ value }) {
  const ref = useRef(null)
  const prevRef = useRef(value)
  useEffect(() => {
    if (prevRef.current !== value && ref.current) {
      anime({ targets: ref.current, opacity: [0, 1], translateY: [8, 0], duration: 350, easing: 'easeOutExpo' })
    }
    prevRef.current = value
  }, [value])

  if (value === null) {
    return (
      <span ref={ref} style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
        fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.03em',
      }}>
        Custom
      </span>
    )
  }
  return (
    <span ref={ref} style={{
      fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)',
      fontWeight: 800, color: 'var(--c-text)', letterSpacing: '-0.04em',
    }}>
      ${value}
    </span>
  )
}

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')
  const currentPlans = plans[billing]

  return (
    <section id="pricing" className="section-pad" style={{ background: 'var(--c-surface)', borderTop: '1px solid var(--c-border)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            className="text-eyebrow" style={{ display: 'block', marginBottom: '0.75rem' }}
          >
            Transparent Pricing
          </motion.span>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700, color: 'var(--c-text)', letterSpacing: '-0.025em', lineHeight: 1.1,
              marginBottom: '0.75rem',
            }}
          >
            Invest in <em style={{ color: 'var(--c-accent)', fontStyle: 'italic' }}>outcomes</em>
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
            style={{ fontSize: '0.95rem', color: 'var(--c-muted)', maxWidth: '400px', margin: '0 auto' }}
          >
            No hidden fees. Cancel anytime. Start seeing results in 2 weeks.
          </motion.p>
        </div>

        {/* Billing toggle */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '3.5rem' }}
        >
          <div style={{
            display: 'inline-flex', background: '#fff',
            border: '1px solid rgba(109,40,217,0.15)',
            borderRadius: '100px', padding: '4px', gap: '2px',
            boxShadow: '0 2px 12px rgba(109,40,217,0.08)',
          }}>
            {['monthly', 'yearly'].map((b) => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                style={{
                  padding: '0.5rem 1.4rem', borderRadius: '100px',
                  border: 'none', cursor: 'pointer',
                  background: billing === b ? 'linear-gradient(135deg, #6D28D9, #7C3AFF)' : 'transparent',
                  color: billing === b ? '#fff' : 'var(--c-muted)',
                  fontSize: '0.8rem', letterSpacing: '0.06em',
                  textTransform: 'capitalize', fontWeight: 600,
                  transition: 'all 0.3s ease',
                  display: 'flex', alignItems: 'center', gap: '0.5rem',
                }}
              >
                {b}
                {b === 'yearly' && (
                  <span style={{
                    fontSize: '0.6rem', fontWeight: 700,
                    background: billing === 'yearly' ? 'rgba(255,255,255,0.2)' : 'rgba(109,40,217,0.1)',
                    color: billing === 'yearly' ? '#fff' : 'var(--c-accent)',
                    padding: '0.1rem 0.4rem', borderRadius: '100px',
                  }}>
                    −20%
                  </span>
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden" whileInView="visible" viewport={viewportOnce}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', alignItems: 'start' }}
        >
          {currentPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              whileHover={{ y: plan.popular ? 0 : -6 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                background: plan.popular ? 'linear-gradient(160deg, #6D28D9 0%, #4C1D95 100%)' : '#fff',
                border: plan.popular ? 'none' : '1px solid rgba(109,40,217,0.1)',
                borderRadius: '24px',
                padding: '2.25rem 2rem',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                boxShadow: plan.popular
                  ? '0 24px 60px rgba(109,40,217,0.45), 0 4px 16px rgba(0,0,0,0.1)'
                  : '0 4px 24px rgba(109,40,217,0.06)',
                transform: plan.popular ? 'scale(1.04)' : 'scale(1)',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(135deg, #A78BFA, #7C3AFF)',
                  color: '#fff', fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  padding: '0.3rem 1rem', borderRadius: '100px',
                  boxShadow: '0 4px 12px rgba(109,40,217,0.4)',
                  whiteSpace: 'nowrap',
                }}>
                  ✦ Most Popular
                </div>
              )}

              {/* Plan name + desc */}
              <div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.1rem',
                  fontWeight: 700, letterSpacing: '-0.02em',
                  color: plan.popular ? 'rgba(255,255,255,0.9)' : 'var(--c-text)',
                  marginBottom: '0.4rem',
                }}>
                  {plan.name}
                </h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.6, color: plan.popular ? 'rgba(255,255,255,0.55)' : 'var(--c-muted)' }}>
                  {plan.desc}
                </p>
              </div>

              {/* Price */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.3rem' }}>
                <span style={{ fontSize: '1rem', fontWeight: 500, color: plan.popular ? 'rgba(255,255,255,0.6)' : 'var(--c-muted)', alignSelf: 'flex-start', marginTop: '0.4rem' }}>$</span>
                <span style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)',
                  fontWeight: 800, letterSpacing: '-0.04em',
                  color: plan.popular ? '#fff' : 'var(--c-text)',
                }}>
                  {plan.price === null ? 'Custom' : plan.price}
                </span>
                {plan.price !== null && (
                  <span style={{ fontSize: '0.8rem', color: plan.popular ? 'rgba(255,255,255,0.5)' : 'var(--c-muted)', fontWeight: 500 }}>/mo</span>
                )}
              </div>

              {/* Features */}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <span style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      background: plan.popular ? 'rgba(255,255,255,0.15)' : 'rgba(109,40,217,0.1)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.6rem', color: plan.popular ? '#fff' : 'var(--c-accent)',
                      fontWeight: 700, marginTop: '1px',
                    }}>✓</span>
                    <span style={{ fontSize: '0.83rem', color: plan.popular ? 'rgba(255,255,255,0.75)' : 'var(--c-text-2)', lineHeight: 1.5, fontWeight: 400 }}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href={plan.href}
                target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'block', textAlign: 'center',
                  padding: '0.85rem',
                  borderRadius: '12px',
                  background: plan.popular ? 'rgba(255,255,255,0.15)' : 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
                  border: plan.popular ? '1px solid rgba(255,255,255,0.2)' : 'none',
                  color: '#fff',
                  textDecoration: 'none', fontSize: '0.875rem',
                  fontWeight: 600, letterSpacing: '-0.01em',
                  boxShadow: plan.popular ? 'none' : '0 4px 16px rgba(109,40,217,0.3)',
                  backdropFilter: plan.popular ? 'blur(8px)' : 'none',
                }}
              >
                {plan.cta} →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '2.5rem', fontSize: '0.8rem', color: 'var(--c-muted)' }}
        >
          All plans include a 14-day free trial. No credit card required.
          Questions? <a href="mailto:info@fuseone.studio" style={{ color: 'var(--c-accent)', textDecoration: 'none' }}>Email us →</a>
        </motion.p>
      </div>
    </section>
  )
}
