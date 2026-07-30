"use client";

import { useCallback } from "react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { luxuryDoors } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon, SparkleIcon } from "@/components/icons";

interface LuxuryShowcaseProps {
  variant?: "carousel" | "grid";
}

export function LuxuryShowcase({ variant = "carousel" }: LuxuryShowcaseProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 6000, stopOnInteraction: false }),
  ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section id="luxury-collection" className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="max-w-xl text-[28px] font-medium leading-[1.15] tracking-[-0.5px] text-ink md:text-[38px]">
              bộ sưu tập cửa{" "}
              <SparkleIcon className="mb-1 inline size-6 text-brand" />{" "}
              <span className="accent-serif text-brand">luxury</span>
            </h2>
          </div>
          {variant === "carousel" && (
            <div className="flex items-center gap-2">
              <button
                aria-label="TrÆ°á»›c"
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
          )}
        </div>

        {variant === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 pb-4">
            {luxuryDoors.map((d) => {
              const slug = d.code.toLowerCase().replace(/\s+/g, '-');
              return (
                <div key={d.code} className="min-w-0">
                  <div
                    className="group relative flex w-full flex-col gap-5 bg-white p-6 rounded-3xl"
                  >
                    <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[22px]">
                      <Image
                        src={d.image}
                        alt={d.code}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-end justify-between px-2">
                      <div>
                        <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
                          {d.code}
                        </p>
                        <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-[-0.5px] text-ink transition-colors group-hover:text-brand">
                          {d.tagline}
                        </p>
                      </div>
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
                        <ChevronRightIcon className="size-5" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-5 pb-2">
              {luxuryDoors.map((d) => {
                const slug = d.code.toLowerCase().replace(/\s+/g, '-');
                return (
                  <div key={d.code} className="min-w-0 flex-[0_0_auto] pl-5 w-[240px] sm:w-[280px] md:w-[320px]">
                    <div
                      className="group relative flex w-full flex-col gap-5"
                    >
                      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[22px]">
                        <Image
                          src={d.image}
                          alt={d.code}
                          fill
                          sizes="300px"
                          className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex items-end justify-between px-2">
                        <div>
                          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
                            {d.code}
                          </p>
                          <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-[-0.5px] text-ink transition-colors group-hover:text-brand">
                            {d.tagline}
                          </p>
                        </div>
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
                          <ChevronRightIcon className="size-5" />
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {variant === "carousel" && (
          <div className="mt-10 flex justify-center">
            <Link
              href="/luxury"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-8 text-[15px] font-medium text-white transition hover:bg-brand-2"
            >
              Xem toàn bộ bộ sưu tập
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
