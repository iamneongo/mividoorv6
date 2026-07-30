import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewProductBanner } from "@/components/NewProductBanner";
import { LuxuryShowcase } from "@/components/LuxuryShowcase";

export default function LuxuryPage() {
  return (
    <>
      <div className="relative bg-white pb-20 pt-40 border-b border-black/5">
        <SiteHeader theme="light" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <h1 className="text-6xl font-medium tracking-tighter text-ink md:text-[100px] leading-[0.9]">
              Mividoor <br />
              <span className="text-ink accent-serif font-normal text-5xl md:text-[80px]">Luxury</span>
            </h1>
            <p className="max-w-md text-lg text-ink/70">
              Nơi chất lượng bền bỉ kết hợp cùng thiết kế nghệ thuật tinh xảo, định hình đẳng cấp cho không gian sống hiện đại.
            </p>
          </div>
        </div>
      </div>
      <NewProductBanner />
      <LuxuryShowcase />
      <SiteFooter />
    </>
  );
}
