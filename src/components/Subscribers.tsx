import Image from "next/image";
import { stats } from "@/lib/content";

const images = [
  "/mividoor/images/luxury-8.webp",
  "/mividoor/images/luxury-11.webp",
  "/mividoor/images/luxury-14.webp",
];

export function Subscribers() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <div className="shrink-0 md:w-[380px]">
            <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
              Chất lượng
            </p>
            <p className="mt-2 text-[30px] font-medium leading-[1.1] tracking-[-1px] text-ink md:text-[42px]">
              bền đẹp <span className="accent-serif text-brand">vượt</span> thời
              gian
            </p>
            <p className="mt-5 max-w-sm text-[15px] font-normal leading-[1.5] text-[#0d1717]">
              Chống nước 100%, không cong vênh, chống mối mọt và cách âm hoàn hảo,
              bảo hành lên đến 10 năm.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-[32px] font-medium leading-none tracking-[-1px] text-[#111111]">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[14px] font-normal text-[#818181]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex h-11 items-center rounded-full bg-brand px-8 text-[15px] font-medium text-white transition hover:bg-brand-2"
            >
              Liên hệ đại lý
            </a>
          </div>

          <div className="no-scrollbar flex flex-1 gap-4 overflow-x-auto">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] w-[240px] shrink-0 overflow-hidden rounded-[20px] bg-gradient-to-b from-slate-50 to-slate-200"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

