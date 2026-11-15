import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Radio,
  Server,
  Cloud,
  Info,
  ArrowRight,
  Cpu
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { ecosystemCategories, engineeringPrinciples } from '../data/partnersData'

function PartnerLogo({ src, name, className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return <span className="partner-logo-text">{name}</span>
  }

  return (
    <img
      src={src}
      alt={`${name} logo`}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Partners() {
  const allPlatforms = ecosystemCategories.flatMap((c) => c.platforms)

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'carriers':
        return Radio
      case 'hardware':
        return Server
      case 'cloud':
        return Cloud
      default:
        return Cpu
    }
  }

  return (
    <div className="partners-page">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="TECHNOLOGY ECOSYSTEM"
        title="Interoperable with Africa’s foremost carriers, hardware, and"
        highlightText="cloud platforms."
        description="Explore the national telecommunications networks, optical hardware manufacturers, and cloud platforms that ONICC interfaces with to deliver robust, multi-vendor enterprise infrastructure."
        breadcrumbs={[{ label: 'Technology Ecosystem' }]}
        badge="Multi-Vendor Interoperability"
      />

      {/* 2. Transparency & Verified Relationship Notice */}
      <section className="ecosystem-notice-section">
        <div className="container">
          <div className="ecosystem-notice-card">
            <Info size={22} className="notice-icon" />
            <div className="notice-content">
              <h4>Ecosystem Transparency Statement</h4>
              <p>
                Organizations, carrier networks, and brand names referenced on this page identify technology
                platforms, optical equipment manufacturers, and telecommunications carriers whose systems ONICC
                deploys, configures, and interfaces with. Inclusion does not imply direct commercial sponsorship,
                exclusive partnership, or formal brand endorsement unless explicitly designated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2b. Logo wall */}
      <section className="section-padding partner-wall-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              PLATFORMS & TECHNOLOGIES
            </span>
            <h2 className="section-title">Technologies we deploy and support.</h2>
          </div>

          <div className="partner-logo-wall">
            {allPlatforms.map((platform) => (
              <div key={platform.name} className="partner-logo-tile" title={platform.name}>
                <PartnerLogo src={platform.logo} name={platform.name} className="partner-logo-img" />
              </div>
            ))}
          </div>

          <p className="partner-wall-note">
            Logos are trademarks of their respective owners and are shown only to identify the
            technologies ONICC deploys. Their use does not imply endorsement or a formal partnership.
          </p>
        </div>
      </section>

      {/* 3. Categorized Ecosystem Grid */}
      <section className="section-padding ecosystem-main-section">
        <div className="container">
          <div className="ecosystem-stack">
            {ecosystemCategories.map((category) => {
              const CategoryIcon = getCategoryIcon(category.id)

              return (
                <div key={category.id} className="ecosystem-category-block">
                  <div className="category-block-header">
                    <div className="header-icon-wrap">
                      <CategoryIcon size={24} />
                    </div>
                    <div>
                      <h2 className="category-block-title">{category.title}</h2>
                      <p className="category-block-desc">{category.description}</p>
                    </div>
                  </div>

                  <div className="platforms-grid">
                    {category.platforms.map((platform, idx) => (
                      <div key={idx} className="platform-card">
                        <div className="platform-card-top">
                          <div className="platform-logo-box">
                            <PartnerLogo src={platform.logo} name={platform.name} className="platform-logo-img" />
                          </div>
                          <span className="platform-badge">{platform.badge}</span>
                        </div>
                        <h3 className="platform-name">{platform.name}</h3>
                        {platform.fullName && (
                          <span className="platform-fullname">{platform.fullName}</span>
                        )}
                        <strong className="platform-role">{platform.role}</strong>
                        <p className="platform-scope">{platform.scope}</p>

                        <div className="platform-status-indicator">
                          <span className="dot-active"></span>
                          <span>Active Engineering Interface</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Engineering Principles Grid */}
      <section className="section-padding bg-light-alt principles-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              ARCHITECTURAL INTEGRITY
            </span>
            <h2 className="section-title">How we select and integrate technologies.</h2>
            <p className="section-subtitle">
              We design infrastructure around what works best for your specific operational context.
            </p>
          </div>

          <div className="principles-grid">
            {engineeringPrinciples.map((item, idx) => (
              <div key={idx} className="principle-card">
                <div className="principle-number">0{idx + 1}</div>
                <h3 className="principle-title">{item.title}</h3>
                <p className="principle-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Bottom Consultation Banner */}
      <section className="section-cta-banner">
        <div className="container cta-banner-card">
          <div className="cta-card-content">
            <span className="cta-card-eyebrow">INTEGRATION CONSULTATION</span>
            <h2 className="cta-card-title">Need to integrate existing hardware with a new network backhaul?</h2>
            <p className="cta-card-desc">
              Our engineers in Bukoto can audit your existing server room, carrier leased lines, and optical
              equipment to design a high-throughput, unified network topology.
            </p>
          </div>
          <div className="cta-card-buttons">
            <Link to="/contact" className="btn btn-brand-red btn-lg">
              Consult with ONICC Engineers
              <ArrowRight size={17} />
            </Link>
            <Link to="/solutions" className="btn btn-outline-white btn-lg">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
