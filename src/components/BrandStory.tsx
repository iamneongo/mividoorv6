import Image from "next/image";
import { Accordion } from "@/components/Accordion";
import { ChevronRightIcon } from "@/components/icons";

export function BrandStory() {
  return (
    <section id="about" className="bg-white pt-20 md:pt-28">
      {/* Watermark + story */}
      <div className="relative mx-auto max-w-[1200px] px-6 pb-20 lg:px-10">
        <p
          aria-hidden
          className="pointer-events-none select-none text-center text-[52px] font-medium leading-none tracking-[-1px] text-black/[0.06] md:text-[110px]"
        >
          Arsenijs fabrica
        </p>

        {/* floating rounded images */}
        <div className="absolute left-1/2 top-4 hidden -translate-x-[240px] md:block">
          <Image
            src="/images/6466-346_IMG_5007.JPG"
            alt=""
            width={110}
            height={64}
            className="h-16 w-28 rounded-full object-cover"
          />
        </div>
        <div className="absolute left-1/2 hidden translate-x-[120px] translate-y-2 md:block">
          <Image
            src="/images/3934-313_bath_bombsremini-enh.jpg"
            alt=""
            width={110}
            height={64}
            className="h-16 w-28 rounded-full object-cover"
          />
        </div>

        <div className="relative mx-auto mt-8 max-w-2xl text-center">
          <p className="text-[20px] font-normal leading-[1.5] text-[#111111] md:text-[24px]">
            the story on which the Arsenijs fabrica brand is based is about a
            15-year-old boy who fell in love with the craft of making natural
            cosmetics and dreamed of building a factory of his own.
          </p>
        </div>
      </div>

      {/* Accordion */}
      <Accordion />

      {/* Quote row */}
      <div className="mx-auto mt-10 flex max-w-[1200px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between lg:px-10">
        <a
          href="#about"
          className="flex items-center gap-1 text-[16px] font-normal text-[#111111] transition-opacity hover:opacity-60"
        >
          learn more <ChevronRightIcon className="size-4" />
        </a>
        <p className="max-w-md text-[16px] font-normal leading-[1.4] text-[#111111] md:text-right">
          every night he dreamed that one day he would have his own factory.
        </p>
      </div>
    </section>
  );
}
