import Image from "next/image";
import { socialStats } from "@/lib/content";
import { InstagramIcon, TiktokIcon } from "@/components/icons";

const strip = [
  "/products/8986f3c40d6ca4c5c095a595c3540493.webp",
  "/images/3934-313_bath_bombsremini-enh.jpg",
  "/products/696065710e7830e95009e19933373233.webp",
  "/images/6535-393_soapremini-enhanced_.jpg",
  "/images/3934-653_cosmetics_5remini-en.jpg",
  "/products/1a3a6c4e4767e0cb6cd28cfaf06c5549.webp",
];

export function SocialMedia() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <p className="text-[15px] font-normal text-[#111111]">
              follow social media us
            </p>
            <p className="mt-3 text-[24px] font-medium leading-[1.2] tracking-[-0.5px] text-[#111111] md:text-[30px]">
              we look forward to seeing you on our social networks
            </p>
          </div>

          <div className="flex gap-3">
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl border border-[#ececec] px-5 py-4 transition hover:border-[#111111]"
            >
              <InstagramIcon className="size-5 text-[#111111]" />
              <span className="text-[15px] text-[#111111]">instagram</span>
              <span className="text-[13px] text-[#818181]">
                {socialStats.instagram}
              </span>
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-2xl border border-[#ececec] px-5 py-4 transition hover:border-[#111111]"
            >
              <TiktokIcon className="size-5 text-[#111111]" />
              <span className="text-[15px] text-[#111111]">tiktok</span>
              <span className="text-[13px] text-[#818181]">
                {socialStats.tiktok}
              </span>
            </a>
          </div>
        </div>

        {/* image strip */}
        <div className="no-scrollbar mt-8 flex gap-3 overflow-x-auto">
          {strip.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square w-[180px] shrink-0 overflow-hidden rounded-[18px] bg-[#f4f3f1]"
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="180px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
