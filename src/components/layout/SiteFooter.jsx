import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants/routes.js'
import { LINKS } from '../../lib/constants/links.js'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <strong>Stirling Financial</strong>
          <p className="site-footer-tag">
            Wealth management for professionals, families, and business owners in
            the Bow Valley.
          </p>
        </div>

        <div className="site-footer-links">
          <Link to={ROUTES.contact}>Contact</Link>
          <Link to={ROUTES.acpi}>ACPI &amp; disclosures</Link>
          <a
            href={LINKS.clientPortal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Client portal
          </a>
        </div>

        <div className="site-footer-social">
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="site-footer-legal">
        <p>
          <small>
            Investment products and services are offered through Aligned Capital
            Partners Inc. (ACPI), an investment dealer regulated by the Canadian
            Investment Regulatory Organization (CIRO). Stirling Financial is a
            trade name of [legal entity — confirm with compliance]. This site
            is for informational purposes and does not constitute an offer or
            solicitation. Past performance does not guarantee future results.
            Full regulatory disclosures and disclaimers belong here — replace
            with text from your disclaimer library.
          </small>
        </p>
      </div>
    </footer>
  )
}
