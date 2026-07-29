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

      {/* Mobile Drawer Backdrop */}
      <div
        className={cn(
          "pointer-events-auto fixed inset-0 z-[9998] bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setOpen(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={cn(
          "pointer-events-auto fixed bottom-0 right-0 top-0 z-[9999] flex w-[280px] flex-col bg-white px-6 py-10 shadow-2xl transition-transform duration-500 ease-in-out lg:hidden",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="mb-6 flex justify-end">
          <button 
            onClick={() => setOpen(false)}
            className="flex size-10 items-center justify-center rounded-full bg-black/5 text-ink transition-colors hover:bg-black/10"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-4">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[18px] font-medium tracking-[-0.5px] text-ink transition-colors hover:text-brand"
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
