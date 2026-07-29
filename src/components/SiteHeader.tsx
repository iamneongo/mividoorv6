"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/content";
import {
  BagIcon,
  ChevronDownIcon,
  HeartIcon,
  MenuIcon,
  SearchIcon,
} from "@/components/icons";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-[30px] z-[9999] h-[88px]">
      <div className="pointer-events-auto mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="shrink-0 text-[19px] font-extrabold uppercase leading-[0.92] tracking-[-0.5px] text-[#111111]"
        >
          Arsenijs
          <br />
          Fabrica
        </a>

        {/* Center frosted pill */}
        <nav className="hidden items-center gap-1 rounded-full bg-white/45 px-2 py-2 backdrop-blur-md lg:flex">
          <button
            aria-label="Menu"
            className="flex size-9 items-center justify-center rounded-full text-[#111111] transition hover:bg-white/60"
          >
            <MenuIcon className="size-[18px]" />
          </button>
          <button
            aria-label="Search"
            className="flex size-9 items-center justify-center rounded-full text-[#111111] transition hover:bg-white/60"
          >
            <SearchIcon className="size-[18px]" />
          </button>
          <ul className="flex items-center gap-7 px-5">
            {navLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[12px] font-medium tracking-[-0.5px] text-[#111111] transition-opacity hover:opacity-60"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <button className="hidden items-center gap-1 text-[12px] font-medium tracking-[-0.5px] text-[#111111] sm:flex">
            en <ChevronDownIcon className="size-3" />
          </button>
          <button
            aria-label="Wishlist"
            className="flex size-11 items-center justify-center rounded-full bg-black/[0.06] text-[#111111] backdrop-blur-md transition hover:bg-black/10"
          >
            <HeartIcon className="size-[18px]" />
          </button>
          <button
            aria-label="Cart"
            className="relative flex size-11 items-center justify-center rounded-full bg-black/[0.06] text-[#111111] backdrop-blur-md transition hover:bg-black/10"
          >
            <BagIcon className="size-[18px]" />
            <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-white">
              0
            </span>
          </button>
          <button
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full bg-black/[0.06] text-[#111111] lg:hidden"
          >
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "pointer-events-auto mx-4 mt-2 overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md transition-all lg:hidden",
          open ? "max-h-80 opacity-100 shadow-lg" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.5px] text-[#111111] hover:bg-black/5"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
