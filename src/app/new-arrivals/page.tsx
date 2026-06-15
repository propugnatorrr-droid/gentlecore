import type { Metadata } from "next";
import { getNewArrivals } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "New Arrivals",
  description:
    "Recently presented handbags, watches, and jewelry — curated in Dubai and available for private acquisition.",
};

export default function NewArrivalsPage() {
  return (
    <>
      <PageIntro
        label="New Arrivals"
        title="Recently presented."
        intro="The latest pieces to enter the private preview. Each is offered for private acquisition — request the dossier for full details."
      />
      <section className="shell section">
        <ProductGrid products={getNewArrivals()} columns={4} />
      </section>
    </>
  );
}
