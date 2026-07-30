import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { brand } from "@/lib/content";

export default function ContactPage() {
  return (
    <>
      <div className="relative bg-white pb-32 pt-40 min-h-screen">
        <SiteHeader theme="light" />
        <div className="mx-auto flex w-full max-w-[1400px] px-6 lg:px-10 flex-col md:flex-row gap-16 md:gap-24">
          
          {/* Left Column: Big Typography and Info */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h1 className="text-6xl font-medium tracking-tighter text-ink md:text-[100px] leading-[0.9]">
                Liên hệ <br />
                <span className="text-ink accent-serif font-normal text-5xl md:text-[80px]">Mividoor</span>
              </h1>
              <p className="mt-8 max-w-md text-lg text-ink/70">
                Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Vui lòng liên hệ với Mividoor qua các kênh dưới đây.
              </p>
            </div>
            
            <div className="mt-20 flex flex-col gap-8 border-t border-black/10 pt-8">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink/40">Hotline</p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-ink hover:text-brand transition-colors cursor-pointer">{brand.phone}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink/40">Email</p>
                <p className="mt-2 text-2xl font-medium tracking-tight text-ink hover:text-brand transition-colors cursor-pointer">{brand.email}</p>
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.15em] text-ink/40">Nhà máy sản xuất</p>
                <p className="mt-2 text-xl font-medium tracking-tight text-ink">Công nghệ Đức - Tiêu chuẩn Châu Âu</p>
              </div>
            </div>
          </div>
          
          {/* Right Column: Minimalist Form */}
          <div className="flex-[0.8] pt-4 md:pt-0">
            <h3 className="text-2xl font-medium text-ink mb-10 tracking-tight">Gửi tin nhắn cho chúng tôi</h3>
            <form className="flex flex-col gap-8">
              <input 
                type="text" 
                placeholder="Họ và tên" 
                className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-brand focus:border-b-2 placeholder:text-ink/30"
              />
              <input 
                type="tel" 
                placeholder="Số điện thoại" 
                className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-brand focus:border-b-2 placeholder:text-ink/30"
              />
              <textarea 
                placeholder="Nội dung" 
                rows={4}
                className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-brand focus:border-b-2 resize-none placeholder:text-ink/30"
              ></textarea>
              <button 
                type="button"
                className="mt-6 h-14 rounded-full bg-ink px-10 text-lg font-medium text-white transition hover:bg-brand w-fit"
              >
                Gửi yêu cầu
              </button>
            </form>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
