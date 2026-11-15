import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  LayoutDashboard,
  Inbox,
  FolderKanban,
  FileText,
  Settings,
  LogOut,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  Clock,
  MapPin,
  Search,
  ExternalLink,
  Save,
  X,
  Radio,
  Sun,
  Shield,
  Layers,
  BarChart3,
  User,
  Mail,
  Phone,
  Eye
} from 'lucide-react'
import BrandLogo from '../components/BrandLogo'
import { projectsData as defaultProjects } from '../data/projectsData'
import { insightsData as defaultInsights } from '../data/insightsData'

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('onicc_admin_auth') === 'true'
  })
  const [loginEmail, setLoginEmail] = useState('admin@onicc.co.ug')
  const [loginPassword, setLoginPassword] = useState('onicc2026')
  const [authError, setAuthError] = useState('')

  const [activeTab, setActiveTab] = useState('overview')

  // Data States
  const [inquiries, setInquiries] = useState([])
  const [projects, setProjects] = useState([])
  const [insights, setInsights] = useState([])
  const [selectedInquiry, setSelectedInquiry] = useState(null)

  // Edit / Create Modals
  const [editingProject, setEditingProject] = useState(null)
  const [editingArticle, setEditingArticle] = useState(null)
  const [notification, setNotification] = useState(null)

  // Load data from localStorage or defaults
  useEffect(() => {
    // 1. Inquiries
    const savedInquiries = localStorage.getItem('onicc_inquiries')
    if (savedInquiries) {
      try {
        setInquiries(JSON.parse(savedInquiries))
      } catch {
        setInquiries([])
      }
    } else {
      // Seed with sample initial inquiry for demo
      const seedInquiries = [
        {
          id: 'inq-01',
          name: 'Ronald Kigozi',
          company: 'Victoria Energy & Logistics',
          email: 'r.kigozi@victoriaenergy.ug',
          phone: '+256 772 450 119',
          service: 'Solar Power & Smart Energy',
          location: 'Mukono Industrial Park',
          subject: '40kWp Hybrid Solar Sizing & Server Backup',
          message: 'We are experiencing recurring 4-hour power dropouts affecting our SCADA monitoring system and server room. We require a feasibility site audit and sizing for LiFePO4 battery storage.',
          date: '2026-11-14 14:30',
          status: 'New'
        },
        {
          id: 'inq-02',
          name: 'Sarah Atuhaire',
          company: 'Kololo International Academy',
          email: 's.atuhaire@kia.ac.ug',
          phone: '+256 701 889 230',
          service: 'ICT Laboratory Solutions',
          location: 'Kololo, Kampala',
          subject: '60-Seat Student Computer Lab Fit-out',
          message: 'Planning complete renovation of our secondary wing computer lab. Requires structured Cat6 cabling, firewall filtering, and 60 student workstations.',
          date: '2026-11-13 09:15',
          status: 'Under Review'
        }
      ]
      setInquiries(seedInquiries)
      localStorage.setItem('onicc_inquiries', JSON.stringify(seedInquiries))
    }

    // 2. Projects
    const savedProjects = localStorage.getItem('onicc_custom_projects')
    if (savedProjects) {
      try {
        setProjects(JSON.parse(savedProjects))
      } catch {
        setProjects(defaultProjects)
      }
    } else {
      setProjects(defaultProjects)
      localStorage.setItem('onicc_custom_projects', JSON.stringify(defaultProjects))
    }

    // 3. Insights
    const savedInsights = localStorage.getItem('onicc_custom_insights')
    if (savedInsights) {
      try {
        setInsights(JSON.parse(savedInsights))
      } catch {
        setInsights(defaultInsights)
      }
    } else {
      setInsights(defaultInsights)
      localStorage.setItem('onicc_custom_insights', JSON.stringify(defaultInsights))
    }
  }, [])

  const triggerToast = (msg) => {
    setNotification(msg)
    setTimeout(() => setNotification(null), 3000)
  }

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault()
    if (loginEmail === 'admin@onicc.co.ug' && loginPassword === 'onicc2026') {
      setIsAuthenticated(true)
      localStorage.setItem('onicc_admin_auth', 'true')
      setAuthError('')
    } else {
      setAuthError('Invalid credentials. Use demo: admin@onicc.co.ug / onicc2026')
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('onicc_admin_auth')
  }

  // Inquiries Actions
  const updateInquiryStatus = (id, newStatus) => {
    const updated = inquiries.map((inq) =>
      inq.id === id ? { ...inq, status: newStatus } : inq
    )
    setInquiries(updated)
    localStorage.setItem('onicc_inquiries', JSON.stringify(updated))
    triggerToast(`Inquiry status marked as ${newStatus}`)
    if (selectedInquiry?.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus })
    }
  }

  const deleteInquiry = (id) => {
    if (window.confirm('Delete this inquiry?')) {
      const updated = inquiries.filter((inq) => inq.id !== id)
      setInquiries(updated)
      localStorage.setItem('onicc_inquiries', JSON.stringify(updated))
      if (selectedInquiry?.id === id) setSelectedInquiry(null)
      triggerToast('Inquiry deleted')
    }
  }

  // Project Actions
  const handleSaveProject = (e) => {
    e.preventDefault()
    const form = e.target
    const projData = {
      id: editingProject.id || `proj-${Date.now()}`,
      title: form.title.value,
      category: form.category.value,
      categoryKey: form.categoryKey.value,
      sector: form.sector.value,
      location: form.location.value,
      badge: 'Sample Engineering Blueprint',
      image: form.image.value || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      summary: form.summary.value,
      challenge: form.challenge.value,
      solution: form.solution.value,
      deliverables: form.deliverables.value.split('\n').filter(Boolean),
      metrics: [
        { label: form.metric1_lbl.value || 'Standard', value: form.metric1_val.value || 'Verified' },
        { label: form.metric2_lbl.value || 'SLA', value: form.metric2_val.value || '99.9%' }
      ]
    }

    let updated
    if (editingProject.isNew) {
      updated = [projData, ...projects]
      triggerToast('New project created and published!')
    } else {
      updated = projects.map((p) => (p.id === projData.id ? projData : p))
      triggerToast('Project updated successfully!')
    }

    setProjects(updated)
    localStorage.setItem('onicc_custom_projects', JSON.stringify(updated))
    setEditingProject(null)
  }

  const deleteProject = (id) => {
    if (window.confirm('Delete this project?')) {
      const updated = projects.filter((p) => p.id !== id)
      setProjects(updated)
      localStorage.setItem('onicc_custom_projects', JSON.stringify(updated))
      triggerToast('Project removed')
    }
  }

  // Insights Actions
  const handleSaveArticle = (e) => {
    e.preventDefault()
    const form = e.target
    const artData = {
      id: editingArticle.id || `art-${Date.now()}`,
      title: form.title.value,
      category: form.category.value,
      categoryKey: form.categoryKey.value,
      date: form.date.value || 'November 2026',
      readTime: form.readTime.value || '5 min read',
      author: form.author.value || 'ONICC Engineering Team',
      badge: 'Technical Whitepaper',
      image: form.image.value || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
      excerpt: form.excerpt.value,
      content: form.content.value.split('\n\n').filter(Boolean),
      takeaways: form.takeaways.value.split('\n').filter(Boolean)
    }

    let updated
    if (editingArticle.isNew) {
      updated = [artData, ...insights]
      triggerToast('New insight published to knowledge hub!')
    } else {
      updated = insights.map((a) => (a.id === artData.id ? artData : a))
      triggerToast('Article updated successfully!')
    }

    setInsights(updated)
    localStorage.setItem('onicc_custom_insights', JSON.stringify(updated))
    setEditingArticle(null)
  }

  const deleteArticle = (id) => {
    if (window.confirm('Delete this article?')) {
      const updated = insights.filter((a) => a.id !== id)
      setInsights(updated)
      localStorage.setItem('onicc_custom_insights', JSON.stringify(updated))
      triggerToast('Article removed')
    }
  }

  // If NOT authenticated, show corporate Login portal
  if (!isAuthenticated) {
    return (
      <div className="admin-login-wrapper">
        <div className="admin-login-card">
          <div className="login-brand-center">
            <BrandLogo mode="light" variant="full" />
          </div>
          <div className="login-header">
            <h2>ONICC Content Management System</h2>
            <p>Authorized Engineering & Operations Administration Portal</p>
          </div>

          {authError && <div className="login-error-alert">{authError}</div>}

          <form onSubmit={handleLogin} className="admin-login-form">
            <div className="form-group">
              <label>Administrator Email</label>
              <input
                type="email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Security Key / Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" className="btn btn-brand-red btn-block btn-lg">
              Authenticate into CMS Portal
            </button>
          </form>

          <div className="login-demo-hint">
            <strong>Default Demo Credentials:</strong>
            <code>admin@onicc.co.ug / onicc2026</code>
          </div>

          <div className="login-footer-link">
            <Link to="/">← Return to Public Website</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-dashboard-layout">
      {/* Toast Notification */}
      {notification && (
        <div className="admin-toast-notice">
          <CheckCircle2 size={16} />
          <span>{notification}</span>
        </div>
      )}

      {/* Admin Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-brand-block">
          <BrandLogo mode="dark" variant="compact" />
          <span className="cms-badge">CMS PORTAL</span>
        </div>

        <nav className="admin-nav-menu">
          <button
            className={`admin-nav-item ${activeTab === 'overview' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <LayoutDashboard size={18} />
            <span>Overview & Telemetry</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'inquiries' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('inquiries')}
          >
            <Inbox size={18} />
            <span>Scoping Inquiries</span>
            {inquiries.filter((i) => i.status === 'New').length > 0 && (
              <span className="badge-count">
                {inquiries.filter((i) => i.status === 'New').length}
              </span>
            )}
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'projects' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <FolderKanban size={18} />
            <span>Project Blueprints</span>
            <span className="badge-count-subtle">{projects.length}</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'insights' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('insights')}
          >
            <FileText size={18} />
            <span>Insights & Articles</span>
            <span className="badge-count-subtle">{insights.length}</span>
          </button>

          <button
            className={`admin-nav-item ${activeTab === 'settings' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings size={18} />
            <span>System Settings</span>
          </button>
        </nav>

        <div className="sidebar-footer">
          <Link to="/" target="_blank" className="admin-nav-item sidebar-live-link">
            <ExternalLink size={16} />
            <span>View Live Website</span>
          </Link>
          <button onClick={handleLogout} className="admin-nav-item logout-btn">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Admin Content Area */}
      <main className="admin-main-viewport">
        {/* Top Bar */}
        <header className="admin-topbar">
          <div className="topbar-title-block">
            <h1>
              {activeTab === 'overview' && 'Operations & CMS Overview'}
              {activeTab === 'inquiries' && 'Technical Scoping Inquiries'}
              {activeTab === 'projects' && 'Project Blueprints Management'}
              {activeTab === 'insights' && 'Knowledge Hub & Whitepapers'}
              {activeTab === 'settings' && 'System Configuration & Bukoto HQ'}
            </h1>
            <p>OHMS Network Infrastructure and Communication Company</p>
          </div>

          <div className="topbar-actions">
            <span className="hq-status-pill">
              <span className="pulse-green"></span>
              Bukoto Depot: Online
            </span>
            <div className="user-profile-badge">
              <User size={15} />
              <span>Admin Desk</span>
            </div>
          </div>
        </header>

        {/* Tab 1: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="admin-tab-content">
            {/* Quick Metrics Grid */}
            <div className="admin-metrics-grid">
              <div className="metric-kpi-card">
                <div className="kpi-header">
                  <span>Pending Inquiries</span>
                  <Inbox className="kpi-icon icon-red" size={20} />
                </div>
                <strong>{inquiries.filter((i) => i.status === 'New').length}</strong>
                <span className="kpi-sub">Total {inquiries.length} received</span>
              </div>

              <div className="metric-kpi-card">
                <div className="kpi-header">
                  <span>Published Projects</span>
                  <FolderKanban className="kpi-icon icon-cyan" size={20} />
                </div>
                <strong>{projects.length}</strong>
                <span className="kpi-sub">Verified Blueprints</span>
              </div>

              <div className="metric-kpi-card">
                <div className="kpi-header">
                  <span>Technical Insights</span>
                  <FileText className="kpi-icon icon-navy" size={20} />
                </div>
                <strong>{insights.length}</strong>
                <span className="kpi-sub">Active Whitepapers</span>
              </div>

              <div className="metric-kpi-card">
                <div className="kpi-header">
                  <span>SLA Service Readiness</span>
                  <BarChart3 className="kpi-icon icon-green" size={20} />
                </div>
                <strong>99.98%</strong>
                <span className="kpi-sub">Kampala NOC Active</span>
              </div>
            </div>

            {/* Inquiries & Recent Activity Split */}
            <div className="overview-split-grid">
              <div className="overview-card">
                <div className="overview-card-header">
                  <h3>Recent Customer Scoping Inquiries</h3>
                  <button
                    className="btn btn-outline-navy btn-sm"
                    onClick={() => setActiveTab('inquiries')}
                  >
                    View All Inquiries
                  </button>
                </div>

                <div className="mini-inquiries-list">
                  {inquiries.slice(0, 4).map((inq) => (
                    <div
                      key={inq.id}
                      className="mini-inquiry-row"
                      onClick={() => {
                        setSelectedInquiry(inq)
                        setActiveTab('inquiries')
                      }}
                    >
                      <div className="mini-inq-left">
                        <strong>{inq.name}</strong>
                        <span>{inq.company || inq.location}</span>
                      </div>
                      <div className="mini-inq-right">
                        <span className="mini-inq-service">{inq.service}</span>
                        <span className={`status-pill status--${inq.status.toLowerCase().replace(' ', '-')}`}>
                          {inq.status}
                        </span>
                      </div>
                    </div>
                  ))}
                  {inquiries.length === 0 && (
                    <p className="empty-subtle">No scoping inquiries received yet.</p>
                  )}
                </div>
              </div>

              <div className="overview-card">
                <div className="overview-card-header">
                  <h3>Quick Content Publishing</h3>
                </div>
                <div className="quick-actions-box">
                  <p>Create and deploy content changes that immediately reflect across the public corporate website.</p>
                  <div className="quick-buttons-row">
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setEditingProject({ isNew: true })
                        setActiveTab('projects')
                      }}
                    >
                      <Plus size={16} />
                      Publish New Project Blueprint
                    </button>
                    <button
                      className="btn btn-outline-navy"
                      onClick={() => {
                        setEditingArticle({ isNew: true })
                        setActiveTab('insights')
                      }}
                    >
                      <Plus size={16} />
                      Draft Technical Whitepaper
                    </button>
                  </div>

                  <div className="overview-note-box">
                    <strong>Local Persistence Active:</strong>
                    <span>All changes you make here are saved in your browser's persistent storage and update the live site instantly without requiring a code rebuild.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: INQUIRIES */}
        {activeTab === 'inquiries' && (
          <div className="admin-tab-content inquiries-view-grid">
            {/* List */}
            <div className="inquiries-list-pane">
              <div className="pane-header">
                <h3>Incoming Scoping Inquiries ({inquiries.length})</h3>
                <span className="pane-note">Real-time sync from public contact form</span>
              </div>

              <div className="inquiries-stack">
                {inquiries.map((inq) => (
                  <div
                    key={inq.id}
                    className={`inquiry-item-card ${selectedInquiry?.id === inq.id ? 'is-selected' : ''}`}
                    onClick={() => setSelectedInquiry(inq)}
                  >
                    <div className="inq-item-top">
                      <strong>{inq.name}</strong>
                      <span className={`status-pill status--${inq.status.toLowerCase().replace(' ', '-')}`}>
                        {inq.status}
                      </span>
                    </div>
                    <div className="inq-item-sub">{inq.company || inq.location}</div>
                    <div className="inq-item-subject">{inq.subject}</div>
                    <div className="inq-item-footer">
                      <span className="inq-service-badge">{inq.service}</span>
                      <span className="inq-date">{inq.date || 'Recent'}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detail Pane */}
            <div className="inquiry-detail-pane">
              {selectedInquiry ? (
                <div className="inquiry-full-card">
                  <div className="detail-header">
                    <div>
                      <h2>{selectedInquiry.name}</h2>
                      <p className="detail-company">{selectedInquiry.company} • {selectedInquiry.location}</p>
                    </div>
                    <div className="detail-status-controls">
                      <span className="status-label">Mark Status:</span>
                      <select
                        value={selectedInquiry.status}
                        onChange={(e) => updateInquiryStatus(selectedInquiry.id, e.target.value)}
                        className="status-select"
                      >
                        <option value="New">New</option>
                        <option value="Under Review">Under Review</option>
                        <option value="Site Survey Scheduled">Site Survey Scheduled</option>
                        <option value="BoQ Quoted">BoQ Quoted</option>
                        <option value="Closed / Won">Closed / Won</option>
                      </select>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => deleteInquiry(selectedInquiry.id)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="contact-quick-badges">
                    <a href={`mailto:${selectedInquiry.email}`} className="quick-contact-pill">
                      <Mail size={13} />
                      {selectedInquiry.email}
                    </a>
                    <a href={`tel:${selectedInquiry.phone}`} className="quick-contact-pill">
                      <Phone size={13} />
                      {selectedInquiry.phone}
                    </a>
                    <span className="quick-contact-pill">
                      <MapPin size={13} />
                      {selectedInquiry.location || 'Uganda'}
                    </span>
                  </div>

                  <div className="inquiry-section-box">
                    <h4>Primary Practice:</h4>
                    <p className="practice-highlight">{selectedInquiry.service}</p>
                  </div>

                  <div className="inquiry-section-box">
                    <h4>Subject / Objective:</h4>
                    <p><strong>{selectedInquiry.subject}</strong></p>
                  </div>

                  <div className="inquiry-section-box">
                    <h4>Technical Requirements & Scope Description:</h4>
                    <div className="inquiry-message-bubble">
                      {selectedInquiry.message}
                    </div>
                  </div>

                  <div className="inquiry-action-bar">
                    <a
                      href={`mailto:${selectedInquiry.email}?subject=RE: ONICC Infrastructure Scoping — ${selectedInquiry.subject}`}
                      className="btn btn-brand-red"
                    >
                      <Mail size={15} />
                      Reply via Email to Client
                    </a>
                    <button
                      className="btn btn-outline-navy"
                      onClick={() => updateInquiryStatus(selectedInquiry.id, 'Site Survey Scheduled')}
                    >
                      Schedule Bukoto Engineers Dispatch
                    </button>
                  </div>
                </div>
              ) : (
                <div className="inquiry-placeholder-card">
                  <Inbox size={48} />
                  <h3>Select an inquiry to view technical scope</h3>
                  <p>Click on any client scoping request from the list on the left to inspect project specifications.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 3: PROJECTS */}
        {activeTab === 'projects' && (
          <div className="admin-tab-content">
            <div className="tab-actions-header">
              <div>
                <h2>Project Blueprints ({projects.length})</h2>
                <p>Manage sample engineering case studies displayed on the public `/projects` portfolio.</p>
              </div>
              <button
                className="btn btn-brand-red"
                onClick={() => setEditingProject({ isNew: true })}
              >
                <Plus size={16} />
                Create New Project Blueprint
              </button>
            </div>

            <div className="cms-table-wrapper">
              <table className="cms-table">
                <thead>
                  <tr>
                    <th>Project Title</th>
                    <th>Category</th>
                    <th>Location</th>
                    <th>Sector</th>
                    <th>Key Metric</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((proj) => (
                    <tr key={proj.id}>
                      <td>
                        <strong>{proj.title}</strong>
                      </td>
                      <td>
                        <span className="table-badge">{proj.category}</span>
                      </td>
                      <td>{proj.location}</td>
                      <td>{proj.sector}</td>
                      <td>{proj.metrics?.[0]?.value || 'Verified'}</td>
                      <td>
                        <div className="table-actions-cell">
                          <button
                            className="action-icon-btn"
                            title="Edit"
                            onClick={() => setEditingProject(proj)}
                          >
                            <Edit3 size={15} />
                          </button>
                          <button
                            className="action-icon-btn btn-danger"
                            title="Delete"
                            onClick={() => deleteProject(proj.id)}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: INSIGHTS */}
        {activeTab === 'insights' && (
          <div className="admin-tab-content">
            <div className="tab-actions-header">
              <div>
                <h2>Knowledge Hub & Articles ({insights.length})</h2>
                <p>Publish and manage technical whitepapers on `/insights`.</p>
              </div>
              <button
                className="btn btn-brand-red"
                onClick={() => setEditingArticle({ isNew: true })}
              >
                <Plus size={16} />
                Draft New Whitepaper
              </button>
            </div>

            <div className="cms-table-wrapper">
              <table className="cms-table">
                <thead>
                  <tr>
                    <th>Article Title</th>
                    <th>Topic / Category</th>
                    <th>Author</th>
                    <th>Date</th>
                    <th>Read Time</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {insights.map((art) => (
                    <tr key={art.id}>
                      <td>
                        <strong>{art.title}</strong>
                      </td>
                      <td>
                        <span className="table-badge">{art.category}</span>
                      </td>
                      <td>{art.author}</td>
                      <td>{art.date}</td>
                      <td>{art.readTime}</td>
                      <td>
                        <div className="table-actions-cell">
                          <button
                            className="action-icon-btn"
                            title="Edit"
                            onClick={() => setEditingArticle(art)}
                          >
                            <Edit3 size={15} />
                          </button>
                          <button
                            className="action-icon-btn btn-danger"
                            title="Delete"
                            onClick={() => deleteArticle(art.id)}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 5: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="admin-tab-content">
            <div className="settings-cards-stack">
              <div className="settings-card">
                <h3>ONICC Operational Headquarters</h3>
                <div className="settings-form-grid">
                  <div>
                    <label>Physical Address</label>
                    <input type="text" readOnly defaultValue="Bukoto, opposite Kabira Country Club, Kampala, Uganda" />
                  </div>
                  <div>
                    <label>Working Hours (EAT)</label>
                    <input type="text" readOnly defaultValue="Mon – Fri: 8:00 AM – 5:30 PM, Sat: 9:00 AM – 1:00 PM" />
                  </div>
                  <div>
                    <label>National Carrier Interconnects</label>
                    <input type="text" readOnly defaultValue="MTN Uganda, Airtel Uganda, RENU Optical Backbone" />
                  </div>
                  <div>
                    <label>Engineering Compliance</label>
                    <input type="text" readOnly defaultValue="Uganda Communications Commission (UCC) & TIA/EIA-568-C" />
                  </div>
                </div>
              </div>

              <div className="settings-card">
                <h3>Data Persistence & Reset</h3>
                <p>All inquiries, custom project additions, and new articles are stored inside your browser's persistent storage.</p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => {
                    if (window.confirm('Reset all CMS data to factory defaults?')) {
                      localStorage.removeItem('onicc_inquiries')
                      localStorage.removeItem('onicc_custom_projects')
                      localStorage.removeItem('onicc_custom_insights')
                      window.location.reload()
                    }
                  }}
                >
                  Reset CMS Data to Initial Factory Defaults
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL: Edit/Add Project */}
      {editingProject && (
        <div className="modal-backdrop" onClick={() => setEditingProject(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="cms-modal-header">
              <h3>{editingProject.isNew ? 'Create New Project Blueprint' : 'Edit Project Blueprint'}</h3>
              <button className="modal-close-btn" onClick={() => setEditingProject(null)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveProject} className="cms-modal-form">
              <div className="form-group">
                <label>Project Title</label>
                <input name="title" defaultValue={editingProject.title || ''} required />
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label>Category Name</label>
                  <select name="category" defaultValue={editingProject.category || 'Telecommunications'}>
                    <option value="Telecommunications">Telecommunications</option>
                    <option value="Solar & Power">Solar & Power</option>
                    <option value="Security & Surveillance">Security & Surveillance</option>
                    <option value="Software & Digital">Software & Digital</option>
                    <option value="Cloud, Hosting & Domains">Cloud, Hosting & Domains</option>
                    <option value="ICT Laboratory Solutions">ICT Laboratory Solutions</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Category Filter Key</label>
                  <select name="categoryKey" defaultValue={editingProject.categoryKey || 'telecom'}>
                    <option value="telecom">telecom</option>
                    <option value="solar">solar</option>
                    <option value="security">security</option>
                    <option value="software">software</option>
                    <option value="cloud">cloud</option>
                    <option value="labs">labs</option>
                  </select>
                </div>
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label>Sector / Industry</label>
                  <input name="sector" defaultValue={editingProject.sector || 'Commercial'} required />
                </div>
                <div className="form-group">
                  <label>Location in Uganda</label>
                  <input name="location" defaultValue={editingProject.location || 'Kampala, Uganda'} required />
                </div>
              </div>

              <div className="form-group">
                <label>Featured Image URL (Unsplash)</label>
                <input
                  name="image"
                  defaultValue={editingProject.image || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'}
                />
              </div>

              <div className="form-group">
                <label>Project Summary</label>
                <textarea name="summary" rows={2} defaultValue={editingProject.summary || ''} required />
              </div>

              <div className="form-group">
                <label>The Engineering Challenge</label>
                <textarea name="challenge" rows={2} defaultValue={editingProject.challenge || ''} required />
              </div>

              <div className="form-group">
                <label>ONICC Technical Solution</label>
                <textarea name="solution" rows={2} defaultValue={editingProject.solution || ''} required />
              </div>

              <div className="form-group">
                <label>Key Deliverables (One per line)</label>
                <textarea
                  name="deliverables"
                  rows={3}
                  defaultValue={editingProject.deliverables?.join('\n') || 'Certified installation\nFull testing & commissioning'}
                  required
                />
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label>Metric 1 Value</label>
                  <input name="metric1_val" defaultValue={editingProject.metrics?.[0]?.value || '10 Gbps'} />
                </div>
                <div className="form-group">
                  <label>Metric 1 Label</label>
                  <input name="metric1_lbl" defaultValue={editingProject.metrics?.[0]?.label || 'Speed'} />
                </div>
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label>Metric 2 Value</label>
                  <input name="metric2_val" defaultValue={editingProject.metrics?.[1]?.value || '99.9%'} />
                </div>
                <div className="form-group">
                  <label>Metric 2 Label</label>
                  <input name="metric2_lbl" defaultValue={editingProject.metrics?.[1]?.label || 'Uptime'} />
                </div>
              </div>

              <div className="modal-actions-bar">
                <button type="button" className="btn btn-outline-navy" onClick={() => setEditingProject(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-brand-red">
                  <Save size={15} />
                  Save Project Blueprint
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* MODAL: Edit/Add Article */}
      {editingArticle && (
        <div className="modal-backdrop" onClick={() => setEditingArticle(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="cms-modal-header">
              <h3>{editingArticle.isNew ? 'Draft New Technical Whitepaper' : 'Edit Whitepaper'}</h3>
              <button className="modal-close-btn" onClick={() => setEditingArticle(null)}>
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleSaveArticle} className="cms-modal-form">
              <div className="form-group">
                <label>Article Title</label>
                <input name="title" defaultValue={editingArticle.title || ''} required />
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label>Category Label</label>
                  <input name="category" defaultValue={editingArticle.category || 'Optical Networking'} required />
                </div>
                <div className="form-group">
                  <label>Category Key</label>
                  <select name="categoryKey" defaultValue={editingArticle.categoryKey || 'networking'}>
                    <option value="networking">networking</option>
                    <option value="solar">solar</option>
                    <option value="security">security</option>
                    <option value="labs">labs</option>
                    <option value="software">software</option>
                  </select>
                </div>
              </div>

              <div className="form-row-two">
                <div className="form-group">
                  <label>Author / Team</label>
                  <input name="author" defaultValue={editingArticle.author || 'ONICC Engineering Team'} required />
                </div>
                <div className="form-group">
                  <label>Date & Read Time</label>
                  <input name="readTime" defaultValue={editingArticle.readTime || '6 min read'} required />
                </div>
              </div>

              <div className="form-group">
                <label>Header Image URL</label>
                <input
                  name="image"
                  defaultValue={editingArticle.image || 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'}
                />
              </div>

              <div className="form-group">
                <label>Lead Excerpt</label>
                <textarea name="excerpt" rows={2} defaultValue={editingArticle.excerpt || ''} required />
              </div>

              <div className="form-group">
                <label>Full Content (Separate paragraphs with blank lines)</label>
                <textarea
                  name="content"
                  rows={4}
                  defaultValue={editingArticle.content?.join('\n\n') || ''}
                  required
                />
              </div>

              <div className="form-group">
                <label>Key Takeaways (One per line)</label>
                <textarea
                  name="takeaways"
                  rows={3}
                  defaultValue={editingArticle.takeaways?.join('\n') || ''}
                />
              </div>

              <div className="modal-actions-bar">
                <button type="button" className="btn btn-outline-navy" onClick={() => setEditingArticle(null)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-brand-red">
                  <Save size={15} />
                  Publish Whitepaper
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
