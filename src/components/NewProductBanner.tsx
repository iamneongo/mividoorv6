import Image from "next/image";

export function NewProductBanner() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #cbcbcb 0%, #bdbdbd 45%, #9a9a9a 100%)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col md:min-h-[570px] md:flex-row md:items-center">
        {/* Copy */}
        <div className="z-10 flex-1 px-6 py-14 md:px-10 md:py-0">
          <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/90">
            New Product
          </p>
          <h2 className="text-[44px] font-medium leading-[0.98] tracking-[-1px] text-white md:text-[64px]">
            tea tree
            <br />+ red palm
            <br />
            <span className="accent-serif font-normal">hydrophilic oil</span>
          </h2>
          <p className="mt-6 max-w-sm text-[15px] font-normal leading-[1.4] text-white/90">
            We are here to show you that natural is perfect.
            <br />
            This is what our products are.
          </p>
        </div>

        {/* Product image + info card */}
        <div className="relative flex-1">
          <div className="relative mx-auto h-[360px] w-full max-w-[420px] md:h-[571px]">
            <Image
              src="/images/6136-306_mob_1.jpg"
              alt="Tea Tree + Red Palm Hydrophilic Oil"
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-contain"
            />
            <div className="absolute bottom-8 right-4 w-[210px] rounded-[18px] bg-white/85 p-4 backdrop-blur-md md:right-0">
              <p className="text-[15px] font-medium leading-[1.25] text-[#111111]">
                Tea Tree + Red Palm
                <br />
                Hydrophilic Oil
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
