import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, Shield, Globe, Radio, Cpu, Sun, Lock } from 'lucide-react'
import BrandLogo from './BrandLogo'

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [newsletterStatus, setNewsletterStatus] = useState(null)

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus({ type: 'error', message: 'Please enter a valid business email address.' })
      return
    }
    setNewsletterStatus({
      type: 'success',
      message: 'Thank you for subscribing to ONICC Infrastructure & Tech Briefs.'
    })
    setNewsletterEmail('')
  }

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
              <span>Monday – Friday: 8:00 AM – 5:30 PM EAT</span>
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

        {/* Ecosystem & Newsletter */}
        <div className="footer-col footer-col--newsletter">
          <h4 className="footer-heading">Stay Connected</h4>
          <p className="footer-newsletter-text">
            Subscribe to periodic technical updates on fiber deployments, clean energy developments,
            and IT infrastructure best practices in East Africa.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="footer-newsletter-form">
            <div className="newsletter-input-group">
              <input
                type="email"
                placeholder="Enter your work email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                className="newsletter-input"
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </div>
            {newsletterStatus && (
              <p className={`newsletter-status ${newsletterStatus.type}`}>
                {newsletterStatus.message}
              </p>
            )}
          </form>

          <div className="footer-ecosystem-snippet">
            <span className="snippet-label">Technology Ecosystem Alignment:</span>
            <div className="snippet-tags">
              <span>MTN Interconnect</span>
              <span>Airtel</span>
              <span>RENU</span>
              <span>Huawei Optical</span>
              <span>Microsoft Cloud</span>
              <span>Cisco Systems</span>
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
            <Link to="/admin" className="tag-item staff-cms-link">
              Staff CMS Portal ↗
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
