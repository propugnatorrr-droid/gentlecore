import type { Metadata } from "next";
import Link from "next/link";
import { getByCategory } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Jewelry",
  description: "Fine jewelry presented by request.",
};

export default function JewelryPage() {
  const items = getByCategory("jewelry");

  return (
    <>
      <PageIntro
        label="House Discipline"
        title="Jewelry"
        intro="Fine and signed jewelry, presented by request."
      />
      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 24,
                maxWidth: 560,
                margin: "0 auto",
                padding: "clamp(40px, 6vw, 80px) 0",
              }}
            >
              <h2 className="h2">By Request</h2>
              <p className="body body-lg">
                Our jewelry presentations are entirely by request. Open a
                private inquiry to discuss available pieces.
              </p>
              <Link href="/source-request" className="cartier-link">
                Open a Private Inquiry <span className="arrow">→</span>
              </Link>
            </div>
          ) : (
            <ProductGrid products={items} columns={3} />
          )}
        </div>
      </section>
    </>
  );
}
