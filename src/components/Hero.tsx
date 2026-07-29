import { StaggerContainer, StaggerItem } from "@/components/Animations";

export function Hero() {
  return (
    <section 
      id="top" 
      className="relative w-full h-[600px] md:h-[760px] bg-cover bg-[70%_center] md:bg-center" 
      style={{ backgroundImage: "url('/mividoor/images/banner-new-2.png')" }}
    >
      {/* Light legibility scrim for white text contrast */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 50%)",
        }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 h-full flex flex-col justify-end pb-16 md:pb-28">
        {/* Left Copy */}
        <StaggerContainer className="max-w-xl">
          <StaggerItem>
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.12em] text-white">
              Mivicomposite
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
            <a
              href="#products"
              className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[14px] font-semibold text-white transition hover:bg-brand-2"
            >
              Khám phá sản phẩm
            </a>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

