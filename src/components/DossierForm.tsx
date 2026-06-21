"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./WhatsAppButton";
import s from "./forms.module.css";

export default function DossierForm({ pieceName }: { pieceName?: string }) {
  const [sent, setSent] = useState(false);
  const [waHref, setWaHref] = useState<string>(whatsappLink());

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    // TODO: wire to a real endpoint / email service. For now, graceful mock submit
    // that also prepares a pre-filled WhatsApp message as the primary channel.
    const msg = [
      "Private Dossier Request",
      `Piece: ${f.get("piece") || "—"}`,
      `Name: ${f.get("name") || "—"}`,
      `Location: ${f.get("location") || "—"}`,
      `Buyer: ${f.get("buyerType") || "—"}`,
      `Preferred contact: ${f.get("contact") || "—"}`,
      `WhatsApp: ${f.get("whatsapp") || "—"}`,
      `Email: ${f.get("email") || "—"}`,
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
        <h3 className={s.successTitle}>Thank you — your request is noted.</h3>
        <p className={s.successBody}>
          Our team will prepare the private dossier and respond shortly with price,
          condition notes, set details, additional media, and viewing arrangements. For the
          fastest response, continue on WhatsApp.
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
          <label className={s.label} htmlFor="d-name">Name</label>
          <input className={s.input} id="d-name" name="name" required autoComplete="name" />
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="d-wa">WhatsApp</label>
          <input className={s.input} id="d-wa" name="whatsapp" inputMode="tel" placeholder="Include country code" />
        </div>
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label} htmlFor="d-email">Email</label>
          <input className={s.input} id="d-email" name="email" type="email" autoComplete="email" />
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="d-loc">Location</label>
          <input className={s.input} id="d-loc" name="location" placeholder="City, Country" />
        </div>
      </div>

      <div className={`${s.field} ${s.full}`}>
        <label className={s.label} htmlFor="d-piece">Product interest</label>
        <input
          className={s.input}
          id="d-piece"
          name="piece"
          defaultValue={pieceName ?? ""}
          placeholder="Brand & model, or a description"
        />
      </div>

      <div className={s.row}>
        <div className={s.field}>
          <label className={s.label} htmlFor="d-buyer">Acquisition</label>
          <select className={s.select} id="d-buyer" name="buyerType" defaultValue="">
            <option value="" disabled>Select</option>
            <option>Private viewing by appointment</option>
            <option>Insured worldwide shipping</option>
          </select>
        </div>
        <div className={s.field}>
          <label className={s.label} htmlFor="d-contact">Preferred contact</label>
          <select className={s.select} id="d-contact" name="contact" defaultValue="">
            <option value="" disabled>Select</option>
            <option>WhatsApp</option>
            <option>Email</option>
            <option>Phone call</option>
          </select>
        </div>
      </div>

      <div className={`${s.field} ${s.full}`}>
        <label className={s.label} htmlFor="d-notes">Notes</label>
        <textarea className={s.textarea} id="d-notes" name="notes" placeholder="Anything specific we should know" />
      </div>

      <div className={s.actions}>
        <button className="btn btn-solid btn-block" type="submit">Request Private Dossier</button>
        <p className={s.note}>
          Your details are used solely to respond to this request. No prices are listed
          publicly; each piece is presented for private acquisition.
        </p>
      </div>
    </form>
  );
}
