import { Link } from 'react-router-dom'
import { ChevronRight, MapPin } from 'lucide-react'

export default function PageHero({
  eyebrow = 'ONICC ENGINEERING',
  title,
  highlightText = '',
  description,
  breadcrumbs = [],
  badge = 'Uganda & East Africa Infrastructure'
}) {
  return (
    <section className="page-hero">
      <div className="page-hero-grid-pattern" aria-hidden="true" />
      <div className="page-hero-glow glow--turquoise" aria-hidden="true" />
      <div className="page-hero-glow glow--red" aria-hidden="true" />

      <div className="container page-hero-container">
        {/* Breadcrumbs */}
        <nav className="hero-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="breadcrumb-home">Home</Link>
          {breadcrumbs.map((crumb, idx) => (
            <span key={idx} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
              <ChevronRight size={13} className="breadcrumb-separator" />
              {crumb.path ? (
                <Link to={crumb.path} className="breadcrumb-link">{crumb.label}</Link>
              ) : (
                <span className="breadcrumb-current">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>

        {/* Hero Eyebrow & Badges */}
        <div className="page-hero-badge-row">
          <span className="hero-eyebrow-pill">
            <span className="pill-dot"></span>
            {eyebrow}
          </span>
          {badge && (
            <span className="hero-location-badge">
              <MapPin size={12} />
              {badge}
            </span>
          )}
        </div>

        {/* Headline */}
        <h1 className="page-hero-title">
          {title}{' '}
          {highlightText && (
            <span className="text-highlight-gradient">{highlightText}</span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="page-hero-description">{description}</p>
        )}
      </div>
    </section>
  )
}
