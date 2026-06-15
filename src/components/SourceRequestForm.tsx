"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import s from "./forms.module.css";

export default function SourceRequestForm() {
  const [sent, setSent] = useState(false);
  const [waHref, setWaHref] = useState<string>(whatsappLink());

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // TODO: connect to a real backend / CRM. Mock submit + WhatsApp hand-off for now.
    const msg = [
      "Source by Request",
      `Brand: ${f.get("brand") || "—"}`,
      `Model: ${f.get("model") || "—"}`,
      `Colour / Material: ${f.get("material") || "—"}`,
      `Size / Reference: ${f.get("reference") || "—"}`,
      `Budget: ${f.get("budget") || "—"}`,
      `Timeline: ${f.get("timeline") || "—"}`,
      `Location: ${f.get("location") || "—"}`,
      `WhatsApp: ${f.get("whatsapp") || "—"}`,
      f.get("notes") ? `Notes: ${f.get("notes")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    setWaHref(whatsappLink(msg));
    setSent(true);
  }

  if (sent) {
    return (
      <div className={s.success} role="status">
        <span className="label">Request received</span>
        <h3 className={s.successTitle}>Your sourcing request is with our team.</h3>
        <p className={s.successBody}>
          We will review availability through our network and respond privately. For the
          fastest response, continue the conversation on WhatsApp.
        </p>
        <a className="btn btn-gold" href={waHref} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon /> Continue on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-brand">Brand</label>
          <input className={s.input} id="s-brand" name="brand" required placeholder="Hermès, Rolex, Patek Philippe…" />
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-model">Model</label>
          <input className={s.input} id="s-model" name="model" placeholder="Birkin 25, Nautilus…" />
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-material">Colour / Material</label>
          <input className={s.input} id="s-material" name="material" placeholder="Black Togo, Rose Gold…" />
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-ref">Size / Reference</label>
          <input className={s.input} id="s-ref" name="reference" placeholder="Ref. 5980R, size 25…" />
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-budget">Budget</label>
          <input className={s.input} id="s-budget" name="budget" placeholder="Indicative range" />
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-timeline">Timeline</label>
          <input className={s.input} id="s-timeline" name="timeline" placeholder="Flexible, within 3 months…" />
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-loc">Location</label>
          <input className={s.input} id="s-loc" name="location" placeholder="City, Country" />
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="s-wa">WhatsApp</label>
          <input className={s.input} id="s-wa" name="whatsapp" inputMode="tel" placeholder="+971 …" />
        </div>
      </div>

      <div className={`${s.field} ${s.full}`}>
        <label className={s.label} htmlFor="s-notes">Notes</label>
        <textarea className={s.textarea} id="s-notes" name="notes" placeholder="Specific configuration, hardware, set details…" />
      </div>

      <div className={s.actions}>
        <button className="btn btn-solid btn-block" type="submit">Submit Private Request</button>
        <p className={s.note}>
          Sourcing is discreet and obligation-free. We will only present pieces that meet
          your brief.
        </p>
      </div>
    </form>
  );
}
