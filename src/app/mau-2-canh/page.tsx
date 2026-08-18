/* eslint-disable */
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { IngredientsIntro } from "@/components/IngredientsIntro";
import { productCatalog } from "@/lib/content";
import { LuxuryShowcase } from "@/components/LuxuryShowcase";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { alternates: { canonical: "https://mividoor.vn/mau-2-canh/" } };

export default function CategoryPage() {
  const filteredProducts = productCatalog.filter(p => p.name.toLowerCase().includes("2 cánh"));
  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-32 pb-24 min-h-[50vh] flex flex-col justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/mividoor/images/products-banner-v2.webp" 
            alt="Sản phẩm Mividoor" 
            className="absolute inset-0 w-full h-full object-cover z-0" 
          />
          
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10 w-full">
            <div className="flex flex-col items-center justify-center text-center gap-4 max-w-4xl mx-auto">
              <h1 className="text-4xl font-medium tracking-tighter text-ink md:text-[56px] leading-[1]">
                Cửa 2 Cánh <br />
                <span className="font-normal accent-serif text-[#2563EB] text-[56px] md:text-[80px] tracking-normal inline-block mt-2">Mividoor</span>
              </h1>
              <p className="max-w-2xl text-lg text-ink/70 leading-relaxed mt-2">
                Khám phá các dòng sản phẩm cửa composite chất lượng cao, đa dạng mẫu mã và màu sắc, phù hợp với mọi không gian kiến trúc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <IngredientsIntro />
      
      <section className="bg-white pb-24 pt-8 md:pt-12">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {filteredProducts.length > 0 ? filteredProducts.map((product, i) => (
              <div 
                key={`${product.code}-${i}`} 
                className="min-w-0"
              >
                <div className="group flex flex-col gap-5 bg-white p-6 rounded-3xl">
                  <div className="relative aspect-[2/3] w-full overflow-hidden rounded-[22px]">
                    <div
                      className="absolute inset-0 bg-bottom bg-no-repeat transition-transform duration-700 group-hover:scale-105 origin-bottom"
                      style={{ backgroundImage: `url('${product.image}')`, backgroundSize: 'auto 85%' }}
                    />
                  </div>
                  <div className="flex items-end justify-between px-2">
                    <div>
                      <p className="text-[20px] font-medium leading-[1.2] tracking-tight text-ink">
                        {product.name}
                      </p>
                    </div>
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-[#111111] transition group-hover:translate-x-0.5 group-hover:bg-brand group-hover:text-white">
                      <ChevronRightIcon className="size-5" />
                    </span>
                  </div>
                </div>
              </div>
            )) : <div className="col-span-full py-20 text-center"><p className="text-ink/60 text-lg">Sản phẩm cho danh mục này đang được cập nhật...</p></div>}
          </div>
        </div>
      </section>

      

      <SiteFooter />
    </>
  );
}
