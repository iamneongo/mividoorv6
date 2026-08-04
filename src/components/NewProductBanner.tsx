"use client";
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const albums: { id: string; prefix: string; title: string; badge?: string; images: string[] }[] = [
  {
    id: "vietbuild",
    prefix: "Triển lãm",
    title: "Vietbuild 2026",
    images: [
      "/mividoor/images/events/vietbuildv2_real/735577578_122270926214270212_4365819149363454070_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/735658441_122270922800270212_185300808205250012_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736045631_122270926556270212_3830791444161114236_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736172820_122270922686270212_7851627397271427860_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736235497_122270926202270212_6922142425117337091_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736235503_122270924450270212_4714163909152616245_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736273506_122270923658270212_4825567647945112096_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736367637_122270926400270212_9104748751477371641_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736398345_122270926520270212_5174555386284044258_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736525417_122270924282270212_7746382566498937330_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736740460_122270926532270212_1035885298846849314_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736846922_122270926340270212_6108467294264749588_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736858138_122270926226270212_7902722992605148389_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736879170_122270923808270212_6323610389449231219_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/736999981_122270923148270212_3747016197543712686_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737046774_122270926352270212_1358439066762073985_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737076273_122270922512270212_3149375059303240430_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737091600_122270926298270212_4832564796513213349_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737297808_122270923424270212_3743710885018785168_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737370539_122270925878270212_2307561007452371650_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737494827_122270922782270212_6160319840079792083_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737543531_122270923892270212_148191890462371785_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737543894_122270926388270212_1258242709455536882_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737543895_122270924804270212_1117397888840685368_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737569347_122270926544270212_1221693319718856346_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737577474_122270923562270212_9152058176567941243_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737577952_122270926178270212_3212856859744262952_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737738754_122270926262270212_7053781139351921065_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737877060_122270922926270212_6034074549231234017_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/737999123_122270926376270212_272446678185050726_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/738235887_122270923466270212_756905811421459362_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/738417078_122270926508270212_6264990983568945550_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/738417085_122270923406270212_1590877745087619292_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/738512055_122270926286270212_4228423315920810114_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/738937758_122270926496270212_8283016984053587773_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/739231172_122270926190270212_6927558434836719200_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/739355704_122270925098270212_8252608673771411137_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/739470786_122270922974270212_8338962331697216181_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/739471317_122270926412270212_8195971842127091556_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/739471458_122270926364270212_3562705187649689227_n.jpg",
      "/mividoor/images/events/vietbuildv2_real/DSC02783.JPG",
      "/mividoor/images/events/vietbuildv2_real/DSC02791.JPG",
      "/mividoor/images/events/vietbuildv2_real/DSC02818.JPG",
      "/mividoor/images/events/vietbuildv2_real/DSC02837.JPG",
      "/mividoor/images/events/vietbuildv2_real/DSC02870.JPG",
      "/mividoor/images/events/vietbuildv2_real/DSC03019.png",
      "/mividoor/images/events/vietbuildv2_real/DSC03061.JPG",
      "/mividoor/images/events/vietbuildv2_real/DSC03122.JPG",
      "/mividoor/images/events/vietbuildv2_real/DSC03162.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_0145.HEIC",
      "/mividoor/images/events/vietbuildv2_real/IMG_4226.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_4464.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_4635.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_4688.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_4818.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_4978.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_5666.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_5699.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_6921.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_9746.JPG",
      "/mividoor/images/events/vietbuildv2_real/IMG_9757.JPG"
    ]
  },
  {
    id: "hoinganhcua",
    prefix: "Sự kiện",
    title: "Hội Ngành Cửa 2026",
    images: [
      "/mividoor/images/events/hoinganhcuav2_real/755287942_122273964734270212_220337645825156468_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/755287943_122273963162270212_1007604716502208972_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/755870653_122273964524270212_2236597021949962781_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756227179_122273962610270212_6703948094473424452_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756440522_122273964128270212_5363830578038235990_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756440949_122273964878270212_3157808610807968152_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756440962_122273963084270212_5709527233415184075_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756530734_122273963204270212_2559019877613537671_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756779611_122273962640270212_2286949045929863571_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756790531_122273964500270212_2318092063914463502_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756873898_122273963894270212_544161303796379861_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/756943260_122273963996270212_5636185067480444589_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/757076864_122273962952270212_576499148507377261_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/757128277_122273962574270212_4625072538181470704_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/757603101_122273964212270212_109633013593847672_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758350389_122273963534270212_8385018958852786322_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758386730_122273963522270212_6174033097136315463_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758400725_122273964380270212_6055328564258731571_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758600009_122273964110270212_4148981774880053323_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758677371_122273962580270212_4477962055077158268_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758706907_122273962598270212_7633866394791368341_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758706909_122273965058270212_6153363350259304178_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/758765067_122273965226270212_657767302117632253_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/759040468_122273962988270212_1583335566118741393_n.jpg",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_0818.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_0822.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_0830.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_0831.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_0841.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_0842.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_0992.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_1006.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_1012.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_1022.HEIC",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6773.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6781.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6804.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6809.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6821.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6822.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6827.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6828.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6902.JPG",
      "/mividoor/images/events/hoinganhcuav2_real/IMG_6936.JPG"
    ]
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
        <h3 className="text-[24px] font-medium tracking-[-0.5px] text-ink md:text-[32px] leading-none pt-1 flex items-center flex-wrap gap-y-2">
          <span>
            <span className="accent-serif italic text-brand font-normal pr-2">
              {album.prefix}
            </span>
            {album.title}
          </span>
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
                className="relative w-[210px] h-[280px] md:w-[315px] md:h-[420px] shrink-0 flex-[0_0_auto] rounded-[8px] bg-white p-1 border border-[#eaeaea] shadow-[0_4px_12px_rgba(0,0,0,0.04)] cursor-pointer hover:shadow-lg hover:border-brand/30 transition-all duration-300 overflow-hidden"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={src} 
                  alt={`${album.title} photo ${i + 1}`} 
                  className="block h-full w-full object-cover rounded-[4px]" 
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
