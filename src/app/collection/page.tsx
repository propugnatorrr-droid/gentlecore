import type { Metadata } from "next";
import Link from "next/link";
import { products, isArchived } from "@/data/products";
import PageIntro from "@/components/PageIntro";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "The Full Collection",
  description: "Every piece currently presented by the house.",
};

const filters = [
  { href: "/collection", label: "All" },
  { href: "/handbags", label: "Handbags" },
  { href: "/watches", label: "Watches" },
  { href: "/jewelry", label: "Jewelry" },
];

export default function CollectionPage() {
  const items = products.filter((p) => !isArchived(p));
  return (
    <>
      <PageIntro
        label="The Floor"
        title="The Full Collection"
        intro="Every piece presently on the floor, across every discipline."
      />
      <section className="section">
        <div className="container">
          <nav
            aria-label="Collection filters"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "clamp(20px, 3vw, 40px)",
              marginBottom: "clamp(40px, 5vw, 64px)",
            }}
          >
            {filters.map((f) => (
              <Link key={f.label} href={f.href} className="cartier-link">
                {f.label}
              </Link>
            ))}
          </nav>
          <ProductGrid products={items} columns={3} />
        </div>
      </section>
    </>
  );
}
