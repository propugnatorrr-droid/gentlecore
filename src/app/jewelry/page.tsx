import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Jewelry",
  description:
    "Fine and signed jewelry — Cartier, Van Cleef & Arpels, and more — presented through private dossiers worldwide.",
};

export default function JewelryPage() {
  return (
    <>
      <PageIntro
        label="Jewelry"
        title="Fine and signed jewelry."
        intro="Iconic motifs and precious materials, presented for private acquisition. Documentation and set details are provided per piece on request."
      />
      <section className="shell section">
        <ProductGrid products={getByCategory("jewelry")} columns={4} />
      </section>
    </>
  );
}
