import type { Category, NavLink, Product } from "@/types";

export const navLinks: NavLink[] = [
  { label: "about us", href: "#about" },
  { label: "feedback", href: "#feedback" },
  { label: "contacts", href: "#contacts" },
  { label: "delivery", href: "#delivery" },
];

export const categories: Category[] = [
  { eyebrow: "new", title: "drop", image: "/images/3266-316_cosmetics_2_1.jpg", href: "#drop" },
  { eyebrow: "the", title: "cosmetics", image: "/images/3934-653_cosmetics_5remini-en.jpg", href: "#cosmetics" },
  { eyebrow: "the", title: "soap", image: "/images/6535-393_soapremini-enhanced_.jpg", href: "#soap" },
  { eyebrow: "the", title: "boxes", image: "/images/3665-363_boxesremini-enhanced.jpg", href: "#boxes" },
  { eyebrow: "the", title: "bath bombs", image: "/images/3934-313_bath_bombsremini-enh.jpg", href: "#bath-bombs" },
];

const PROD = "/products";

export const topSaleProducts: Product[] = [
  {
    name: "G² // Glow & Goji Alginate Face Mask",
    descr: "Turmeric + Goji Complex",
    weight: "15 gr.",
    price: "5,95",
    currency: "€",
    image: `${PROD}/8986f3c40d6ca4c5c095a595c3540493.webp`,
  },
  {
    name: "Body Scrub Northern Folk Traditions",
    descr: "with Salt and Apricot Kernel Powder",
    weight: "280 gr.",
    price: "22,9",
    currency: "€",
    mark: "-23%",
    outOfStock: true,
    image: `${PROD}/72785855.webp`,
  },
  {
    name: "Opaline Nourishing Body Cream",
    descr: "with kokum and sal butters",
    weight: "180 gr.",
    price: "31,9",
    currency: "€",
    image: `${PROD}/5aed520b4915029366e693140d22495d.webp`,
  },
  {
    name: "Petal Gold Body silk",
    descr: "with coconut oil, vitamin E and Soapwort Root Extract",
    price: "22,9",
    currency: "€",
    image: `${PROD}/696065710e7830e95009e19933373233.webp`,
  },
];

export const newProducts: Product[] = [
  topSaleProducts[3],
  {
    name: "Jardin Shower Gel",
    descr: "with aloe vera, green tea leaf water, panthenol",
    weight: "280 ml.",
    price: "14",
    currency: "€",
    image: `${PROD}/752114fd277a54a225790792ad8790a5.webp`,
  },
  {
    name: "Twilling Stretchy Body Scrub",
    descr: "with sugar, sea salt, shea butter and emollients",
    weight: "280 gr.",
    price: "28",
    currency: "€",
    image: `${PROD}/1a3a6c4e4767e0cb6cd28cfaf06c5549.webp`,
  },
  topSaleProducts[2],
];

export const accordionItems = [
  {
    title: "mission",
    body: "To create modern, safe and effective cosmetics that bring joy every day — products that can be bright, smell delicious and be aesthetically pleasing, made from natural high-performance ingredients.",
  },
  {
    title: "sustainability",
    body: "We care about the planet: recyclable packaging, cruelty-free formulas that are never tested on animals, and responsibly sourced natural ingredients.",
  },
  {
    title: "our values",
    body: "Honesty, quality and beauty in every detail. We believe natural is perfect and that great cosmetics should feel like a small ritual of self-care.",
  },
];

export const socialStats = {
  instagram: "8 980",
  tiktok: "5 216",
};
