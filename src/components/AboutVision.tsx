import { Eye, Target } from "lucide-react";

export function AboutVision() {
  return (
    <section className="w-full bg-ink text-white py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Vision */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-brand">
              <Eye className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Tầm nhìn</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Trở thành nhà sản xuất và cung cấp giải pháp cửa gỗ nhựa composite hàng đầu tại Việt Nam và vươn tầm khu vực. Chúng tôi hướng tới việc thiết lập những tiêu chuẩn mới về chất lượng và thẩm mỹ trong ngành vật liệu nội thất.
            </p>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-[#2563EB]">
              <Target className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Sứ mệnh</h2>
            <p className="text-lg text-white/70 leading-relaxed">
              Mang đến sự an tâm tuyệt đối và vẻ đẹp hoàn mỹ cho mọi tổ ấm. Mividoor không ngừng đổi mới công nghệ, nâng cao tay nghề để tạo ra những sản phẩm bền bỉ với thời gian, an toàn cho sức khỏe và thân thiện với môi trường.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
