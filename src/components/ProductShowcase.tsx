"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import type { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { ChevronRightIcon, ChevronLeftIcon } from "@/components/icons";

interface ProductShowcaseProps {
  id?: string;
  eyebrow: string;
  tabs: string[];
  activeTab: string;
  products: Product[];
  ctaLabel?: string;
}

export function ProductShowcase({
  id,
  eyebrow,
  tabs,
  activeTab,
  products,
  ctaLabel = "Xem tất cả sản phẩm",
}: ProductShowcaseProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id={id} className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
              {eyebrow}
            </p>
            <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {tabs.map((t) => (
                <button
                  key={t}
                  className={
                    t === activeTab
                      ? "text-[15px] font-medium text-[#111111]"
                      : "text-[15px] font-normal text-[#bdbdbd] transition-colors hover:text-[#111111]"
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
          <a
            href="#products"
            className="flex items-center gap-1 text-[15px] font-normal text-[#111111] transition-opacity hover:opacity-60"
          >
            {ctaLabel} <ChevronRightIcon className="size-4" />
          </a>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5 pb-4">
            {products.map((p) => (
              <div key={p.code} className="min-w-0 flex-[0_0_auto] pl-5 w-[250px] sm:w-[280px] md:w-[320px]">
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="mt-4 flex items-center justify-end gap-3">
          <button
            aria-label="Trước"
            onClick={scrollPrev}
            className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition hover:bg-black/[0.08]"
          >
            <ChevronLeftIcon className="size-4" />
          </button>
          <button
            aria-label="Sau"
            onClick={scrollNext}
            className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition hover:bg-black/[0.08]"
          >
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

