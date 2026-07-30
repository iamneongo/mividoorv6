import { ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";

export function AboutBrand() {
  return (
    <section className="w-full bg-white py-24 border-t border-black/5">
      <div className="mx-auto max-w-[900px] px-6 lg:px-10 text-center">
        <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm mb-6 block">Thương hiệu đại diện</span>
        
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-ink mb-8 leading-tight">
          Mividoor <br className="hidden md:block" /> 
          <span className="accent-serif font-normal text-[44px] md:text-[56px] leading-[1.1] text-[#2563EB] block md:inline mt-1 md:mt-0">Mở cửa hạnh phúc</span>
        </h2>
        
        <p className="text-lg md:text-xl text-ink/70 leading-relaxed mb-10">
          Nắm bắt trọn vẹn sức mạnh từ nhà máy Mivicomposite, <strong>Mividoor</strong> ra đời mang theo sứ mệnh nâng tầm không gian sống Việt. Chúng tôi tin rằng mỗi cánh cửa không chỉ là vách ngăn không gian, mà là sự chào đón, là điểm khởi đầu của hạnh phúc khi trở về nhà.
        </p>
        
        <Link href="/san-pham" className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-white rounded-full font-medium transition-transform hover:-translate-y-1">
          Khám phá Sản phẩm <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </section>
  );
}
