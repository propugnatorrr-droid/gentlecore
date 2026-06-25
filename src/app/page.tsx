import Image from "next/image";
import Link from "next/link";
import { getFeatured } from "@/data/products";
import { whatsappLink, dossierMessage } from "@/lib/site";
import ProductGrid from "@/components/ProductGrid";
import SectionHeader from "@/components/SectionHeader";
import CategoryCard from "@/components/CategoryCard";
import SectionReveal from "@/components/SectionReveal";
import styles from "./home.module.css";

const pillars = [
  {
    n: "01",
    title: "Authentication",
    body: "Each piece is examined by specialists. Materials, hardware, and provenance verified before presentation.",
  },
  {
    n: "02",
    title: "Condition Grading",
    body: "Every item is graded and disclosed in full — no surprises, only quiet confidence.",
  },
  {
    n: "03",
    title: "Discreet Delivery",
    body: "Insured, unbranded worldwide shipping. Hand delivery available by private appointment.",
  },
  {
    n: "04",
    title: "Private Viewing",
    body: "Selected pieces presented in person, by arrangement, wherever the conversation begins.",
  },
];

export default function HomePage() {
  const featured = getFeatured().slice(0, 6);

  return (
    <>
      {/* 1. Hero */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <SectionReveal className={styles.heroCopy}>
            <span className="eyebrow">Now Presenting</span>
            <h1 className="h1">The pieces that define a collection.</h1>
            <p className="body body-lg lede">
              A small, considered presentation of rare handbags, watches, and
              jewelry — each piece sourced privately and presented by dossier.
            </p>
            <Link href="/new-arrivals" className="cartier-link">
              View the New Arrivals <span className="arrow">→</span>
            </Link>
          </SectionReveal>

          <SectionReveal className={styles.heroImageWrap} delay={0.1}>
            <Image
              src="/products/hermes-himalaya-birkin/1.jpg"
              alt="Hermès Himalaya Birkin 30"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 50vw"
              className={styles.heroImage}
            />
          </SectionReveal>
        </div>
      </section>

      {/* 2. Now Presenting */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Now Presenting"
            title="This season's acquisitions"
          />
          <ProductGrid products={featured} columns={3} />
        </div>
      </section>

      {/* 3. Provenance Statement */}
      <section className={`section ${styles.provenance}`}>
        <div className={`container ${styles.provenanceInner}`}>
          <span className="eyebrow">The House</span>
          <h2 className="h2">
            Sourced quietly. Authenticated thoroughly. Presented with restraint.
          </h2>
          <p className="body body-lg">
            Gentle Core is a private resale house for collectors who prefer
            their acquisitions discreet. We work through a closed network of
            owners and specialists, and present each piece by private dossier
            rather than open catalogue.
          </p>
          <Link href="/about" className="cartier-link">
            Read the House Philosophy <span className="arrow">→</span>
          </Link>
        </div>
      </section>

      {/* 4. Categories */}
      <section className="section">
        <div className="container">
          <SectionHeader
            label="Browse by Discipline"
            title="Three quiet specialisms"
          />
          <div className={styles.catGrid}>
            <CategoryCard
              label="Handbags"
              href="/handbags"
              image="/products/hermes-birkin-gris-perle-ostrich/1.jpg"
              eyebrow="House Discipline"
            />
            <CategoryCard
              label="Watches"
              href="/watches"
              image="/products/rolex-day-date-40/1.jpg"
              eyebrow="House Discipline"
            />
            <CategoryCard
              label="Jewelry"
              href="/jewelry"
              image="/products/rolex-day-date-40/2.jpg"
              eyebrow="By Request"
            />
          </div>
        </div>
      </section>

      {/* 5. Trust pillars */}
      <section className={`section ${styles.provenance}`}>
        <div className="container">
          <SectionHeader
            label="The Process"
            title="Four conditions of trust"
          />
          <div className={styles.pillars}>
            {pillars.map((p) => (
              <SectionReveal key={p.n} className={styles.pillar}>
                <span className={`eyebrow ${styles.pillarNum}`}>{p.n}</span>
                <h3 className={styles.pillarTitle}>{p.title}</h3>
                <p className={styles.pillarBody}>{p.body}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Inquiry CTA */}
      <section className={`section ${styles.inquiry}`}>
        <div className={`container ${styles.inquiryInner}`}>
          <span className={`eyebrow ${styles.inquiryEyebrow}`}>Inquire</span>
          <h2 className="h2">Every piece begins as a conversation.</h2>
          <p className="body body-lg">
            Send a quiet inquiry. We respond within hours.
          </p>
          <Link href="/source-request" className="cartier-link cartier-link--light">
            Open a Private Dossier <span className="arrow">→</span>
          </Link>
          <span className={`eyebrow ${styles.inquiryAlt}`}>
            or message on{" "}
            <a
              href={whatsappLink(dossierMessage())}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </span>
        </div>
      </section>
    </>
  );
}
