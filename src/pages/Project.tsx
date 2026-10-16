import { Link, Navigate, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { getAdjacentProjects, getProject } from '../data/projects'
import { Reveal } from '../components/Reveal'
import { Magnetic } from '../components/Magnetic'

export function Project() {
  const { slug } = useParams()
  const project = slug ? getProject(slug) : undefined

  if (!project) return <Navigate to="/work" replace />

  const { prev, next } = getAdjacentProjects(project.slug)

  return (
    <div className="page" style={{ paddingTop: 0 }}>
      <section className="project-hero">
        <motion.img
          src={project.cover}
          alt={project.title}
          initial={{ scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="project-hero-copy">
          <p className="mono">
            {project.year} / {project.genre}
          </p>
          <h1>{project.title}</h1>
        </div>
      </section>

      <div className="stat-row">
        {[
          { label: 'Role', value: project.role },
          { label: 'Engine', value: project.engine },
          ...project.credits,
        ].map((item) => (
          <div key={item.label}>
            <p className="mono">{item.label}</p>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>

      <section className="section">
        <Reveal>
          <p className="mono">Brief</p>
          <p className="prose" style={{ marginTop: '1.2rem' }}>
            {project.description}
          </p>
          {project.links?.length ? (
            <div className="store-links">
              {project.links.map((link) => (
                <a key={link.href} className="btn btn-ember" href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
        </Reveal>
        <div className={`gallery gallery-${project.orientation}`} style={{ marginTop: '3rem' }}>
          {project.video ? (
            <Reveal className={project.orientation === 'landscape' ? 'gallery-span' : undefined}>
              <video
                className="gallery-video"
                controls
                playsInline
                preload="metadata"
                poster={project.cover}
                aria-label={`${project.title} gameplay`}
              >
                <source src={project.video} type="video/mp4" />
              </video>
            </Reveal>
          ) : null}
          {project.images.map((src, index) => (
            <Reveal key={src} delay={index * 0.08}>
              <img src={src} alt={`${project.title} still ${index + 1}`} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="adjacent">
          {prev ? (
            <Magnetic strength={0.08}>
              <Link to={`/work/${prev.slug}`}>
                <p className="mono">Previous</p>
                <h3>{prev.title}</h3>
              </Link>
            </Magnetic>
          ) : null}
          {next ? (
            <Magnetic strength={0.08}>
              <Link to={`/work/${next.slug}`}>
                <p className="mono">Next</p>
                <h3>{next.title}</h3>
              </Link>
            </Magnetic>
          ) : null}
        </div>
      </section>
    </div>
  )
}
