import Image from "next/image";
export function AboutFactory() {

  return (
    <section className="w-full bg-[#F2F2EC] py-24 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-[#F2F2EC]">
              <Image 
                src="/mividoor/images/tho-mividoor-new.webp" 
                alt="Nhà máy Mivicomposite"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm mb-4 block">Nhà máy sản xuất</span>
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-ink mb-6">
                Mivicomposite <br className="hidden md:block" /> 
                <span className="accent-serif font-normal text-[56px] text-[#2563EB]">Nền tảng của chất lượng</span>
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                Được đầu tư bài bản với hệ thống máy móc nhập khẩu từ châu Âu, nhà máy <strong>Mivicomposite</strong> tập trung vào sản xuất cửa gỗ nhựa composite quy mô lớn. Mục tiêu cốt lõi của chúng tôi là cung cấp nguồn vật liệu và sản phẩm hoàn thiện có độ bền cao, đáp ứng nghiêm ngặt các tiêu chuẩn kỹ thuật của mọi dự án.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
