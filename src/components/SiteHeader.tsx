"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { brand, navLinks } from "@/lib/content";
import { MenuIcon, SearchIcon } from "@/components/icons";


export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="pointer-events-none absolute inset-x-0 top-4 z-[9999] h-[88px]">
      <div className="pointer-events-auto mx-auto flex h-full max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="shrink-0 block"
        >
          <img 
            src="/mividoor/images/logo.png" 
            alt={brand.name} 
            className="h-[38px] w-auto object-contain md:h-10" 
          />
        </a>

        {/* Right cluster */}
        <div className="flex items-center gap-4">
          {/* Desktop Menu */}
          <nav className="hidden items-center rounded-[30px] bg-white/10 border border-white/10 px-6 py-3 backdrop-blur-md lg:flex">
            <ul className="flex items-center gap-7">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-[14px] font-normal tracking-[0.02em] text-white transition-opacity hover:opacity-60"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Mở menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full bg-white/10 border border-white/10 text-white backdrop-blur-md lg:hidden"
          >
            <MenuIcon className="size-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "pointer-events-auto mx-4 mt-2 overflow-hidden rounded-2xl bg-white/90 backdrop-blur-md transition-all lg:hidden",
          open ? "max-h-96 opacity-100 shadow-lg" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col gap-1 p-4">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-[14px] font-medium tracking-[-0.3px] text-ink hover:bg-black/5"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="mt-1 block rounded-lg bg-brand px-3 py-2 text-center text-[14px] font-semibold text-white"
            >
              {brand.phone}
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
