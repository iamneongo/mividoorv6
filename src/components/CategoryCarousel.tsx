"use client";

import { useRef } from "react";
import { categories } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

export function CategoryCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: 1 | -1) => {
    trackRef.current?.scrollBy({ left: dir * 380, behavior: "smooth" });
  };

  return (
    <section className="bg-white pb-6">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
        >
          {categories.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group relative aspect-[350/393] w-[300px] shrink-0 snap-start overflow-hidden rounded-[22px] md:w-[350px]"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${c.image}')` }}
              />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[15px] font-normal text-[#111111]">
                    {c.eyebrow}
                  </p>
                  <p className="text-[34px] font-semibold leading-none tracking-[-0.5px] text-[#111111]">
                    {c.title}
                  </p>
                </div>
                <span className="flex size-8 items-center justify-center rounded-full text-[#111111] transition group-hover:translate-x-0.5">
                  <ChevronRightIcon className="size-5" />
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3">
          <button
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition hover:bg-black/[0.08]"
          >
            <ChevronLeftIcon className="size-4" />
          </button>
          <button
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition hover:bg-black/[0.08]"
          >
            <ChevronRightIcon className="size-4" />
          </button>
          <span className="ml-1 text-[15px] font-normal text-[#111111]">
            more products
          </span>
        </div>
      </div>
    </section>
  );
}
