"use client";

import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { categories } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function CategoryCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white pb-6">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-5 pb-2">
            {[...categories, ...categories].map((c, i) => (
              <div key={`${c.title}-${i}`} className="min-w-0 flex-[0_0_auto] pl-5">
                  <a
                  href={c.href}
                  className="group flex w-[180px] sm:w-[220px] flex-col gap-5 md:w-[260px]"
                >
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[22px]">
                    <div
                      className="absolute inset-0 bg-bottom bg-no-repeat transition-transform duration-700 group-hover:scale-105 origin-bottom"
                      style={{ backgroundImage: `url('${c.image}')`, backgroundSize: 'auto 85%' }}
                    />
                  </div>
                  <div className="flex items-end justify-between px-2">
                    <div>
                      <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
                        {c.eyebrow}
                      </p>
                      <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-[-0.5px] text-ink">
                        {c.title}
                      </p>
                    </div>
                    <span className="flex size-8 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
                      <ChevronRightIcon className="size-5" />
                    </span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center gap-3">
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
