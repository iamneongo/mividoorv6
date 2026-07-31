import { StaggerContainer, StaggerItem } from "@/components/Animations";
import { Link } from "next-view-transitions";

export function Hero() {
  return (
    <section id="top" className="relative w-full h-[85dvh] md:h-[100dvh] bg-white p-4 md:p-6">
      <div className="relative w-full h-full rounded-[16px] overflow-hidden">
        {/* Background Image Carousel */}
        <div 
          className="absolute inset-0 bg-cover bg-[80%_center] md:bg-center transition-transform duration-700" 
          style={{ backgroundImage: "url('/mividoor/images/banner-new-2.png')" }}
        >
          {/* Light legibility scrim for white text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0) 60%)",
            }}
          />
        </div>



      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 h-full flex flex-col justify-end pb-20 md:pb-24 pointer-events-none">
        
        {/* Left Copy */}
        <StaggerContainer className="max-w-xl pointer-events-auto">
          <StaggerItem>
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/70 mb-4">
              Cửa composite Mividoor
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <h1 className="text-[36px] font-medium leading-[1.04] tracking-[-0.5px] text-white md:text-[52px] lg:text-[64px]">
              cửa composite
              <br />
              công nghệ <span className="accent-serif italic text-brand">Đức</span>
            </h1>
          </StaggerItem>
          
          <StaggerItem>
            <p className="mt-6 max-w-md text-[16px] font-normal leading-[1.5] text-white/90">
              Mỗi bộ cửa được tạo nên từ nguyên vật liệu cao cấp kết hợp cùng
              công nghệ phủ phim đến từ Đức, hoàn thiện sắc nét vượt trội.
            </p>
          </StaggerItem>
          
          <StaggerItem>
            <Link
              href="/san-pham"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[14px] font-semibold text-white transition hover:bg-brand-2"
            >
              Khám phá sản phẩm
            </Link>
          </StaggerItem>
        </StaggerContainer>
      </div>
      </div>
    </section>
  );
}

