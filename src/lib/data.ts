// ─────────────────────────────────────────────
//  Site Data — edita todo aquí
// ─────────────────────────────────────────────

import type {
  NavItem,
  Project,
  Skill,
  ContactInfo,
  PersonalInfo,
  SocialLink,
} from "@/types";

// ── Identidad ─────────────────────────────────
export const SITE_OWNER = {
  firstName: "Critóbal",
  lastName:  "Tapia Rojas",
  roles: [
    "Desarrollador Full Stack",
    "Ingeniero Frontend",
    "Desarrollador Node.js",
  ],
  bio: [
    "Soy Cristóbal Tapia, estudiante de Ingeniería Civil en Informática y Telecomunicaciones en la Universidad Diego Portales. Actualmente curso mi tercer año de carrera, etapa en la que he complementado mi formación académica con el desarrollo de proyectos tecnológicos orientados a resolver necesidades reales mediante soluciones digitales modernas y escalables.",
    "Tengo un fuerte interés por el desarrollo de software, la inteligencia artificial y la creación de productos digitales con impacto. Me motiva asumir nuevos desafíos, aprender tecnologías emergentes y participar en iniciativas que me permitan continuar fortaleciendo mis habilidades técnicas y profesionales.",
    "Este portafolio reúne algunos de los proyectos que he desarrollado durante mi formación, reflejando mi capacidad de aprendizaje, compromiso con la excelencia y entusiasmo por contribuir al desarrollo de soluciones innovadoras en la industria tecnológica."
  ],
  avatarUrl: "https://i.ibb.co/PZFN9j2J/photocv.png",
  copyright: "2025 © Portafolio. Todos los derechos reservados.",
};

// ── Imagen de fondo Hero ──────────────────────
export const HERO_BG_URL =
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=3840";

// ── Navegación ────────────────────────────────
export const NAV_ITEMS: NavItem[] = [
  { label: "INICIO",      icon: "🏠", href: "#home" },
  { label: "SOBRE MÍ",   icon: "👤", href: "#about" },
  { label: "PORTAFOLIO", icon: "💼", href: "#portfolio" },
  { label: "CONTACTO",   icon: "✉️", href: "#contact" },
];

// ── Redes Sociales ────────────────────────────
export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GH", href: "https://github.com/cristobaltapiafr" },
  { label: "LI", href: "https://www.linkedin.com/in/crist%C3%B3bal-tapia-rojas-b78a4a412/" },
];

// ── Información Personal ──────────────────────
export const PERSONAL_INFO: PersonalInfo[] = [
  { label: "Nombre",        value: "Cristóbal Felipe Tapia Rojas" },
  { label: "Ubicación",     value: "Santiago, Chile" },
  { label: "Correo",        value: "cristobaltapia.fr@gmail.com" },
  { label: "Disponibilidad",value: "Disponilidad inmediata" },
];

// ── Habilidades ───────────────────────────────
export const SKILLS: Skill[] = [
  { name: "React / Next.js",      pct: 65 },
  { name: "Node.js / Express",    pct: 55 },
  { name: "PostgreSQL",           pct: 45 },
  { name: "Html / CSS",           pct: 92 },
];

// ── Proyectos ─────────────────────────────────
export const PROJECTS: Project[] = [
  {
    emoji: "🛒",
    title: "Plataforma Web de Gestión de Pedidos Delivery para Supermercado",
    desc: "Desarrollo de una plataforma web orientada a la gestión de pedidos delivery para un supermercado, permitiendo a los usuarios registrarse, autenticarse y realizar compras de manera segura mediante una interfaz intuitiva. El sistema incorpora una base de datos relacional para la administración de clientes, productos y pedidos, manteniendo la integridad y trazabilidad de la información.",
    tags: ["Next.js", "PostgreSQL"],
  },
  {
    emoji: "📊",
    title: "Plataforma de Gestión de Alimentación Corporativa",
    desc: "Aplicación web desarrollada para empresas y servicios de casino corporativo, permitiendo a los colaboradores seleccionar anticipadamente sus minutas de desayuno, almuerzo y cena según sus preferencias. La plataforma optimiza la planificación operativa, mejora la experiencia de los usuarios y facilita la gestión eficiente de la demanda alimentaria.",
    tags: ["Flutter", "PostgreSQL", "Next.js"],
  },
  {
    emoji: "🤖",
    title: "CRM Inteligente con Agente de IA",
    desc:  "Plataforma CRM diseñada para optimizar la gestión comercial mediante un panel centralizado de clientes, oportunidades y métricas de rendimiento. Integra un agente conversacional basado en inteligencia artificial capaz de asistir en la atención de clientes, automatizar consultas y apoyar la toma de decisiones comerciales en tiempo real.",
    tags:  ["Html", "CSS", "OpenAI"],
  },
  {
    emoji: "💬",
    title: "Generador de Códigos QR Adaptativo para Entornos Web",
    desc: "Solución web responsiva para la creación y gestión de códigos QR dinámicos. Diseñada para integrarse en distintos servicios digitales, permite generar códigos optimizados para dispositivos móviles y facilitar el acceso rápido a información, enlaces y recursos digitales.",
    tags: ["Node.js"],
  },
];

// ── Información de Contacto ───────────────────
export const CONTACT_INFO: ContactInfo[] = [
  { icon: "📍", label: "Ubicación", value: "Santiago, Chile" },
  { icon: "✉️", label: "Correo",    value: "cristobaltapia.fr@gmail.com" },
  { icon: "📞", label: "Teléfono",  value: "+56 9 3192 1030" },
  { icon: "🌐", label: "Sitio Web", value: "Miportafolio" },
];
