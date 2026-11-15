/**
 * BrandLogo â€” Official ONICC Brand Lockup Component
 * Renders the authentic ONICC emblem alongside the bold red wordmark,
 * cyan telecommunication transmission tower, and the corporate descriptor:
 * "OHMS NETWORK INFRASTRUCTURE AND COMMUNICATION COMPANY"
 */
export default function BrandLogo({ mode = 'light', variant = 'full', className = '' }) {
  return (
    <div className={`brand-lockup brand-lockup--${mode} brand-lockup--${variant} ${className}`}>
      {/* Authentic Emblem Icon */}
      <div className="brand-emblem-wrap">
        <img
          src="/images/onicc-symbol-transparent.png"
          alt="ONICC Globe Emblem"
          className="brand-emblem-img"
          width="48"
          height="48"
          loading="eager"
        />
      </div>

      {/* Brand Text Elements */}
      {variant !== 'emblem' && (
        <div className="brand-text-block">
          <div className="brand-wordmark-row">
            <span className="brand-wordmark-onicc">ONICC</span>
            {/* Telecommunication Radio Tower Icon */}
            <span className="brand-antenna-icon" title="Telecommunications & Network Tower">
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Tower Legs & Cross Braces */}
                <path d="M 6 22 L 12 7 L 18 22" />
                <path d="M 8.5 16 L 15.5 16" />
                <path d="M 10 11.5 L 14 11.5" />
                <path d="M 8.5 16 L 14 11.5" />
                <path d="M 15.5 16 L 10 11.5" />
                <path d="M 12 7 L 12 2" />
                {/* Radiating Broadcast Wave Arcs */}
                <path d="M 7.5 4 C 8.8 2.8 10.3 2 12 2 C 13.7 2 15.2 2.8 16.5 4" strokeDasharray="0.5 1.5" />
                <path d="M 5 6 C 7 3.5 9.3 2.5 12 2.5 C 14.7 2.5 17 3.5 19 6" />
              </svg>
            </span>
          </div>

          {variant === 'full' && (
            <span className="brand-descriptor">
              OHMS NETWORK INFRASTRUCTURE
              <br />
              AND COMMUNICATION COMPANY
            </span>
          )}
        </div>
      )}
    </div>
  )
}