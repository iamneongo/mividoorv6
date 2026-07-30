import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NewsPage() {
  return (
    <>
      <div className="relative bg-white pb-32 pt-40 min-h-screen">
        <SiteHeader theme="light" />
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
            <h1 className="text-6xl font-medium tracking-tighter text-ink md:text-[100px] leading-[0.9]">
              Tin tức & <br />
              <span className="text-ink accent-serif font-normal text-5xl md:text-[80px]">Sự kiện</span>
            </h1>
            <p className="max-w-md text-lg text-ink/70">
              Cập nhật những thông tin mới nhất về Mividoor, các hoạt động triển lãm, hội thảo và xu hướng thiết kế nội thất.
            </p>
          </div>

          <div className="flex flex-col border-t border-black/10">
            {/* Minimalist News Item 1 */}
            <a href="#" className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/10 py-10 transition-colors hover:bg-black/5 px-6 -mx-6">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-2xl font-medium tracking-tight text-ink group-hover:text-brand transition-colors">Mividoor tham gia Triển lãm Vietbuild 2026</h3>
                <p className="text-lg text-ink/60">Khám phá không gian trưng bày các mẫu cửa composite cao cấp và bộ sưu tập Mividoor Luxury mới nhất tại sự kiện.</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-ink/50">
                <span>Sự kiện</span>
                <span>—</span>
                <span>Tháng 10, 2026</span>
              </div>
            </a>

            {/* Minimalist News Item 2 */}
            <a href="#" className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/10 py-10 transition-colors hover:bg-black/5 px-6 -mx-6">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-2xl font-medium tracking-tight text-ink group-hover:text-brand transition-colors">Ra mắt Bộ sưu tập Mividoor Luxury</h3>
                <p className="text-lg text-ink/60">Sự kết hợp hoàn hảo giữa công nghệ Đức và thiết kế tinh xảo, mang lại đẳng cấp cho không gian sống hiện đại.</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-ink/50">
                <span>Tin tức</span>
                <span>—</span>
                <span>Tháng 9, 2026</span>
              </div>
            </a>

            {/* Minimalist News Item 3 */}
            <a href="#" className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/10 py-10 transition-colors hover:bg-black/5 px-6 -mx-6">
              <div className="flex flex-col gap-2 max-w-2xl">
                <h3 className="text-2xl font-medium tracking-tight text-ink group-hover:text-brand transition-colors">Tại sao nên chọn cửa composite cho phòng ngủ?</h3>
                <p className="text-lg text-ink/60">Những ưu điểm vượt trội về khả năng cách âm, cách nhiệt và độ bền bỉ của cửa gỗ nhựa composite.</p>
              </div>
              <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-ink/50">
                <span>Kiến thức</span>
                <span>—</span>
                <span>Tháng 8, 2026</span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
