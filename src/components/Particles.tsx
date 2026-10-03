import { useEffect, useRef } from 'react'

type Spark = {
  x: number
  y: number
  vx: number
  vy: number
  life: number
  max: number
  size: number
}

export function Particles() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const sparks: Spark[] = []
    let frame = 0
    let width = 0
    let height = 0

    const resize = () => {
      const parent = canvas.parentElement
      width = parent?.clientWidth ?? window.innerWidth
      height = parent?.clientHeight ?? window.innerHeight
      const dpr = window.devicePixelRatio || 1
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const spawn = () => {
      sparks.push({
        x: Math.random() * width,
        y: height + 10,
        vx: (Math.random() - 0.5) * 0.35,
        vy: -0.35 - Math.random() * 0.9,
        life: 0,
        max: 180 + Math.random() * 160,
        size: 0.6 + Math.random() * 1.6,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      if (sparks.length < 70) spawn()
      for (let i = sparks.length - 1; i >= 0; i -= 1) {
        const spark = sparks[i]
        spark.x += spark.vx
        spark.y += spark.vy
        spark.life += 1
        const alpha = 1 - spark.life / spark.max
        ctx.fillStyle = `rgba(255, 92, 26, ${alpha * 0.7})`
        ctx.beginPath()
        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2)
        ctx.fill()
        if (spark.life >= spark.max) sparks.splice(i, 1)
      }
      frame = requestAnimationFrame(draw)
    }

    resize()
    window.addEventListener('resize', resize)
    frame = requestAnimationFrame(draw)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="hero-particles" aria-hidden="true" />
}
