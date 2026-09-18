"use client";



import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { productCatalog } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

interface CategoryCarouselProps {
  variant?: "carousel" | "grid";
}

export function CategoryCarousel({ variant = "carousel" }: CategoryCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const categories = productCatalog.filter(p => p.isCategory);

  return (
    <section className="below-fold-section bg-white pb-6 pt-4">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {variant === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pb-4">
            {categories.map((c, i) => (
              <div key={`${c.name}-${i}`} className="min-w-0">
                <div className="group flex flex-col gap-5 bg-white p-6 rounded-3xl">
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[22px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.image}
                      alt={c.name}
                      width={320}
                      height={480}
                      loading="lazy"
                      decoding="async"
                      className="absolute bottom-0 left-1/2 h-[85%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="flex items-end justify-between px-2">
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
                        {c.code}
                      </p>
                      <p className="mt-1.5 text-[20px] font-medium leading-[1.2] tracking-tight text-ink line-clamp-2">
                        {c.name}
                      </p>
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
                      <ChevronRightIcon className="size-5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex -ml-5 pb-2">
                {[...categories, ...categories].map((c, i) => (
                  <div key={`${c.name}-${i}`} className="min-w-0 flex-[0_0_auto] pl-5">
                      <div className="group flex w-[62vw] sm:w-[280px] md:w-[320px] flex-col gap-5">
                      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[22px]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={c.image}
                          alt={c.name}
                          width={320}
                          height={480}
                          loading="lazy"
                          decoding="async"
                          className="absolute bottom-0 left-1/2 h-[85%] w-auto max-w-none -translate-x-1/2 object-contain object-bottom transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                      <div className="flex items-end justify-between px-2">
                        <div>
                          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
                            {c.code}
                          </p>
                          <p className="mt-1.5 text-[20px] font-medium leading-[1.2] tracking-tight text-ink line-clamp-2">
                            {c.name}
                          </p>
                        </div>
                        <span className="flex size-8 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
                          <ChevronRightIcon className="size-5" />
                        </span>
                      </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <button
                aria-label="Trước"
                onClick={scrollPrev}
                className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] transition hover:bg-black/[0.08]"
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                aria-label="Sau"
                onClick={scrollNext}
                className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] transition hover:bg-black/[0.08]"
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
