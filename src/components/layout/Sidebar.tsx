// ─────────────────────────────────────────────
//  Sidebar — panel lateral fijo con perfil,
//  navegación, redes sociales y copyright.
// ─────────────────────────────────────────────

"use client";

import styles from "./Sidebar.module.css";
import { NAV_ITEMS, SOCIAL_LINKS, SITE_OWNER } from "@/lib/data";

interface SidebarProps {
  activeNav: string;
  onNavClick: (label: string) => void;
}

export default function Sidebar({ activeNav, onNavClick }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      {/* ── Perfil ── */}
      <div className={styles.profile}>
        <div className={styles.avatarWrap}>
          <img
            src={SITE_OWNER.avatarUrl}
            alt={`${SITE_OWNER.firstName} ${SITE_OWNER.lastName}`}
          />
        </div>
        <div className={styles.nameBadge}>
          {SITE_OWNER.firstName} {SITE_OWNER.lastName}
        </div>
      </div>

      {/* ── Navegación ── */}
      <nav className={styles.nav}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`${styles.navItem} ${activeNav === item.label ? styles.active : ""}`}
            onClick={() => onNavClick(item.label)}
          >
            <span className={styles.navIcon}>{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* ── Pie ── */}
      <div className={styles.footer}>
        <div className={styles.socialLinks}>
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className={styles.socialLink}
              target="_blank"
              rel="noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className={styles.copyright}>{SITE_OWNER.copyright}</p>
      </div>
    </aside>
  );
}
