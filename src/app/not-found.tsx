import CTAButton from "@/components/CTAButton";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="shell-narrow">
        <span className="label">Page not found</span>
        <h1 className={styles.title}>This piece is no longer here.</h1>
        <p className={styles.text}>
          The page you are looking for has moved on. Explore the current preview, or tell us
          what you are seeking.
        </p>
        <div className={styles.ctas}>
          <CTAButton href="/new-arrivals" variant="solid">View Available Pieces</CTAButton>
          <CTAButton href="/source-request" variant="gold">Source by Request</CTAButton>
        </div>
      </div>
    </section>
  );
}
