// ─────────────────────────────────────────────
//  Global Types
// ─────────────────────────────────────────────

export interface NavItem {
  label: string;
  icon: string;
  href: string;
}

export interface Project {
  emoji: string;
  title: string;
  desc: string;
  tags: string[];
}

export interface Skill {
  name: string;
  pct: number;
}

export interface ContactInfo {
  icon: string;
  label: string;
  value: string;
}

export interface PersonalInfo {
  label: string;
  value: string;
}

export interface SocialLink {
  label: string;
  href: string;
}
