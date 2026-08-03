export function AboutPhilosophy() {
  const philosophies = [
    {
      num: "01",
      title: "Tầm Nhìn",
      description: "Trở thành thương hiệu cửa gỗ nhựa Composite chất lượng hàng đầu, có đóng góp lớn cho sự phát triển ngành cửa tại Việt Nam."
    },
    {
      num: "02",
      title: "Sứ Mệnh",
      description: "Không ngừng học hỏi, thay đổi và phát triển nhằm tạo ra những bộ cửa composite chất lượng có độ thẩm mỹ cao và độ bền vượt trội, góp phần kiến tạo không gian sống bền vững và đẳng cấp cho hàng triệu gia đình Việt."
    },
    {
      num: "03",
      title: "Giá Trị Cốt Lõi",
      description: (
        <ul className="space-y-4">
          <li>
            <strong>Chất lượng sản phẩm:</strong> Cam kết mỗi bộ cửa Mividoor xuất xưởng đảm bảo chất lượng theo tiêu chuẩn công bố của nhà máy cùng chế độ bảo hành 10 năm.
          </li>
          <li>
            <strong>Công nghệ sản xuất:</strong> Sở hữu máy móc công nghệ sản xuất cửa hàng đầu tại Việt Nam như công nghệ phủ phim nhập khẩu từ Đức, công nghệ dán biên nhập từ Ý, kết hợp công nghệ sử dụng keo chống thấm PUR, cùng tất cả máy móc sản xuất cửa chuyên nghiệp nhất đem đến bộ cửa có độ hoàn thiện bề mặt cao và độ bền vượt trội.
          </li>
          <li>
            <strong>Chất lượng dịch vụ:</strong> Đào tạo đội ngũ nhân sự theo quy chuẩn “khách hàng là trung tâm” ưu tiên sự hiện diện khi khách hàng cần, tốc độ phản hồi tin nhắn/cuộc gọi và tốc độ giao hàng.
          </li>
        </ul>
      )
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28 border-t border-black/5">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Column - Sticky Title */}
          <div className="w-full lg:w-1/3">
            <div className="sticky top-32 pr-4">
              <span className="text-[#2563EB] font-semibold uppercase tracking-wider text-sm block mb-4">
                TRIẾT LÝ KINH DOANH
              </span>
              <h2 className="text-[36px] md:text-[48px] font-medium tracking-tight text-ink leading-[1.1] mb-6">
                Tầm Nhìn <br className="hidden lg:block"/> 
                Sứ Mệnh <br className="hidden lg:block"/> 
                <span className="accent-serif font-normal text-brand block mt-2 tracking-normal">Giá Trị Cốt Lõi</span>
              </h2>
            </div>
          </div>

          {/* Right Column - Editorial List */}
          <div className="w-full lg:w-2/3">
            <div className="flex flex-col">
              {philosophies.map((val, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 py-8 lg:py-10 ${idx !== 0 ? 'border-t border-black/10' : 'pt-0'}`}
                >
                  <div className="text-5xl md:text-[64px] font-normal text-[#2563EB] accent-serif leading-none tracking-tighter -mt-1 md:-mt-3 min-w-[70px]">
                    {val.num}
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold text-ink">{val.title}</h3>
                    <div className="text-ink/70 text-[15.5px] leading-relaxed max-w-2xl">
                      {val.description}
                    </div>
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
