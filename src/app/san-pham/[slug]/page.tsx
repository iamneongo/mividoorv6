import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ArrowLeftIcon } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getProductBySlug, productCatalog, luxuryDoors } from "@/lib/content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const allProducts = [...productCatalog, ...luxuryDoors];
  return allProducts.map((p) => ({
    slug: p.code.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // Type guard for Luxury vs Standard
  const isLuxury = 'code' in product && product.code.includes('LUX');
  const name = 'name' in product ? product.name : product.code;

  return (
    <>
      <div className="relative w-full bg-white min-h-screen">
        <SiteHeader />
        
        {/* Main Content Area */}
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-32 pb-24">
          <Link 
            href={isLuxury ? "/luxury" : "/san-pham"} 
            className="inline-flex items-center gap-2 text-ink/50 hover:text-brand transition-colors mb-8 font-medium text-sm uppercase tracking-wider"
          >
            <ArrowLeftIcon className="w-4 h-4" />
            {isLuxury ? "Trở lại BST Luxury" : "Trở lại Sản phẩm"}
          </Link>

          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
            
            {/* Left: Product Image Showcase */}
            <div className="w-full lg:w-[55%] sticky top-32">
              <div className="relative w-full rounded-[32px] bg-[#F7F7F7] p-8 md:p-16 flex items-center justify-center overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative w-full aspect-[1/1.5] max-h-[75vh]">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    priority
                    className="object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="w-full lg:w-[45%] flex flex-col py-8">
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="flex h-7 items-center rounded-full bg-[#2563EB]/10 px-4 text-[12px] font-bold uppercase tracking-widest text-[#2563EB]">
                  Mividoor
                </span>
                <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#818181]">
                  {product.code}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.1] mb-6">
                {name}
              </h1>
              
              <p className="text-2xl lg:text-3xl font-light text-[#2563EB] accent-serif mb-10">
                {product.tagline}
              </p>

              <div className="h-px w-full bg-black/5 mb-10" />

              <p className="text-lg text-ink/70 leading-relaxed mb-12">
                {'descr' in product ? product.descr : "Sản phẩm nằm trong bộ sưu tập Mividoor Luxury cao cấp. Sự kết hợp hoàn hảo giữa công nghệ hiện đại và thiết kế thủ công tinh xảo, mang lại vẻ đẹp vượt thời gian cho không gian sống của bạn."}
              </p>

              {/* Elegant Features List */}
              <div className="flex flex-col gap-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7F7F7] text-[#2563EB]">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink mb-1">Chống nước tuyệt đối 100%</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">Không co ngót, cong vênh hay mối mọt dưới mọi điều kiện thời tiết.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-[#F7F7F7] text-[#2563EB]">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-ink mb-1">An toàn & Cách âm ưu việt</h3>
                    <p className="text-sm text-ink/60 leading-relaxed">Khóa từ bảo mật cao cấp kết hợp cấu trúc triệt tiêu âm thanh hoàn hảo.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <Link 
                  href="/lien-he"
                  className="inline-flex h-16 w-full sm:w-auto flex-1 items-center justify-center rounded-full bg-[#2563EB] px-8 text-lg font-medium text-white transition hover:bg-[#1D4ED8] shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Nhận báo giá ngay
                </Link>
                <a 
                  href="tel:0943393539"
                  className="inline-flex h-16 w-full sm:w-auto flex-1 items-center justify-center rounded-full border border-black/10 bg-white px-8 text-lg font-medium text-ink transition hover:bg-[#F7F7F7]"
                >
                  Hotline tư vấn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
