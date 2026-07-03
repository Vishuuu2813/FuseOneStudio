import { Suspense, lazy } from 'react'
import PageWrapper from '../components/PageWrapper'
import Hero from '../components/Hero'

const LogoStrip   = lazy(() => import('../components/LogoStrip'))
const Process     = lazy(() => import('../components/Process'))
const Projects    = lazy(() => import('../components/Projects'))
const Services    = lazy(() => import('../components/Services'))
const Team        = lazy(() => import('../components/Team'))
const Testimonials= lazy(() => import('../components/Testimonials'))
const Comparison  = lazy(() => import('../components/Comparison'))
const Pricing     = lazy(() => import('../components/Pricing'))
const FinalCTA    = lazy(() => import('../components/FinalCTA'))

const Loader = () => (
  <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
    <div style={{ width: 1, height: 36, background: 'linear-gradient(to bottom, var(--c-accent), transparent)' }} />
  </div>
)

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <Suspense fallback={<Loader />}><LogoStrip /></Suspense>
      <Suspense fallback={<Loader />}><Process /></Suspense>
      <Suspense fallback={<Loader />}><Projects /></Suspense>
      <Suspense fallback={<Loader />}><Services /></Suspense>
      <Suspense fallback={<Loader />}><Team /></Suspense>
      <Suspense fallback={<Loader />}><Testimonials /></Suspense>
      <Suspense fallback={<Loader />}><Comparison /></Suspense>
      <Suspense fallback={<Loader />}><Pricing /></Suspense>
      <Suspense fallback={<Loader />}><FinalCTA /></Suspense>
    </PageWrapper>
  )
}
