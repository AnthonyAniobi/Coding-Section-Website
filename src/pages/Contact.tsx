import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/site'
import { Magnetic } from '../components/Magnetic'
import { Reveal } from '../components/Reveal'
import { SplitText } from '../components/SplitText'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      setError('The form is not configured yet.')
      return
    }

    const formData = new FormData(form)
    const typeField = form.elements.namedItem('type')
    const typeLabel =
      typeField instanceof HTMLSelectElement
        ? (typeField.selectedOptions[0]?.textContent ?? 'Project')
        : 'Project'
    formData.append('access_key', accessKey)
    formData.append('subject', `Portfolio signal — ${typeLabel}`)
    formData.append('from_name', String(formData.get('name') ?? 'Portfolio'))

    setStatus('sending')
    setError('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = (await response.json()) as { success?: boolean; message?: string }
      if (!response.ok || !data.success) {
        setStatus('error')
        setError(data.message || 'The signal did not go through.')
        return
      }
      setStatus('sent')
    } catch {
      setStatus('error')
      setError('The signal did not go through.')
    }
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
            {status === 'sent' ? (
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
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ display: 'none' }}
                />
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
                  <button className="btn btn-ember" type="submit" disabled={status === 'sending'}>
                    {status === 'sending' ? 'Sending the signal' : 'Send the signal'}
                  </button>
                </Magnetic>
                {status === 'error' ? (
                  <p className="form-error" role="alert">
                    {error}
                  </p>
                ) : null}
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </div>
  )
}
