import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight, Menu, X, ChevronRight } from 'lucide-react'
import BrandLogo from './BrandLogo'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Projects', path: '/projects' },
  { name: 'Partners', path: '/partners' },
  { name: 'Insights', path: '/insights' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Top Utility Information Bar */}
      <div className="top-utility-bar">
        <div className="container top-bar-inner">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <MapPin size={13} className="top-bar-icon" />
              <span>Bukoto, opp. Kabira Country Club, Kampala, Uganda</span>
            </span>
            <span className="top-bar-divider">•</span>
            <span className="top-bar-item">
              <Clock size={13} className="top-bar-icon" />
              <span>Mon – Fri: 8:00 AM – 5:30 PM EAT</span>
            </span>
          </div>

          <div className="top-bar-right">
            <span className="top-bar-badge">
              <span className="pulse-dot"></span>
              Engineering & Infrastructure Services
            </span>
            <Link to="/contact" className="top-bar-link">
              Support Desk
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar container">
        <Link to="/" className="brand-link" aria-label="ONICC Home">
          <BrandLogo mode="light" variant="full" />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop">
          <div className="nav-links">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'is-active' : ''}`
                }
              >
                {item.name}
                <span className="nav-active-pill" />
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-brand-red nav-quote-btn">
              <span>Start Your Project</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div className={`mobile-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="mobile-drawer-header">
          <BrandLogo mode="light" variant="compact" />
          <button
            className="mobile-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="mobile-drawer-body">
          <div className="mobile-nav-list">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `mobile-nav-link ${isActive ? 'is-active' : ''}`
                }
              >
                <span>{item.name}</span>
                <ChevronRight size={16} />
              </NavLink>
            ))}
          </div>

          <div className="mobile-drawer-contact">
            <h4>ONICC Engineering HQ</h4>
            <p className="mobile-location">
              <MapPin size={15} />
              Bukoto, opposite Kabira Country Club, Kampala, Uganda
            </p>
            <p className="mobile-hours">
              <Clock size={15} />
              Mon – Fri: 8:00 AM – 5:30 PM
            </p>

            <Link
              to="/contact"
              className="btn btn-brand-red btn-block mobile-cta"
              onClick={() => setMenuOpen(false)}
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Backdrop */}
      {menuOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  )
}