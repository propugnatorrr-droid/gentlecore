import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Watches",
  description:
    "Collector watches — Rolex, Patek Philippe, Audemars Piguet, Cartier — presented through private dossiers worldwide.",
};

export default function WatchesPage() {
  return (
    <>
      <PageIntro
        label="Watches"
        title="Collector horology."
        intro="Serious references, presented with full accompaniments where available. Box, papers, and condition notes are disclosed per piece in the private dossier."
      />
      <section className="shell section">
        <ProductGrid products={getByCategory("watches")} columns={4} />
      </section>
    </>
  );
}
