import { LINKS } from '../../lib/constants/links.js'
import { ButtonLink } from '../../components/ui/ButtonLink.jsx'
import drewImage from '../../assets/drew-stirling.jpg'
import portraitPlaceholder from '../../assets/Portrait_Placeholder.png'

const team = [
  { name: 'Drew', role: 'Founder & Wealth Advisor', photo: drewImage },
  { name: 'Bailey', role: 'Branch Administrator', photo: portraitPlaceholder },
  { name: 'Ross', role: 'Client Admin Support', photo: portraitPlaceholder },
]

export default function AboutPage() {
  return (
    <article className="page prose">
      <header className="about-intro">
        <div className="about-intro-text page-hero-panel">
          <p className="page-eyebrow">About</p>
          <h1>Drew Stirling</h1>
          <p className="page-lead">Founder &amp; Wealth Advisor</p>
          <p>
            Stirling Financial is a Canmore-based wealth management practice
            serving the Bow Valley. Drew is a graduate of the University of Ottawa
            (BCom Honours), a QFP candidate, and holds a Canadian Life Insurance
            License.
          </p>
          <ButtonLink href={LINKS.calendlyNewClient}>Get in touch</ButtonLink>
        </div>
        <img
          className="about-intro-photo"
          src={drewImage}
          alt="Drew Stirling"
          width={380}
          height={380}
        />
      </header>

      <section aria-labelledby="about-story-heading">
        <h2 id="about-story-heading">About Drew and Stirling Financial</h2>
        <p>
          I started investing when I was fourteen. That curiosity led me to study
          finance and entrepreneurship at the University of Ottawa, then to begin
          my career at RBC Dominion Securities. Later I spent five years on the
          management team of Growcer, an ag-tech startup — helping it grow from a
          handful of people to more than thirty, with a mid eight-figure
          valuation.
        </p>
        <p>
          After a camping trip in the Rockies, my wife and I moved from Ontario
          to Canmore in 2021. I founded Stirling Financial to bring{' '}
          <strong>strategic, personal guidance</strong> to professionals,
          families, and business owners: steady support and measured decisions,
          not reacting to every market headline.
        </p>
      </section>

      <section className="about-outside" aria-labelledby="outside-heading">
        <h2 id="outside-heading">Outside the office</h2>
        <p>
          I&apos;m an avid hockey player (Junior A/B level), organize a local
          men&apos;s league, and take part in the Canmore Rotary Club and Chamber
          of Commerce. I love skiing and travel — Japan is a favourite
          destination.
        </p>
        <ul className="about-photo-strip" aria-label="Interest photos placeholder">
          <li>Rotary</li>
          <li>Hockey</li>
          <li>Skiing</li>
          <li>Travel</li>
        </ul>
      </section>

      <section aria-labelledby="team-heading">
        <h2 id="team-heading">Meet the team</h2>
        <ul className="team-grid">
          {team.map((m) => (
            <li key={m.name} className="team-card">
              <img
                className="team-photo"
                src={m.photo}
                alt=""
                width={172}
                height={172}
              />
              <h3>{m.name}</h3>
              <p>{m.role}</p>
            </li>
          ))}
        </ul>
        <section className="page-cta-band" aria-label="Work with us">
          <ButtonLink href={LINKS.calendlyNewClient}>Work with us</ButtonLink>
        </section>
      </section>
    </article>
  )
}
