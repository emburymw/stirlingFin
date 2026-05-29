import { Link } from 'react-router-dom'
import { ROUTES } from '../../lib/constants/routes.js'

const cards = [
  {
    to: ROUTES.services.financialPlanning,
    title: 'Financial Planning',
    text: 'Coordinated strategy for long-term financial stability — cash flow, retirement, tax-aware planning, and insurance aligned to your goals.',
  },
  {
    to: ROUTES.services.investmentManagement,
    title: 'Investment Management',
    text: 'Ongoing portfolio oversight with a steady, intentional approach tied to your time horizon and risk tolerance.',
  },
  {
    to: ROUTES.services.insurance,
    title: 'Insurance Protection',
    text: 'Personal risk assessment and coverage coordination for life, disability, and critical illness.',
  },
]

export default function ServicesPage() {
  return (
    <article className="page prose">
      <header className="page-hero page-hero-compact">
        <p className="page-eyebrow">Services</p>
        <h1>How we help</h1>
        <p className="page-lead">
          Financial planning, investment guidance, and insurance — structured
          so you can move forward with clarity.
        </p>
      </header>

      <section className="service-cards" aria-labelledby="svc-grid-heading">
        <h2 id="svc-grid-heading" className="visually-hidden">
          Service areas
        </h2>
        <ul className="service-cards-list">
          {cards.map((c) => (
            <li key={c.to}>
              <Link to={c.to} className="service-card">
                <h3>{c.title}</h3>
                <p>{c.text}</p>
                <span className="service-card-cta">Learn more</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
