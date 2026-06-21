import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Handbags",
  description:
    "Rare and collector handbags — Hermès, Chanel, and more — presented through private dossiers worldwide.",
};

export default function HandbagsPage() {
  return (
    <>
      <PageIntro
        label="Handbags"
        title="Rare and collector handbags."
        intro="From the most sought silhouettes to exotic rarities — presented for private acquisition, with full set and condition details available on request."
      />
      <section className="shell section">
        <ProductGrid products={getByCategory("handbags")} columns={4} />
      </section>
    </>
  );
}
