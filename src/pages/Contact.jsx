import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  ChevronDown
} from 'lucide-react'
import PageHero from '../components/PageHero'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const preselectedService = searchParams.get('service') || ''

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: preselectedService,
    location: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const faqs = [
    {
      q: 'How quickly can ONICC conduct a site survey in Kampala or upcountry Uganda?',
      a: 'For facilities within Greater Kampala, Mukono, and Entebbe, our engineering team can typically schedule a preliminary physical walk-through and optical/power audit within 24 to 48 hours of initial scoping.'
    },
    {
      q: 'Does ONICC provide turnkey delivery, or do clients need to source materials?',
      a: 'We provide complete turnkey execution. We source certified optical fiber cables, Tier-1 solar panels, inverters, LiFePO4 batteries, and network hardware with full manufacturer warranties, handling civil laying, termination, and testing.'
    },
    {
      q: 'What service level agreement (SLA) options are available after handover?',
      a: 'We offer customizable preventive and reactive maintenance SLAs ranging from business-hours support to 24/7 priority emergency dispatch with guaranteed maximum response times for critical network or power failures.'
    },
    {
      q: 'Can ONICC integrate new fiber or solar systems with our existing hardware?',
      a: 'Yes. Our engineers conduct vendor-neutral compatibility audits. We design network bridges and power switchgear that protect and optimize your existing investments in servers, switches, and generators.'
    }
  ]

  const validate = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address'
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    }
    if (!formData.subject.trim()) {
      newErrors.subject = 'Project subject is required'
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your project requirements'
    }
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setSubmitting(true)

    // Save inquiry to persistent storage for CMS Admin Dashboard
    const newInquiry = {
      id: `inq-${Date.now()}`,
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      service: formData.service || 'Multi-Disciplinary Turnkey Fit-out',
      location: formData.location || 'Kampala, Uganda',
      subject: formData.subject,
      message: formData.message,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      status: 'New'
    }

    try {
      const existing = JSON.parse(localStorage.getItem('onicc_inquiries') || '[]')
      localStorage.setItem('onicc_inquiries', JSON.stringify([newInquiry, ...existing]))
    } catch {
      // Fallback if local storage restricted
    }

    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 700)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      location: '',
      subject: '',
      message: ''
    })
    setErrors({})
  }

  return (
    <div className="contact-page">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="CONTACT ONICC"
        title="Schedule a site survey or discuss your infrastructure"
        highlightText="specifications."
        description="Connect directly with our engineering and project scoping desk in Bukoto, Kampala. Share your project requirements and receive a structured technical feasibility review."
        breadcrumbs={[{ label: 'Contact' }]}
        badge="Kampala Headquarters"
      />

      {/* 2. Main Contact Grid */}
      <section className="section-padding contact-main-section">
        <div className="container contact-grid">
          {/* Left Column: Office Details & Direct Info */}
          <div className="contact-info-col">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              GET IN TOUCH
            </span>
            <h2 className="section-title">
              Let's engineer your <br />
              <span className="text-navy">next milestone.</span>
            </h2>
            <p className="contact-lead-text">
              Whether you are preparing a multi-site campus fiber tender, sizing a hybrid solar plant,
              upgrading CCTV surveillance, or provisioning a new institutional computer lab, our team is ready to assist.
            </p>

            {/* HQ Information Card */}
            <div className="contact-office-box">
              <div className="office-box-header">
                <MapPin className="office-pin-icon" size={22} />
                <div>
                  <h3>ONICC Operational Headquarters</h3>
                  <span className="office-sub">Registered in Uganda</span>
                </div>
              </div>

              <div className="office-details-list">
                <div className="detail-item">
                  <strong>Physical Address:</strong>
                  <p>Bukoto, opposite Kabira Country Club<br />Kampala, Uganda</p>
                </div>

                <div className="detail-item">
                  <strong>Operating Hours:</strong>
                  <p>
                    <Clock size={14} className="inline-icon" /> Monday – Friday: 8:00 AM – 5:30 PM EAT<br />
                    <Clock size={14} className="inline-icon" /> Saturday: 9:00 AM – 1:00 PM EAT (Emergency Desk)
                  </p>
                </div>

                <div className="detail-item">
                  <strong>Technical Inquiry Channel:</strong>
                  <p>
                    Submit the technical scoping form to route directly to our project engineers.
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder Graphic */}
            <div className="kampala-map-card">
              <div className="map-badge">
                <MapPin size={14} />
                <span>Bukoto Location Marker</span>
              </div>
              <div className="map-artistic-canvas">
                <div className="map-grid-lines"></div>
                <div className="map-pin-pulse">
                  <span className="pin-circle"></span>
                  <span className="pin-radar"></span>
                </div>
                <div className="map-card-label">
                  <strong>ONICC HQ</strong>
                  <span>Opposite Kabira Country Club</span>
                </div>
              </div>
              <div className="map-caption">
                <span>Bukoto – Kisaasi Road Corridor, Kampala</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="contact-form-col">
            <div className="form-card-container">
              {submitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={48} className="success-check-icon" />
                  </div>
                  <h3>Technical Inquiry Received</h3>
                  <p>
                    Thank you, <strong>{formData.name}</strong>. Your project scoping inquiry for{' '}
                    <strong>{formData.service || 'Infrastructure Engineering'}</strong> has been registered.
                  </p>
                  <div className="success-meta-box">
                    <span>Target Project: {formData.subject}</span>
                    <span>Location: {formData.location || 'Uganda'}</span>
                    <span className="note-text">
                      Registered in ONICC CMS Dispatch Queue. Our engineering team in Bukoto will review your requirements.
                    </span>
                  </div>
                  <button className="btn btn-primary" onClick={handleReset}>
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="project-inquiry-form" noValidate>
                  <div className="form-header-strip">
                    <h3>Request an Infrastructure Consultation</h3>
                    <p>Complete the technical parameters below for a fast, structured assessment.</p>
                  </div>

                  <div className="form-fields-grid">
                    {/* Full Name */}
                    <div className="form-field-group">
                      <label htmlFor="name">
                        Full Name <span className="req">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Samuel Mukasa"
                        className={errors.name ? 'input-error' : ''}
                      />
                      {errors.name && <span className="field-error-msg">{errors.name}</span>}
                    </div>

                    {/* Company */}
                    <div className="form-field-group">
                      <label htmlFor="company">Company / Institution</label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Nile Logistics Ltd"
                      />
                    </div>

                    {/* Work Email */}
                    <div className="form-field-group">
                      <label htmlFor="email">
                        Work Email <span className="req">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.co.ug"
                        className={errors.email ? 'input-error' : ''}
                      />
                      {errors.email && <span className="field-error-msg">{errors.email}</span>}
                    </div>

                    {/* Phone Number */}
                    <div className="form-field-group">
                      <label htmlFor="phone">
                        Phone Number <span className="req">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +256 700 000 000"
                        className={errors.phone ? 'input-error' : ''}
                      />
                      {errors.phone && <span className="field-error-msg">{errors.phone}</span>}
                    </div>

                    {/* Primary Service Practice */}
                    <div className="form-field-group">
                      <label htmlFor="service">Primary Practice Required</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="">Select an engineering area</option>
                        <option value="Networking & Telecommunications">Networking & Telecommunications</option>
                        <option value="Solar Power & Smart Energy">Solar Power & Smart Energy</option>
                        <option value="Security & Surveillance">Security & Surveillance (CCTV / Biometrics)</option>
                        <option value="Software & Digital Solutions">Software & Digital Solutions</option>
                        <option value="Cloud, Hosting & Domains">Cloud, Hosting & Domains (.ug)</option>
                        <option value="ICT Laboratory Solutions">ICT Laboratory Solutions</option>
                        <option value="Multi-Disciplinary Turnkey Fit-out">Multi-Disciplinary Turnkey Fit-out</option>
                      </select>
                    </div>

                    {/* Project Location in Uganda */}
                    <div className="form-field-group">
                      <label htmlFor="location">Facility / Project Location</label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="e.g. Kampala, Mukono, Entebbe, Jinja"
                      />
                    </div>
                  </div>

                  {/* Project Subject */}
                  <div className="form-field-group full-width">
                    <label htmlFor="subject">
                      Project Subject / Objective <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. 5km Campus Fiber Ring & Server Room Cabling"
                      className={errors.subject ? 'input-error' : ''}
                    />
                    {errors.subject && <span className="field-error-msg">{errors.subject}</span>}
                  </div>

                  {/* Detailed Requirements Message */}
                  <div className="form-field-group full-width">
                    <label htmlFor="message">
                      Project Specifications & Scope <span className="req">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your current infrastructure, desired outcomes, timeline, or upload specifications..."
                      className={errors.message ? 'input-error' : ''}
                    />
                    {errors.message && <span className="field-error-msg">{errors.message}</span>}
                  </div>

                  {/* Form Submission Button */}
                  <div className="form-actions-wrap">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn btn-brand-red btn-lg btn-block"
                    >
                      {submitting ? (
                        <span>Validating & Transmitting to Dispatch...</span>
                      ) : (
                        <>
                          <span>Submit Scoping Request</span>
                          <Send size={16} />
                        </>
                      )}
                    </button>
                    <p className="form-footnote">
                      <ShieldCheck size={14} className="inline-shield" />
                      Client confidentiality guaranteed. Dispatched directly to ONICC engineering queue.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions (FAQ) Accordion */}
      <section className="section-padding bg-light-alt contact-faq-section">
        <div className="container faq-container">
          <div className="section-header-centered">
            <span className="section-eyebrow-tag">
              <span className="eyebrow-indicator"></span>
              CLIENT QUESTIONS
            </span>
            <h2 className="section-title">Frequently asked technical scoping questions.</h2>
            <p className="section-subtitle">
              Common inquiries regarding our site audits, turnkey delivery, warranties, and SLAs.
            </p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx
              return (
                <div
                  key={idx}
                  className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                >
                  <div className="faq-question-row">
                    <h3>{faq.q}</h3>
                    <ChevronDown size={18} className="faq-chevron" />
                  </div>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
