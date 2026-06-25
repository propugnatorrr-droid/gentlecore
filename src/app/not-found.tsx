import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(80px, 12vw, 160px) 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          maxWidth: 560,
        }}
      >
        <span className="eyebrow">404</span>
        <h1 className="h1">This piece is not on the floor.</h1>
        <p className="body body-lg">
          The page you were looking for is no longer presented. Browse the
          current collection.
        </p>
        <Link href="/collection" className="cartier-link">
          Return to Collection <span className="arrow">→</span>
        </Link>
      </div>
    </section>
  );
}
