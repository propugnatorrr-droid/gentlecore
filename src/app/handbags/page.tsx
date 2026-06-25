import type { Metadata } from "next";
import { getByCategory } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Handbags",
  description: "Rare handbags presented by Gentle Core.",
};

export default function HandbagsPage() {
  const items = getByCategory("handbags");
  return (
    <>
      <PageIntro
        label="House Discipline"
        title="Handbags"
        intro="A measured selection of rare handbags — Hermès, and selected others — each authenticated and presented in full."
      />
      <section className="section">
        <div className="container">
          <ProductGrid products={items} columns={3} />
        </div>
      </section>
    </>
  );
}
