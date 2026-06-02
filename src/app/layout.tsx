// ─────────────────────────────────────────────
//  app/layout.tsx  —  layout raíz + metadatos
// ─────────────────────────────────────────────

import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:       "Cristóbal Tapia Rojas — Portafolio",
  description: "Portafolio de Desarrollador Full Stack — Santiago, Chile.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
