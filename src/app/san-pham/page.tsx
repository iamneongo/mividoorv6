import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IngredientsIntro } from "@/components/IngredientsIntro";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { ColorPalette } from "@/components/ColorPalette";
import { MaterialsShowcase } from "@/components/MaterialsShowcase";

export default function ProductsPage() {
  return (
    <>
      <div className="relative bg-white pb-20 pt-40">
        <SiteHeader theme="light" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="text-6xl font-medium tracking-tighter text-ink md:text-[100px] leading-[0.9]">
              Sản phẩm <br />
              <span className="text-ink accent-serif font-normal text-5xl md:text-[80px]">Mividoor</span>
            </h1>
            <p className="max-w-md text-lg text-ink/70">
              Khám phá các dòng sản phẩm cửa composite chất lượng cao, đa dạng mẫu mã và màu sắc, phù hợp với mọi không gian kiến trúc.
            </p>
          </div>
        </div>
      </div>
      <IngredientsIntro />
      <CategoryCarousel />
      <MaterialsShowcase />
      <ColorPalette />
      <SiteFooter />
    </>
  );
}
