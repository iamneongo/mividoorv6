import Image from "next/image";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export function AboutTechProcess() {
  const processes = [
    {
      title: "Công nghệ phủ phim",
      description: "Máy BURKLE nhập từ Đức cho ra bề mặt cánh cửa có độ thẩm mỹ cao."
    },
    {
      title: "Phôi PVC cao cấp",
      description: "Theo tiêu chuẩn riêng của nhà máy."
    },
    {
      title: "Lớp phim PVC",
      description: "Cao cấp dày dặn 0.18mm, vân sắc nét, thẩm mỹ cao."
    },
    {
      title: "Công nghệ dán cạnh biên",
      description: "Keo chống thấm PUR kết hợp máy dán cạnh Châu Âu giúp tăng độ bền và thẩm mỹ cho cửa."
    },
    {
      title: "Công nghệ soi huỳnh CNC Nanxing tự động",
      description: "Tạo kiểu hoa văn sắc sảo và đa dạng theo yêu cầu khách hàng."
    },
    {
      title: "Khung và nẹp phủ keo PUR",
      description: "Chống thấm nước cao, giúp gia tăng độ bền và ổn định."
    },
    {
      title: "Sử dụng keo Jowat Đức phủ phim",
      description: "Bề mặt bám dính cao, không bong tróc."
    }
  ];

  return (
    <section className="w-full bg-[#F2F2EC] py-20 md:py-28 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          <div className="w-full lg:w-1/2">
            <SlideUp className="mb-12">
              <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm block mb-4">
                CÔNG NGHỆ QUY TRÌNH
              </span>
              <h2 className="text-[36px] md:text-[48px] font-medium tracking-tight text-ink leading-[1.1] mb-6">
                Tiêu Chuẩn Chất Lượng & <span className="accent-serif font-normal text-brand block mt-1 tracking-normal">Công Nghệ Sản Xuất</span>
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                Hệ thống nguyên vật liệu & công nghệ sản xuất hiện đại kiến tạo nên những bộ cửa composite Mividoor chất lượng cao
              </p>
            </SlideUp>

            <StaggerContainer className="space-y-0">
              {processes.map((proc, idx) => (
                <StaggerItem 
                  key={idx} 
                  className="flex gap-4 items-start py-5 border-b border-black/5 last:border-0"
                >
                  <div className="text-3xl font-normal text-[#2563EB] accent-serif leading-none mt-1 min-w-[40px]">
                    0{idx + 1}
                  </div>
                  <div className="flex-1 space-y-1">
                    <h3 className="text-[18px] font-semibold text-ink">{proc.title}</h3>
                    <p className="text-ink/70 leading-relaxed text-[15.5px]">
                      {proc.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative">
            <SlideUp className="sticky top-32 h-[calc(100vh-200px)] max-h-[800px] w-full rounded-2xl overflow-hidden bg-brand/5 border-[6px] md:border-[8px] border-white shadow-sm">
               <Image 
                  src="/mividoor/images/burkle-machine-v3.webp" 
                  alt="Mividoor Tech Process" 
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
