import type { Metadata } from "next";
import { getArchive } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "The Archive",
  description:
    "Selected pieces previously presented and acquired through Gentle Core — a record of the house's curation.",
};

export default function ArchivePage() {
  return (
    <>
      <PageIntro
        label="The Archive"
        title="Previously presented."
        intro="Selected pieces previously presented by Gentle Core. Shown as a record of our curation — to source something comparable, submit a private request."
      />
      <section className="shell section">
        <ProductGrid
          products={getArchive()}
          columns={4}
          emptyNote="The archive will appear here as pieces move on. Source by request in the meantime."
        />
      </section>
    </>
  );
}
