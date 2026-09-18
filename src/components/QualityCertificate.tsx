import Image from "next/image";
import { SlideUp } from "@/components/Animations";
import { SparkleIcon } from "@/components/icons";

export function QualityCertificate() {
  return (
    <section className="bg-[#f3f6ff] py-20 md:py-28" aria-labelledby="quality-certificate-title">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <SlideUp>
          <p className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-brand">
            <SparkleIcon className="size-4" /> Chứng nhận chất lượng
          </p>
          <h2 id="quality-certificate-title" className="mt-4 max-w-2xl text-[36px] font-medium leading-[1.1] tracking-[-0.03em] text-ink md:text-[50px]">
            Chất lượng <span className="accent-serif whitespace-nowrap text-brand">chuẩn</span> quốc tế
          </h2>
          <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-[#39445b]">
            Mivicomposite Việt Nam được chứng nhận hệ thống quản lý chất lượng ISO 9001:2015 trong lĩnh vực sản xuất và kinh doanh cửa gỗ nhựa composite.
          </p>
          <a
            href="/san-pham/"
            className="mt-8 inline-flex items-center gap-2 text-[14px] font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:text-brand-2 hover:decoration-brand-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
          >
            Khám phá các mẫu cửa Mividoor
            <span aria-hidden="true">↗</span>
          </a>
        </SlideUp>
        <SlideUp className="mx-auto w-full max-w-[280px] lg:justify-self-center">
          <a
            href="/mividoor/images/chung-nhan-iso-9001-mividoor.webp"
            target="_blank"
            rel="noopener noreferrer"
            className="block outline-offset-4 transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-brand"
            aria-label="Mở giấy chứng nhận ISO 9001:2015 của Mividoor"
          >
            <Image
              src="/mividoor/images/chung-nhan-iso-9001-mividoor.webp"
              alt="Giấy chứng nhận ISO 9001:2015 của Công ty TNHH Xuất Nhập Khẩu Mivicomposite Việt Nam"
              width={720}
              height={1023}
              className="h-auto w-full"
            />
          </a>
        </SlideUp>
      </div>
    </section>
  );
}
