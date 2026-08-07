import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AboutIntro } from "@/components/AboutIntro";
import { AboutAdvantages } from "@/components/AboutAdvantages";
import { AboutPhilosophy } from "@/components/AboutPhilosophy";
import { AboutTechProcess } from "@/components/AboutTechProcess";
import { AboutWarranty } from "@/components/AboutWarranty";
import { AboutAccessories } from "@/components/AboutAccessories";
import { NewProductBanner } from "@/components/NewProductBanner";

export default function AboutPage() {
  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6 min-h-[50vh]">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden pt-20 pb-12 lg:pt-24 lg:pb-16 h-full bg-[url('/mividoor/images/about-bg-parallax-v2.jpg')] bg-fixed bg-cover bg-center">
          {/* Dark gradient overlay on the left to make white text readable, fading to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10 z-0" />
          
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
              
              {/* Text Left */}
              <div className="w-full lg:w-7/12 flex flex-col items-start gap-6 lg:gap-8">
                <h1 className="text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl leading-[1.1] drop-shadow-lg">
                  Về chúng tôi <br />
                  <span className="text-blue-400 accent-serif font-normal text-4xl md:text-[56px] inline-block mt-2">Mividoor</span>
                </h1>
                <p className="max-w-xl text-lg text-white/90 drop-shadow-md">
                  Đồng hành cùng hàng ngàn công trình Việt. Mividoor tự hào kiến tạo những không gian sống hoàn mỹ qua từng cánh cửa mang tiêu chuẩn chất lượng vượt trội.
                </p>
              </div>
              
              {/* Image Right */}
              <div className="w-full lg:w-5/12 mt-8 lg:mt-0 flex justify-end">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border-[4px] border-white group">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src="/mividoor/images/about-banner-new.jpg" 
                    alt="Về chúng tôi Mividoor" 
                    className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-700 ease-out" 
                  />
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      
      <AboutIntro />
      <AboutAdvantages />
      <AboutPhilosophy />
      <AboutTechProcess />
      <AboutWarranty />
      <AboutAccessories />
      <NewProductBanner />
      
      <SiteFooter />
    </>
  );
}
