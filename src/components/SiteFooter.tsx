import Image from "next/image";
import { brand } from "@/lib/content";
import { SparkleIcon } from "@/components/icons";
import { PiInstagramLogo, PiFacebookLogo, PiTiktokLogo } from "react-icons/pi";



export function SiteFooter() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-white pt-10">
      {/* Intro card */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 rounded-[24px] bg-cream p-8 md:flex-row md:items-center md:gap-32 md:p-12">
          <div className="w-full shrink-0 overflow-hidden rounded-[20px] md:w-[300px]">
            <Image
              src="/mividoor/images/three-doors-showcase.png"
              alt="Ba mẫu cửa composite cao cấp Mividoor"
              width={1024}
              height={1113}
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="flex w-full flex-1 flex-col items-end text-right">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
              Về Mividoor
            </p>
            <h2 className="mt-2 text-[28px] font-medium leading-[1.15] tracking-[-0.5px] text-ink md:text-[38px]">
              Mividoor — giải pháp cửa nội thất{" "}
              <span className="accent-serif text-brand">cao cấp</span>, nâng tầm
              trải nghiệm không gian sống.
            </h2>
            <p className="mt-3 text-[15px] font-normal leading-[1.5] text-[#111111]/80">
              Cửa composite sản xuất trên dây chuyền công nghệ Đức, chống nước,
              chống mối mọt, cách âm cách nhiệt — bảo hành lên đến 10 năm.
            </p>
          </div>
        </div>
      </div>

      {/* Brand line + socials + big words */}
      <div className="mx-auto max-w-[1400px] px-6 pt-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <h3 className="max-w-xs text-[28px] font-medium leading-[1.1] tracking-[-0.5px] text-[#111111] md:text-[32px]">
              Cửa composite công nghệ{" "}
              <span className="accent-serif text-brand">Đức</span>{" "}
              <SparkleIcon className="mb-1 inline size-5 text-brand" />
            </h3>
            <div className="mt-6 flex gap-3">
              {[PiInstagramLogo, PiFacebookLogo, PiTiktokLogo].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-11 items-center justify-center rounded-2xl bg-black/[0.05] text-brand transition hover:bg-brand hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>


        </div>
      </div>

      {/* Detail columns */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-8 border-t border-[#ececec] pt-10 md:grid-cols-4">
          <div className="flex flex-col gap-3 text-[15px] text-[#111111]">
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
              Về chúng tôi
            </p>
            <a href="/#about" className="hover:opacity-60">Giới thiệu</a>
            <a href="/san-pham" className="hover:opacity-60">Sản phẩm</a>
            <a href="/tin-tuc" className="hover:opacity-60">Tin tức</a>
            <a href="/lien-he" className="hover:opacity-60">Liên hệ</a>
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-[#111111]">
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
              Hỗ trợ
            </p>
            <a href="#" className="hover:opacity-60">Hướng dẫn lắp đặt</a>
            <a href="#" className="hover:opacity-60">Chính sách bảo hành</a>
            <a href="#" className="hover:opacity-60">Chính sách đổi trả</a>
            <a href="#" className="hover:opacity-60">Điều khoản sử dụng</a>
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-[#111111]">
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
              Liên hệ
            </p>
            <span className="text-[14px] leading-[1.5] text-[#0d1717]">
              Showroom HCM: 52 Nguyễn Thị Nhung, KĐT Vạn Phúc, Thủ Đức, TP. HCM
            </span>
            <span className="text-[14px] leading-[1.5] text-[#0d1717]">
              Nhà máy: A1-10 đường số 2, KDC Miền Nam, Hưng Phú, Cần Thơ
            </span>
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-[#111111]">
            <p className="mb-1 text-[12px] font-bold uppercase tracking-[0.12em] text-[#818181]">
              Hotline &amp; Email
            </p>
            <a
              href={`tel:${brand.phone.replace(/\s/g, "")}`}
              className="text-[18px] font-semibold text-brand hover:opacity-70"
            >
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="break-all hover:opacity-60"
            >
              {brand.email}
            </a>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-[13px] text-[#818181]">
          <span>© 2024 MIVIDOOR. All rights reserved.</span>
          <span>Mivicomposite</span>
        </div>
      </div>

      {/* Giant watermark */}
      <p
        aria-hidden
        className="select-none whitespace-nowrap text-center text-[19vw] font-extrabold uppercase leading-[0.8] tracking-[-0.03em] text-black/[0.05]"
      >
        MIVIDOOR
      </p>
    </footer>
  );
}

