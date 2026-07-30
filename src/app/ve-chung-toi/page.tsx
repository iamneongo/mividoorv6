import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutSynergy } from "@/components/AboutSynergy";
import { AboutFactory } from "@/components/AboutFactory";
import { AboutBrand } from "@/components/AboutBrand";
import { AboutValues } from "@/components/AboutValues";

export default function AboutPage() {
  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6 min-h-[50vh]">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-32 pb-24 min-h-[50vh] flex flex-col justify-center">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10 w-full">
            <div className="flex flex-col items-center justify-center text-center gap-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-medium tracking-tighter text-ink md:text-[56px] leading-[1]">
                Về chúng tôi <br />
                <span className="font-normal accent-serif text-[#2563EB] text-[56px] md:text-[80px] tracking-normal inline-block mt-2">Mividoor & Mivicomposite</span>
              </h1>
              <p className="max-w-2xl text-lg text-ink/70 leading-relaxed mt-2">
                Sự kết hợp hoàn hảo giữa nhà máy sản xuất ván gỗ nhựa hàng đầu và thương hiệu cửa nội thất cao cấp.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <AboutSynergy />
      <AboutFactory />
      <AboutBrand />
      <AboutValues />
      
      <SiteFooter />
    </>
  );
}
