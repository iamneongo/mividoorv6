import { SparkleIcon } from "@/components/icons";

export function IngredientsIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:py-16 lg:px-10">
        <h2 className="max-w-xl text-[28px] font-medium leading-[1.15] tracking-[-0.5px] text-ink md:text-[38px]">
          khám phá các mẫu cửa composite{" "}
          <SparkleIcon className="mb-1 inline size-6 text-brand" />{" "}
          <span className="accent-serif text-brand">mividoor</span>
        </h2>
      </div>
    </section>
  );
}
