import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import { Magnetic } from '../components/Magnetic'
import { Reveal } from '../components/Reveal'
import { SplitText } from '../components/SplitText'

export function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSent(true)
  }

  return (
    <div className="page">
      <section className="section">
        <div className="contact-wrap">
          <div>
            <Reveal>
              <p className="mono">Signal / Open channel</p>
              <h1 className="contact-title" style={{ marginTop: '0.8rem' }}>
                <SplitText text="Let’s build a world." />
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="prose" style={{ marginTop: '1.6rem' }}>
                Collabs, contract systems work, or a strange little game that does not exist yet.
                This form is a demo — it will not send anywhere until you wire it up.
              </p>
              <p className="mono" style={{ marginTop: '1.4rem' }}>
                {site.email}
              </p>
              <div className="socials">
                {site.socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            {sent ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div>
                  <p className="mono">Transmission received</p>
                  <h3>I’ll find you in the next patch.</h3>
                </div>
              </motion.div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" required placeholder="Your callsign" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@studio.com" />
                </div>
                <div className="field">
                  <label htmlFor="type">Project type</label>
                  <select id="type" name="type" defaultValue="systems">
                    <option value="systems">Gameplay systems</option>
                    <option value="narrative">Narrative world</option>
                    <option value="prototype">Rapid prototype</option>
                    <option value="other">Something weirder</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="What should the player feel?" />
                </div>
                <Magnetic>
                  <button className="btn btn-ember" type="submit">
                    Send the signal
                  </button>
                </Magnetic>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
