import type { Metadata } from "next";
import { getNewArrivals } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "New Arrivals",
  description: "The latest pieces presented by the house.",
};

export default function NewArrivalsPage() {
  const items = getNewArrivals();
  return (
    <>
      <PageIntro
        label="Presented This Season"
        title="New Arrivals"
        intro="The latest acquisitions, freshly authenticated and presented to the floor."
      />
      <section className="section">
        <div className="container">
          <ProductGrid products={items} columns={3} />
        </div>
      </section>
    </>
  );
}
