import { useEffect } from 'react'
import { X, Calendar, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function InsightModal({ article, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [onClose])

  if (!article) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-container modal-container--article" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close article">
          <X size={20} />
        </button>

        <div className="modal-article-header">
          <div className="modal-article-meta-top">
            <span className="modal-category-badge">{article.category}</span>
            <span className="article-badge-tag">{article.badge}</span>
          </div>

          <h1 className="modal-article-title">{article.title}</h1>

          <div className="modal-article-author-strip">
            <div className="author-info-box">
              <User size={15} />
              <span>{article.author}</span>
            </div>
            <div className="author-info-box">
              <Calendar size={15} />
              <span>{article.date}</span>
            </div>
            <div className="author-info-box">
              <Clock size={15} />
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>

        <div className="modal-article-hero-img-wrap">
          <img src={article.image} alt={article.title} className="modal-article-img" />
        </div>

        <div className="modal-article-body">
          <p className="article-lead-paragraph">{article.excerpt}</p>

          <div className="article-full-content">
            {article.content?.map((paragraph, idx) => (
              <p key={idx} className="article-p">{paragraph}</p>
            ))}
          </div>

          {article.takeaways && (
            <div className="article-takeaways-card">
              <h4>
                <CheckCircle2 size={18} className="takeaway-icon" />
                Key Engineering Takeaways
              </h4>
              <ul>
                {article.takeaways.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="article-footer-cta">
            <div>
              <h4>Have an infrastructure challenge?</h4>
              <p>Consult with ONICC’s engineering team in Kampala for site surveys, optical testing, or power audits.</p>
            </div>
            <Link to="/contact" className="btn btn-brand-red" onClick={onClose}>
              Inquire with ONICC
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
