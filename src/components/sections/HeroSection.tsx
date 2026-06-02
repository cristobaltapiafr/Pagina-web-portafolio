// ─────────────────────────────────────────────
//  HeroSection — pantalla completa de bienvenida
//  con imagen de fondo, typewriter y CTAs.
// ─────────────────────────────────────────────

"use client";

import styles from "./HeroSection.module.css";
import { useTypewriter } from "@/hooks/useTypewriter";
import { SITE_OWNER, HERO_BG_URL } from "@/lib/data";

export default function HeroSection() {
  const displayed = useTypewriter(SITE_OWNER.roles);

  return (
    <section id="home" className={styles.hero}>
      {/* ── Fondo ── */}
      <div
        className={styles.heroBg}
        style={{ backgroundImage: `url('${HERO_BG_URL}')` }}
      />
      <div className={styles.heroOverlay} />

      {/* ── Contenido ── */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroName}>
          {SITE_OWNER.firstName}{" "}
          <span className={styles.accent}>{SITE_OWNER.lastName}</span>
        </h1>

        <p className={styles.heroRole}>
          Soy <strong>{displayed}</strong>
          <span className={styles.cursor} />
        </p>

        <div className={styles.heroCta}>
          <a href="#portfolio" className="btn btn-primary">Ver Portafolio</a>
          <a href="#contact"   className="btn btn-outline">Contáctame</a>
        </div>
      </div>
    </section>
  );
}
