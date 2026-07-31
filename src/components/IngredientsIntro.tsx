import { SparkleIcon } from "@/components/icons";

export function IngredientsIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 pt-14 pb-2 md:flex-row md:items-center md:justify-between md:pt-16 md:pb-4 lg:px-10">
        <h2 className="max-w-xl text-[28px] font-medium leading-[1.15] tracking-[-0.5px] text-ink md:text-[38px]">
          Khám phá các mẫu cửa composite{" "}
          <SparkleIcon className="mb-1 inline size-6 text-brand" />{" "}
          <span className="accent-serif text-brand">Mividoor</span>
        </h2>
      </div>
    </section>
  );
}
