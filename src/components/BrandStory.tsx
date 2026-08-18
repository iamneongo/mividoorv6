import { SlideUp } from "@/components/Animations";

export function BrandStory() {
  const stats = [
    { value: "10.000+", label: "BỘ CỬA ĐÃ BÀN GIAO" },
    { value: "400+", label: "ĐẠI LÝ PHÂN PHỐI" },
    { value: "100+", label: "MẪU MÃ ĐA DẠNG" },
    { value: "10 năm", label: "BẢO HÀNH UY TÍN" },
  ];

  return (
    <section id="about" className="below-fold-section bg-[#fafafa] pt-20 pb-20 md:pt-28 md:pb-28">
      {/* 1. Header Section */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <SlideUp className="flex flex-col items-center text-center max-w-[1200px] mx-auto">
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-brand">
            Chất lượng
          </p>
          <h2 className="mt-4 text-[32px] font-medium leading-[1.1] tracking-[-1px] text-ink md:text-[42px]">
            Bền đẹp <span className="accent-serif font-normal text-brand">vượt</span> thời gian
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] font-normal leading-[1.6] text-[#5c5852]">
            Chống nước 100%, không cong vênh, chống mối mọt và cách âm hoàn hảo,
            bảo hành 10 năm.
          </p>
        </SlideUp>

        {/* 2. Stats Section */}
        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-center justify-between">
          {stats.map((stat, i) => (
            <div 
              key={i} 
              className={`flex flex-col items-center justify-center flex-1 w-full py-8 md:py-0 ${i !== stats.length - 1 ? "border-b border-[#eaeaea] md:border-b-0 md:border-r" : ""}`}
            >
              <span className="accent-serif text-[42px] md:text-[50px] text-brand leading-[1.1] mb-2 pr-4 md:pr-0">
                {stat.value}
              </span>
              <span className="text-[13px] md:text-[14px] font-medium tracking-[0.05em] text-[#818181] uppercase">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

