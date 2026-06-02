// ─────────────────────────────────────────────
//  ThemeToggle — botón fijo esquina superior
//  derecha para alternar entre modo oscuro/claro
// ─────────────────────────────────────────────

"use client";

import type { Theme } from "@/hooks/useTheme";
import styles from "./ThemeToggle.module.css";

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  const isDark = theme === "dark";

  return (
    <button
      className={styles.btn}
      onClick={onToggle}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
    >
      {/* Track */}
      <span className={styles.track}>
        {/* Thumb con ícono animado */}
        <span className={`${styles.thumb} ${isDark ? styles.thumbDark : styles.thumbLight}`}>
          {isDark ? "🌙" : "☀️"}
        </span>
      </span>

      {/* Etiqueta */}
      <span className={styles.label}>
        {isDark ? "Oscuro" : "Claro"}
      </span>
    </button>
  );
}
