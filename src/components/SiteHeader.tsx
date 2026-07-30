"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { brand, navLinks } from "@/lib/content";
import { MenuIcon, SearchIcon } from "@/components/icons";


export function SiteHeader({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isLight = theme === "light";
  
  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-[9999] h-[88px] flex justify-between items-start">
      {/* Left Island (Logo + Links) */}
      <div className={cn(
        "relative pointer-events-auto flex items-center gap-8 bg-white px-6 lg:px-8 py-3 rounded-br-[16px]"
      )}>
        {/* Top-Left Cove (Bottom intersection) */}
        <svg className="absolute top-full left-4 md:left-6 w-4 h-4 text-white fill-current pointer-events-none" viewBox="0 0 24 24">
          <path d="M0 0 L24 0 A 24 24 0 0 0 0 24 Z" />
        </svg>
        {/* Top-Left Cove (Right intersection) */}
        <svg className="absolute top-4 md:top-6 left-full w-4 h-4 text-white fill-current pointer-events-none" viewBox="0 0 24 24">
          <path d="M0 0 L24 0 A 24 24 0 0 0 0 24 Z" />
        </svg>

        {/* Logo */}
        <a href="/" className="shrink-0 block">
          <img 
            src="/mividoor/images/logo.png" 
            alt={brand.name} 
            className="h-[28px] w-auto object-contain md:h-[32px]" 
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden items-center lg:flex">
          <ul className="flex items-center gap-6">
            {navLinks.map((l) => {
              const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
              return (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className={cn(
                      "text-[13px] font-medium tracking-tight transition-colors hover:text-[#2563EB]",
                      isActive ? "text-[#2563EB]" : "text-ink"
                    )}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Right Island (Icons/Mobile Menu) */}
      <div className={cn(
        "relative pointer-events-auto flex items-center gap-4 bg-white px-6 lg:px-8 py-3 rounded-bl-[16px]"
      )}>
        {/* Top-Right Cove (Bottom intersection) */}
        <svg className="absolute top-full right-4 md:right-6 w-4 h-4 text-white fill-current pointer-events-none" viewBox="0 0 24 24">
          <path d="M24 0 L0 0 A 24 24 0 0 1 24 24 Z" />
        </svg>
        {/* Top-Right Cove (Left intersection) */}
        <svg className="absolute top-4 md:top-6 right-full w-4 h-4 text-white fill-current pointer-events-none" viewBox="0 0 24 24">
          <path d="M24 0 L0 0 A 24 24 0 0 1 24 24 Z" />
        </svg>
        {/* Desktop Right Icons */}
        <div className="hidden lg:flex items-center gap-6 text-ink">
          <button aria-label="Search" className="hover:text-brand transition-colors">
            <SearchIcon className="size-5" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          aria-label="Mở menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-full bg-black/5 text-ink lg:hidden transition-colors hover:bg-black/10"
        >
          <MenuIcon className="size-5" />
        </button>
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
          {navLinks.map((l) => {
            const isActive = pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block text-[18px] font-medium tracking-[-0.5px] transition-colors hover:text-[#2563EB]",
                    isActive ? "text-[#2563EB]" : "text-ink"
                  )}
                >
                  {l.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
