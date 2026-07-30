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
                <span className="accent-serif font-normal text-[56px] text-[#2563EB]">sản xuất đến phân phối</span>
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                Lợi thế lớn nhất của chúng tôi là quy trình khép kín từ sản xuất đến phân phối. Trong khi nhà máy <strong>Mivicomposite</strong> đảm nhận việc sản xuất và kiểm soát chất lượng đầu ra, thì thương hiệu <strong>Mividoor</strong> tập trung vào việc phân phối trực tiếp những sản phẩm hoàn thiện nhất đến tay khách hàng.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-black/5">
              {/* Card 1 */}
              <div className="bg-[#F2F2EC] p-6 md:p-8 rounded-[24px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 text-[#2563EB] shadow-sm">
                  <Building2 className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Nhà máy Mivicomposite</h3>
                <p className="text-ink/70 leading-relaxed text-sm">
                  Công nghệ Đức, dây chuyền tự động hóa, kiểm soát vật liệu đầu vào khắt khe.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-[#F2F2EC] p-6 md:p-8 rounded-[24px]">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-5 text-[#2563EB] shadow-sm">
                  <ShieldCheck className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-ink mb-3">Thương hiệu Mividoor</h3>
                <p className="text-ink/70 leading-relaxed text-sm">
                  Thiết kế độc bản, dịch vụ chuẩn mực, bảo hành dài hạn và chuyên nghiệp.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square md:aspect-[4/3] lg:aspect-[4/5] xl:aspect-square rounded-[24px] overflow-hidden bg-[#F2F2EC]">
              <Image 
                src="/mividoor/images/luxury-14.webp" 
                alt="Hệ sinh thái Mividoor và Mivicomposite"
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
