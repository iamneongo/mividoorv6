import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://mividoor.vn";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/lien-he",
    "/luxury",
    "/mau-2-canh",
    "/mau-di-epoxy",
    "/mau-di-nep",
    "/mau-lua",
    "/mau-o-fix",
    "/mau-o-kinh-la-sach",
    "/mau-phang",
    "/mau-phao-chi-noi",
    "/mau-soi-huynh",
    "/mau-vom",
    "/san-pham",
    "/tin-tuc",
    "/ve-chung-toi",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}/`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
