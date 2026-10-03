import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'

type ProjectCardProps = {
  project: Project
  index?: number
  wide?: boolean
}

export function ProjectCard({ project, index = 0, wide = false }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/work/${project.slug}`} className={`project-card${wide ? ' is-wide' : ''}`}>
        <div className="project-card-media frame">
          <img src={project.cover} alt={project.title} />
          <div className="project-card-shine" />
        </div>
        <div className="project-card-meta">
          <div>
            <p className="mono">
              {project.year} / {project.tag}
            </p>
            <h3>{project.title}</h3>
          </div>
          <p className="mono">{project.engine}</p>
        </div>
      </Link>
    </motion.div>
  )
}
