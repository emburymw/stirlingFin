import { LINKS } from '../../lib/constants/links.js'

export default function ACPIPage() {
  return (
    <article className="page prose">
      <header className="page-hero page-hero-compact">
        <p className="page-eyebrow">ACPI &amp; affiliations</p>
        <h1>Aligned Capital Partners Inc.</h1>
        <p className="page-lead">
          Regulatory disclosures, client resources, and approved affiliations —
          including wealth-management relationships — as required by your dealer.
        </p>
      </header>

      <section aria-labelledby="acpi-portal-heading">
        <h2 id="acpi-portal-heading">Client portal</h2>
        <p>
          Existing clients can sign in to the ACPI client portal to view account
          information and documents.
        </p>
        <p>
          <a
            className="text-link"
            href={LINKS.clientPortal}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open client portal (Aligned)
          </a>
        </p>
      </section>

      <section aria-labelledby="acpi-affil-heading">
        <h2 id="acpi-affil-heading">Affiliations &amp; wealth services</h2>
        <p>
          ACPI and CIRO marks, plus links to approved wealth-service materials,
          belong here per your compliance package. If you link to specific
          wealth-management content (e.g. an ACPI partner site), place those
          links in this section as directed by your dealer.
        </p>
        <div className="placeholder-box" role="note">
          Logos: ACPI, CIRO, CIPF — pending assets
        </div>
      </section>

      <section aria-labelledby="acpi-copy-heading">
        <h2 id="acpi-copy-heading">Disclosures</h2>
        <p>
          Replace this block with the full text from your disclaimer library,
          including relationship disclosure and any required hypotheticals.
        </p>
      </section>
    </article>
  )
}
