// ─────────────────────────────────────────────
//  ContactSection — formulario funcional
//  Envía mensajes vía /api/contact → MailerSend
// ─────────────────────────────────────────────

"use client";

import { useState } from "react";
import styles from "./ContactSection.module.css";
import { CONTACT_INFO } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm]     = useState({ nombre: "", correo: "", mensaje: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error || "Ocurrió un error. Intenta de nuevo.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ nombre: "", correo: "", mensaje: "" });
    } catch {
      setErrorMsg("No se pudo conectar con el servidor.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section section-dark">
      <h2 className="section-title">
        Ponte en <span>Contacto</span>
      </h2>
      <div className="section-divider" />

      <div className={styles.grid}>
        {/* ── Info ── */}
        <div>
          <h3 className={styles.infoTitle}>Trabajemos Juntos</h3>

          {CONTACT_INFO.map(({ icon, label, value }) => (
            <div key={label} className={styles.contactItem}>
              <span className={styles.contactIcon}>{icon}</span>
              <div>
                <div className={styles.contactLabel}>{label}</div>
                <div className={styles.contactValue}>{value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Formulario ── */}
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nombre">Nombre</label>
            <input
              id="nombre" name="nombre" type="text"
              placeholder="Tu nombre completo"
              value={form.nombre} onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="correo">Correo</label>
            <input
              id="correo" name="correo" type="email"
              placeholder="tu@correo.com"
              value={form.correo} onChange={handleChange}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="mensaje">Mensaje</label>
            <textarea
              id="mensaje" name="mensaje"
              placeholder="Cuéntame sobre tu proyecto..."
              value={form.mensaje} onChange={handleChange}
              required
            />
          </div>

          {/* ── Feedback de estado ── */}
          {status === "success" && (
            <p style={{ color: "var(--accent)", fontWeight: 600 }}>
              ✅ ¡Mensaje enviado! Me pondré en contacto contigo pronto.
            </p>
          )}
          {status === "error" && (
            <p style={{ color: "#e74c3c", fontWeight: 600 }}>
              ❌ {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "loading"}
          >
            {status === "loading" ? "Enviando…" : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </section>
  );
}
