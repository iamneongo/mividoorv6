export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  name: string;
  code: string; // e.g. "MV-01"
  tagline: string; // e.g. "Tối giản - Tinh tế"
  descr: string;
  image: string; // path under /public
}

export interface Category {
  eyebrow: string; // small label above title
  title: string;
  image: string;
  href: string;
}

export interface LuxuryDoor {
  code: string; // "MIVI-LUX 01"
  tagline: string;
  image: string;
}

export interface Material {
  title: string;
  subtitle: string;
  image: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ColorSwatch {
  code: string;
  image: string;
  isNew?: boolean;
}

export interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

export interface NewsItem {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image?: string;
}
