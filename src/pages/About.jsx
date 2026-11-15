import { Link } from 'react-router-dom'
import {
  Compass,
  Target,
  ShieldCheck,
  MapPin,
  ArrowRight,
  Layers,
  Lock,
  Cpu,
  Radio,
  Sun
} from 'lucide-react'
import PageHero from '../components/PageHero'
import { asset } from '../utils/asset'

export default function About() {
  const values = [
    {
      title: 'Engineering Rigor & Precision',
      desc: 'We do not guess or cut corners. Every fiber run is OTDR tested, every solar battery bank is sized with harmonic and thermal modeling, and every network packet path is verified before commissioning.'
    },
    {
      title: 'Operational Transparency',
      desc: 'From detailed Bill of Quantities (BoQs) to transparent equipment sourcing, our clients receive full documentation, exact part numbers, and realistic project timelines.'
    },
    {
      title: 'Long-Term Reliability & SLAs',
      desc: 'Technology is an ongoing utility. We back our infrastructure deployments with responsive local service level agreements, preventive maintenance schedules, and rapid on-site troubleshooting.'
    },
    {
      title: 'Local Capacity Building',
      desc: 'We are committed to training our clients’ internal IT officers during handover, equipping East African institutions with the technical self-reliance needed to maintain their own systems.'
    },
    {
      title: 'Vendor-Neutral Objectivity',
      desc: 'We architect solutions based strictly on environmental conditions, technical suitability, and organizational budgets rather than single-vendor proprietary lock-in.'
    }
  ]

  const capabilities = [
    {
      icon: Radio,
      title: 'Telecommunications & Fiber Networks',
      desc: 'Underground conduit laying, aerial fiber stringing, fusion splicing, OTDR link characterization, and high-density Wi-Fi 6 enterprise deployments.'
    },
    {
      icon: Sun,
      title: 'Commercial Solar & Power Backup',
      desc: 'Monocrystalline PV installations, hybrid pure sine inverters, LiFePO4 battery energy storage, and critical load panel segregation.'
    },
    {
      icon: Lock,
      title: 'Integrated Surveillance & Security',
      desc: 'Ultra HD 4K night-vision IP CCTV, facial recognition biometric access gates, perimeter AI intrusion detection, and RAID-resilient NVR storage.'
    },
    {
      icon: Cpu,
      title: 'Software & Digital Platforms',
      desc: 'Enterprise web portals, custom ERP tools, cross-platform mobile apps, cloud database management, and East African payment API gateways.'
    },
    {
      icon: Layers,
      title: 'Institutional ICT Laboratories',
      desc: 'Turnkey 20-to-100 seat computer laboratory setups, ergonomic lab wiring, content-filtering firewalls, and centralized disk-image rollbacks.'
    }
  ]

  return (
    <div className="about-page">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="ABOUT ONICC"
        title="Engineering resilient digital and power infrastructure for"
        highlightText="Africa's enterprise future."
        description="Learn how OHMS Network Infrastructure and Communication Company delivers mission-critical technology, optical fiber connectivity, clean energy, and physical security from our headquarters in Bukoto, Kampala."
        breadcrumbs={[{ label: 'About Us' }]}
        badge="Kampala, Uganda"
      />

      {/* 2. Who We Are Storytelling Section */}
      <section className="section-padding who-story-section">
        <div className="container story-grid">
          <div className="story-lead">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              OUR IDENTITY & ORIGIN
            </span>
            <h2 className="section-title">
              Built on practical engineering. <br />
              <span className="text-navy">Dedicated to organizational growth.</span>
            </h2>
            <div className="story-location-card">
              <MapPin className="card-pin-icon" size={20} />
              <div>
                <strong>ONICC Operational Headquarters</strong>
                <p>Bukoto, opposite Kabira Country Club, Kampala, Uganda</p>
              </div>
            </div>
          </div>

          <div className="story-content">
            <p className="lead-paragraph">
              OHMS Network Infrastructure and Communication Company (ONICC) was formed around a simple
              conviction: African enterprises, academic institutions, and growing businesses deserve
              infrastructure that functions without compromise.
            </p>
            <p className="body-paragraph">
              In a rapidly modernizing East African economy, organizations cannot afford repeated internet
              cutoffs, unconditioned grid power fluctuations that damage sensitive servers, or fragmented
              analog surveillance systems that fail during critical incidents.
            </p>
            <p className="body-paragraph">
              ONICC brings together certified optical network technicians, power systems engineers,
              software architects, and physical security specialists under one cohesive team. We handle
              every phase of infrastructure delivery—from initial ground surveys and CAD single-line drawings
              to precision civil trenching, clean rack wiring, and 24/7 post-deployment support.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Cards */}
      <section className="section-padding bg-light-alt mission-vision-section">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mv-card mv-card--mission">
              <div className="mv-icon-wrap">
                <Target size={28} />
              </div>
              <span className="mv-tag">OUR MISSION</span>
              <h3 className="mv-title">To engineer dependable, high-performance technology infrastructure.</h3>
              <p className="mv-text">
                To deliver practical, turnkey technology, telecommunications, smart energy, and digital
                solutions that empower organisations across Uganda and East Africa to connect seamlessly,
                operate with resilience, and scale with confidence.
              </p>
              <div className="mv-accent-line" />
            </div>

            <div className="mv-card mv-card--vision">
              <div className="mv-icon-wrap">
                <Compass size={28} />
              </div>
              <span className="mv-tag">OUR VISION</span>
              <h3 className="mv-title">To build the physical foundation of Africa’s digital transformation.</h3>
              <p className="mv-text">
                To be the region’s premier technology infrastructure partner—recognized for unyielding
                engineering standards, long-term client partnerships, clean energy integration, and local
                technical capacity development.
              </p>
              <div className="mv-accent-line" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Core Operating Values */}
      <section className="section-padding values-section">
        <div className="container">
          <div className="section-header-centered">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              OUR GUIDING PILLARS
            </span>
            <h2 className="section-title">The principles that govern our engineering.</h2>
            <p className="section-subtitle">
              Every design decision, equipment selection, and field installation is anchored in these values.
            </p>
          </div>

          <div className="values-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-card">
                <span className="value-number">0{idx + 1}</span>
                <h3 className="value-title">{val.title}</h3>
                <p className="value-desc">{val.desc}</p>
                <div className="value-card-border" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Areas of Expertise & Discipline Matrix */}
      <section className="section-padding bg-dark-navy text-white capabilities-section">
        <div className="container">
          <div className="section-header-centered text-white">
            <span className="section-eyebrow-tag eyebrow--turquoise">
              <span className="eyebrow-indicator"></span>
              CORE EXPERTISE
            </span>
            <h2 className="section-title text-white">What we bring to the table.</h2>
            <p className="section-subtitle text-slate-300">
              End-to-end multi-disciplinary capabilities spanning optical, electrical, and software engineering.
            </p>
          </div>

          <div className="capabilities-grid">
            {capabilities.map((cap, idx) => {
              const CapIcon = cap.icon
              return (
                <div key={idx} className="capability-card">
                  <div className="cap-icon-box">
                    <CapIcon size={24} />
                  </div>
                  <h3 className="cap-title">{cap.title}</h3>
                  <p className="cap-desc">{cap.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 6. Standards, Quality & Safety Commitment */}
      <section className="section-padding standards-section">
        <div className="container standards-inner">
          <div className="standards-content">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              SAFETY & CODE COMPLIANCE
            </span>
            <h2 className="section-title">Committed to national and global standards.</h2>
            <p className="standards-lead">
              Infrastructure that connects people must first be safe, code-compliant, and durable.
            </p>
            <div className="standards-checklist">
              <div className="standard-check-item">
                <ShieldCheck size={20} className="check-icon" />
                <div>
                  <strong>TIA/EIA-568-C Structured Cabling Compliance</strong>
                  <p>Certified channel and permanent link testing for all copper and optical backbones.</p>
                </div>
              </div>

              <div className="standard-check-item">
                <ShieldCheck size={20} className="check-icon" />
                <div>
                  <strong>Uganda Communications Commission (UCC) Alignment</strong>
                  <p>Telecommunications cabling, radio frequency spectrum, and carrier interconnect safety.</p>
                </div>
              </div>

              <div className="standard-check-item">
                <ShieldCheck size={20} className="check-icon" />
                <div>
                  <strong>Occupational Health & Electrical Safety (HSE)</strong>
                  <p>Mandatory PPE, proper grounding/bonding, surge arrestors, and certified high-altitude tower rigging.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="standards-visual">
            <img
              src={asset('/images/grey and blue ethernet.jpg')}
              alt="Telecommunication Tower Installation"
              className="standards-img"
            />
          </div>
        </div>
      </section>

      {/* 7. Bottom CTA */}
      <section className="section-cta-banner">
        <div className="container cta-banner-card">
          <div className="cta-card-content">
            <span className="cta-card-eyebrow">PARTNER WITH ONICC</span>
            <h2 className="cta-card-title">Let’s discuss your next infrastructure deployment.</h2>
            <p className="cta-card-desc">
              From individual server room upgrades to campus-wide fiber networks and solar hybrid plants,
              our team in Bukoto is ready to scope your project.
            </p>
          </div>
          <div className="cta-card-buttons">
            <Link to="/contact" className="btn btn-brand-red btn-lg">
              Get in Touch
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
