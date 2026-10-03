import { Link } from 'react-router-dom'
import { Magnetic } from '../components/Magnetic'

export function NotFound() {
  return (
    <div className="page">
      <div className="not-found">
        <p className="mono">Error / Missing sector</p>
        <h1>404</h1>
        <p style={{ color: 'var(--muted)', margin: '1rem 0 2rem' }}>This world was never compiled.</p>
        <Magnetic>
          <Link className="btn" to="/">
            Return home
          </Link>
        </Magnetic>
      </div>
    </div>
  )
}
