"use client";

import Image from "next/image";
import { materials } from "@/lib/content";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export function MaterialsShowcase() {
  return (
    <section className="bg-[#fafafa] py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SlideUp className="mb-12 md:mb-10">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.12em] text-brand md:mb-2">
            Chất lượng làm nên đẳng cấp
          </p>
          <h2 className="text-[36px] font-medium leading-[1.05] tracking-[-1px] text-ink md:max-w-lg md:text-[38px] md:leading-[1.2] md:tracking-[-0.5px]">
            Sử dụng nguyên{" "}
            <br className="md:hidden" />
            vật liệu{" "}
            <span className="accent-serif ml-4 mt-2 block text-[64px] leading-[0.7] text-brand md:ml-0 md:mt-0 md:inline md:text-[48px] md:leading-[1.2]">
              cao cấp
            </span>
          </h2>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-2 md:gap-4 md:h-[500px] lg:h-[600px]">
          {/* 1. Main Left Block (Spans 2 rows, 6 cols) */}
          <StaggerItem className="group relative h-[260px] overflow-hidden rounded-[24px] col-span-2 md:col-span-6 md:row-span-2 md:h-auto border-[4px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:border-[8px] md:rounded-[32px]">
            <Image
              src={materials[3].image}
              alt={materials[3].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="text-[20px] font-medium tracking-[-0.5px] text-white md:text-[24px]">
                {materials[3].title}
              </h3>
            </div>
          </StaggerItem>

          {/* 2. Top Middle Image Block */}
          <StaggerItem className="group relative h-full min-h-[220px] overflow-hidden rounded-[20px] bg-muted col-span-1 row-span-2 md:col-span-3 md:row-span-1 md:h-auto md:min-h-0 border-[3px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:border-[8px] md:rounded-[32px]">
            <Image
              src={materials[1].image}
              alt={materials[1].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
              <h3 className="text-[16px] font-medium tracking-[-0.5px] text-white md:text-[20px]">
                {materials[1].title}
              </h3>
            </div>
          </StaggerItem>

          {/* 3. Top Right Block */}
          <StaggerItem className="group relative h-[140px] overflow-hidden rounded-[20px] bg-muted col-span-1 md:col-span-3 md:h-auto border-[3px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:border-[8px] md:rounded-[32px]">
            <Image
              src={materials[2].image}
              alt={materials[2].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-6">
              <h3 className="text-[16px] font-medium tracking-[-0.5px] text-white md:text-[20px]">
                {materials[2].title}
              </h3>
            </div>
          </StaggerItem>

          {/* 4. Bottom Middle Block */}
          <StaggerItem className="group relative h-[140px] overflow-hidden rounded-[20px] bg-muted col-span-1 md:col-span-3 md:h-auto border-[3px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:border-[8px] md:rounded-[32px]">
            <Image
              src={materials[0].image}
              alt={materials[0].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-6">
              <h3 className="text-[16px] font-medium tracking-[-0.5px] text-white md:text-[20px]">
                {materials[0].title}
              </h3>
            </div>
          </StaggerItem>

          {/* 5. Bottom Right Image Block */}
          <StaggerItem className="group relative h-[160px] overflow-hidden rounded-[24px] bg-muted col-span-2 md:col-span-3 md:h-auto border-[4px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)] md:border-[8px] md:rounded-[32px]">
            <Image
              src={materials[4].image}
              alt={materials[4].title}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
              <h3 className="text-[18px] font-medium tracking-[-0.5px] text-white md:text-[20px]">
                {materials[4].title}
              </h3>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

