import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Shipping & Delivery",
  description:
    "Insured worldwide delivery, hand delivery, customs, and CITES handling for Gentle Core pieces.",
};

const sections: Array<{ heading: string; body: string[] }> = [
  {
    heading: "Worldwide insured delivery",
    body: [
      "Every piece is shipped insured for its full value, in unbranded packaging, through bonded specialist couriers such as Brink's or Ferrari Group (or an equivalent route appropriate to the destination). A tracking reference is provided once the piece is dispatched.",
    ],
  },
  {
    heading: "Hand delivery",
    body: [
      "Hand delivery is available by appointment for high-value pieces, subject to availability and route. Please discuss when concluding your purchase.",
    ],
  },
  {
    heading: "Customs & duties",
    body: [
      "The buyer is responsible for any import duties, taxes, and customs clearance fees levied in the destination country. We are happy to provide an indicative quotation on request.",
    ],
  },
  {
    heading: "CITES",
    body: [
      "Where a piece is composed of materials regulated under the Convention on International Trade in Endangered Species (CITES), such as certain exotic skins, the relevant documentation is verified and provided with the piece. The buyer is responsible for obtaining any further permits required by the destination country.",
    ],
  },
  {
    heading: "Timing",
    body: [
      "Once authentication is complete and payment has cleared, shipping is typically initiated within three business days. Transit times depend on the destination and on customs clearance.",
    ],
  },
  {
    heading: "Insurance during transit",
    body: [
      "Full all-risk transit insurance is included in every shipment, from collection until the moment of accepted delivery.",
    ],
  },
];

export default function ShippingPage() {
  return (
    <>
      <PageIntro
        label="Delivery"
        title="Shipping & Delivery"
        intro="How a piece travels from our hands to yours — discreetly, insured, and worldwide."
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
