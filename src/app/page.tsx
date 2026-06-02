// ─────────────────────────────────────────────
//  app/page.tsx  —  Página raíz del portafolio
// ─────────────────────────────────────────────

"use client";

import { useState } from "react";

import Sidebar          from "@/components/layout/Sidebar";
import HeroSection      from "@/components/sections/HeroSection";
import AboutSection     from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection   from "@/components/sections/ContactSection";
import ThemeToggle      from "@/components/ui/ThemeToggle";

import { useTheme }     from "@/hooks/useTheme";
import styles           from "./page.module.css";

export default function HomePage() {
  const [activeNav, setActiveNav] = useState("INICIO");
  const [theme, toggleTheme]      = useTheme();

  return (
    <div className={styles.layout}>
      <Sidebar activeNav={activeNav} onNavClick={setActiveNav} />

      {/* Botón de cambio de tema */}
      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <main className={styles.main}>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
    </div>
  );
}
