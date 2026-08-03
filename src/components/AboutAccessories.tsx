import Image from "next/image";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

export function AboutAccessories() {
  const accessories = [
    {
      title: "Bản lề cao cấp Mividoor",
      subtitle: "Bản lề",
      description: "Sử dụng bản lề inox dày dặn cao cấp, chịu lực tốt, ngăn ngừa gỉ sét, đóng mở ổn định trong suốt quá trình sử dụng.",
      image: "/mividoor/images/ban-le.jpg"
    },
    {
      title: "Gioăng cao su chất lượng",
      subtitle: "Gioăng cao su",
      description: "Gioăng cao su chất lượng, dẻo dai, được gắn quanh khung bao giúp cửa đóng mở êm ái, giảm chấn, tăng cường khả năng cách âm, cách nhiệt, ngăn bụi và côn trùng hiệu quả.",
      image: "/mividoor/images/gioang.jpg"
    },
    {
      title: "Khóa cửa và các phụ kiện khác",
      subtitle: "Khóa cửa và các phụ kiện khác",
      description: "Mividoor được sản xuất khoét lỗ khóa gắn được tất cả các loại khóa trên thị trường như khóa tròn, khóa gạt, khóa phân thể các loại, khóa điện tử vv… gắn được các phụ kiện khác như cục hít cửa, mắt thần...\nCác chi tiết khác như con bọ sắt liên kết, pát sắt L cũng được nhà máy lựa chọn kỹ càng, đảm bảo độ liên kết vững chắc giữa cánh cửa và khung bao.",
      image: "/mividoor/images/khoa-cua.jpg"
    }
  ];

  return (
    <section className="w-full bg-[#fafafa] py-20 md:py-28 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="w-full lg:w-1/3">
            <SlideUp className="sticky top-32">
              <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm block mb-4">
                Phụ kiện cửa
              </span>
              <h2 className="text-[36px] md:text-[48px] font-medium tracking-tight text-ink leading-[1.1] mb-6">
                Giải Pháp <br className="hidden lg:block"/>
                Đồng Bộ & <br className="hidden lg:block"/>
                <span className="accent-serif font-normal text-brand block mt-1 tracking-normal">Phụ Kiện Cao Cấp</span>
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed">
                Mividoor đi kèm phụ kiện chất lượng: bản lề, gioăng cao su, khóa…. Cửa vận hành êm ái, ổn định trong thời gian dài, đem lại trải nghiệm xứng tầm cho người sử dụng.
              </p>
            </SlideUp>
          </div>

          <div className="w-full lg:w-2/3">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {accessories.map((acc, idx) => (
                <StaggerItem 
                  key={idx} 
                  className={`flex flex-col group ${idx === 2 ? 'md:col-span-2 md:flex-row gap-8 lg:gap-16 md:items-center pt-8 border-t border-black/5' : ''}`}
                >
                  <div className={`relative overflow-hidden bg-black/5 shrink-0 rounded-2xl border-[6px] md:border-[8px] border-white shadow-sm ${idx === 2 ? 'w-full md:w-[40%] aspect-[4/3] md:aspect-auto md:min-h-[320px] self-stretch' : 'w-full aspect-[4/3] mb-6'}`}>
                    <Image 
                      src={acc.image} 
                      alt={acc.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1">
                    <p className="text-brand text-xs font-semibold uppercase tracking-widest mb-3">{acc.subtitle}</p>
                    <h3 className="text-2xl font-medium text-ink mb-4">{acc.title}</h3>
                    <p className="text-ink/60 leading-relaxed text-[15.5px] font-light whitespace-pre-line">
                      {acc.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

        </div>
      </div>
    </section>
  );
}
