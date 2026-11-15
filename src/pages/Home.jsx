import { useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import {
  Radio,
  ArrowRight,
  Award,
  CheckCircle2,
  MapPin,
  Layers,
  Wrench,
  PhoneCall
} from 'lucide-react'
import { solutionsData } from '../data/solutionsData'
import { projectsData } from '../data/projectsData'
import InfrastructureDiagram from '../components/InfrastructureDiagram'
import ProjectModal from '../components/ProjectModal'

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null)

  const featuredProjects = projectsData.slice(0, 3)

  return (
    <div className="home-page">
      {/* =========================================================================
          1. HERO SECTION
         ========================================================================= */}
      <section className="hx-hero">
        <div className="container hx-inner">
          <Reveal className="hero-content hx-text">
            <div className="hero-eyebrow-wrap">
              <span className="hero-badge-pill">
                <span className="pulse-indicator"></span>
                <span>ENGINEERING DIGITAL & POWER RESILIENCE</span>
              </span>
              <span className="hero-region-tag">
                <MapPin size={12} />
                Kampala, Uganda
              </span>
            </div>

            <h1 className="hero-title">
              Connecting <span className="highlight-turquoise">Today</span> Powring <span className="highlight-red">Tomorrow.</span>
            </h1>

            <p className="hero-description">
              OHMS Network Infrastructure and Communication Company (ONICC) delivers networking,
              fibre, solar power, surveillance, computer laboratories and digital platforms for
              organisations that need dependable technology.
            </p>

            <div className="hero-cta-group">
              <Link to="/solutions" className="btn btn-brand-red btn-lg">
                Explore Our Solutions
                <ArrowRight size={17} />
              </Link>
              <Link to="/contact" className="btn btn-outline-white btn-lg">
                Start Your Project
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="container hx-strip-outer">
        <Reveal delay={200} className="hx-strip">
          <div>
            <strong>{solutionsData.length}</strong>
            <span>Solution areas</span>
          </div>
          <div>
            <strong>4 phases</strong>
            <span>Survey, design, deploy, support</span>
          </div>
          <div>
            <strong>Turnkey</strong>
            <span>From first visit to handover</span>
          </div>
          <div>
            <strong>Kampala</strong>
            <span>Uganda</span>
          </div>
        </Reveal>
      </div>

      {/* =========================================================================
          2. WHO WE ARE / COMPANY INTRODUCTION
         ========================================================================= */}
      <section className="section-who-we-are section-padding">
        <div className="container who-grid">
          <Reveal direction="left" className="who-copy">
            <div className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              <span>ABOUT ONICC</span>
            </div>
            <h2 className="section-title">
              Built on engineering precision. <br />
              <span className="text-navy">Driven by Africa's digital expansion.</span>
            </h2>
            <p className="lead-text">
              OHMS Network Infrastructure and Communication Company (ONICC) delivers dependable
              technology and communications infrastructure for organisations across Uganda.
            </p>
            <p className="body-text">
              Whether deploying campus-wide single-mode optical fiber rings, installing high-capacity
              hybrid solar microgrids for uninterrupted enterprise computing, securing facility perimeters
              with AI video analytics, or outfitting academic computer laboratories, we treat
              every installation as a mission-critical utility.
            </p>

            <div className="who-key-points">
              <div className="point-item">
                <div className="point-icon"><Layers size={20} /></div>
                <div>
                  <h4>Turnkey Execution</h4>
                  <p>From site survey and CAD network design to physical conduit laying, splicing, and configuration.</p>
                </div>
              </div>
              <div className="point-item">
                <div className="point-icon"><Wrench size={20} /></div>
                <div>
                  <h4>Testing Before Handover</h4>
                  <p>Fibre, power and network checks carried out before a system is handed over to the client.</p>
                </div>
              </div>
            </div>

            <div className="who-actions">
              <Link to="/about" className="btn btn-outline-navy">
                Discover Our Story & Mission
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="right" delay={150} className="who-visual-composite">
            <div className="composite-main-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80"
                alt="ONICC Network Infrastructure Engineer on Site"
                className="composite-main-img"
              />
              <div className="composite-badge-card">
                <span className="card-flag">🇺🇬 Kampala, Uganda</span>
                <strong>Bukoto HQ</strong>
                <p>Opposite Kabira Country Club</p>
              </div>
            </div>
            <div className="composite-stat-pill">
              <Award size={18} />
              <span>Professional Installation & Support</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          3. SOLUTIONS BENTO GRID
         ========================================================================= */}
      <section className="section-solutions section-padding bg-light-alt">
        <div className="container">
          <Reveal className="section-header-centered">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              CORE CAPABILITIES
            </span>
            <h2 className="section-title">Six pillars of enterprise infrastructure.</h2>
            <p className="section-subtitle">
              Engineered for seamless integration, high availability, and long-term return on investment.
            </p>
          </Reveal>

          <div className="solutions-bento-grid">
            {solutionsData.map((sol, i) => (
              <Reveal key={sol.id} delay={(i % 3) * 120}>
              <article className="bento-card">
                <div className="bento-card-media">
                  <img src={sol.image} alt={sol.title} className="bento-image" loading="lazy" />
                  <div className="bento-media-overlay" />
                  <span className="bento-number">{sol.number}</span>
                  <span className="bento-badge">{sol.badge}</span>
                </div>

                <div className="bento-card-content">
                  <h3 className="bento-title">{sol.title}</h3>
                  <p className="bento-tagline">{sol.tagline}</p>
                  <p className="bento-summary">{sol.summary}</p>

                  <ul className="bento-features-list">
                    {sol.capabilities.slice(0, 3).map((cap, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={14} className="feature-check" />
                        <span>{cap.name}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bento-card-footer">
                    <Link to="/solutions" className="bento-link">
                      <span>Explore Technical Specs</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="solutions-footer-cta-wrap">
          <div className="solutions-footer-cta">
            <p>Need a customized multi-disciplinary solution spanning fiber, solar, and CCTV?</p>
            <Link to="/contact" className="btn btn-brand-red">
              Schedule an Infrastructure Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          4. INTERACTIVE INFRASTRUCTURE DIAGRAM
         ========================================================================= */}
      <section className="section-diagram section-padding bg-dark-navy">
        <div className="container">
          <Reveal className="section-header-centered text-white">
            <span className="section-eyebrow-tag eyebrow--turquoise">
              <span className="eyebrow-indicator"></span>
              ENGINEERING VISUALIZATION
            </span>
            <h2 className="section-title text-white">How we architect resilient systems.</h2>
            <p className="section-subtitle text-slate-300">
              Interactive architectural flows illustrating optical data transmission, commercial solar
              failover, and unified premises security governance.
            </p>
          </Reveal>

          <Reveal direction="zoom">
            <InfrastructureDiagram />
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          5. FEATURED PROJECTS SHOWCASE
         ========================================================================= */}
      <section className="section-projects section-padding">
        <div className="container">
          <Reveal className="section-header-between">
            <div>
              <span className="section-eyebrow-tag">
                <span className="eyebrow-indicator"></span>
                SAMPLE PROJECT SCOPES
              </span>
              <h2 className="section-title">Representative engineering scopes.</h2>
              <p className="section-subtitle">
                Sample infrastructure engineering blueprints illustrating our multi-disciplinary scope.
              </p>
            </div>
            <Link to="/projects" className="btn btn-outline-navy">
              View All Sample Projects
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="featured-projects-grid">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 120}>
              <article className="project-preview-card">
                <div className="project-card-image-wrap">
                  <img src={project.image} alt={project.title} className="project-card-img" />
                  <span className="project-category-tag">{project.category}</span>
                  <span className="project-sample-badge">{project.badge}</span>
                </div>

                <div className="project-card-body">
                  <div className="project-location-strip">
                    <MapPin size={13} />
                    <span>{project.location}</span>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-summary">{project.summary}</p>

                  <div className="project-metrics-mini">
                    {project.metrics?.slice(0, 2).map((m, idx) => (
                      <div key={idx} className="metric-mini-item">
                        <strong className="mini-val">{m.value}</strong>
                        <span className="mini-lbl">{m.label}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="btn btn-card-action"
                    onClick={() => setSelectedProject(project)}
                  >
                    <span>View Engineering Details</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. PROJECT DELIVERY LIFECYCLE (HOW WE WORK)
         ========================================================================= */}
      <section className="section-process section-padding bg-light-alt">
        <div className="container">
          <Reveal className="section-header-centered">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              OUR METHODOLOGY
            </span>
            <h2 className="section-title">From physical audit to turnkey handover.</h2>
            <p className="section-subtitle">
              A structured 4-phase delivery lifecycle from site survey through to handover and support.
            </p>
          </Reveal>

          <div className="process-timeline-grid">
            {[
              {
                step: '01',
                title: 'Site Survey & Optical/Power Audit',
                desc: 'Comprehensive on-site physical walk-through: measuring conduit pathways, RF spectrum analysis, power harmonic profiling, and building architectural assessment.'
              },
              {
                step: '02',
                title: 'CAD Engineering & BoQ Sizing',
                desc: 'Production of detailed network topologies, optical link budgets, single-line solar schematics, Bill of Quantities (BoQ), and clear project Gantt milestones.'
              },
              {
                step: '03',
                title: 'Precision Deployment & Splicing',
                desc: 'Professional physical installation following TIA/EIA cabling and electrical safety codes, low-loss core fusion splicing, and clean server rack termination.'
              },
              {
                step: '04',
                title: 'OTDR Validation & Managed SLA',
                desc: 'Bidirectional OTDR trace certification, failover simulation, client staff orientation, and long-term preventative maintenance contracts.'
              }
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 120} className="timeline-card">
                <span className="timeline-step-badge">{item.step}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-desc">{item.desc}</p>
                <div className="timeline-card-accent" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7. TECHNOLOGY ECOSYSTEM RIBBON
         ========================================================================= */}
      <section className="section-ecosystem-ribbon">
        <div className="container ribbon-inner">
          <div className="ribbon-label">
            <Radio size={16} />
            <span>Technology ecosystem and platforms:</span>
          </div>
          <div className="ribbon-brand-pills">
            <span className="pill">MTN Uganda</span>
            <span className="pill">Airtel Uganda</span>
            <span className="pill">RENU</span>
            <span className="pill">Huawei</span>
            <span className="pill">Cisco</span>
            <span className="pill">Microsoft</span>
            <span className="pill">Google</span>
          </div>
          <Link to="/partners" className="ribbon-link">
            Explore Ecosystem <span>→</span>
          </Link>
        </div>
      </section>

      {/* =========================================================================
          8. HIGH-CONVERTING BOTTOM CTA
         ========================================================================= */}
      <section className="section-cta-banner">
        <Reveal direction="zoom" className="container cta-banner-card">
          <div className="cta-card-content">
            <span className="cta-card-eyebrow">START YOUR INFRASTRUCTURE PROJECT</span>
            <h2 className="cta-card-title">
              Ready to engineer dependable technology for your organization?
            </h2>
            <p className="cta-card-desc">
              Schedule a site survey or discuss your networking, solar power, security, or software
              requirements with our engineering team in Bukoto, Kampala.
            </p>
          </div>
          <div className="cta-card-buttons">
            <Link to="/contact" className="btn btn-brand-red btn-lg">
              <PhoneCall size={17} />
              Book Engineering Consultation
            </Link>
            <Link to="/solutions" className="btn btn-outline-white btn-lg">
              Browse Solutions
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Modal for viewing project case study */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  )
}