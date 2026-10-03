import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'

type BootScreenProps = {
  onDone: () => void
}

export function BootScreen({ onDone }: BootScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const started = performance.now()
    let frame = 0

    const tick = (now: number) => {
      const elapsed = now - started
      const next = Math.min(100, Math.round((elapsed / 1700) * 100))
      setProgress(next)
      if (next < 100) {
        frame = requestAnimationFrame(tick)
      } else {
        window.setTimeout(onDone, 280)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [onDone])

  return (
    <motion.div
      className="boot"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(12px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="boot-panel">
        <p className="boot-kicker">Boot sequence / 0xA7</p>
        <h1 className="boot-title">
          {site.name}
          <br />
          {site.studio}
        </h1>
        <div className="boot-bar">
          <motion.div className="boot-bar-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="boot-row">
          <span className="mono">Compiling world</span>
          <span className="mono">{String(progress).padStart(3, '0')}%</span>
        </div>
      </div>
    </motion.div>
  )
}
