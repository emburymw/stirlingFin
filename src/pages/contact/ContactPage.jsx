import { LINKS } from '../../lib/constants/links.js'
import { ButtonLink } from '../../components/ui/ButtonLink.jsx'

export default function ContactPage() {
  return (
    <article className="page prose">
      <header className="page-hero page-hero-compact">
        <p className="page-eyebrow">Contact</p>
        <h1>Get in touch</h1>
        <p className="page-lead">
          Book time with us or send a message — we&apos;ll respond as soon as we
          can.
        </p>
      </header>

      <section className="contact-grid" aria-labelledby="contact-details-heading">
        <div>
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
          <div className="placeholder-box map-placeholder" role="note">
            Map embed — add Google Maps or Squarespace block
          </div>
        </div>

        <div>
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
              Wire this form to your CRM or email provider — placeholder for now.
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
