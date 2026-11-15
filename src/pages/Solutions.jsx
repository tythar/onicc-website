import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Radio,
  Sun,
  Shield,
  Cpu,
  Globe,
  Layers,
  CheckCircle2,
  ArrowRight,
  Activity
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { solutionsData } from '../data/solutionsData'

export default function Solutions() {
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all')

  const categoryIcons = {
    'networking-telecom': Radio,
    'solar-energy': Sun,
    'security-surveillance': Shield,
    'software-digital': Cpu,
    'cloud-hosting': Globe,
    'ict-labs': Layers
  }

  const filteredSolutions = activeCategoryFilter === 'all'
    ? solutionsData
    : solutionsData.filter((item) => item.id === activeCategoryFilter)

  return (
    <div className="solutions-page">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ENGINEERING SOLUTIONS"
        title="Comprehensive infrastructure & technology services designed for"
        highlightText="operational permanence."
        description="Explore ONICC's six specialized engineering practices spanning telecommunications, optical fiber cabling, smart solar power, AI surveillance, software platforms, and educational ICT laboratories."
        breadcrumbs={[{ label: 'Solutions' }]}
        badge="Enterprise & Institutional Grade"
      />

      {/* 2. Interactive Category Filter Bar */}
      <section className="solutions-filter-bar">
        <div className="container filter-bar-inner">
          <span className="filter-label">Jump to Practice:</span>
          <div className="filter-pills-wrap">
            <button
              className={`filter-pill ${activeCategoryFilter === 'all' ? 'is-active' : ''}`}
              onClick={() => setActiveCategoryFilter('all')}
            >
              All 6 Solutions
            </button>
            {solutionsData.map((sol) => (
              <button
                key={sol.id}
                className={`filter-pill ${activeCategoryFilter === sol.id ? 'is-active' : ''}`}
                onClick={() => setActiveCategoryFilter(sol.id)}
              >
                {sol.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Deep-Dive Solution Modules */}
      <section className="section-padding solutions-detail-section">
        <div className="container">
          <div className="solutions-detailed-stack">
            {filteredSolutions.map((sol, index) => {
              const SolIcon = categoryIcons[sol.id] || Radio
              const isEven = index % 2 === 1

              return (
                <article
                  key={sol.id}
                  id={sol.id}
                  className={`solution-detail-card ${isEven ? 'layout-reversed' : ''}`}
                >
                  {/* Visual Column */}
                  <div className="solution-media-col">
                    <div className="solution-image-container">
                      <img
                        src={sol.image}
                        alt={sol.title}
                        className="solution-featured-image"
                        loading="lazy"
                      />
                      <div className="solution-badge-overlay">
                        <SolIcon size={18} className="badge-icon" />
                        <span>{sol.badge}</span>
                      </div>
                      <span className="solution-large-number">{sol.number}</span>
                    </div>

                    {/* Technical Highlights Box */}
                    <div className="solution-highlights-box">
                      <h4>
                        <Activity size={16} />
                        Engineering Specifications & Standards
                      </h4>
                      <ul>
                        {sol.technicalHighlights?.map((th, thIdx) => (
                          <li key={thIdx}>
                            <CheckCircle2 size={14} className="th-check" />
                            <span>{th}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="solution-content-col">
                    <span className="solution-pill-tag">
                      PRACTICE {sol.number} / 06
                    </span>
                    <h2 className="solution-title">{sol.title}</h2>
                    <p className="solution-tagline">{sol.tagline}</p>
                    <p className="solution-summary-text">{sol.summary}</p>

                    <h3 className="capabilities-header">Scope of Technical Deliverables:</h3>
                    <div className="capabilities-list">
                      {sol.capabilities.map((cap, capIdx) => (
                        <div key={capIdx} className="capability-item">
                          <div className="capability-item-header">
                            <span className="cap-check-dot"></span>
                            <strong>{cap.name}</strong>
                          </div>
                          <p className="cap-item-details">{cap.details}</p>
                        </div>
                      ))}
                    </div>

                    <div className="solution-actions-row">
                      <Link
                        to={`/contact?service=${encodeURIComponent(sol.title)}`}
                        className="btn btn-brand-red"
                      >
                        Request Scoping for {sol.title.split(' ')[0]}
                        <ArrowRight size={16} />
                      </Link>
                      <a href="#how-we-work" className="btn btn-outline-navy">
                        Delivery Process
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Methodology & Service Level Commitment */}
      <section id="how-we-work" className="section-padding bg-light-alt solutions-sla-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              SLA & MAINTENANCE GUARANTEE
            </span>
            <h2 className="section-title">Long-term reliability beyond initial handover.</h2>
            <p className="section-subtitle">
              Every ONICC solution is supported by comprehensive preventive maintenance and rapid incident response.
            </p>
          </div>

          <div className="sla-grid">
            <div className="sla-card">
              <span className="sla-metric">24/7</span>
              <h3>Emergency Incident Escalation</h3>
              <p>Critical network and power system outages receive priority dispatch from our Kampala engineering depot.</p>
            </div>
            <div className="sla-card">
              <span className="sla-metric">Quarterly</span>
              <h3>Preventative Health Audits</h3>
              <p>Regular thermographic panel checks, OTDR link recalibrations, and battery cycle health assessments.</p>
            </div>
            <div className="sla-card">
              <span className="sla-metric">100%</span>
              <h3>Transparent As-Built Documentation</h3>
              <p>Complete single-line diagrams, fiber routing schematics, and labeling indices provided upon project commissioning.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Bottom Consultation Banner */}
      <section className="section-cta-banner">
        <div className="container cta-banner-card">
          <div className="cta-card-content">
            <span className="cta-card-eyebrow">CUSTOM ENGINEERING SCOPE</span>
            <h2 className="cta-card-title">Have a specific technical requirement or bill of quantities?</h2>
            <p className="cta-card-desc">
              Send us your architectural drawings, tender specifications, or facility scope.
              Our engineers in Bukoto will produce a transparent feasibility analysis.
            </p>
          </div>
          <div className="cta-card-buttons">
            <Link to="/contact" className="btn btn-brand-red btn-lg">
              Submit Requirements
              <ArrowRight size={17} />
            </Link>
            <Link to="/projects" className="btn btn-outline-white btn-lg">
              View Portfolio Blueprints
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
