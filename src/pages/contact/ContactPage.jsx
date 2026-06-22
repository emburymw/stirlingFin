import { LINKS } from '../../lib/constants/links.js'
import { handshakeHeroStyle } from '../../lib/constants/hero.js'
import { ButtonLink } from '../../components/ui/ButtonLink.jsx'

export default function ContactPage() {
  return (
    <article className="page prose">
      <header
        className="page-hero page-hero-compact page-hero-photo"
        style={handshakeHeroStyle}
      >
        <div className="page-hero-panel">
          <p className="page-eyebrow">Contact</p>
          <h1>Get in touch</h1>
          <p className="page-lead">
            Book time with us or send a message — we&apos;ll respond as soon as we
            can.
          </p>
        </div>
      </header>

      <section className="contact-grid" aria-labelledby="contact-details-heading">
        <div className="contact-card">
          <h2 id="contact-details-heading">Office</h2>
          <p>
            Canmore, AB T1W0N6
          </p>
          <p>
            <a className="text-link" href="mailto:drew@stirlingfinancial.ca">
              drew@stirlingfinancial.ca
            </a>
            <br />
            <a className="text-link" href="tel:+14035550199">
              (403) 555-0199
            </a>
          </p>
          <div className="map-embed">
            <iframe
              title="Stirling Financial office location — Canmore, AB"
              src="https://maps.google.com/maps?q=Canmore,+AB+T1W0N6&hl=en&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contact-card">
          <h2>Schedule</h2>
          <p className="contact-schedule-intro">
            Choose the booking flow that fits your situation.
          </p>
          <div className="contact-actions">
            <ButtonLink href={LINKS.calendlyNewClient}>
              New client — book a call
            </ButtonLink>
            <ButtonLink href={LINKS.calendlyExisting} variant="secondary">
              Existing client — book a call
            </ButtonLink>
          </div>

          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <h2>Message</h2>
            <p className="form-note">
              //TODO: Add emailJS link to form
            </p>
            <label className="form-field">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" />
            </label>
            <label className="form-field">
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" />
            </label>
            <label className="form-field">
              <span>Message</span>
              <textarea name="message" rows={4} />
            </label>
            <button type="submit" className="btn">
              Send message
            </button>
          </form>
        </div>
      </section>
    </article>
  )
}
