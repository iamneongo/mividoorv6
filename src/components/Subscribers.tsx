import Image from "next/image";

const images = [
  "/images/6136-306_mob_1.jpg",
  "/images/3665-363_boxesremini-enhanced.jpg",
  "/images/6535-393_soapremini-enhanced_.jpg",
  "/images/3934-313_bath_bombsremini-enh.jpg",
];

export function Subscribers() {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:items-center">
          <div className="shrink-0 md:w-[340px]">
            <p className="text-[64px] font-medium leading-none tracking-[-2px] text-[#111111] md:text-[88px]">
              &gt;200k
            </p>
            <p className="mt-3 text-[16px] font-normal text-[#111111]">
              Subscribers in social networks
            </p>
            <p className="mt-6 max-w-xs text-[15px] font-normal leading-[1.45] text-[#0d1717]">
              There are over 1000 people in the skincare community. Join us and
              become part of it.
            </p>
            <button className="mt-6 inline-flex h-11 items-center rounded-full bg-brand px-8 text-[15px] font-medium text-white transition hover:bg-brand-2">
              join
            </button>
          </div>

          <div className="no-scrollbar flex flex-1 gap-4 overflow-x-auto">
            {images.map((src, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] w-[240px] shrink-0 overflow-hidden rounded-[20px] bg-[#f4f3f1]"
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  sizes="240px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
