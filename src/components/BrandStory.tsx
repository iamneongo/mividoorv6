import { stats } from "@/lib/content";

export function BrandStory() {
  return (
    <section id="about" className="bg-[#fafafa] pt-20 pb-20 md:pt-28 md:pb-28">
      {/* 1. Header & Stats Section */}
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
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
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid grid-cols-2 gap-8 divide-x divide-black/5 md:mt-24 md:grid-cols-4">
          {stats.map((s, i) => (
            <div key={s.label} className={`flex flex-col items-center justify-center text-center ${i === 0 || i === 2 ? "pl-0" : ""} ${i === 1 || i === 3 ? "pr-0" : ""} md:px-6`}>
              <p className="text-[56px] accent-serif leading-none text-brand md:text-[72px] lg:text-[84px]">
                {s.value}
              </p>
              <p className="mt-4 text-[14px] font-medium tracking-[0.02em] text-[#818181] uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

