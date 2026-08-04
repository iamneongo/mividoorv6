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
        <div className="relative w-full rounded-[16px] overflow-hidden pt-32 pb-24 min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/mividoor/images/about-banner.png" 
            alt="Về chúng tôi Mividoor" 
            className="absolute inset-0 w-full h-full object-cover z-0" 
          />
          <div className="absolute inset-0 bg-white/30 z-0"></div>
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10 w-full">
            <div className="flex flex-col items-center justify-center text-center gap-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-medium tracking-tighter text-ink md:text-[56px] leading-[1] drop-shadow-sm">
                Về chúng tôi <br />
                <span className="font-normal accent-serif text-[#2563EB] text-[44px] md:text-[80px] tracking-normal inline-block mt-2">Mividoor</span>
              </h1>
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
