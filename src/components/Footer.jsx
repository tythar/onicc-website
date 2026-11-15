import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, Shield, Globe, Radio, Cpu, Sun, Lock } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Footer() {
  return (
    <footer className="site-footer">
      {/* Top Pre-Footer CTA Strip */}
      <div className="footer-pre-strip">
        <div className="container pre-strip-inner">
          <div className="pre-strip-content">
            <span className="pre-strip-eyebrow">READY TO SCALE YOUR INFRASTRUCTURE?</span>
            <h3>Plan, engineer, and deploy high-reliability technology solutions with ONICC.</h3>
          </div>
          <div className="pre-strip-actions">
            <Link to="/contact" className="btn btn-brand-red">
              Speak with an Engineer
              <ArrowRight size={16} />
            </Link>
            <Link to="/solutions" className="btn btn-outline-white">
              Explore All Solutions
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container footer-main-grid">
        {/* Brand & Corporate Overview */}
        <div className="footer-col footer-col--brand">
          <Link to="/" className="footer-brand-link" aria-label="ONICC Home">
            <BrandLogo mode="dark" variant="full" />
          </Link>
          <p className="footer-bio">
            OHMS Network Infrastructure and Communication Company (ONICC) provides end-to-end
            telecommunications, optical fiber cabling, smart solar power, integrated surveillance,
            and digital enterprise solutions for organizations across Uganda and East Africa.
          </p>

          <div className="footer-office-card">
            <div className="office-card-header">
              <MapPin size={16} className="office-icon" />
              <strong>ONICC Headquarters</strong>
            </div>
            <p className="office-address">
              Bukoto, opposite Kabira Country Club<br />
              Kampala, Uganda
            </p>
            <div className="office-hours">
              <Clock size={14} />
              <span>Support available 24/7</span>
            </div>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="footer-col">
          <h4 className="footer-heading">Corporate Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home Overview</Link></li>
            <li><Link to="/about">About ONICC & Mission</Link></li>
            <li><Link to="/solutions">Enterprise Solutions</Link></li>
            <li><Link to="/projects">Project Case Studies</Link></li>
            <li><Link to="/partners">Technology Ecosystem</Link></li>
            <li><Link to="/insights">Industry Insights & Articles</Link></li>
            <li><Link to="/contact">Contact & Scoping Requests</Link></li>
          </ul>
        </div>

        {/* Core Solution Categories */}
        <div className="footer-col">
          <h4 className="footer-heading">Engineering Solutions</h4>
          <ul className="footer-links">
            <li>
              <Link to="/solutions">
                <Radio size={13} className="footer-link-icon" />
                Networking & Telecoms
              </Link>
            </li>
            <li>
              <Link to="/solutions">
                <Sun size={13} className="footer-link-icon" />
                Solar Power & Smart Energy
              </Link>
            </li>
            <li>
              <Link to="/solutions">
                <Lock size={13} className="footer-link-icon" />
                Security & CCTV Surveillance
              </Link>
            </li>
            <li>
              <Link to="/solutions">
                <Cpu size={13} className="footer-link-icon" />
                Software & Digital Solutions
              </Link>
            </li>
            <li>
              <Link to="/solutions">
                <Globe size={13} className="footer-link-icon" />
                Cloud, Hosting & Domains
              </Link>
            </li>
            <li>
              <Link to="/solutions">
                <Shield size={13} className="footer-link-icon" />
                ICT Laboratory Setups
              </Link>
            </li>
          </ul>
        </div>

        {/* Technology ecosystem */}
        <div className="footer-col">
          <h4 className="footer-heading">Technology Ecosystem</h4>

          <div className="footer-ecosystem-snippet">
            <span className="snippet-label">Platforms we work with:</span>
            <div className="snippet-tags">
              <span>MTN Uganda</span>
              <span>Airtel</span>
              <span>RENU</span>
              <span>Huawei</span>
              <span>Microsoft</span>
              <span>Cisco</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container bottom-bar-inner">
          <p className="footer-copyright">
            © {new Date().getFullYear()} OHMS NETWORK INFRASTRUCTURE AND COMMUNICATION COMPANY (ONICC). All rights reserved.
          </p>
          <div className="footer-bottom-tags">
            <span className="tag-item">Registered in the Republic of Uganda</span>
            <span className="tag-dot">•</span>
            <span className="tag-item">Bukoto, Kampala</span>
            <span className="tag-dot">•</span>
            <span className="tag-item">ICT & Infrastructure Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
