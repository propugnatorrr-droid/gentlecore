"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import s from "./forms.module.css";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [waHref, setWaHref] = useState<string>(whatsappLink());

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // TODO: connect to a real backend / email service. Mock submit for now.
    const msg = [
      "Enquiry — Gentle Core",
      `Name: ${f.get("name") || "—"}`,
      `Location: ${f.get("location") || "—"}`,
      `Email: ${f.get("email") || "—"}`,
      f.get("message") ? `Message: ${f.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    setWaHref(whatsappLink(msg));
    setSent(true);
  }

  if (sent) {
    return (
      <div className={s.success} role="status">
        <span className="label">Message received</span>
        <h3 className={s.successTitle}>Thank you for reaching out.</h3>
        <p className={s.successBody}>
          We will respond shortly. For an immediate reply, continue on WhatsApp.
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
          <label className={s.label} htmlFor="c-name">Name</label>
          <input className={s.input} id="c-name" name="name" required autoComplete="name" />
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="c-loc">Location</label>
          <input className={s.input} id="c-loc" name="location" placeholder="City, Country" />
        </div>
      </div>

      <div className={`${s.field} ${s.full}`}>
        <label className={s.label} htmlFor="c-email">Email</label>
        <input className={s.input} id="c-email" name="email" type="email" autoComplete="email" />
      </div>

      <div className={`${s.field} ${s.full}`}>
        <label className={s.label} htmlFor="c-msg">Message</label>
        <textarea className={s.textarea} id="c-msg" name="message" placeholder="How may we assist?" />
      </div>

      <div className={s.actions}>
        <button className="btn btn-solid btn-block" type="submit">Send Message</button>
      </div>
    </form>
  );
}
