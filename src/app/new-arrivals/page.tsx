import type { Metadata } from "next";
import { products, isInquirable } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import CollectionBrowser from "@/components/CollectionBrowser";

export const metadata: Metadata = {
  title: "The Collection",
  description:
    "The current collection — rare handbags, watches, and jewellery, each authenticated and available for private acquisition worldwide.",
};

export default function CollectionPage() {
  const available = products.filter(isInquirable);
  return (
    <>
      <PageIntro
        label="The Collection"
        title="Currently presented."
        intro="Each piece is authenticated, condition-graded, and offered for private acquisition. Filter by category, maison, or condition — then request the dossier for full details."
      />
      <section className="shell section">
        <CollectionBrowser products={available} />
      </section>
    </>
  );
}
