import { ArrowUpRightIcon } from "@/components/icons";

export function Hero() {
  return (
    <section id="top" className="relative w-full">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left — model face + copy overlay */}
        <div
          className="relative flex min-h-[560px] flex-col justify-end bg-cover bg-center px-6 pb-12 md:h-[760px] md:px-12 md:pb-16 lg:px-16"
          style={{ backgroundImage: "url('/images/3139-316_11.jpg')" }}
        >
          <div className="max-w-xl">
            <p className="mb-4 text-[13px] font-semibold uppercase tracking-[0.12em] text-white">
              Arsenijs Fabrica
            </p>
            <h1 className="text-[42px] font-medium leading-[1.02] tracking-[-0.5px] text-white md:text-[48px]">
              brand of modern
              <br />
              and innovative{" "}
              <span className="accent-serif">cosmetics</span>
            </h1>
            <p className="mt-6 max-w-md text-[16px] font-normal leading-[1.35] text-white/95">
              safe cosmetics that can be bright, smell delicious and be
              aesthetically pleasing
            </p>
            <a
              href="#drop"
              className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-white px-8 text-[12px] font-medium text-[#111111] transition hover:bg-white/90"
            >
              shop now
            </a>
          </div>
        </div>

        {/* Right — studio scene + stat card */}
        <div
          className="relative min-h-[420px] bg-cover bg-center md:h-[760px]"
          style={{ backgroundImage: "url('/images/6466-346_IMG_5007.JPG')" }}
        >
          <div className="absolute bottom-8 right-6 w-[210px] rounded-[22px] bg-white/25 p-5 backdrop-blur-md md:right-10">
            <div className="flex items-start justify-between">
              <p className="text-[13px] font-normal leading-[1.25] text-[#111111]">
                Percentage
                <br />
                of naturalness
                <br />
                of products
              </p>
              <ArrowUpRightIcon className="size-4 shrink-0 text-[#111111]" />
            </div>
            <p className="mt-4 text-[44px] font-medium leading-none tracking-[-1px] text-[#111111]">
              98%
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
