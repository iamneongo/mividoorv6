import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ContactForm } from "@/components/ContactForm";
import { brand } from "@/lib/content";
import { BreadcrumbJsonLd } from "@/components/BreadcrumbJsonLd";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Liên hệ Mividoor - Tư vấn cửa composite",
  description: "Liên hệ Mividoor để được tư vấn mẫu cửa composite, báo giá và giải pháp cửa phù hợp cho công trình.",
  alternates: { canonical: "https://mividoor.vn/lien-he/" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Trang chủ", path: "/" }, { name: "Liên hệ", path: "/lien-he/" }]} />
      <div className="relative w-full bg-white p-4 md:p-6 min-h-screen">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-28 pb-20 h-full min-h-[50vh]">
          <div className="mx-auto flex w-full max-w-[1400px] px-6 lg:px-10 flex-col md:flex-row gap-16 md:gap-24 relative z-10">
          
          {/* Left Column: Big Typography and Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-4xl font-medium tracking-tight text-ink md:text-6xl leading-[1.1]">
                Liên hệ <br />
                <span className="text-[#2563EB] accent-serif font-normal text-3xl md:text-[56px] inline-block mt-2">Mividoor</span>
              </h1>
              <p className="mt-6 max-w-md text-lg text-ink/70 leading-relaxed">
                Hãy để lại thông tin, đội ngũ chuyên gia của chúng tôi sẽ liên hệ lại và tư vấn giải pháp cửa phù hợp nhất cho không gian của bạn.
              </p>
            </div>
            
            <div className="mt-20 flex flex-col gap-8 border-t border-black/10 pt-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink/40">Hotline</p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-ink hover:text-[#2563EB] transition-colors cursor-pointer">{brand.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink/40">Email</p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-ink hover:text-[#2563EB] transition-colors cursor-pointer">{brand.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink/40">Mivicomposite - Nhà máy cửa composite Mividoor</p>
                <p className="mt-2 text-xl font-medium tracking-tight text-ink">Công nghệ Đức</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Minimalist Form */}
          <div className="flex-[0.8] pt-12 md:pt-12">
            <h3 className="text-2xl font-medium text-ink mb-10 tracking-tight">Gửi tin nhắn cho chúng tôi</h3>
            <ContactForm />
          </div>
          </div>
        </div>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
