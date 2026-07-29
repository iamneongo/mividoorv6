"use client";

import Image from "next/image";

const demoVideos = [
  "/mividoor/videos/video_1.mp4",
  "/mividoor/videos/video_2.mp4",
  "/mividoor/videos/video_3.mp4",
  "/mividoor/videos/video_4.mp4",
];

export function NewProductBanner() {
  return (
    <section
      id="luxury"
      className="relative w-full overflow-hidden bg-[#fafafa]"
    >
      {/* Decorative large background text */}
      <div className="pointer-events-none absolute -left-20 top-10 select-none text-[120px] font-black uppercase leading-none tracking-tighter text-black/[0.02] md:text-[240px]">
        Luxury
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col md:min-h-[600px] md:flex-row md:items-center">
        {/* Copy */}
        <div className="z-10 flex-[0.8] px-6 py-14 md:px-10 md:py-0">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            Bộ sưu tập
          </p>
          <h2 className="text-[40px] font-medium leading-[1.05] tracking-[-1px] text-ink md:text-[56px]">
            mividoor{" "}
            <span className="accent-serif font-normal text-brand">luxury</span>
            <br />
            2026
          </h2>
          <p className="mt-6 max-w-md text-[15px] font-normal leading-[1.6] text-[#5c5852]">
            Không chỉ dừng lại ở những ưu điểm của cửa composite thông thường, Mividoor vươn mình kiến tạo dòng sản phẩm Luxury. Nơi chất lượng bền bỉ kết hợp cùng thiết kế nghệ thuật tinh xảo, định hình đẳng cấp cho không gian sống.
          </p>
          <a
            href="#luxury-collection"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[14px] font-medium text-white transition hover:bg-brand-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.2)]"
          >
            Xem bộ sưu tập
          </a>
        </div>

        {/* Static Video Row */}
        <div className="relative min-w-0 flex-[1.2] py-10 md:py-20 md:pr-10">
          <div className="flex snap-x snap-mandatory justify-start gap-5 overflow-x-auto px-6 pb-12 pt-12 md:justify-end md:gap-10 md:px-0 md:pl-6 [&::-webkit-scrollbar]:hidden">
            {demoVideos.slice(0, 2).map((src, i) => (
              <div 
                key={i} 
                className={`relative w-[240px] shrink-0 snap-center md:w-[260px] lg:w-[280px] transition-all duration-700 ${
                  i % 2 === 0 ? "md:-translate-y-8" : "md:translate-y-8"
                }`}
              >
                <div className="group relative h-[380px] w-full overflow-hidden rounded-[24px] border-[6px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:h-[480px] md:rounded-[32px] md:border-[8px]">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Premium Gradient Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-60 mix-blend-multiply transition-opacity group-hover:opacity-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

