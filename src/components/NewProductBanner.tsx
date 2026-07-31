const demoVideos = [
  "/mividoor/videos/video_1.mp4",
  "/mividoor/videos/video_2.mp4",
  "/mividoor/videos/video_3.mp4",
  "/mividoor/videos/video_4.mp4",
];

export function NewProductBanner() {

  return (
    <section
      id="luxury"
      className="relative w-full overflow-hidden bg-[#fafafa]"
    >
      {/* Decorative large background text */}
      <div className="pointer-events-none absolute -left-20 top-10 select-none text-[120px] font-black uppercase leading-none tracking-tighter text-black/[0.02] md:text-[240px]">
        Vietbuild
      </div>

      <div className="mx-auto flex max-w-[1400px] flex-col md:min-h-[600px] md:flex-row md:items-center">
        {/* Copy */}
        <div className="z-10 flex-[0.8] px-6 py-14 md:px-10 md:py-0">
          <p className="mb-6 text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            Hội ngành cửa & Vietbuild 2026
          </p>
          <h2 className="text-[40px] font-medium leading-[1.05] tracking-[-1px] text-ink md:text-[56px]">
            Mividoor{" "}
            <span className="accent-serif font-normal text-brand">tại</span>
            <br />
            Các sự kiện
          </h2>
          <p className="mt-6 max-w-md text-[15px] font-normal leading-[1.6] text-[#5c5852]">
            Mividoor tự hào mang các bộ sưu tập cửa composite cao cấp trưng bày tại Hội ngành cửa và Vietbuild 2026 — nơi hội tụ những xu hướng thiết kế mới nhất, khẳng định đẳng cấp thương hiệu trên sân chơi quốc gia.
          </p>
          <a
            href="#luxury-collection"
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-brand px-8 text-[14px] font-medium text-white transition hover:bg-brand-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.2)]"
          >
            Khám phá bộ sưu tập
          </a>
        </div>

        {/* Videos Section */}
        <div className="relative min-w-0 flex-[1.2] py-4 md:py-20 md:pr-10">
          {/* MOBILE COLLAGE LAYOUT */}
          <div className="relative mt-8 h-[440px] w-full px-6 md:hidden">
            {/* Video 2 (Background) */}
            <div className="absolute right-6 top-12 h-[320px] w-[55%] rotate-[8deg] overflow-hidden rounded-[20px] border-[4px] border-white shadow-xl">
              <video src={demoVideos[1]} autoPlay muted loop playsInline className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-black/10 mix-blend-multiply" />
            </div>
            {/* Video 1 (Foreground) */}
            <div className="absolute left-6 top-0 z-10 h-[380px] w-[60%] -rotate-[4deg] overflow-hidden rounded-[24px] border-[5px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)]">
              <video src={demoVideos[0]} autoPlay muted loop playsInline className="h-full w-full object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-black/5 mix-blend-multiply" />
            </div>
          </div>

          {/* DESKTOP 2-VIDEO LAYOUT */}
          <div className="hidden md:flex gap-6 pl-10 pr-4 pb-12 pt-12 items-start">
            {demoVideos.slice(0, 2).map((src, i) => (
              <div 
                key={i} 
                className={`flex-1 transition-all duration-700 ${
                  i === 0 ? "-translate-y-6" : "translate-y-6"
                }`}
              >
                <div className="group relative h-[480px] w-full overflow-hidden rounded-[32px] border-[8px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-60 mix-blend-multiply transition-opacity group-hover:opacity-40" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

