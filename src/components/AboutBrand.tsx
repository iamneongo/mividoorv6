import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";

export function AboutBrand() {
  return (
    <section className="w-full bg-white py-24 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-24 items-center">
          {/* Right/Top: Images (Bento style) */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] rounded-[24px] overflow-hidden col-span-2">
              <Image 
                src="/mividoor/images/luxury-1.webp" 
                alt="Mividoor Luxury"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-[24px] overflow-hidden">
              <Image 
                src="/mividoor/images/luxury-2.webp" 
                alt="Thiáº¿t káº¿ hiá»‡n Ä‘áº¡i"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-[24px] overflow-hidden">
              <Image 
                src="/mividoor/images/luxury-8.webp" 
                alt="Chi tiết tinh xảo"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Left/Bottom: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm mb-4 block">Thương hiệu đại diện</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-ink mb-6">
                Mividoor <br className="hidden md:block" /> 
                <span className="accent-serif font-normal text-[56px] text-[#2563EB]">Mở cửa hạnh phúc</span>
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed mb-6">
                Nắm bắt trọn vẹn sức mạnh từ nhà máy Mivicomposite, <strong>Mividoor</strong> ra đời mang theo sứ mệnh nâng tầm không gian sống Việt. Chúng tôi tin rằng mỗi cánh cửa không chỉ là vách ngăn không gian, mà là sự chào đón, là điểm khởi đầu của hạnh phúc khi trở về nhà.
              </p>
              <p className="text-lg text-ink/70 leading-relaxed">
                Với thiết kế mang đậm phong cách đương đại, sự tinh tế trong từng đường nét phào chỉ và lớp vân gỗ chân thực, Mividoor tự hào cung cấp các giải pháp cửa thông phòng cao cấp nhất cho mọi công trình kiến trúc.
              </p>
            </div>

            <Link href="/san-pham" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full font-medium transition-transform hover:-translate-y-1">
              Khám phá Sản phẩm <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
