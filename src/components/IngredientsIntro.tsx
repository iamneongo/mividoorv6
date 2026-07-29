import { LeafIcon, RabbitIcon, SparkleIcon } from "@/components/icons";

export function IngredientsIntro() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-6 py-14 md:flex-row md:items-center md:justify-between md:py-16 lg:px-10">
        <h2 className="max-w-xl text-[30px] font-medium leading-[1.08] tracking-[-0.5px] text-[#111111] md:text-[38px]">
          our innovative and high&#8288;-&#8288;performance{" "}
          <SparkleIcon className="mb-1 inline size-6 text-brand" />{" "}
          <span className="accent-serif">products</span>
        </h2>

        <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
          <div className="flex items-center gap-3">
            <LeafIcon className="size-6 text-[#111111]" />
            <span className="text-[15px] font-normal text-[#111111]">
              natural Ingredients
            </span>
          </div>
          <div className="flex items-center gap-3">
            <RabbitIcon className="size-6 text-[#111111]" />
            <span className="text-[15px] font-normal text-[#111111]">
              not tested on animals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
