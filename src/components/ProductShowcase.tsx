import type { Product } from "@/types";
import { ProductCard } from "@/components/ProductCard";
import { ChevronRightIcon } from "@/components/icons";

interface ProductShowcaseProps {
  id?: string;
  tabs: string[];
  activeTab: string;
  products: Product[];
  showLoadMore?: boolean;
}

export function ProductShowcase({
  id,
  tabs,
  activeTab,
  products,
  showLoadMore = true,
}: ProductShowcaseProps) {
  return (
    <section id={id} className="bg-white py-10 md:py-14">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex items-center gap-6">
            {tabs.map((t) => (
              <button
                key={t}
                className={
                  t === activeTab
                    ? "text-[15px] font-medium text-[#111111]"
                    : "text-[15px] font-normal text-[#bdbdbd] transition-colors hover:text-[#111111]"
                }
              >
                {t}
              </button>
            ))}
            <svg
              viewBox="0 0 60 34"
              className="hidden h-6 w-11 text-[#111111] sm:block"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.6}
              strokeLinecap="round"
            >
              <path d="M2 6c10 10 18 24 24 24 5 0 8-9 3-14-4-4-9 0-6 6 3 6 18 8 33 3" />
            </svg>
          </div>
          <a
            href="#all"
            className="flex items-center gap-1 text-[15px] font-normal text-[#111111] transition-opacity hover:opacity-60"
          >
            all products <ChevronRightIcon className="size-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>

        {showLoadMore && (
          <div className="mt-12 flex justify-center">
            <button className="inline-flex h-11 items-center justify-center rounded-full bg-brand px-8 text-[15px] font-medium text-white transition hover:bg-brand-2">
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
