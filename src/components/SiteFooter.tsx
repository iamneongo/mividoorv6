import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  SparkleIcon,
  TiktokIcon,
} from "@/components/icons";

const bigLinks = ["new drop", "cosmetics", "soap", "boxes", "bath bombs"];

export function SiteFooter() {
  return (
    <footer id="contacts" className="relative overflow-hidden bg-white pt-10">
      {/* Info + shipping */}
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col gap-8 rounded-[24px] bg-[#fbfbfb] p-8 md:flex-row md:items-center md:gap-16 md:p-12">
          <div className="relative h-28 w-56 shrink-0">
            <Image
              src="/images/3363-336_duct-tape-mockup-v2-.png"
              alt="Arsenijs Fabrica tape"
              fill
              sizes="224px"
              className="object-contain"
            />
          </div>
          <div id="delivery">
            <p className="mb-3 text-[15px] font-normal text-[#818181]">info</p>
            <p className="accent-serif max-w-lg text-[17px] leading-[1.4] text-[#111111]">
              We are located in Latvia, but we deliver worldwide! No matter where
              you are, our products can reach you.
            </p>
            <p className="mt-3 max-w-lg text-[15px] font-normal leading-[1.45] text-[#111111]">
              We offer secure and reliable international shipping options to
              ensure your order arrives safely and promptly.
            </p>
          </div>
        </div>
      </div>

      {/* Brand line + socials */}
      <div className="mx-auto max-w-[1400px] px-6 pt-16 lg:px-10">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          <div>
            <h3 className="max-w-xs text-[28px] font-medium leading-[1.1] tracking-[-0.5px] text-[#111111] md:text-[32px]">
              Arsenijs Fabrica is a brand of modern and innovative{" "}
              <span className="accent-serif">cosmetics!</span>{" "}
              <SparkleIcon className="mb-1 inline size-5 text-brand" />
            </h3>
            <div className="mt-6 flex gap-3">
              {[InstagramIcon, FacebookIcon, TiktokIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex size-11 items-center justify-center rounded-2xl bg-black/[0.05] text-brand transition hover:bg-brand hover:text-white"
                >
                  <Icon className="size-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Big nav words */}
          <div className="grid grid-cols-1 gap-x-16 sm:grid-cols-2">
            {bigLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-[44px] font-medium leading-[1.15] tracking-[-1px] text-[#111111] transition-opacity hover:opacity-60 md:text-[56px]"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Detail columns */}
      <div className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-8 border-t border-[#ececec] pt-10 md:grid-cols-4 lg:grid-cols-6">
          <div className="flex flex-col gap-3 text-[15px] text-[#111111]">
            <a href="#about" className="hover:opacity-60">about us</a>
            <a href="#feedback" className="hover:opacity-60">feedback</a>
            <a href="#delivery" className="hover:opacity-60">delivery</a>
          </div>
          <div className="flex flex-col gap-3 text-[15px] text-[#111111]">
            <a href="#" className="hover:opacity-60">Privātuma politika</a>
            <a href="#" className="hover:opacity-60">Noteikumi un nosacījumi</a>
            <a href="#" className="hover:opacity-60">Preču atgriešana</a>
            <a href="#" className="hover:opacity-60">Piegāde</a>
          </div>
          <div className="text-[15px] text-[#111111]">
            <p className="mb-1 text-[#818181]">Customer care:</p>
            <a href="mailto:arsenijsfabrica@inbox.lv" className="hover:opacity-60">
              arsenijsfabrica@inbox.lv
            </a>
          </div>
          <div className="text-[15px] text-[#111111]">
            <p className="mb-1 text-[#818181]">PR:</p>
            <a href="mailto:promotion@arsenijsfabrica.com" className="hover:opacity-60">
              promotion@arsenijsfabrica.com
            </a>
          </div>
          <div className="text-[15px] text-[#111111]">
            <p className="mb-1 text-[#818181]">Wholesale:</p>
            <a href="mailto:sales@arsenijsfabrica.com" className="hover:opacity-60">
              sales@arsenijsfabrica.com
            </a>
          </div>
          <div className="text-[13px] leading-[1.6] text-[#818181]">
            <p>ARSENIJS FABRICA SIA</p>
            <p>Reg.Number. 50203415881</p>
            <p>Swedbanka LV39HABA0551053035908</p>
            <p>Pudiķa iela 33 - 1, Rīga, LV-1006</p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-[13px] text-[#818181]">
          <span>website development</span>
          <span>en</span>
        </div>
      </div>

      {/* Giant watermark */}
      <p
        aria-hidden
        className="select-none whitespace-nowrap text-center text-[15vw] font-extrabold leading-[0.8] tracking-[-0.03em] text-black/[0.05]"
      >
        ARSENIJS FABRICA
      </p>
    </footer>
  );
}
