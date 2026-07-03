import { lazy, Suspense, useState } from 'react'
import { useLenis } from './hooks/useLenis'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// Lazy-load below-the-fold sections
const LogoStrip = lazy(() => import('./components/LogoStrip'))
const Process = lazy(() => import('./components/Process'))
const Projects = lazy(() => import('./components/Projects'))
const Services = lazy(() => import('./components/Services'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Comparison = lazy(() => import('./components/Comparison'))
const Pricing = lazy(() => import('./components/Pricing'))
const FounderQuote = lazy(() => import('./components/FounderQuote'))
const FinalCTA = lazy(() => import('./components/FinalCTA'))
const Footer = lazy(() => import('./components/Footer'))

function SectionLoader() {
  return (
    <div style={{
      height: '200px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: '2px',
        height: '40px',
        background: 'linear-gradient(to bottom, var(--c-gold), transparent)',
        animation: 'pulse 1.5s ease-in-out infinite',
      }} />
    </div>
  )
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)
  useLenis()

  return (
    <>
      <Cursor />
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {preloaderDone && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Suspense fallback={<SectionLoader />}>
              <LogoStrip />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Process />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Services />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Testimonials />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Comparison />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Pricing />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <FounderQuote />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <FinalCTA />
            </Suspense>
            <Suspense fallback={<SectionLoader />}>
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </>
  )
}
