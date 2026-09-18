import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import { CatalogueFlipbook } from "@/components/CatalogueFlipbook";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "Catalogue cửa composite Mividoor 2024",
  description: "Khám phá catalogue cửa composite Mividoor 2024 với trải nghiệm lật trang trực tuyến.",
  alternates: { canonical: "https://mividoor.vn/catalogue/" },
};

export default function CataloguePage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Trang chủ", path: "/" }, { name: "Catalogue", path: "/catalogue/" }]} />
      <div className="relative w-full bg-white p-2 md:p-6">
        <SiteHeader />
        <section className="relative w-full overflow-hidden rounded-[16px] bg-[#F2F2EC] pt-20 md:pt-28">
          <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="mb-14 flex flex-col gap-6 md:mb-24 md:flex-row md:items-end md:justify-between md:gap-8">
              <h1 className="text-4xl font-medium leading-[1.1] tracking-tight text-ink md:text-6xl">
                Catalogue <br />
                <span className="accent-serif mt-2 inline-block text-3xl font-normal text-[#2563EB] md:text-[56px]">Mivicomposite 2024</span>
              </h1>
              <p className="max-w-md pb-4 text-lg leading-relaxed text-ink/70 md:pb-8 md:text-right">Khám phá trọn bộ mẫu cửa composite, màu sắc và các giải pháp hoàn thiện nổi bật.</p>
            </div>
            <CatalogueFlipbook />
          </div>
        </section>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
