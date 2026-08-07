import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";
import { Building2, Users, Settings, HeartHandshake } from "lucide-react";

const advantages = [
  {
    title: "Cơ sở vật chất và máy móc kĩ thuật",
    description: "Nhà máy có quy mô sản xuất chuyên nghiệp, được trang bị đầy đủ máy móc công nghệ hiện đại từ các thương hiệu nổi tiếng thế giới như Đức, Ý, Trung Quốc… sản xuất sản phẩm cửa composite có tiêu chuẩn cao hàng đầu tại Việt Nam.",
    icon: Building2,
  },
  {
    title: "Thợ Sản Xuất Tay Nghề Cao",
    description: "Quy tụ đội ngũ thợ sản xuất tay nghề cao, giàu kinh nghiệm, luôn tỉ mỉ và tận tâm trong từng khâu sản xuất, đảm bảo chất lượng hoàn mỹ trên mỗi sản phẩm trước khi xuất xưởng.",
    icon: Users,
  },
  {
    title: "Quy trình chuẩn hóa",
    description: "Quy trình sản xuất nghiêm ngặt từ khâu tuyển chọn nguyên vật liệu đạt chuẩn đến xử lý bề mặt, và từng công đoạn sản xuất đến khâu kiểm tra đóng gói trước khi xuất xưởng.",
    icon: Settings,
  },
  {
    title: "Chất lượng dịch vụ",
    description: "Nhà máy Mividoor tối ưu quy trình phục vụ chú trọng sự hiện diện sẵn sàng có mặt khi khách hàng cần, tốc độ phản hồi tin nhắn/cuộc gọi và tốc độ giao hàng.",
    icon: HeartHandshake,
  },
];

export function AboutAdvantages() {
  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        
        <SlideUp className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-24">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#2563EB] mb-4">
            ƯU THẾ NỔI BẬT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-ink mb-2">
            Mividoor
          </h2>
          <p className="text-lg md:text-xl text-ink/70 font-light max-w-xl mx-auto mt-2 tracking-wide">
            Tập trung vào giá trị thực
          </p>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 border-y md:border-x border-black/10 max-w-[960px] mx-auto md:rounded-xl overflow-hidden bg-[#fdfdfd]">
          {advantages.map((adv, idx) => {
            const Icon = adv.icon;
            const isRightCol = idx % 2 !== 0;
            const isBottomRow = idx >= 2;
            
            return (
              <StaggerItem 
                key={idx} 
                className={`flex flex-col p-6 md:p-8 lg:p-10 group hover:bg-white transition-colors duration-700
                  ${!isRightCol ? 'md:border-r border-black/10' : ''} 
                  ${!isBottomRow ? 'border-b border-black/10' : 'border-b md:border-b-0 border-black/10'}
                `}
              >
                <div className="flex justify-between items-start mb-8 lg:mb-10">
                  <div className="text-[48px] lg:text-[56px] font-normal text-[#2563EB] accent-serif transition-colors duration-700 leading-none -mt-2">
                    0{idx + 1}
                  </div>
                  <div className="text-black/20 transition-all duration-700 group-hover:text-[#2563EB] group-hover:scale-110">
                    <Icon size={32} strokeWidth={1.5} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-ink mb-3 tracking-tight group-hover:text-[#2563EB] transition-colors duration-700">
                  {adv.title}
                </h3>
                
                <p className="text-ink/70 leading-relaxed text-[15px] font-light">
                  {adv.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
}
