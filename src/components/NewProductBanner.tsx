"use client";

import Image from "next/image";

const albums = [
  {
    id: "vietbuild",
    prefix: "Triển lãm",
    title: "Vietbuild 2026",
    images: [
      "/mividoor/images/events/vietbuild/IMG_4635.webp",
      "/mividoor/images/events/vietbuild/IMG_5127.webp",
      "/mividoor/images/events/vietbuild/IMG_5271.webp",
      "/mividoor/images/events/vietbuild/IMG_5667.webp",
      "/mividoor/images/events/vietbuild/IMG_9745.webp",
    ]
  },
  {
    id: "hoinganhcua",
    prefix: "Sự kiện",
    title: "Hội Ngành Cửa",
    images: [
      "/mividoor/images/events/hoinganhcua/IMG_6821.webp",
      "/mividoor/images/events/hoinganhcua/IMG_6845.webp",
      "/mividoor/images/events/hoinganhcua/IMG_6870.webp",
      "/mividoor/images/events/hoinganhcua/IMG_6821.webp",
      "/mividoor/images/events/hoinganhcua/IMG_6845.webp",
    ]
  }
];

import Marquee from "react-fast-marquee";

function AlbumCarousel({ album, index }: { album: typeof albums[0], index: number }) {
  return (
    <div className="flex flex-col">
      <div className="mb-8 flex items-center gap-4 md:gap-6">
        <span className="text-[48px] md:text-[64px] font-black text-black/[0.04] leading-none select-none pointer-events-none">
          0{index + 1}
        </span>
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-ink md:text-[32px] leading-none pt-1">
          <span className="accent-serif italic text-brand font-normal pr-2">
            {album.prefix}
          </span>
          {album.title}
        </h3>
      </div>
      
      {/* Marquee Continuous Looping Viewport */}
      <div className="pb-8 w-full">
        <Marquee 
          speed={40} 
          pauseOnHover={true} 
          direction={index % 2 === 0 ? "left" : "right"}
          gradient={false}
        >
          <div className="flex gap-4 md:gap-6 pr-4 md:pr-6 py-2">
            {album.images.map((src, i) => (
              <div 
                key={i} 
                className="relative h-[240px] md:h-[320px] shrink-0 flex-[0_0_auto] rounded-[8px] bg-white p-1.5 border border-[#eaeaea] shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`${album.title} photo ${i + 1}`} 
                  className="block h-full w-auto object-contain rounded-[4px]" 
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export function NewProductBanner() {
  return (
    <section id="events" className="relative w-full overflow-hidden bg-[#fafafa] py-20">
      <div className="mx-auto flex max-w-[1400px] flex-col px-6 md:px-10">
        {/* Header Section */}
        <div className="z-10 mb-16 text-center max-w-3xl mx-auto">
          <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            Hội ngành cửa & Vietbuild 2026
          </p>
          <h2 className="text-[40px] font-medium leading-[1.05] tracking-[-1px] text-ink md:text-[56px]">
            Mividoor{" "}
            <span className="accent-serif font-normal text-brand">tại</span>
            <br />
            Các sự kiện
          </h2>
          <p className="mt-6 text-[15px] font-normal leading-[1.6] text-[#5c5852]">
            Mividoor tự hào mang các bộ sưu tập cửa composite cao cấp trưng bày tại Hội ngành cửa và Vietbuild 2026 — nơi hội tụ những xu hướng thiết kế mới nhất, khẳng định đẳng cấp thương hiệu trên sân chơi quốc gia.
          </p>
        </div>

        {/* Albums Display */}
        <div className="flex flex-col gap-16 md:gap-20">
          {albums.map((album, i) => (
            <AlbumCarousel key={album.id} album={album} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

