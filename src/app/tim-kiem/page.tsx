import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { SearchResults } from "@/components/SearchResults";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Tìm kiếm mẫu cửa Mividoor",
  description: "Tìm kiếm mẫu cửa composite, mã sản phẩm và bộ sưu tập Mividoor.",
  alternates: { canonical: "https://mividoor.vn/tim-kiem/" },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Trang chủ", path: "/" }, { name: "Tìm kiếm", path: "/tim-kiem/" }]} />
      <div className="bg-white p-4 md:p-6">
        <SiteHeader />
        <section className="mx-auto min-h-[55vh] max-w-[1000px] px-6 py-24 md:px-10">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#2563EB]">Mividoor</p>
          <h1 className="mt-3 text-4xl font-medium tracking-tight text-ink md:text-5xl">Tìm kiếm mẫu cửa</h1>
          <SearchResults />
        </section>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
