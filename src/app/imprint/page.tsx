import type { Metadata } from "next";
import { site, WHATSAPP_NUMBER } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Imprint",
  description:
    "Legal disclosure (Impressum) for Gentle Core Trading LLC, operator of gentlecore.co.",
};

const rows: Array<{ term: string; value: React.ReactNode }> = [
  { term: "Operator", value: site.legalName },
  { term: "Trading as", value: site.name },
  {
    term: "Address",
    value: (
      <>
        Private viewing by appointment, worldwide.
        {/* TODO: insert legal postal address before EU launch — Impressum requires verifiable contact under TMG §5 */}
        {" "}
        <span style={{ color: "var(--ink-60)" }}>
          {`{{POSTAL_ADDRESS_REQUIRED}}`}
        </span>
      </>
    ),
  },
  {
    term: "Contact",
    value: (
      <>
        Email:{" "}
        <a href={`mailto:${site.email}`} style={{ textDecoration: "underline" }}>
          {site.email}
        </a>
        {" / "}
        WhatsApp: +{WHATSAPP_NUMBER}
      </>
    ),
  },
  {
    term: "Represented by",
    value: (
      // TODO: insert authorised representative full name before EU launch
      <span style={{ color: "var(--ink-60)" }}>{`{{REPRESENTATIVE_NAME}}`}</span>
    ),
  },
  {
    term: "Commercial register",
    value: (
      // TODO: insert commercial registration number before EU launch
      <span style={{ color: "var(--ink-60)" }}>{`{{REGISTRATION_NUMBER}}`}</span>
    ),
  },
  {
    term: "VAT ID",
    value: (
      // TODO: insert VAT identification number before EU launch
      <span style={{ color: "var(--ink-60)" }}>{`{{VAT_ID}}`}</span>
    ),
  },
  {
    term: "Editor responsible for content under § 18 (2) MStV",
    value: (
      // TODO: insert responsible editor's full name and address before EU launch
      <span style={{ color: "var(--ink-60)" }}>{`{{NAME}}`}</span>
    ),
  },
];

export default function ImprintPage() {
  return (
    <>
      <PageIntro
        label="Legal Disclosure"
        title="Imprint"
        intro="Information provided pursuant to § 5 TMG and Art. 14 of Regulation (EU) No 524/2013."
      />
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <dl style={{ margin: 0 }}>
              {rows.map((r) => (
                <div
                  key={r.term}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    paddingBlock: 16,
                    borderTop: "1px solid var(--ink-10)",
                  }}
                >
                  <dt className="eyebrow">{r.term}</dt>
                  <dd
                    style={{
                      margin: 0,
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--ink)",
                    }}
                  >
                    {r.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div style={{ marginTop: "2.5em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                EU online dispute resolution
              </h2>
              <p style={pStyle}>
                The European Commission provides a platform for online dispute resolution:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  https://ec.europa.eu/consumers/odr
                </a>
                . We are not obliged nor willing to participate in dispute resolution
                proceedings before a consumer arbitration board.
              </p>
            </div>

            <div style={{ marginTop: "2.5em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                Disclaimer
              </h2>
              <p style={pStyle}>
                The contents of this site have been compiled with reasonable care. We make
                no warranty as to the accuracy, completeness, or currency of the content.
                Where this site contains links to third-party websites, the operators of
                those sites are solely responsible for their content; we exercised reasonable
                care in selecting linked pages at the time of linking but have no ongoing
                influence over their content.
              </p>
            </div>

            <p className="eyebrow" style={{ color: "var(--ink-60)", marginTop: "3em" }}>
              Last updated: 2026-06-25
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const pStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.7,
  color: "var(--ink)",
  marginBottom: "0.9em",
};
