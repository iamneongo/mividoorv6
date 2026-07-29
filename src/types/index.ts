export interface NavLink {
  label: string;
  href: string;
}

export interface Product {
  name: string;
  descr: string;
  weight?: string;
  price: string; // e.g. "22,9"
  currency?: string; // "€"
  mark?: string; // e.g. "-23%"
  outOfStock?: boolean;
  image: string; // path under /public
}

export interface Category {
  eyebrow: string; // "new" / "the"
  title: string; // "drop" / "cosmetics"
  image: string;
  href: string;
}

export interface Feedback {
  type: "video" | "text";
  thumbnail?: string;
  videoLabel?: string;
  author?: string;
  text?: string;
}

export interface AccordionItem {
  title: string;
  body: string;
}

export interface SocialStat {
  network: "instagram" | "tiktok";
  handleCount: string;
}
