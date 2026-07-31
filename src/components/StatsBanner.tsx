export function StatsBanner() {
  const stats = [
    { value: "10.000+", label: "BỘ CỬA ĐÃ BÀN GIAO" },
    { value: "400+", label: "ĐẠI LÝ PHÂN PHỐI" },
    { value: "100+", label: "MẪU MÃ ĐA DẠNG" },
    { value: "10 năm", label: "BẢO HÀNH UY TÍN" },
  ];

  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="mx-auto flex max-w-[1400px] flex-col md:flex-row items-center justify-between px-6 md:px-10">
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
    </section>
  );
}
