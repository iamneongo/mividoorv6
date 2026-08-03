/* eslint-disable */
import Image from "next/image";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export function AboutIntro() {
  const introBlocks = [
    {
      title: "Nhà máy sản xuất",
      description: "Nhà máy tọa lạc tại TP. Cần Thơ, trung tâm vùng đồng bằng sông Cửu Long. Sở hữu văn phòng đại diện và kho hàng tại TPHCM, vị trí thuận lợi cho việc vận chuyển hàng hóa đi khắp miền tây và khắp miền nam.",
      image: "/mividoor/images/anhxuong.jpg"
    },
    {
      title: "Thợ sản xuất tay nghề cao",
      description: "Đội ngũ chuyên môn dày dặn kinh nghiệm, luôn tỉ mỉ và tinh tế trong từng khâu sản xuất, đảm bảo chất lượng hoàn mỹ trên mỗi sản phẩm.",
      image: "/mividoor/images/tho-san-xuat.jpg"
    },
    {
      title: "Công nghệ hiện đại",
      description: "Mividoor được sản xuất tối ưu từ nguyên vật liệu cao cấp theo tiêu chuẩn riêng, được công nghệ máy móc nhập từ Đức cho ra bộ cửa composite có độ thẩm mỹ cao và độ bền vượt trội.",
      image: "/mividoor/images/mayburkle.jpg"
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {introBlocks.map((block, idx) => (
            <StaggerItem key={idx} className="flex flex-col group">
              <div className="relative rounded-[24px] bg-white p-2 border border-[#eaeaea] shadow-[0_8px_30px_rgb(0,0,0,0.04)] mb-8 transition-shadow duration-500 group-hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
                <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden bg-[#F2F2EC]">
                  <Image 
                    src={block.image} 
                    alt={block.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <h3 className="text-[28px] font-normal accent-serif text-brand mb-3 leading-tight">{block.title}</h3>
              {('subtitle' in block) && (
                <p className="text-ink font-semibold uppercase tracking-widest text-[12px] mb-4">{(block as any).subtitle}</p>
              )}
              <p className="text-ink/70 leading-relaxed text-[15px]">
                {block.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
