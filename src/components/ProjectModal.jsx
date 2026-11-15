import { useEffect } from 'react'
import { X, MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close case study">
          <X size={20} />
        </button>

        <div className="modal-header-image-wrap">
          <img
            src={project.image}
            alt={project.title}
            className="modal-cover-image"
          />
          <div className="modal-header-overlay">
            <span className="modal-category-badge">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            <div className="modal-meta-row">
              <span className="modal-meta-item">
                <MapPin size={14} />
                {project.location}
              </span>
              <span className="modal-meta-item">
                <Calendar size={14} />
                {project.sector} Sector
              </span>
              <span className="modal-meta-pill">Verified Engineering Scope</span>
            </div>
          </div>
        </div>

        <div className="modal-body-content">
          <div className="modal-grid-two-col">
            <div className="modal-col-main">
              <h3 className="modal-section-title">The Engineering Challenge</h3>
              <p className="modal-text">{project.challenge}</p>

              <h3 className="modal-section-title">ONICC Technical Solution</h3>
              <p className="modal-text">{project.solution}</p>

              <h3 className="modal-section-title">Key Infrastructure Deliverables</h3>
              <ul className="modal-deliverables-list">
                {project.deliverables?.map((item, idx) => (
                  <li key={idx} className="deliverable-item">
                    <CheckCircle2 size={16} className="deliverable-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-col-sidebar">
              <div className="sidebar-card">
                <h4>Project Technical Metrics</h4>
                <div className="sidebar-metrics-list">
                  {project.metrics?.map((metric, idx) => (
                    <div key={idx} className="sidebar-metric-row">
                      <span className="metric-figure">{metric.value}</span>
                      <span className="metric-caption">{metric.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-card sidebar-card--cta">
                <h4>Require a Similar Solution?</h4>
                <p>Consult with ONICC engineers for scoping, bill of materials, and deployment timelines.</p>
                <Link to="/contact" className="btn btn-brand-red btn-block" onClick={onClose}>
                  Request Consultation
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
