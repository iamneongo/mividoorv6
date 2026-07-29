import Image from "next/image";
import { colorSwatches } from "@/lib/content";

export function ColorPalette() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="mb-12 text-center">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            BẢNG MÀU PVC MIVIDOOR
          </p>
          <h2 className="mx-auto max-w-2xl text-[28px] font-medium leading-[1.2] tracking-[-0.5px] text-ink md:text-[38px]">
            Bộ sưu tập 18 màu phim <span className="accent-serif text-brand">cao cấp</span>, vân gỗ tự nhiên sắc nét
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-10 md:gap-x-10 md:gap-y-12">
          {colorSwatches.map((s) => (
            <div key={s.code} className="group flex flex-col items-center">
              <div className="relative mb-4 h-20 w-20 md:h-28 md:w-28">
                <div className="absolute inset-0 overflow-hidden rounded-full border border-black/10 shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:shadow-md">
                  <Image
                    src={s.image}
                    alt={s.code}
                    fill
                    sizes="(min-width: 768px) 112px, 80px"
                    className="object-cover scale-[2.5]"
                  />
                </div>
                {s.isNew && (
                  <span className="absolute -right-2 -top-1 z-10 rounded-full border border-white bg-brand px-2 py-0.5 text-[10px] font-medium text-white shadow-sm transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                    mới
                  </span>
                )}
              </div>
              <p className="text-[13px] font-bold uppercase tracking-[0.05em] text-[#111111] transition-colors group-hover:text-brand">
                {s.code}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

