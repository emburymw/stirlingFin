import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants/routes.js'
import { LINKS } from '../../lib/constants/links.js'
import { handshakeHeroStyle } from '../../lib/constants/hero.js'
import { ButtonLink } from '../../components/ui/ButtonLink.jsx'

const services = [
  {
    to: ROUTES.services.financialPlanning,
    index: '01',
    title: 'Financial Planning',
    description:
      'Coordinated strategy for long-term financial stability across your full financial life.',
  },
  {
    to: ROUTES.services.investmentManagement,
    index: '02',
    title: 'Investment Management',
    description: 'Ongoing investment portfolio oversight aligned to your plan.',
  },
  {
    to: ROUTES.services.insurance,
    index: '03',
    title: 'Insurance Protection',
    description:
      'Personal risk assessment and coverage coordination when life evolves.',
  },
]

export default function HomePage() {
  return (
    <>
      <section className="home-hero" style={handshakeHeroStyle}>
        <div className="home-hero-inner">
          <div className="home-hero-panel">
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
        </div>
      </section>

      <section className="home-services" aria-labelledby="home-svc-heading">
        <div className="section-inner">
          <header className="home-section-head">
            <h2 id="home-svc-heading">How we can help</h2>
            <p className="section-intro">
              Three ways we support professionals, families, and business owners in
              the Bow Valley.
            </p>
          </header>
          <ul className="home-service-grid">
            {services.map((service) => (
              <li key={service.to}>
                <Link to={service.to} className="home-service-card">
                  <span className="home-service-index" aria-hidden="true">
                    {service.index}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className="home-service-more">Learn more</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="home-closing">
        <div className="home-closing-inner">
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
