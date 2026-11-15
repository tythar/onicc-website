import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  MapPin,
  Layers,
  ArrowRight,
  Info
} from 'lucide-react'
import PageHero from '../components/PageHero'
import ProjectModal from '../components/ProjectModal'
import { projectsData as defaultProjects } from '../data/projectsData'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState(null)
  const [projectsList, setProjectsList] = useState(defaultProjects)

  useEffect(() => {
    const saved = localStorage.getItem('onicc_custom_projects')
    if (saved) {
      try {
        setProjectsList(JSON.parse(saved))
      } catch {
        setProjectsList(defaultProjects)
      }
    }
  }, [])

  const categories = [
    { key: 'all', label: 'All Projects' },
    { key: 'telecom', label: 'Telecommunications' },
    { key: 'solar', label: 'Solar & Power' },
    { key: 'security', label: 'Security & Surveillance' },
    { key: 'software', label: 'Software & Digital' },
    { key: 'cloud', label: 'Cloud & Hosting' },
    { key: 'labs', label: 'ICT Laboratories' }
  ]

  const filteredProjects = activeCategory === 'all'
    ? projectsList
    : projectsList.filter((p) => p.categoryKey === activeCategory)

  return (
    <div className="projects-page">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="PROJECT PORTFOLIO"
        title="Demonstrating engineering rigor through technical"
        highlightText="capability blueprints."
        description="Explore our sample project architectures and deployment case studies across Uganda—illustrating optical fiber backhauls, industrial solar microgrids, AI premises surveillance, and turnkey ICT laboratory fit-outs."
        breadcrumbs={[{ label: 'Projects' }]}
        badge="Uganda Infrastructure Scope"
      />

      {/* 2. Transparency Disclaimer Notice */}
      <section className="portfolio-notice-section">
        <div className="container">
          <div className="portfolio-notice-banner">
            <Info size={20} className="notice-icon" />
            <div className="notice-text">
              <strong>Technical Portfolio Notice:</strong>
              <span>
                The case studies presented here are verified engineering blueprints representing ONICC’s
                technical scope, equipment standards, and deployment methodology across Uganda. Specific client-identifying
                data is sanitized in compliance with non-disclosure agreements and institutional confidentiality.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="projects-filter-section">
        <div className="container filter-container">
          <div className="filter-tabs-list" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                className={`category-tab-btn ${activeCategory === cat.key ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects Grid */}
      <section className="section-padding projects-grid-section">
        <div className="container">
          <div className="projects-gallery-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="project-card">
                {/* Image & Badges */}
                <div className="project-card-media">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-cover-image"
                    loading="lazy"
                  />
                  <div className="project-card-badges">
                    <span className="badge-category">{project.category}</span>
                    <span className="badge-sample">{project.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="project-card-content">
                  <div className="project-meta-strip">
                    <span className="meta-location">
                      <MapPin size={13} />
                      {project.location}
                    </span>
                    <span className="meta-sector">{project.sector}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  {/* Metrics Row */}
                  <div className="project-metrics-row">
                    {project.metrics?.slice(0, 3).map((metric, idx) => (
                      <div key={idx} className="project-metric-cell">
                        <strong className="metric-val">{metric.value}</strong>
                        <span className="metric-lbl">{metric.label}</span>
                      </div>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="project-card-actions">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => setSelectedProject(project)}
                    >
                      <span>View Engineering Breakdown</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="no-projects-box">
              <Layers size={36} />
              <h3>No projects in this category currently displayed.</h3>
              <p>Switch categories or contact our team to discuss your project requirements.</p>
              <button
                className="btn btn-outline-navy"
                onClick={() => setActiveCategory('all')}
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Bottom Consultation Banner */}
      <section className="section-cta-banner">
        <div className="container cta-banner-card">
          <div className="cta-card-content">
            <span className="cta-card-eyebrow">SUBMIT YOUR PROJECT SCOPE</span>
            <h2 className="cta-card-title">Have an infrastructure project to deploy in Uganda?</h2>
            <p className="cta-card-desc">
              Whether you require site feasibility studies, dark fiber splicing, commercial solar design,
              or premises surveillance, ONICC delivers with engineering accountability.
            </p>
          </div>
          <div className="cta-card-buttons">
            <Link to="/contact" className="btn btn-brand-red btn-lg">
              Start Project Scoping
              <ArrowRight size={17} />
            </Link>
            <Link to="/solutions" className="btn btn-outline-white btn-lg">
              Explore All Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}
