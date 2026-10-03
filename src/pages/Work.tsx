import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, type ProjectTag } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { Reveal } from '../components/Reveal'
import { SplitText } from '../components/SplitText'

const filters: Array<'All' | ProjectTag> = ['All', 'Systems', 'Narrative', 'Arcade']

export function Work() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')
  const visible = useMemo(
    () => (filter === 'All' ? projects : projects.filter((project) => project.tag === filter)),
    [filter],
  )

  return (
    <div className="page">
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <Reveal>
          <p className="mono">Archive / {String(projects.length).padStart(2, '0')} worlds</p>
          <h1 className="section-title" style={{ marginTop: '0.8rem' }}>
            <SplitText text="Selected work" />
          </h1>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="filters" style={{ marginTop: '2rem' }}>
            {filters.map((item) => (
              <button
                key={item}
                className={`filter-btn${filter === item ? ' is-active' : ''}`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </Reveal>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <motion.div className="work-grid" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  )
}
