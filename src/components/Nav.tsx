import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, site } from '../data/site'
import { Magnetic } from './Magnetic'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="nav">
        <Magnetic>
          <Link to="/" className="nav-logo" onClick={() => setOpen(false)}>
            {site.name}
            <small>{site.studio}</small>
          </Link>
        </Magnetic>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <Magnetic key={link.to} strength={0.18}>
              <NavLink
                to={link.to}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            </Magnetic>
          ))}
        </nav>
        <p className="nav-status">
          <i />
          {site.availability}
        </p>
        <button
          className={`nav-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </header>
      <AnimatePresence>
        {open ? (
          <motion.nav
            className="mobile-menu"
            initial={{ y: '-100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            aria-label="Mobile"
          >
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.12 + index * 0.06 }}
              >
                <Link to={link.to} onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </>
  )
}
