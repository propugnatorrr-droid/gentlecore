"use client";

import { useState } from "react";
import { whatsappLink } from "@/lib/site";
import styles from "./ConversationalInquiry.module.css";

type AcquisitionMode = "Private viewing by appointment" | "Insured worldwide shipping" | "";
type ContactMethod = "WhatsApp" | "Email" | "Phone" | "";

interface FormState {
  acquisitionMode: AcquisitionMode;
  contactMethod: ContactMethod;
  contactValue: string;
  name: string;
  notes: string;
}

const STEP_COUNT = 5;

export default function ConversationalInquiry({ pieceName }: { pieceName?: string }) {
  const [step, setStep] = useState(1);
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState<FormState>({
    acquisitionMode: "",
    contactMethod: "",
    contactValue: "",
    name: "",
    notes: "",
  });

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const canAdvance = () => {
    if (step === 2) return !!form.acquisitionMode;
    if (step === 3) return !!form.contactMethod && !!form.contactValue;
    if (step === 4) return !!form.name;
    return true;
  };

  const handleSubmit = () => {
    const msg = [
      "Private Dossier Request",
      pieceName ? `Piece: ${pieceName}` : "",
      `Acquisition: ${form.acquisitionMode}`,
      `Name: ${form.name}`,
      `Contact via ${form.contactMethod}: ${form.contactValue}`,
      form.notes ? `Notes: ${form.notes}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    console.log("[Gentle Core Inquiry]", { pieceName, ...form });
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const depth = ((step - 1) / (STEP_COUNT - 1)) * 100;

  if (sent) {
    return (
      <div className={styles.success}>
        <p className={styles.successKicker}>Request received</p>
        <h3 className={styles.successTitle}>
          Thank you. We will prepare your dossier and respond within 24 hours.
        </h3>
        <p className={styles.successBody}>
          For an immediate response, continue on WhatsApp. Our team will have full details ready.
        </p>
      </div>
    );
  }

  return (
    <div
      className={styles.inquiry}
      style={{ "--depth": `${depth}%` } as React.CSSProperties}
    >
      <div className={styles.progressLine}>
        <div className={styles.progressFill} />
      </div>

      <div className={styles.steps}>
        {/* Step 1: Piece */}
        <div className={`${styles.step} ${step === 1 ? styles.active : ""} ${step > 1 ? styles.done : ""}`}>
          <p className={styles.stepNum}>01</p>
          <blockquote className={styles.stepQuestion}>
            &ldquo;{pieceName ?? "A piece has caught your attention."}&rdquo;
          </blockquote>
          {step === 1 && (
            <button className={`btn btn-outline ${styles.next}`} onClick={() => setStep(2)}>
              Continue →
            </button>
          )}
        </div>

        {/* Step 2: Acquisition mode */}
        {step >= 2 && (
          <div className={`${styles.step} ${step === 2 ? styles.active : ""} ${step > 2 ? styles.done : ""}`}>
            <p className={styles.stepNum}>02</p>
            <p className={styles.stepPrompt}>How would you prefer to receive this piece?</p>
            {step === 2 && (
              <div className={styles.cardRow}>
                {(["Private viewing by appointment", "Insured worldwide shipping"] as const).map((opt) => (
                  <button
                    key={opt}
                    className={`${styles.optionCard} ${form.acquisitionMode === opt ? styles.optionActive : ""}`}
                    onClick={() => set("acquisitionMode", opt)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
            {step === 2 && form.acquisitionMode && (
              <button className={`btn btn-outline ${styles.next}`} onClick={() => setStep(3)}>
                Continue →
              </button>
            )}
            {step > 2 && <p className={styles.answer}>{form.acquisitionMode}</p>}
          </div>
        )}

        {/* Step 3: Contact */}
        {step >= 3 && (
          <div className={`${styles.step} ${step === 3 ? styles.active : ""} ${step > 3 ? styles.done : ""}`}>
            <p className={styles.stepNum}>03</p>
            <p className={styles.stepPrompt}>Where shall we reach you?</p>
            {step === 3 && (
              <>
                <div className={styles.cardRow}>
                  {(["WhatsApp", "Email", "Phone"] as const).map((m) => (
                    <button
                      key={m}
                      className={`${styles.optionCard} ${form.contactMethod === m ? styles.optionActive : ""}`}
                      onClick={() => { set("contactMethod", m); set("contactValue", ""); }}
                    >
                      {m}
                    </button>
                  ))}
                </div>
                {form.contactMethod && (
                  <input
                    className={styles.input}
                    type={form.contactMethod === "Email" ? "email" : "tel"}
                    placeholder={
                      form.contactMethod === "WhatsApp" ? "+1 (country code) number" :
                      form.contactMethod === "Email" ? "your@email.com" :
                      "+1 (country code) number"
                    }
                    value={form.contactValue}
                    onChange={(e) => set("contactValue", e.target.value)}
                    autoFocus
                  />
                )}
                {form.contactMethod && form.contactValue && (
                  <button className={`btn btn-outline ${styles.next}`} onClick={() => setStep(4)}>
                    Continue →
                  </button>
                )}
              </>
            )}
            {step > 3 && (
              <p className={styles.answer}>{form.contactMethod} · {form.contactValue}</p>
            )}
          </div>
        )}

        {/* Step 4: Name + Notes */}
        {step >= 4 && (
          <div className={`${styles.step} ${step === 4 ? styles.active : ""} ${step > 4 ? styles.done : ""}`}>
            <p className={styles.stepNum}>04</p>
            <p className={styles.stepPrompt}>Your name and any notes.</p>
            {step === 4 && (
              <>
                <input
                  className={styles.input}
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  autoFocus
                />
                <textarea
                  className={styles.textarea}
                  placeholder="Condition preferences, timeline, or any other detail…"
                  rows={3}
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                />
                {form.name && (
                  <button className={`btn btn-outline ${styles.next}`} onClick={() => setStep(5)}>
                    Continue →
                  </button>
                )}
              </>
            )}
            {step > 4 && <p className={styles.answer}>{form.name}</p>}
          </div>
        )}

        {/* Step 5: Submit */}
        {step >= 5 && (
          <div className={`${styles.step} ${styles.active}`}>
            <p className={styles.stepNum}>05</p>
            <p className={styles.stepPrompt}>Ready to request your private presentation.</p>
            <button className={`btn btn-gold ${styles.submitBtn}`} onClick={handleSubmit}>
              Request Private Presentation
            </button>
            <p className={styles.note}>
              Your details are used solely to respond to this request.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
