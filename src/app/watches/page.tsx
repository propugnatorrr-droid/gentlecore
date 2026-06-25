import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Watches",
  description: "Collector watches presented by Gentle Core.",
};

export default function WatchesPage() {
  const items = getByCategory("watches");
  return (
    <>
      <PageIntro
        label="House Discipline"
        title="Watches"
        intro="Collector references — Rolex, Patek Philippe, and others — verified, dated, and presented with their accompaniments."
      />
      <section className="section">
        <div className="container">
          <ProductGrid products={items} columns={3} />
        </div>
      </section>
    </>
  );
}
