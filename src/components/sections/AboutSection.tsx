// ─────────────────────────────────────────────
//  AboutSection — biografía, info y barras de
//  habilidades.
// ─────────────────────────────────────────────

import styles from "./AboutSection.module.css";
import { SITE_OWNER, PERSONAL_INFO, SKILLS } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="section section-dark">
      <h2 className="section-title">
        Sobre <span>Mí</span>
      </h2>
      <div className="section-divider" />

      <div className={styles.grid}>
        {/* ── Bio + Info ── */}
        <div>
          {SITE_OWNER.bio.map((para, i) => (
            <p key={i} className={styles.para}>{para}</p>
          ))}

          <div className={styles.infoGrid}>
            {PERSONAL_INFO.map(({ label, value }) => (
              <div key={label} className={styles.infoItem}>
                <span className={styles.infoLabel}>{label}</span>
                <span className={styles.infoValue}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Barras de Habilidades ── */}
        <div>
          {SKILLS.map(({ name, pct }) => (
            <div key={name} className={styles.skillBar}>
              <div className={styles.skillHeader}>
                <span>{name}</span>
                <span className={styles.skillPct}>{pct}%</span>
              </div>
              <div className={styles.skillTrack}>
                <div className={styles.skillFill} style={{ width: `${pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
