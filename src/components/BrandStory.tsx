import { stats } from "@/lib/content";
import { SlideUp, StaggerContainer, StaggerItem, Counter } from "@/components/Animations";

export function BrandStory() {
  return (
    <section id="about" className="bg-[#fafafa] pt-20 pb-20 md:pt-28 md:pb-28">
      {/* 1. Header & Stats Section */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SlideUp className="flex flex-col items-center text-center">
          <p className="text-[12px] font-bold uppercase tracking-[0.15em] text-brand">
            Chất lượng
          </p>
          <h2 className="mt-4 text-[40px] font-medium leading-[1.1] tracking-[-1px] text-ink md:text-[56px]">
            bền đẹp <span className="accent-serif font-normal text-brand">vượt</span> thời gian
          </h2>
          <p className="mt-6 max-w-2xl text-[16px] font-normal leading-[1.6] text-[#5c5852]">
            Chống nước 100%, không cong vênh, chống mối mọt và cách âm hoàn hảo,
            bảo hành lên đến 10 năm.
          </p>
        </SlideUp>

        {/* Stats Grid */}
        <StaggerContainer className="mt-16 grid grid-cols-2 gap-y-12 md:gap-y-8 md:mt-24 md:grid-cols-4">
          {stats.map((s, i) => (
            <StaggerItem 
              key={s.label} 
              className={`flex flex-col items-center justify-center text-center px-4 md:px-6 border-black/5 ${i % 2 !== 0 ? 'border-l' : ''} ${i > 0 ? 'md:border-l' : 'md:border-l-0'}`}
            >
              <p className="text-[56px] accent-serif leading-none text-brand md:text-[72px] lg:text-[84px]">
                <Counter 
                  value={parseInt(s.value.replace(/\./g, ''))} 
                  suffix={s.value.replace(/[0-9.]/g, '')} 
                />
              </p>
              <p className="mt-4 text-[14px] font-medium tracking-[0.02em] text-[#818181] uppercase">
                {s.label}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

