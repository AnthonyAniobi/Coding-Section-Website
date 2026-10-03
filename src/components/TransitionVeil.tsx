import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function labelFor(path: string) {
  if (path === '/') return 'Home'
  if (path.startsWith('/work/')) return 'Project'
  if (path === '/work') return 'Archive'
  if (path === '/about') return 'Profile'
  if (path === '/contact') return 'Signal'
  return 'Sector'
}

type TransitionVeilProps = {
  phase: 'idle' | 'cover' | 'uncover'
  onCovered: () => void
  onDone: () => void
}

export function TransitionVeil({ phase, onCovered, onDone }: TransitionVeilProps) {
  const location = useLocation()
  const [label, setLabel] = useState(labelFor(location.pathname))

  useEffect(() => {
    if (phase === 'cover') {
      setLabel(labelFor(location.pathname))
    }
  }, [location.pathname, phase])

  return (
    <AnimatePresence>
      {phase !== 'idle' ? (
        <motion.div
          className="veil"
          initial={{ y: '100%' }}
          animate={{ y: phase === 'cover' ? '0%' : '-100%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
          onAnimationComplete={() => {
            if (phase === 'cover') onCovered()
            if (phase === 'uncover') onDone()
          }}
        >
          <div className="veil-inner">
            <p className="veil-label">Loading sector</p>
            <p className="veil-title">{label}</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
