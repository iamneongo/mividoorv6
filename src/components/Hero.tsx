"use client";

import { useCallback, useEffect, useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/Animations";
import { Link } from "next-view-transitions";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/mividoor/images/banner-new-2.webp",
  "/mividoor/images/ben-dep-banner.jpg",
  "/mividoor/images/banner-new-4.webp"
];

const slideContent = [
  {
    subtitle: "Cửa composite Mividoor",
    title: (
      <>
        Cửa composite
        <br />
        công nghệ <span className="accent-serif italic text-brand" style={{ textShadow: "none" }}>Đức</span>
      </>
    ),
    description:
      "Mỗi bộ cửa được tạo nên từ nguyên vật liệu cao cấp kết hợp cùng công nghệ phủ phim đến từ Đức, hoàn thiện sắc nét vượt trội.",
    linkText: "Khám phá sản phẩm",
    linkHref: "/san-pham",
  },
  {
    subtitle: "Chất lượng",
    title: (
      <>
        Bền đẹp
        <br />
        <span className="accent-serif italic text-brand" style={{ textShadow: "none" }}>vượt</span> thời gian
      </>
    ),
    description:
      "Tự hào mang đến các sản phẩm cửa với khả năng chống nước 100%, không cong vênh, chống mối mọt và cách âm hoàn hảo, bảo hành lên đến 10 năm.",
    linkText: "Khám phá sản phẩm",
    linkHref: "/san-pham",
  },
  {
    subtitle: "Bộ sưu tập",
    title: (
      <>
        Mividoor
        <br />
        <span className="accent-serif italic text-brand" style={{ textShadow: "none" }}>Luxury</span> 2026
      </>
    ),
    description:
      "Tuyệt tác cửa nội thất định hình không gian sống sang trọng. Thiết kế đột phá với các đường vân nổi tinh xảo, chất liệu composite siêu bền bỉ thách thức thời gian.",
    linkText: "Khám phá bộ sưu tập",
    linkHref: "/luxury",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", duration: 40 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
    Fade(),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const activeContent = slideContent[activeIndex];

  return (
    <section id="top" className="relative w-full h-[85dvh] md:h-[100dvh] bg-white p-4 md:p-6">
      <div className="relative w-full h-full rounded-[16px] overflow-hidden group">
        {/* Background Image Carousel */}
        <div className="absolute inset-0 overflow-hidden" ref={emblaRef}>
          <div className="flex h-full">
            {banners.map((src, idx) => (
              <div 
                key={idx} 
                className="relative min-w-0 flex-[0_0_100%] h-full bg-cover bg-[80%_center] md:bg-center" 
                style={{ backgroundImage: `url('${src}')` }}
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
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 z-20 pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white/40 z-20 pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 h-full flex flex-col justify-end pb-20 md:pb-24 pointer-events-none">
          
          {/* Left Copy */}
          <StaggerContainer key={activeIndex} className="max-w-xl pointer-events-auto">
            <StaggerItem>
              <p 
                className="text-[12px] font-bold uppercase tracking-[0.12em] text-white/90 mb-4"
                style={{ textShadow: "0 4px 12px rgba(0,0,0,0.3)" }}
              >
                {activeContent.subtitle}
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <h1 
                className="text-[36px] font-medium leading-[1.04] tracking-[-0.5px] text-white md:text-[52px] lg:text-[64px]"
                style={{ textShadow: "0 8px 32px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.2)" }}
              >
                {activeContent.title}
              </h1>
            </StaggerItem>
            
            <StaggerItem>
              <p 
                className="mt-6 max-w-md text-[16px] font-normal leading-[1.5] text-white/90"
                style={{ textShadow: "0 4px 16px rgba(0,0,0,0.4), 0 1px 2px rgba(0,0,0,0.2)" }}
              >
                {activeContent.description}
              </p>
            </StaggerItem>
            
            <StaggerItem>
              <Link
                href={activeContent.linkHref}
                className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[14px] font-semibold text-white transition hover:bg-brand-2"
              >
                {activeContent.linkText}
              </Link>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}

