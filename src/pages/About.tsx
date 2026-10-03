import { motion } from 'framer-motion'
import { site } from '../data/site'
import { Reveal } from '../components/Reveal'
import { SplitText } from '../components/SplitText'

export function About() {
  return (
    <div className="page">
      <section className="section">
        <Reveal>
          <p className="mono">Profile / {site.name}</p>
          <h1 className="section-title" style={{ marginTop: '0.8rem' }}>
            <SplitText text="I design games that behave like places." />
          </h1>
        </Reveal>
        <div className="about-grid" style={{ marginTop: '3.5rem' }}>
          <Reveal>
            <div className="portrait frame">
              <img src="/images/portrait.jpg" alt={`${site.name}, game designer`} />
            </div>
            <img
              src="/images/setup.jpg"
              alt="A night studio with game engine viewports"
              style={{ marginTop: '1rem', borderRadius: 8, aspectRatio: '16 / 10', objectFit: 'cover' }}
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="prose">
                {site.name} is a game designer and systems programmer who treats feel as architecture.
                Before a set piece, there is a loop. Before a cutscene, there is a rule the player can
                break in an interesting way. The work lives between Unreal, Unity, and Godot — wherever
                the prototype wants to breathe first.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="prose" style={{ marginTop: '1.2rem' }}>
                Sample copy for now: swap this with your real story, credits, and the studios you have
                shipped with. The images and worlds on this site are placeholders meant to show motion,
                pacing, and tone.
              </p>
            </Reveal>
            <div className="skills">
              {site.skills.map((skill, index) => (
                <Reveal key={skill.name} delay={index * 0.05}>
                  <div className="skill-row">
                    <span>{skill.name}</span>
                    <span className="mono">{skill.level}</span>
                    <div className="skill-bar">
                      <motion.span
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: skill.level / 100 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="mono">Timeline</p>
          <h2 className="section-title" style={{ marginTop: '0.6rem' }}>
            How the work happened
          </h2>
        </Reveal>
        <div className="timeline">
          {site.timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.06}>
              <div className="timeline-item">
                <p className="mono">{item.year}</p>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>{item.title}</h3>
                  <p style={{ color: 'var(--muted)', marginTop: 6 }}>{item.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <p className="mono">Toolkit</p>
          <div className="tools-cloud">
            {site.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </Reveal>
      </section>
    </div>
  )
}
