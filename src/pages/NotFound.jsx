import PageWrapper from '../components/PageWrapper'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <PageWrapper>
      <section style={{
        minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        textAlign: 'center', padding: '4rem 1.5rem', background: 'var(--c-base)',
      }}>
        <div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(5rem, 20vw, 10rem)',
              fontWeight: 800, letterSpacing: '-0.05em', lineHeight: 1,
              background: 'linear-gradient(135deg, rgba(109,40,217,0.15), rgba(109,40,217,0.04))',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
            }}
          >
            404
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 700, color: 'var(--c-text)', marginBottom: '0.75rem' }}>
            Page not found
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
            style={{ fontSize: '0.9rem', color: 'var(--c-muted)', marginBottom: '2rem', lineHeight: 1.7 }}>
            The page you're looking for doesn't exist or has been moved.
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Link to="/" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.8rem 1.75rem', borderRadius: '100px',
              background: 'linear-gradient(135deg, #6D28D9, #7C3AFF)',
              color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 600,
              boxShadow: '0 4px 20px rgba(109,40,217,0.3)',
            }}>
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}
