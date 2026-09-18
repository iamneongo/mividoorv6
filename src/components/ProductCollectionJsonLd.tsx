import type { Product } from "@/types";

type ProductCollectionJsonLdProps = {
  title: string;
  path: string;
  products: Product[];
};

type CategoryListJsonLdProps = {
  title: string;
  path: string;
  categories: Array<{
    name: string;
    description: string;
    path: string;
    image: string;
  }>;
};

const SITE_URL = "https://mividoor.vn";

function absoluteUrl(value: string) {
  return value.startsWith("http") ? value : `${SITE_URL}${value}`;
}

/**
 * These are catalogue pages, not individual product-detail pages. Models have
 * consultation-only pricing, so using Product here would make Google expect an
 * Offer, review, or product-specific rating. CollectionPage keeps the category
 * meaning without creating invalid Product or Carousel rich-result entities.
 */
export function ProductCollectionJsonLd({
  title,
  path,
  products,
}: ProductCollectionJsonLdProps) {
  const pageUrl = absoluteUrl(path);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Trang chủ",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Mẫu cửa",
            item: `${SITE_URL}/san-pham/`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: title,
            item: pageUrl,
          },
        ],
      },
      {
        "@type": "CollectionPage",
        name: title,
        url: pageUrl,
        description: `${title} gồm ${products.length} mẫu cửa composite Mividoor. Liên hệ để được tư vấn và báo giá theo nhu cầu thực tế.`,
        about: products.map((product) => ({
          "@type": "Thing",
          name: `${product.name} ${product.code}`,
          identifier: product.code,
          image: absoluteUrl(product.image),
          description: product.descr,
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Schema for the main product hub, which lists door categories rather than individual purchasable models. */
export function CategoryListJsonLd({
  title,
  path,
  categories,
}: CategoryListJsonLdProps) {
  const pageUrl = absoluteUrl(path);
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Trang chủ", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: title, item: pageUrl },
        ],
      },
      {
        "@type": "ItemList",
        name: title,
        url: pageUrl,
        numberOfItems: categories.length,
        itemListElement: categories.map((category, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "CollectionPage",
            name: category.name,
            description: category.description,
            image: absoluteUrl(category.image),
            url: absoluteUrl(category.path),
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
