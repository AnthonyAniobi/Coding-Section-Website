import { useCallback, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { BootScreen } from './components/BootScreen'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Grain } from './components/Grain'
import { Nav } from './components/Nav'
import { TransitionVeil } from './components/TransitionVeil'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Project } from './pages/Project'
import { Work } from './pages/Work'

function RouterFrame() {
  const location = useLocation()
  const [rendered, setRendered] = useState(location)
  const [phase, setPhase] = useState<'idle' | 'cover' | 'uncover'>('idle')
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduced(media.matches)
    sync()
    media.addEventListener('change', sync)
    return () => media.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (location.pathname === rendered.pathname) return
    if (reduced) {
      setRendered(location)
      window.scrollTo(0, 0)
      return
    }
    setPhase('cover')
  }, [location, reduced, rendered.pathname])

  return (
    <>
      <main className="app-main">
        <Routes location={rendered}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<Project />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <TransitionVeil
        phase={phase}
        onCovered={() => {
          setRendered(location)
          window.scrollTo(0, 0)
          setPhase('uncover')
        }}
        onDone={() => setPhase('idle')}
      />
    </>
  )
}

export default function App() {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('atelier-booted') === '1')

  const finishBoot = useCallback(() => {
    sessionStorage.setItem('atelier-booted', '1')
    setBooted(true)
  }, [])

  return (
    <>
      <Grain />
      <Cursor />
      <AnimatePresence>{booted ? null : <BootScreen onDone={finishBoot} />}</AnimatePresence>
      <BrowserRouter>
        <Nav />
        <RouterFrame />
        <Footer />
      </BrowserRouter>
    </>
  )
}
