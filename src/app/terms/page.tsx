import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms governing the use of gentlecore.co and inquiries with Gentle Core.",
};

const sections: Array<{ heading: string; body: string[] }> = [
  {
    heading: "Introduction",
    body: [
      "These terms govern your use of gentlecore.co (the \"site\"). By using the site, you accept these terms.",
    ],
  },
  {
    heading: "About Gentle Core",
    body: [
      `${site.legalName} operates as an independent luxury resale platform. We are not affiliated with, endorsed by, or sponsored by any of the brands whose pieces we present. All trademarks, trade names, and logos remain the property of their respective owners; references on the site are made in a nominative, descriptive capacity.`,
    ],
  },
  {
    heading: "Nature of presentations",
    body: [
      "Pieces are presented for private inquiry. No prices are published on the site. No item is sold through the site directly: transactions are concluded by separate written agreement following authentication and viewing.",
    ],
  },
  {
    heading: "Inquiries and reservations",
    body: [
      "An inquiry submitted through the site is an invitation to engage; it is not a binding offer to purchase, nor an acceptance by us. A piece is considered reserved only when we confirm the reservation in writing. Reservations may be released if not concluded within a period agreed at the time.",
    ],
  },
  {
    heading: "Authentication and condition",
    body: [
      "Every piece is examined by our specialists. Condition is graded in good faith using consistent terminology. Buyers are encouraged to view a piece in person, or via live video, before concluding a purchase.",
    ],
  },
  {
    heading: "Right of withdrawal",
    body: [
      "For consumers resident in the European Union, the statutory right of withdrawal under Directive 2011/83/EU applies to qualifying distance contracts. Because each piece is unique and inspected, certain conditions and statutory exceptions may apply. Please see our Returns & Cancellation policy for full details.",
    ],
  },
  {
    heading: "Intellectual property",
    body: [
      "All content on the site — photography, copy, layout, and arrangement — is owned by or licensed to Gentle Core. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.",
    ],
  },
  {
    heading: "No warranties beyond statutory",
    body: [
      "The site is provided on an \"as is\" and \"as available\" basis, subject to mandatory consumer protection laws. We make no warranties beyond those required by law.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "To the maximum extent permitted by applicable law, our liability arising out of or in connection with the site and our services is limited. Nothing in these terms limits our liability for fraud, willful misconduct, or any other liability that cannot be excluded or limited under mandatory European Union consumer protection law.",
    ],
  },
  {
    heading: "Governing law and forum",
    body: [
      "These terms are governed by the laws applicable to the place of establishment of Gentle Core Trading LLC, without prejudice to mandatory consumer protection rights you enjoy in your country of habitual residence.",
    ],
  },
  {
    heading: "Contact",
    body: [`For any question concerning these terms, write to ${site.email}.`],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageIntro
        label="Terms"
        title="Terms of Use"
        intro="The terms on which we present pieces and engage with inquiries."
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
            <p className="eyebrow" style={{ color: "var(--ink-60)", marginTop: "3em" }}>
              Last updated: 2026-06-25
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
