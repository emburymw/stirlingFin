import acpiImage from '../../../assets/acpiImage.png'
import { LINKS } from '../../../lib/constants/links.js'
import { ButtonLink } from '../../../components/ui/ButtonLink.jsx'
import alphabullImage from '../../../assets/alphaBull.png'

export default function InvestmentManagementPage() {
  return (
    <article className="page prose">
      <header className="page-hero">
        <p className="page-eyebrow">Services · Investment management</p>
        <h1>Personalized portfolio construction and oversight.</h1>
        <p className="page-lead">
          Strategic investment selections designed to grow and protect your
          wealth.
        </p>
        <ButtonLink href={LINKS.calendlyNewClient}>Book a consultation</ButtonLink>
      </header>

      <section aria-labelledby="im-intro-heading">
        <h2 id="im-intro-heading" className="visually-hidden">
          Approach
        </h2>
        <p>
          There is no shortage of investment &quot;noise&quot; — from neighbours
          and headlines to well-meaning coworkers. We focus on a steady,
          intentional approach aligned with your goals, time horizon, and risk
          tolerance.
        </p>
        <p>
          Portfolio management services are provided alongside the team at{' '}
          <strong>Alphabull Canada Private Wealth Management</strong>.
        </p>
        <p>
          We prioritize well-diversified, cost-efficient implementation and
          thoughtful use of registered accounts — TFSA, RRSP, RESP, FHSA — as part
          of your broader plan.
        </p>
      </section>

      <section className="fee-schedule-section" aria-labelledby="fee-heading">
        <h2 id="fee-heading">Transparent fee structure</h2>
        <p>
          Advisory fees are tiered based on the total value of your investments
          (assets under management).
        </p>
        <div className="fee-schedule">
          <p className="fee-schedule-title">Client Fee Schedule</p>
          <div className="fee-schedule-table-wrap">
            <table className="fee-schedule-table">
              <thead>
                <tr>
                  <th scope="col">Assets Under Management (AUM)</th>
                  <th scope="col">Fee Structure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>&lt;$250K AUM</td>
                  <td>1.35% annually</td>
                </tr>
                <tr>
                  <td>$250K - $1M AUM</td>
                  <td>1% annually</td>
                </tr>
                <tr>
                  <td>$1M - $2M AUM</td>
                  <td>0.95% annually</td>
                </tr>
                <tr>
                  <td>$2-$3M AUM</td>
                  <td>0.9% annually</td>
                </tr>
                <tr>
                  <td>&gt;$3M AUM</td>
                  <td>0.85% annually</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="fee-schedule-footnote">
            *AUM = Assets Under Management (total value of your investments)
          </p>
        </div>
      </section>

      <section aria-labelledby="im-outcomes-heading">
        <h2 id="im-outcomes-heading">Outcomes for you</h2>
        <ul className="bullet-list">
          <li>Calmness through market ups and downs.</li>
          <li>Relief from second-guessing every headline.</li>
          <li>
            Maximized results through disciplined process, performance, and cost
            efficiency.
          </li>
        </ul>
      </section>

      <section className="page-cta-band">
        <h2>
          A thoughtful investment strategy begins with understanding your personal
          goals and circumstances.
        </h2>
        <ButtonLink href={LINKS.calendlyNewClient}>Get started</ButtonLink>
      </section>

      <section className="compliance-strip" aria-label="Regulatory partners">
        <figure className="compliance-banner">
          <img
            src={acpiImage}
            alt="Aligned Capital Partners Inc. and related partner marks."
            width={1120}
            height={360}
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="partner-blurb">
          <img
            className="partner-blurb-logo"
            src={alphabullImage}
            alt=""
            width={320}
            height={104}
            loading="lazy"
            decoding="async"
          />
          <p className="partner-blurb-text">
            Portfolio management services are provided alongside the team at{' '}
            <strong>Alphabull Canada Private Wealth Management</strong>.
          </p>
        </div>
      </section>
    </article>
  )
}
