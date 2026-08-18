import Image from "next/image";
import { colorSwatches } from "@/lib/content";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export function ColorPalette() {
  return (
    <section className="below-fold-section bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SlideUp className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            BẢNG MÀU PVC MIVIDOOR
          </p>
          <h2 className="mx-auto max-w-2xl text-[28px] font-medium leading-[1.2] tracking-[-0.5px] text-ink md:text-[38px]">
            Bộ sưu tập 18 màu phim <span className="accent-serif text-brand">cao cấp</span>, vân gỗ tự nhiên sắc nét
          </h2>
        </SlideUp>

        <StaggerContainer 
          className="mx-auto mt-12 flex max-w-4xl flex-wrap justify-center gap-4 md:gap-6"
          staggerChildren={0.03}
        >
          {colorSwatches.map((s) => (
            <StaggerItem key={s.code} yOffset={20}>
              <div className="group relative flex w-[60px] flex-col items-center md:w-[72px]">
                <div className="relative mb-2 h-[50px] w-[50px] overflow-hidden rounded-full border border-black/10 shadow-sm transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 group-hover:shadow-md md:h-[64px] md:w-[64px]">
                  <Image
                    src={s.image}
                    alt={s.code}
                    fill
                    sizes="(min-width: 768px) 64px, 50px"
                    className="object-cover scale-[2.5]"
                  />
                </div>
                <p className="text-center text-[10px] font-semibold uppercase tracking-wider text-ink transition-colors group-hover:text-brand md:text-[11px]">
                  {s.code}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

