import Image from "next/image";
import { Building2, ShieldCheck } from "lucide-react";

export function AboutSynergy() {
  return (
    <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm block">
                Hệ sinh thái Mividoor & Mivicomposite
              </span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1]">
                Hệ sinh thái khép kín từ <br className="hidden md:block" />
                <span className="accent-serif font-normal text-[44px] md:text-[56px] leading-[1.1] text-[#2563EB] block mt-1">sản xuất đến phân phối</span>
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                Lợi thế lớn nhất của chúng tôi là quy trình khép kín từ sản xuất đến phân phối. Trong khi nhà máy <strong>Mivicomposite</strong> đảm nhận việc sản xuất và kiểm soát chất lượng đầu ra, thì thương hiệu <strong>Mividoor</strong> tập trung vào việc phân phối trực tiếp những sản phẩm hoàn thiện nhất đến tay khách hàng.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[3/2] w-full rounded-[16px] md:rounded-[24px] overflow-hidden bg-[#F2F2EC] border-[6px] md:border-[8px] border-white shadow-md">
              <Image 
                src="/mividoor/images/he-sinh-thai.webp" 
                alt="Hệ sinh thái Mivicomposite"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
