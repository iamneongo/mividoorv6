import Image from "next/image";
import { Check } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export function AboutWarranty() {
  const warrantyFeatures = [
    "Chống nước",
    "Chống mối mọt",
    "Không bay màu",
    "Không cong vênh",
    "Không co ngót",
    "Không nứt tét"
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 items-stretch">
          
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <SlideUp>
              <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm block mb-4">
                CHÍNH SÁCH BẢO HÀNH
              </span>
              <h2 className="text-[36px] md:text-[48px] font-medium tracking-tight text-ink leading-[1.1] mb-6">
                Cam Kết Bảo Hành <br className="hidden md:block"/>
                <span className="accent-serif font-normal text-brand block mt-1 tracking-normal">10 Năm</span>
              </h2>
              <p className="text-[20px] font-medium text-ink mb-4">
                Đồng Hành Cùng Mọi Công Trình
              </p>
              <p className="text-[17px] text-ink/70 leading-relaxed mb-8">
                Cửa composite Mividoor là minh chứng cho chất lượng và sự bền bỉ vượt thời gian. Sản phẩm được nhà máy áp dụng chính sách bảo hành lên đến 10 năm cho các đặc tính kỹ thuật cốt lõi:
              </p>

              <StaggerContainer className="grid grid-cols-2 gap-y-3 gap-x-4">
                {warrantyFeatures.map((feature, idx) => (
                  <StaggerItem key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#2563EB] flex items-center justify-center shrink-0">
                      <Check className="text-white" size={14} strokeWidth={3} />
                    </div>
                    <span className="text-[17px] font-medium text-ink">{feature}</span>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </SlideUp>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-0">
            <SlideUp className="relative h-[400px] md:h-full w-full rounded-2xl overflow-hidden bg-brand/5 border-[6px] md:border-[8px] border-white shadow-sm">
               <Image 
                  src="/mividoor/images/warranty-demo.jpg" 
                  alt="Mividoor Warranty" 
                  fill 
                  className="object-cover"
               />
            </SlideUp>
          </div>

        </div>
      </div>
    </section>
  );
}
