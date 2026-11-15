import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Layers
} from 'lucide-react'
import PageHero from '../components/PageHero'
import InsightModal from '../components/InsightModal'
import { insightsData as defaultInsights } from '../data/insightsData'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedArticle, setSelectedArticle] = useState(null)
  const [insightsList, setInsightsList] = useState(defaultInsights)

  useEffect(() => {
    const saved = localStorage.getItem('onicc_custom_insights')
    if (saved) {
      try {
        setInsightsList(JSON.parse(saved))
      } catch {
        setInsightsList(defaultInsights)
      }
    }
  }, [])

  const categories = [
    { key: 'all', label: 'All Insights' },
    { key: 'networking', label: 'Optical Networking' },
    { key: 'solar', label: 'Solar & Power' },
    { key: 'security', label: 'Premises Security' },
    { key: 'labs', label: 'Institutional ICT' },
    { key: 'software', label: 'Digital Transformation' }
  ]

  const filteredArticles = activeCategory === 'all'
    ? insightsList
    : insightsList.filter((art) => art.categoryKey === activeCategory)

  const featuredArticle = filteredArticles[0]
  const remainingArticles = filteredArticles.filter((art) => art.id !== featuredArticle?.id || activeCategory !== 'all')

  return (
    <div className="insights-page">
      {/* 1. Page Hero */}
      <PageHero
        eyebrow="TECHNICAL INSIGHTS & BRIEFINGS"
        title="Knowledge, infrastructure analysis, and technology perspectives for"
        highlightText="East African organizations."
        description="Explore in-depth technical articles on metro fiber backhauls, commercial solar microgrids, AI video surveillance, educational computer labs, and enterprise digital systems."
        breadcrumbs={[{ label: 'Insights' }]}
        badge="Engineering Knowledge Hub"
      />

      {/* 2. Interactive Category Filter Bar */}
      <section className="insights-filter-bar">
        <div className="container filter-container">
          <span className="filter-label">Filter by Topic:</span>
          <div className="filter-pills-wrap" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={activeCategory === cat.key}
                className={`filter-pill ${activeCategory === cat.key ? 'is-active' : ''}`}
                onClick={() => setActiveCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Main Article (when viewing all) */}
      {activeCategory === 'all' && featuredArticle && (
        <section className="featured-article-section section-padding-sm">
          <div className="container">
            <div className="featured-article-card" onClick={() => setSelectedArticle(featuredArticle)}>
              <div className="featured-media-col">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="featured-cover-img"
                />
                <span className="featured-flag">Featured Whitepaper</span>
              </div>

              <div className="featured-content-col">
                <div className="article-meta-tags">
                  <span className="badge-category">{featuredArticle.category}</span>
                  <span className="badge-whitepaper">{featuredArticle.badge}</span>
                </div>

                <h2 className="featured-title">{featuredArticle.title}</h2>
                <p className="featured-excerpt">{featuredArticle.excerpt}</p>

                <div className="featured-author-strip">
                  <span className="author-item"><User size={14} /> {featuredArticle.author}</span>
                  <span className="author-item"><Calendar size={14} /> {featuredArticle.date}</span>
                  <span className="author-item"><Clock size={14} /> {featuredArticle.readTime}</span>
                </div>

                <div className="featured-action-row">
                  <button className="btn btn-primary">
                    <span>Read Full Whitepaper</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Article Editorial Grid */}
      <section className="section-padding articles-grid-section">
        <div className="container">
          <div className="articles-grid">
            {(activeCategory === 'all' ? remainingArticles : filteredArticles).map((article) => (
              <article
                key={article.id}
                className="article-card"
                onClick={() => setSelectedArticle(article)}
              >
                <div className="article-card-media">
                  <img src={article.image} alt={article.title} className="article-thumb-img" loading="lazy" />
                  <span className="article-category-badge">{article.category}</span>
                </div>

                <div className="article-card-body">
                  <div className="article-meta-row">
                    <span><Calendar size={13} /> {article.date}</span>
                    <span><Clock size={13} /> {article.readTime}</span>
                  </div>

                  <h3 className="article-card-title">{article.title}</h3>
                  <p className="article-card-excerpt">{article.excerpt}</p>

                  <div className="article-card-footer">
                    <span className="read-more-link">
                      <span>Read Briefing</span>
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="no-articles-box">
              <Layers size={36} />
              <h3>No articles in this topic currently.</h3>
              <p>Check back soon as our engineering practice publishes new field notes and whitepapers.</p>
              <button className="btn btn-outline-navy" onClick={() => setActiveCategory('all')}>
                Show All Insights
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5. Bottom Consultation Banner */}
      <section className="section-cta-banner">
        <div className="container cta-banner-card">
          <div className="cta-card-content">
            <span className="cta-card-eyebrow">HAVE A TOPIC YOU’D LIKE COVERED?</span>
            <h2 className="cta-card-title">Looking for technical guidance on a complex setup?</h2>
            <p className="cta-card-desc">
              Our engineering team regularly consults with institutional IT directors, facilities managers,
              and CTOs across Uganda. Reach out to schedule a technical discovery call.
            </p>
          </div>
          <div className="cta-card-buttons">
            <Link to="/contact" className="btn btn-brand-red btn-lg">
              Contact Engineering Team
              <ArrowRight size={17} />
            </Link>
            <Link to="/solutions" className="btn btn-outline-white btn-lg">
              Explore Solutions
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for viewing article in full */}
      {selectedArticle && (
        <InsightModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </div>
  )
}
