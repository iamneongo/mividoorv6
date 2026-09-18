import { brand } from "@/lib/content";

export function SeoJsonLd() {
  const socialProfiles = [
    "https://www.facebook.com/mivicomposite",
    "https://www.tiktok.com/@mivicompositevn",
  ];
  const address = {
    "@type": "PostalAddress",
    streetAddress: "52 Nguyễn Thị Nhung, Khu đô thị Vạn Phúc",
    addressLocality: "Thủ Đức",
    addressRegion: "Hồ Chí Minh",
    postalCode: "700000",
    addressCountry: "VN",
  };
  const image = "https://mividoor.vn/mividoor/images/banner-new-2.webp";
  const mapUrl = "https://maps.app.goo.gl/f9fEVaEyCGyk4BpSA";
  const openingHours = {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:30",
    closes: "17:00",
  };

  const graph = [
    {
      "@type": "Organization",
      "@id": "https://mividoor.vn/#organization",
      name: brand.name,
      url: "https://mividoor.vn/",
      logo: "https://mividoor.vn/mividoor/images/logo.png",
      image,
      email: brand.email,
      telephone: brand.phone,
      address,
      sameAs: socialProfiles,
    },
      {
        "@type": "LocalBusiness",
        "@id": "https://mividoor.vn/#localbusiness",
        name: "CÔNG TY TNHH XUẤT NHẬP KHẨU MIVICOMPOSITE VN",
        alternateName: "Mividoor",
        url: "https://mividoor.vn/",
        image,
        telephone: brand.phone,
        email: brand.email,
        priceRange: "$$",
        address,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 10.8441605,
          longitude: 106.7125568,
        },
        hasMap: mapUrl,
        openingHoursSpecification: [openingHours],
        sameAs: socialProfiles,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 5,
          reviewCount: 1,
          bestRating: 5,
          worstRating: 1,
        },
        parentOrganization: { "@id": "https://mividoor.vn/#organization" },
      },
    {
      "@type": "WebSite",
      "@id": "https://mividoor.vn/#website",
      name: "Mividoor",
      url: "https://mividoor.vn/",
      image,
      publisher: { "@id": "https://mividoor.vn/#organization" },
      inLanguage: "vi-VN",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://mividoor.vn/tim-kiem/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
