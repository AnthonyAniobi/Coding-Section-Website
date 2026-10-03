import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <p className="mono">
        © {new Date().getFullYear()} {site.name} {site.studio}
      </p>
      <p className="mono">{site.location}</p>
      <a className="mono" href={`mailto:${site.email}`}>
        {site.email}
      </a>
    </footer>
  )
}
