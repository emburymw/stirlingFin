import { LINKS } from '../../../lib/constants/links.js'
import { handshakeHeroStyle } from '../../../lib/constants/hero.js'
import { ButtonLink } from '../../../components/ui/ButtonLink.jsx'
const steps = [
  {
    title: 'Discovery consultation',
    text: 'Understand your goals and challenges, review your financial position, and get to know each other.',
  },
  {
    title: 'Assessment & design',
    text: 'Analyze outcomes, design a strategic plan, and highlight opportunities for tax, growth, and insurance.',
  },
  {
    title: 'Strategy implementation',
    text: 'Onboarding, structuring the investment portfolio, and launching insurance coverage where appropriate.',
  },
  {
    title: 'Ongoing collaboration',
    text: 'Regular review meetings, adjusting the portfolio and plan, and ad hoc touchpoints when life changes.',
  },
]

export default function FinancialPlanningPage() {
  return (
    <article className="page prose">
      <header className="page-hero page-hero-photo" style={handshakeHeroStyle}>
        <div className="page-hero-panel">
          <p className="page-eyebrow">Services · Financial planning</p>
          <h1>A clear financial roadmap forward.</h1>
          <p className="page-lead">
            Careful financial analysis and thoughtful planning that empower you to
            live life on your terms.
          </p>
          <ButtonLink href={LINKS.calendlyNewClient}>Book a consultation</ButtonLink>
        </div>
      </header>

      <section aria-labelledby="fp-intro-heading">
        <h2 id="fp-intro-heading" className="visually-hidden">
          Introduction
        </h2>
        <p>
          Financial decisions rarely arrive one at a time — supporting children,
          preparing for retirement, managing taxes, and protecting your family with
          insurance can feel overwhelming. A coordinated plan helps make those
          moving parts manageable.
        </p>
      </section>

      <section aria-labelledby="peace-heading">
        <h2 id="peace-heading">A plan created to bring you peace of mind</h2>
        <p>
          We organize your situation into a strategy that reflects cash flow,
          retirement, lifestyle, family, and estate needs — integrating accounts
          such as TFSA, RRSP, RESP, and FHSA where appropriate, along with
          tax-aware decisions and insurance.
        </p>
      </section>

      <section className="process-block" aria-labelledby="process-heading">
        <h2 id="process-heading">Our process</h2>
        <ol className="process-steps">
          {steps.map((s, i) => (
            <li key={s.title}>
              <span className="process-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="fp-outcomes-heading">
        <h2 id="fp-outcomes-heading">Outcomes for you</h2>
        <ul className="bullet-list">
          <li>Confidence in your decision-making.</li>
          <li>A sense of control over your financial future.</li>
          <li>Reassurance that nothing important is being overlooked.</li>
        </ul>
      </section>

      <section className="page-cta-band">
        <h2>The right plan can make a meaningful difference on your future.</h2>
        <ButtonLink href={LINKS.calendlyNewClient}>Book a consultation</ButtonLink>
      </section>
    </article>
  )
}
