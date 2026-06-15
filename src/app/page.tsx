import Image from "next/image";
import Link from "next/link";
import { getFeatured, getArchive } from "@/data/products";
import { site } from "@/lib/site";
import SectionReveal from "@/components/SectionReveal";
import SectionHeader from "@/components/SectionHeader";
import ProductGrid from "@/components/ProductGrid";
import CategoryCard from "@/components/CategoryCard";
import SourceRequestForm from "@/components/SourceRequestForm";
import CTAButton from "@/components/CTAButton";
import styles from "./home.module.css";

const previews = [
  { label: "Hermès", caption: "Handbags", href: "/handbags", image: "/products/mini-kelly-1.svg" },
  { label: "Watches", caption: "Collector horology", href: "/watches", image: "/products/daydate-1.svg" },
  { label: "Jewelry", caption: "Fine pieces", href: "/jewelry", image: "/products/love-bracelet-1.svg" },
  { label: "New Arrivals", caption: "Recently presented", href: "/new-arrivals", image: "/products/birkin-ostrich-1.svg" },
  { label: "Collector Pieces", caption: "Rare & sought", href: "/new-arrivals", image: "/products/nautilus-1.svg" },
  { label: "Previously Presented", caption: "The archive", href: "/archive", image: "/products/chanel-flap-1.svg" },
];

const dossier = [
  { n: "01", name: "Condition Notes", d: "A candid account of condition, with close detail on wear, corners, and finish." },
  { n: "02", name: "Set Details", d: "Exactly what accompanies the piece — box, dust bag, documentation, and accessories." },
  { n: "03", name: "Additional Media", d: "Further photographs and video on request, so nothing is left to assumption." },
  { n: "04", name: "Private Viewing", d: "Arrangements for viewing in Dubai, or secure worldwide shipping for buyers abroad." },
];

const steps = [
  { n: "01", name: "Inquire", d: "Request the dossier for a piece, or brief us on what you are seeking." },
  { n: "02", name: "Receive Dossier", d: "Price, condition notes, set details, and additional media, privately." },
  { n: "03", name: "Review Details", d: "Take your time. Ask for anything further you need to decide with confidence." },
  { n: "04", name: "Viewing / Shipping", d: "Private viewing in Dubai by arrangement, or insured worldwide delivery." },
  { n: "05", name: "Confirm Acquisition", d: "Finalise discreetly, with documentation provided for the piece." },
];

const clarity = [
  "Dubai private viewing by arrangement",
  "Worldwide buyer inquiries accepted",
  "Condition transparency on every piece",
  "Set details disclosed per piece",
  "Additional photos and videos before purchase",
  "Independent luxury resale platform",
];

export default function HomePage() {
  const featured = getFeatured().slice(0, 6);
  const archive = getArchive().slice(0, 4);

  return (
    <>
      {/* SECTION 1 — Hero */}
      <section className={`shell ${styles.hero}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroText}>
            <SectionReveal as="span" className={styles.heroEyebrow}>
              {site.descriptor} — {site.city}
            </SectionReveal>
            <SectionReveal delay={0.08}>
              <h1 className={styles.heroTitle}>Gentle Outlet</h1>
            </SectionReveal>
            <SectionReveal delay={0.16}>
              <p className={styles.heroTagline}>{site.tagline}</p>
            </SectionReveal>
            <SectionReveal delay={0.24}>
              <p className={styles.heroIntro}>{site.intro}</p>
            </SectionReveal>
            <SectionReveal delay={0.32}>
              <div className={styles.heroCtas}>
                <CTAButton href="/new-arrivals" variant="solid">View Available Pieces</CTAButton>
                <CTAButton href="/source-request" variant="gold">Request Private Sourcing</CTAButton>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={0.15} className={styles.heroVisual}>
            <Image
              src="/products/hero.svg"
              alt="A piece from the Gentle Outlet private preview"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
              className={styles.heroImg}
              unoptimized
            />
            <span className={styles.heroBadge}>Presented for private acquisition</span>
          </SectionReveal>
        </div>
      </section>

      {/* SECTION 2 — Private Preview */}
      <section className="shell section-tight">
        <SectionHeader
          label="Private Preview"
          title="A curated selection, available by private inquiry."
          intro="Collector handbags, watches, jewelry, and accessories — presented quietly, for those who know precisely what they are looking for."
        />
        <div className={styles.catGrid}>
          {previews.map((c, i) => (
            <SectionReveal key={c.label} delay={(i % 3) * 0.06}>
              <CategoryCard {...c} />
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* SECTION 3 — Now Presenting */}
      <section className="bg-alt">
        <div className="shell section">
          <div className={styles.headRow}>
            <SectionHeader
              label="Now Presenting"
              title="Currently in private preview."
            />
            <Link href="/new-arrivals" className={styles.viewAll}>View all pieces</Link>
          </div>
          <ProductGrid products={featured} columns={3} />
        </div>
      </section>

      {/* SECTION 4 — The Private Dossier */}
      <section className="shell section">
        <SectionHeader
          label="The Private Dossier"
          title="Before acquisition, request the dossier."
          intro="Price, condition notes, set details, additional media, and viewing arrangements — privately, for each piece."
        />
        <div className={styles.dossierGrid}>
          {dossier.map((d, i) => (
            <SectionReveal key={d.n} delay={(i % 4) * 0.06} className={styles.dossierCard}>
              <span className={styles.dossierNum}>{d.n}</span>
              <h3 className={styles.dossierName}>{d.name}</h3>
              <p className={styles.dossierDesc}>{d.d}</p>
            </SectionReveal>
          ))}
        </div>
        <div className={styles.sectionFoot}>
          <CTAButton href="/how-to-buy" variant="outline">How It Works</CTAButton>
        </div>
      </section>

      {/* SECTION 5 — Source by Request */}
      <section className="bg-alt">
        <div className="shell section">
          <div className={styles.sourceGrid}>
            <div className={styles.sourceText}>
              <SectionHeader
                label="Source by Request"
                title="Seeking a specific piece?"
                intro="Searching for a particular Hermès, Rolex, Patek Philippe, Cartier, Chanel, or rare collector piece? Submit a private request and our team will review availability through our network."
              />
            </div>
            <SectionReveal delay={0.1}>
              <SourceRequestForm />
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* SECTION 6 — The Archive */}
      <section className="shell section">
        <div className={styles.headRow}>
          <SectionHeader label="The Archive" title="Previously presented by Gentle Outlet." />
          <Link href="/archive" className={styles.viewAll}>View the archive</Link>
        </div>
        <ProductGrid products={archive} columns={4} />
      </section>

      {/* SECTION 7 — Private Acquisition Process */}
      <section className="bg-alt">
        <div className="shell section">
          <SectionHeader label="Private Acquisition Process" title="How to acquire." />
          <div className={styles.steps}>
            {steps.map((st, i) => (
              <SectionReveal key={st.n} delay={(i % 5) * 0.05} className={styles.step}>
                <span className={styles.stepNum}>{st.n}</span>
                <h3 className={styles.stepName}>{st.name}</h3>
                <p className={styles.stepDesc}>{st.d}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — Buy with Clarity */}
      <section className="shell section">
        <SectionHeader
          label="Buy with Clarity"
          title="Considered, transparent, and private."
          align="center"
        />
        <div className={styles.clarityGrid}>
          {clarity.map((c, i) => (
            <SectionReveal key={c} delay={(i % 3) * 0.05} className={styles.clarityCard}>
              <span className={styles.clarityMark}>—</span>
              <p className={styles.clarityText}>{c}</p>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
