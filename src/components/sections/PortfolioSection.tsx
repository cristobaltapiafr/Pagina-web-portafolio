// ─────────────────────────────────────────────
//  PortfolioSection — grilla de tarjetas de
//  proyectos.
// ─────────────────────────────────────────────

import styles from "./PortfolioSection.module.css";
import { PROJECTS } from "@/lib/data";

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="section section-darker">
      <h2 className="section-title">
        Mi <span>Portafolio</span>
      </h2>
      <div className="section-divider" />

      <div className={styles.grid}>
        {PROJECTS.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.cardImg}>{project.emoji}</div>
            <div className={styles.cardBody}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDesc}>{project.desc}</p>
              <div className={styles.cardTags}>
                {project.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
