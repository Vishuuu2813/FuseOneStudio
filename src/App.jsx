import { lazy, Suspense, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLenis } from './hooks/useLenis'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

// Pages
const HomePage    = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const WorkPage    = lazy(() => import('./pages/WorkPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const TeamPage    = lazy(() => import('./pages/TeamPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const CollabPage  = lazy(() => import('./pages/CollabPage'))
const NotFound    = lazy(() => import('./pages/NotFound'))

function SectionLoader() {
  return (
    <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{
        width: '1px', height: '60px',
        background: 'linear-gradient(to bottom, var(--c-accent), transparent)',
        opacity: 0.5,
        animation: 'none',
      }} />
    </div>
  )
}

function AppInner() {
  const location = useLocation()
  useLenis()

  return (
    <>
      <ScrollToTop />
      <Cursor />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Suspense fallback={<SectionLoader />}>
            <Routes location={location} key={location.pathname}>
              <Route path="/"          element={<HomePage />} />
              <Route path="/services"  element={<ServicesPage />} />
              <Route path="/work"      element={<WorkPage />} />
              <Route path="/pricing"   element={<PricingPage />} />
              <Route path="/team"      element={<TeamPage />} />
              <Route path="/contact"   element={<ContactPage />} />
              <Route path="/collab"    element={<CollabPage />} />
              <Route path="*"          element={<NotFound />} />
            </Routes>
          </Suspense>
        </AnimatePresence>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  )
}

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false)

  return (
    <BrowserRouter>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      {preloaderDone && <AppInner />}
    </BrowserRouter>
  )
}
