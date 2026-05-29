import { LINKS } from '../../../lib/constants/links.js'
import { ButtonLink } from '../../../components/ui/ButtonLink.jsx'

const reasons = [
  'Buying your first home',
  'Starting a family',
  'Entrepreneurs seeking traditional group benefits',
  'Maximizing intergenerational wealth transfer',
]

const offerings = [
  {
    title: 'Life insurance',
    text: 'Protect income and obligations your family relies on.',
  },
  {
    title: 'Critical illness insurance',
    text: 'Bridge costs and choices if you face a serious diagnosis.',
  },
  {
    title: 'Disability insurance',
    text: 'Help replace income if you cannot work due to illness or injury.',
  },
]

export default function InsurancePage() {
  return (
    <article className="page prose">
      <header className="page-hero">
        <p className="page-eyebrow">Services · Insurance</p>
        <h1>Safeguard your financial future.</h1>
        <p className="page-lead">
          Life is full of curveballs — let&apos;s make sure you and your loved
          ones are protected from the unexpected.
        </p>
        <ButtonLink href={LINKS.calendlyNewClient}>Let&apos;s chat</ButtonLink>
      </header>

      <section aria-labelledby="ins-intro-heading">
        <h2 id="ins-intro-heading" className="visually-hidden">
          Why insurance matters
        </h2>
        <p>
          As life evolves — a mortgage, children, caring for parents — the risks
          you face change too. Insurance isn&apos;t about fear; it&apos;s about
          matching protection to what you&apos;ve built and who depends on you.
        </p>
        <p>
          We help identify gaps, compare cost-effective options, and coordinate
          coverage with your broader financial plan.
        </p>
      </section>

      <section aria-labelledby="reasons-heading">
        <h2 id="reasons-heading">Common reasons for coverage</h2>
        <ul className="icon-reasons">
          {reasons.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="offer-heading">
        <h2 id="offer-heading">Insurance offerings</h2>
        <ul className="offering-cards">
          {offerings.map((o) => (
            <li key={o.title}>
              <h3>{o.title}</h3>
              <p>{o.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="ins-outcomes-heading">
        <h2 id="ins-outcomes-heading">Outcomes for you</h2>
        <ul className="bullet-list">
          <li>Peace of mind that loved ones are considered.</li>
          <li>Income protection when it matters most.</li>
          <li>
            Tax-aware ideas and estate considerations where appropriate — as part
            of a broader strategy.
          </li>
        </ul>
      </section>

      <section className="page-cta-band">
        <h2>
          Protecting what you have built begins with understanding where you may
          be exposed.
        </h2>
        <ButtonLink href={LINKS.calendlyNewClient}>Review your needs</ButtonLink>
      </section>

      <section className="partner-logos" aria-label="Insurance partners">
        <p className="partner-logos-note">
          <small>
            Carrier relationships (e.g. RBC, Canada Life, Sun Life, Manulife) —
            add approved logos and wording from compliance.
          </small>
        </p>
      </section>
    </article>
  )
}
