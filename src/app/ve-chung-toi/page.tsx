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
        <div className="relative w-full rounded-[16px] overflow-hidden mt-24 flex items-center justify-center bg-[#F2F2EC]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/mividoor/images/about-banner-new.jpg" 
            alt="Về chúng tôi Mividoor" 
            className="w-full h-auto max-h-[80vh] object-contain" 
          />
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
