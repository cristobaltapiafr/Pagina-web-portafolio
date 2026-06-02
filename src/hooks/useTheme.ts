// ─────────────────────────────────────────────
//  useTheme — gestiona el tema claro / oscuro.
//  Persiste la preferencia en localStorage y
//  aplica el atributo data-theme al <html>.
// ─────────────────────────────────────────────

"use client";

import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>("dark");

  // Inicializar desde localStorage o preferencia del sistema
  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    const preferred = window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
    const initial = saved ?? preferred;
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("portfolio-theme", next);
      return next;
    });
  };

  return [theme, toggle];
}
