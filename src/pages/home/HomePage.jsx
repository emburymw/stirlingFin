import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants/routes.js'
import { LINKS } from '../../lib/constants/links.js'
import { ButtonLink } from '../../components/ui/ButtonLink.jsx'
import handshakeImage from '../../assets/handshake.jpg'

export default function HomePage() {
  return (
    <>
      <section
        className="home-hero"
        style={{ '--home-hero-image': `url(${handshakeImage})` }}
      >
        <div className="home-hero-inner">
          <p className="page-eyebrow">Stirling Financial</p>
          <h1>
            Your financial future, designed with clarity, confidence, and care.
          </h1>
          <p className="home-hero-sub">
            Here to help you navigate the financial complexities of life.
          </p>
          <p className="home-hero-body">
            We help clients work toward their wealth aspirations by demystifying
            financial planning — designing strategies that consider income,
            investments, taxes, and insurance as one coordinated picture.
          </p>
          <div className="home-hero-actions">
            <ButtonLink href={LINKS.calendlyNewClient}>
              Book a discovery call
            </ButtonLink>
            <Link to={ROUTES.contact} className="btn btn-secondary">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-svc-heading">
        <div className="section-inner">
          <h2 id="home-svc-heading">How we can help</h2>
          <p className="section-intro">
            Three ways we support professionals, families, and business owners in
            the Bow Valley.
          </p>
          <ul className="home-service-grid">
            <li>
              <Link
                to={ROUTES.services.financialPlanning}
                className="home-service-card"
              >
                <h3>Financial Planning</h3>
                <p>
                  Coordinated strategy for long-term financial stability across
                  your full financial life.
                </p>
                <span className="home-service-more">Learn more</span>
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.services.investmentManagement}
                className="home-service-card"
              >
                <h3>Investment Management</h3>
                <p>Ongoing investment portfolio oversight aligned to your plan.</p>
                <span className="home-service-more">Learn more</span>
              </Link>
            </li>
            <li>
              <Link to={ROUTES.services.insurance} className="home-service-card">
                <h3>Insurance Protection</h3>
                <p>
                  Personal risk assessment and coverage coordination when life
                  evolves.
                </p>
                <span className="home-service-more">Learn more</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="home-closing">
        <div className="section-inner prose prose-center">
          <h2>Partnering with you to set you and your family up for success</h2>
          <p>
            Families deserve a secure financial future. We care about helping
            you build a plan that reflects what matters most — and adjusting it
            as life changes.
          </p>
          <ButtonLink href={LINKS.calendlyNewClient}>Get started</ButtonLink>
        </div>
      </section>
    </>
  )
}
