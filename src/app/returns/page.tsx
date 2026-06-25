import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Returns & Cancellation",
  description:
    "Statutory right of withdrawal, returns conditions, and authenticity guarantee for Gentle Core pieces.",
};

const sections: Array<{ heading: string; body: string[] }> = [
  {
    heading: "Considered purchases",
    body: [
      "Each Gentle Core piece is unique, examined by our specialists, and presented to you in full before a purchase is concluded. We encourage every buyer to view a piece in person or via live video before agreeing.",
    ],
  },
  {
    heading: "Statutory right of withdrawal (EU consumers)",
    body: [
      "Under Directive 2011/83/EU on consumer rights, consumers resident in the European Union have a period of 14 days from the day of delivery to withdraw from a qualifying distance contract without giving reasons, subject to the exceptions set out in Article 16 of the Directive.",
      `To exercise this right, please notify ${site.email} clearly within 14 days of delivery. You must return the piece in its original, unworn condition and in its original packaging within 14 days of giving notice. Outbound shipping costs may be refunded; return shipping is borne by the buyer.`,
    ],
  },
  {
    heading: "Exceptions",
    body: [
      "Per Article 16 of Directive 2011/83/EU, certain contracts are exempt from the right of withdrawal — including goods made to the consumer's specifications, sealed goods unsealed for hygiene reasons, and sealed audio or visual recordings whose seal has been broken after delivery. These exceptions rarely apply to Gentle Core pieces but are listed here for completeness.",
    ],
  },
  {
    heading: "Authenticity guarantee",
    body: [
      "If a piece is, against expectation, found by an independent specialist not to be authentic, we accept its return and refund the purchase price in full irrespective of any statutory withdrawal period.",
    ],
  },
  {
    heading: "Refunds",
    body: [
      "Refunds are issued via the original payment method within 14 days of our receipt and inspection of the returned piece.",
    ],
  },
];

export default function ReturnsPage() {
  return (
    <>
      <PageIntro
        label="Returns Policy"
        title="Returns & Cancellation"
        intro="Your statutory rights, our authenticity guarantee, and the model withdrawal form."
      />
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {sections.map((s) => (
              <div key={s.heading} style={{ marginBottom: "2.25em" }}>
                <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                  {s.heading}
                </h2>
                {s.body.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--ink)",
                      marginBottom: "0.9em",
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            ))}

            <div style={{ marginBottom: "2.25em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                Model withdrawal form
              </h2>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.7,
                  color: "var(--ink)",
                  marginBottom: "0.9em",
                }}
              >
                You may use the following template if you wish to withdraw from a contract.
                Completing it is not mandatory.
              </p>
              <pre
                style={{
                  fontFamily: "var(--font-mono), ui-monospace, monospace",
                  fontSize: 13,
                  lineHeight: 1.7,
                  color: "var(--ink)",
                  background: "var(--mist)",
                  padding: "20px 24px",
                  whiteSpace: "pre-wrap",
                  margin: 0,
                  border: "1px solid var(--ink-10)",
                }}
              >
{`To: ${site.legalName} — ${site.email}

I hereby give notice that I withdraw from my contract of sale of the
following piece:

  Piece description: _________________________________
  Ordered on:        _________________________________
  Received on:       _________________________________

Name of consumer:    _________________________________
Address of consumer: _________________________________

Signature (if sent on paper): ________________________
Date:                _________________________________`}
              </pre>
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
