import Image from "next/image";
import type { Product } from "@/types";
import { HeartIcon } from "@/components/icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex w-full flex-col">
      <div className="relative aspect-square overflow-hidden rounded-[20px] bg-[#f4f3f1]">
        {product.mark && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-coral px-2.5 py-1 text-[12px] font-medium text-white">
            {product.mark}
          </span>
        )}
        <button
          aria-label="Add to wishlist"
          className="absolute right-3 top-3 z-10 flex size-8 items-center justify-center rounded-full text-[#9a9a9a] transition hover:text-brand"
        >
          <HeartIcon className="size-[18px]" />
        </button>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, 25vw"
          className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <h3 className="mt-4 text-[16px] font-medium leading-[1.35] text-[#111111]">
        {product.name}
      </h3>
      <p className="mt-1 text-[15px] font-light leading-[1.3] text-[#0d1717]">
        {product.descr}
        {product.weight ? ` ${product.weight}` : ""}
      </p>
      <p className="mt-3 text-[18px] font-medium text-brand-2">
        {product.price} {product.currency}
      </p>
      {product.outOfStock && (
        <p className="mt-1 text-[14px] font-normal text-coral">Out of stock</p>
      )}
    </div>
  );
}
