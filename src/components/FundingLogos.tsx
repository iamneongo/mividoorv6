export function FundingLogos() {
  return (
    <section className="bg-white pb-16">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex flex-wrap items-center justify-center gap-10 rounded-[24px] bg-[#fbfbfb] px-8 py-10 md:gap-16">
          {/* EU emblem */}
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-16 items-center justify-center rounded-sm bg-[#003399]">
              <span className="text-[16px] tracking-[0.2em] text-[#ffcc00]">
                ★★★
              </span>
            </div>
            <span className="max-w-[110px] text-[11px] leading-tight text-[#003399]">
              Līdzfinansē Eiropas Savienība
            </span>
          </div>

          {/* National plan 2027 */}
          <div className="flex items-center gap-2">
            <span className="text-[28px] font-bold text-[#9a1b2f]">II</span>
            <div className="leading-tight">
              <p className="text-[20px] font-bold text-[#9a1b2f]">2027</p>
              <p className="text-[10px] text-[#9a1b2f]">
                Nacionālais
                <br />
                attīstības plāns
              </p>
            </div>
          </div>

          {/* LIAA */}
          <div className="flex items-center gap-2">
            <span className="text-[22px] text-[#e2001a]">✦</span>
            <span className="text-[30px] font-bold tracking-tight text-[#5a5a5a]">
              LIAA
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
