import { features } from "@/lib/content";

export function AboutValues() {
  const values = features.map((f, i) => ({
    num: String(i + 1).padStart(2, "0"),
    title: f.title,
    description: f.body
  }));

  return (
    <section className="w-full bg-[#F2F2EC] py-24 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Title */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 pr-4">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-ink leading-[1.1] mb-6">
                Ưu điểm <br className="hidden lg:block"/> 
                <span className="accent-serif font-normal text-[56px] md:text-[64px] text-[#2563EB] block mt-2 tracking-normal">vượt trội</span>
              </h2>
              <p className="text-lg text-ink/70 leading-relaxed max-w-sm">
                Chất lượng được khẳng định qua từng chi tiết. Những đặc tính kỹ thuật ưu việt giúp cửa Mividoor luôn bền đẹp và an toàn theo thời gian.
              </p>
            </div>
          </div>

          {/* Right Column - Editorial List */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col">
              {values.map((val, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row gap-6 md:gap-12 py-10 ${idx !== 0 ? 'border-t border-black/10' : 'pt-0'}`}
                >
                  <div className="text-6xl md:text-[80px] font-light text-[#2563EB]/40 accent-serif leading-none tracking-tighter">
                    {val.num}
                  </div>
                  <div className="flex-1 space-y-3 pt-2 md:pt-4">
                    <h3 className="text-2xl font-semibold text-ink">{val.title}</h3>
                    <p className="text-ink/70 text-lg leading-relaxed max-w-xl">
                      {val.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
