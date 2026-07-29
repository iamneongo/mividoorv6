"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { accordionItems } from "@/lib/content";
import { PlusIcon } from "@/components/icons";

export function Accordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
      {accordionItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-t border-[#e3e3e3] last:border-b">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-6 text-left"
            >
              <span className="text-[24px] font-medium tracking-[-0.5px] text-[#111111] md:text-[28px]">
                {item.title}
              </span>
              <PlusIcon
                className={cn(
                  "size-6 shrink-0 text-[#111111] transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-6 text-[16px] font-normal leading-[1.5] text-[#0d1717]">
                  {item.body}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
