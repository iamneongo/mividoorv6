import { features } from "@/lib/content";
import { Droplets, BugOff, Flame, ShieldCheck, VolumeX, Thermometer } from "lucide-react";
import { SlideUp, StaggerContainer, StaggerItem } from "@/components/Animations";

const icons = [Droplets, BugOff, Flame, ShieldCheck, VolumeX, Thermometer];

export function FeaturesShowcase() {
  return (
    <section className="bg-[#fafafa] pt-20 pb-20 md:pt-28 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <SlideUp className="mb-12 flex flex-col items-center text-center">
          <h2 className="text-[32px] font-medium leading-[1.2] tracking-[-1px] text-ink md:text-[42px]">
            Ưu điểm <span className="accent-serif font-normal text-brand">vượt trội</span>
          </h2>
        </SlideUp>

        <StaggerContainer className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[i];
            return (
              <StaggerItem key={feature.title}>
                <div
                  className="group relative flex h-full flex-col items-start overflow-hidden rounded-[24px] bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-brand/5 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="mb-3 text-[20px] font-medium tracking-[-0.5px] text-ink">
                    {feature.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[#5c5852]">
                    {feature.body}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <SlideUp className="mt-16 flex justify-center" delay={0.4}>
          <a
            href="#contact"
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand px-10 text-[15px] font-medium text-white transition hover:bg-brand-2 hover:shadow-[0_10px_30px_rgba(29,78,216,0.2)]"
          >
            Liên hệ đại lý
          </a>
        </SlideUp>
      </div>
    </section>
  );
}
