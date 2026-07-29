"use client";

import Image from "next/image";
import { materials } from "@/lib/content";

export function MaterialsShowcase() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-10">
          <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            Chất lượng làm nên đẳng cấp
          </p>
          <h2 className="max-w-lg text-[28px] font-medium leading-[1.2] tracking-[-0.5px] text-ink md:text-[38px]">
            sử dụng nguyên vật liệu{" "}
            <span className="accent-serif whitespace-nowrap text-brand">cao cấp</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-2 md:h-[500px] lg:h-[600px]">
          {/* 1. Main Left Block (Spans 2 rows, 6 cols) */}
          <div className="group relative h-[450px] overflow-hidden rounded-[24px] md:col-span-6 md:row-span-2 md:h-auto">
            <Image
              src={materials[0].image}
              alt={materials[0].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* White overlay card */}
            <div className="absolute bottom-6 left-6 w-[85%] max-w-[320px] rounded-[20px] bg-white p-8 shadow-2xl md:bottom-10 md:left-10 md:p-10">
              <h3 className="mb-3 text-[24px] font-medium tracking-[-0.5px] text-[#111111] md:text-[28px]">
                {materials[0].title}
              </h3>
              <p className="mb-8 text-[15px] leading-[1.5] text-[#666666]">
                {materials[0].subtitle}
              </p>
              <a
                href="#contact"
                className="inline-block border-b border-[#111111] pb-1 text-[13px] font-medium uppercase tracking-[0.05em] text-[#111111] transition-opacity hover:opacity-60"
              >
                Nhận tư vấn
              </a>
            </div>
          </div>

          {/* 2. Top Middle Image Block (4 cols) */}
          <div className="group relative h-[300px] overflow-hidden rounded-[24px] bg-muted md:col-span-4 md:h-auto">
            <Image
              src={materials[1].image}
              alt={materials[1].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="text-[20px] font-medium tracking-[-0.5px] text-white md:text-[22px]">
                {materials[1].title}
              </h3>
            </div>
          </div>

          {/* 3. Top Right Text Block (2 cols) */}
          <div className="flex h-[300px] flex-col rounded-[24px] bg-[#0a0a0a] p-8 md:col-span-2 md:h-auto md:p-8 lg:p-10">
            <h3 className="mb-3 text-[20px] font-medium tracking-[-0.5px] text-white md:text-[22px]">
              {materials[2].title}
            </h3>
            <p className="mb-8 text-[14px] leading-[1.6] text-[#a1a1aa]">
              {materials[2].subtitle}
            </p>
            <a
              href="#contact"
              className="mt-auto inline-block self-start border-b border-white/30 pb-1 text-[12px] font-medium uppercase tracking-[0.05em] text-white transition-colors hover:border-white"
            >
              Chi tiết
            </a>
          </div>

          {/* 4. Bottom Middle Text Block (2 cols) */}
          <div className="flex h-[300px] flex-col rounded-[24px] bg-[#0a0a0a] p-8 md:col-span-2 md:h-auto md:p-8 lg:p-10">
            <h3 className="mb-3 text-[20px] font-medium tracking-[-0.5px] text-white md:text-[22px]">
              {materials[3].title}
            </h3>
            <p className="mb-8 text-[14px] leading-[1.6] text-[#a1a1aa]">
              {materials[3].subtitle}
            </p>
            <a
              href="#contact"
              className="mt-auto inline-block self-start border-b border-white/30 pb-1 text-[12px] font-medium uppercase tracking-[0.05em] text-white transition-colors hover:border-white"
            >
              Chi tiết
            </a>
          </div>

          {/* 5. Bottom Right Image Block (4 cols) */}
          <div className="group relative h-[300px] overflow-hidden rounded-[24px] bg-muted md:col-span-4 md:h-auto">
            <Image
              src={materials[4].image}
              alt={materials[4].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="text-[20px] font-medium tracking-[-0.5px] text-white md:text-[22px]">
                {materials[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

