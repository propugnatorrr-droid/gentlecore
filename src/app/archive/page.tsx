import type { Metadata } from "next";
import { getArchive } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "The Archive",
  description: "Pieces previously presented by the house.",
};

export default function ArchivePage() {
  const items = getArchive();
  return (
    <>
      <PageIntro
        label="Previously Presented"
        title="The Archive"
        intro="A quiet record of pieces that have passed through the house."
      />
      <section className="section">
        <div className="container">
          {items.length === 0 ? (
            <p
              className="body"
              style={{
                textAlign: "center",
                maxWidth: 480,
                margin: "clamp(40px, 6vw, 80px) auto",
                color: "var(--ink-60)",
              }}
            >
              The archive is being prepared.
            </p>
          ) : (
            <ProductGrid products={items} columns={3} />
          )}
        </div>
      </section>
    </>
  );
}
