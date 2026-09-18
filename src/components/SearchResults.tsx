"use client";

import { useEffect, useMemo, useState } from "react";
import { formatLuxuryCode, luxuryDoors, navLinks, productCatalog } from "@/lib/content";

type SearchItem = {
  title: string;
  description: string;
  href: string;
};

function productHref(code: string) {
  if (code.startsWith("MV-EPOXY")) return "/mau-di-epoxy/";
  if (code.startsWith("MV-OKLS")) return "/mau-o-kinh-la-sach/";
  if (code.startsWith("MV-OFIX")) return "/mau-o-fix/";
  if (code.startsWith("MV-NEP")) return "/mau-di-nep/";
  if (code.startsWith("MV-SH")) return "/mau-soi-huynh/";
  if (code.startsWith("MV-PL")) return "/mau-phang/";
  if (code.startsWith("MV-VO")) return "/mau-vom/";
  if (code.startsWith("MV-2C")) return "/mau-2-canh/";
  if (code.startsWith("MV-LUA")) return "/mau-lua/";
  if (code.startsWith("MV-PCN")) return "/mau-phao-chi-noi/";
  return "/san-pham/";
}

const searchItems: SearchItem[] = [
  ...navLinks.flatMap((link) => [
    { title: link.label, description: "Trang thông tin Mividoor", href: link.href },
    ...(link.subLinks ?? []).map((subLink) => ({
      title: subLink.label,
      description: "Bộ sưu tập cửa composite Mividoor",
      href: subLink.href,
    })),
  ]),
  ...productCatalog.map((product) => ({
    title: `${product.name} ${product.code}`,
    description: product.descr,
    href: productHref(product.code),
  })),
  ...luxuryDoors.map((door) => ({
    title: formatLuxuryCode(door.code),
    description: "Mẫu cửa thuộc bộ sưu tập Mividoor Luxury.",
    href: door.taglineHref ?? "/luxury/",
  })),
];

export function SearchResults() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setQuery(new URLSearchParams(window.location.search).get("q")?.trim() ?? "");
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const results = useMemo(() => {
    const normalizedQuery = query.toLocaleLowerCase("vi-VN");
    if (!normalizedQuery) return [];

    return searchItems
      .filter((item) => `${item.title} ${item.description}`.toLocaleLowerCase("vi-VN").includes(normalizedQuery))
      .filter((item, index, items) => items.findIndex((candidate) => candidate.title === item.title && candidate.href === item.href) === index)
      .slice(0, 20);
  }, [query]);

  return (
    <>
      <form action="/tim-kiem/" method="get" className="mt-8 flex max-w-2xl gap-3">
        <label className="sr-only" htmlFor="site-search">Tìm kiếm trên Mividoor</label>
        <input
          id="site-search"
          name="q"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Nhập tên mẫu cửa hoặc mã sản phẩm"
          className="min-w-0 flex-1 rounded-full border border-black/15 bg-white px-5 py-3 outline-none focus:border-[#2563EB]"
        />
        <button type="submit" className="rounded-full bg-[#2563EB] px-6 py-3 font-medium text-white">
          Tìm kiếm
        </button>
      </form>

      {query ? (
        <div className="mt-10">
          <p className="text-ink/65">{results.length} kết quả cho “{query}”</p>
          <ul className="mt-5 grid gap-4">
            {results.map((result) => (
              <li key={`${result.title}-${result.href}`}>
                <a href={result.href} className="block rounded-2xl border border-black/10 bg-white p-5 transition hover:border-[#2563EB]">
                  <h2 className="text-xl font-medium text-ink">{result.title}</h2>
                  <p className="mt-2 text-ink/65">{result.description}</p>
                </a>
              </li>
            ))}
          </ul>
          {results.length === 0 && <p className="mt-5 text-ink/65">Chưa tìm thấy kết quả phù hợp. Hãy thử tên mẫu hoặc mã cửa khác.</p>}
        </div>
      ) : (
        <p className="mt-8 text-ink/65">Tìm theo tên mẫu cửa, mã sản phẩm hoặc bộ sưu tập.</p>
      )}
    </>
  );
}
