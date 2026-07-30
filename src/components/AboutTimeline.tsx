export function AboutTimeline() {
  const milestones = [
    { year: "2015", title: "Khởi nguồn", desc: "Thành lập xưởng sản xuất nhỏ, đặt những viên gạch đầu tiên cho hành trình kiến tạo vật liệu mới phục vụ thị trường nội địa." },
    { year: "2018", title: "Mở rộng quy mô", desc: "Khánh thành nhà máy Mivicomposite với dây chuyền công nghệ hiện đại nhập khẩu trực tiếp từ Đức, nâng cao năng suất gấp 5 lần." },
    { year: "2021", title: "Ra mắt Mividoor", desc: "Chính thức giới thiệu thương hiệu cửa nội thất cao cấp Mividoor, hoàn thiện hệ sinh thái khép kín từ nguyên liệu đến thành phẩm." },
    { year: "2024", title: "Vươn tầm", desc: "Phát triển mạng lưới hơn 200 đại lý trên toàn quốc, phục vụ hơn 5000+ công trình mỗi năm và chuẩn bị xuất khẩu." },
  ];

  return (
    <section className="w-full bg-white py-24 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm mb-4 block">Lịch sử hình thành</span>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-ink mb-4">
            Hành trình phát triển
          </h2>
          <p className="text-lg text-ink/70">
            Mỗi cột mốc là một bước tiến không ngừng nghỉ trên con đường theo đuổi sự hoàn mỹ của tập thể Mivicomposite và Mividoor.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-0 bottom-0 left-[19px] md:left-1/2 w-px bg-black/10 md:-translate-x-1/2" />

          <div className="space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-[12px] md:left-1/2 w-4 h-4 bg-brand rounded-full border-4 border-white shadow-sm md:-translate-x-1/2 mt-1.5 md:mt-0 z-10 box-content" />

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${isEven ? 'md:pr-16 text-left md:text-right' : 'md:pl-16 text-left'}`}>
                    <div className="text-[#2563EB] font-semibold text-2xl mb-2">{item.year}</div>
                    <h3 className="text-2xl font-semibold text-ink mb-3">{item.title}</h3>
                    <p className="text-ink/70 leading-relaxed md:max-w-md inline-block">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
