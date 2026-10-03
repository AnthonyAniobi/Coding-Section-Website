import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { projects } from '../data/projects'
import { site } from '../data/site'
import { Marquee } from '../components/Marquee'
import { Particles } from '../components/Particles'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SplitText } from '../components/SplitText'
import { Magnetic } from '../components/Magnetic'

export function Home() {
  const featured = projects[0]
  const selected = projects.slice(1, 4)
  const { scrollY } = useScroll()
  const imageY = useTransform(scrollY, [0, 600], [0, 140])
  const imageScale = useTransform(scrollY, [0, 600], [1, 1.12])
  const [hud, setHud] = useState({ x: '000', y: '000' })

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      setHud({
        x: String(Math.round((event.clientX / window.innerWidth) * 999)).padStart(3, '0'),
        y: String(Math.round((event.clientY / window.innerHeight) * 999)).padStart(3, '0'),
      })
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <div className="page">
      <section className="hero">
        <div className="hero-media">
          <motion.img src="/images/hero.jpg" alt="" style={{ y: imageY, scale: imageScale }} />
        </div>
        <Particles />
        <div className="hero-hud">
          <p className="mono">
            SEC / {hud.x}.{hud.y}
          </p>
          <p className="mono">{site.location}</p>
        </div>
        <div className="hero-content">
          <div className="hero-kicker">
            <p className="mono">Game developer</p>
            <p className="mono">codinsection.com</p>
          </div>
          <h1 className="hero-title">
            <SplitText text={site.name} by="chars" />
          </h1>
          <div className="hero-sub">
            <p className="hero-role">{site.tagline} Built for every device, and the play between them.</p>
            <div className="scroll-hint">
              <b />
              <span className="mono">Scroll to deploy</span>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={site.tools} />

      <section className="section">
        <div className="section-head">
          <Reveal>
            <p className="mono">01 / Featured world</p>
            <h2 className="section-title">Currently in the fire</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Magnetic>
              <Link className="btn" to="/work">
                All work →
              </Link>
            </Magnetic>
          </Reveal>
        </div>
        <div className="featured">
          <Reveal className="featured-visual frame">
            <Link to={`/work/${featured.slug}`}>
              <img src={featured.cover} alt={featured.title} />
            </Link>
          </Reveal>
          <Reveal delay={0.12} className="featured-copy">
            <p className="mono">
              {featured.year} / {featured.engine}
            </p>
            <h3>{featured.title}</h3>
            <p>{featured.excerpt}</p>
            <Magnetic>
              <Link className="btn btn-ember" to={`/work/${featured.slug}`} style={{ marginTop: '1.4rem' }}>
                Enter the foundry
              </Link>
            </Magnetic>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-head">
          <Reveal>
            <p className="mono">02 / Selected work</p>
            <h2 className="section-title">Other worlds</h2>
          </Reveal>
        </div>
        <div className="home-grid">
          {selected.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>

      <Reveal>
        <div className="cta-band">
          <div>
            <p className="mono">03 / Next mission</p>
            <h2>Let’s build a world that stays in the body.</h2>
          </div>
          <Magnetic>
            <Link className="btn btn-ember" to="/contact">
              Start a signal
            </Link>
          </Magnetic>
        </div>
      </Reveal>
    </div>
  )
}
