import Image from "next/image";
import type { Product } from "@/types";
import { ChevronRightIcon } from "@/components/icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <a href="#products" className="group flex w-full flex-col gap-5">
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[22px]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-3 transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex items-end justify-between px-2">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
            {product.code}
          </p>
          <p className="mt-1.5 text-[26px] font-semibold leading-none tracking-[-0.5px] text-ink transition-colors group-hover:text-brand">
            {product.name}
          </p>
        </div>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
          <ChevronRightIcon className="size-5" />
        </span>
      </div>
    </a>
  );
}
