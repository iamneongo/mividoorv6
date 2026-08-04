"use client";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const albums = [
  {
    id: "vietbuild",
    prefix: "Triển lãm",
    title: "Vietbuild 2026",
    images: Array.from({ length: 21 }).map((_, i) => `/mividoor/images/events/vietbuildv2/IMG_${String(i + 1).padStart(4, '0')}.webp`)
  },
  {
    id: "hoinganhcua",
    prefix: "Sự kiện",
    title: "Hội Ngành Cửa",
    images: Array.from({ length: 20 }).map((_, i) => `/mividoor/images/events/hoinganhcuav2/IMG_${String(i + 1).padStart(4, '0')}.webp`)
  }
];

function AlbumCarousel({ 
  album, 
  index, 
  onImageClick 
}: { 
  album: typeof albums[0], 
  index: number,
  onImageClick: (src: string) => void 
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: false,
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="flex flex-col">
      <div className="mb-6 flex items-center gap-4 md:gap-6">
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
      
      <div className="relative group w-full">
        {/* Embla Viewport */}
        <div className="overflow-hidden py-4" ref={emblaRef}>
          <div className="flex gap-4 md:gap-6 px-1">
            {album.images.map((src, i) => (
              <div 
                key={i} 
                onClick={() => onImageClick(src)}
                className="relative h-[240px] md:h-[320px] shrink-0 flex-[0_0_auto] rounded-[8px] bg-white p-1.5 border border-[#eaeaea] shadow-[0_4px_12px_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-lg hover:border-brand/30 transition-all duration-300"
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
        </div>

        {/* Navigation Buttons (shown on hover) */}
        <button 
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-full flex items-center justify-center text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand hover:text-white z-10"
          aria-label="Previous image"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur shadow-lg rounded-full flex items-center justify-center text-brand opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brand hover:text-white z-10"
          aria-label="Next image"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export function NewProductBanner() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section id="events" className="relative w-full overflow-hidden bg-[#fafafa] py-20">
        <div className="mx-auto flex max-w-[1400px] flex-col px-6 md:px-10">
          {/* Header Section */}
          <div className="z-10 mb-16 text-center max-w-3xl mx-auto">
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
              Hội ngành cửa & Vietbuild 2026
            </p>
            <h2 className="text-[32px] font-medium leading-[1.1] tracking-[-1px] text-ink md:text-[42px]">
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
          <div className="flex flex-col gap-12 md:gap-16">
            {albums.map((album, i) => (
              <AlbumCarousel 
                key={album.id} 
                album={album} 
                index={i} 
                onImageClick={(src) => setLightboxImage(src)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 md:p-6 cursor-zoom-out"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors z-[100000]"
            onClick={() => setLightboxImage(null)}
          >
            <X size={24} />
          </button>
          <div className="relative w-full max-w-[95vw] md:max-w-[1400px] h-full max-h-[95vh] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={lightboxImage} 
              alt="Enlarged event photo" 
              className="max-w-full max-h-full object-contain rounded-md shadow-2xl cursor-default border-[2px] md:border-[4px] border-white bg-white"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </>
  );
}
