import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How Gentle Core uses cookies and equivalent browser storage on gentlecore.co.",
};

export default function CookiesPage() {
  return (
    <>
      <PageIntro
        label="Cookies"
        title="Cookie Policy"
        intro="An honest account of the cookies and browser storage used by gentlecore.co."
      />
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <div style={{ marginBottom: "2.25em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                What cookies are
              </h2>
              <p style={pStyle}>
                Cookies are small text files that a website asks your browser to store. They
                allow a site to remember things between page loads — for example, your
                language preference or whether you have accepted a notice. Some technologies
                that achieve the same purpose (such as localStorage) are not strictly
                cookies but are often grouped with them; we list them here for transparency.
              </p>
            </div>

            <div style={{ marginBottom: "2.25em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                What we use
              </h2>
              <p style={pStyle}>
                <strong>Strictly necessary.</strong> We store a single value,{" "}
                <code>gentlecore.consent</code>, in your browser&apos;s localStorage to
                remember your consent choice so we do not ask again on every visit. This is
                not technically a cookie, but is listed here in the interest of full
                transparency. It expires when you clear browser storage.
              </p>
              <p style={pStyle}>
                <strong>Analytics.</strong> Currently none. We do not run any analytics
                product on this site.
              </p>
              <p style={pStyle}>
                <strong>Marketing.</strong> Currently none. We do not run any marketing or
                advertising trackers on this site.
              </p>
            </div>

            <div style={{ marginBottom: "2.25em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                Third-party services
              </h2>
              <p style={pStyle}>
                Our hosting provider, Vercel, may set technical cookies for request routing
                and security purposes. WhatsApp links navigate you to whatsapp.com or the
                WhatsApp application, where Meta&apos;s own cookie and privacy policy apply.
              </p>
            </div>

            <div style={{ marginBottom: "2.25em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                Managing your preferences
              </h2>
              <p style={pStyle}>
                You can change your preferences at any time via the Cookie Preferences link
                in the footer, or directly in your browser settings.
              </p>
            </div>

            <div style={{ marginBottom: "2.25em" }}>
              <h2 className="h3" style={{ marginBottom: "0.6em" }}>
                Updates
              </h2>
              <p style={pStyle}>
                We will note any material changes to this policy on this page and update the
                &ldquo;Last updated&rdquo; date below.
              </p>
            </div>

            <p className="eyebrow" style={{ color: "var(--ink-60)", marginTop: "3em" }}>
              Last updated: 2026-06-25
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

const pStyle: React.CSSProperties = {
  fontSize: 15,
  lineHeight: 1.7,
  color: "var(--ink)",
  marginBottom: "0.9em",
};
