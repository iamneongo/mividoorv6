"use client";

import { useRef } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
} from "@/components/icons";

const videoCards = [
  { label: "microphone review", tone: "#241c18" },
  { label: "product unboxing", tone: "#1d1a22" },
  { label: "skincare routine", tone: "#161d1a" },
  { label: "first impressions", tone: "#221615" },
  { label: "honest thoughts", tone: "#15181d" },
];

export function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollBy = (dir: 1 | -1) =>
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <section id="feedback" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[15px] font-normal text-[#111111]">review</p>
            <p className="mt-2 text-[15px] font-normal text-[#111111]">
              average product rating from consumers -{" "}
              <span className="font-semibold">4.9</span> out of 5
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-full bg-[#f4f3f1] p-1">
              <button className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-[#111111] shadow-sm">
                video feedback
              </button>
              <button className="px-4 py-2 text-[14px] font-normal text-[#818181] transition-colors hover:text-[#111111]">
                text feedback
              </button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[15px] text-[#111111]">more feedback</span>
              <button
                aria-label="Previous"
                onClick={() => scrollBy(-1)}
                className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] transition hover:bg-black/[0.08]"
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                aria-label="Next"
                onClick={() => scrollBy(1)}
                className="flex size-9 items-center justify-center rounded-full bg-black/[0.04] transition hover:bg-black/[0.08]"
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Video cards */}
        <div
          ref={trackRef}
          className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2"
        >
          {videoCards.map((v) => (
            <div
              key={v.label}
              style={{ backgroundColor: v.tone }}
              className="relative aspect-[9/13] w-[220px] shrink-0 snap-start overflow-hidden rounded-[18px]"
            >
              <button
                aria-label={`Play ${v.label}`}
                className="absolute left-1/2 top-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff0000] text-white shadow-lg transition hover:scale-105"
              >
                <PlayIcon className="ml-0.5 size-6" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
