import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6 min-h-screen">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-32 pb-20 h-full min-h-screen flex items-center">
          <div className="mx-auto flex w-full max-w-[1400px] px-6 lg:px-10 flex-col md:flex-row gap-16 md:gap-24 relative z-10">
          
          {/* Left Column: Big Typography and Info */}
          <div className="flex-1 flex flex-col justify-between py-12">
            <div>
              <h1 className="text-5xl font-medium tracking-tighter text-ink md:text-[72px] leading-[0.9]">
                Liên hệ <br />
                <span className="text-[#2563EB] accent-serif font-normal text-4xl md:text-[64px]">Mividoor</span>
              </h1>
              <p className="mt-8 max-w-md text-lg text-ink/70 leading-relaxed">
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
                <p className="mt-2 text-xl font-medium tracking-tight text-ink">Công nghệ Đức - Tiêu chuẩn Châu Âu</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Minimalist Form */}
          <div className="flex-[0.8] pt-12 md:pt-12">
            <h3 className="text-2xl font-medium text-ink mb-10 tracking-tight">Gửi tin nhắn cho chúng tôi</h3>
            <form className="flex flex-col gap-8">
              <input 
                type="text" 
                placeholder="Họ và tên" 
                className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-[#2563EB] focus:border-b-2 placeholder:text-ink/30"
              />
              <input 
                type="tel" 
                placeholder="Số điện thoại" 
                className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-[#2563EB] focus:border-b-2 placeholder:text-ink/30"
              />
              <textarea 
                placeholder="Nội dung" 
                rows={4}
                className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-[#2563EB] focus:border-b-2 resize-none placeholder:text-ink/30"
              ></textarea>
              <button 
                type="button"
                className="mt-4 self-start rounded-full bg-ink px-10 py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#2563EB]"
              >
                Gửi yêu cầu
              </button>
            </form>
          </div>
          </div>
        </div>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
