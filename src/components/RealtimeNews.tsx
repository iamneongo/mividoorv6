"use client";

import { useEffect, useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import type { NewsItem } from "@/types";

const API_URL = "/cms/wp-json/wp/v2/posts?_embed=1&per_page=100&orderby=date&order=desc";

type ApiPost = {
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  date: string;
  _embedded?: { "wp:term"?: Array<Array<{ name: string; taxonomy: string }>> };
};

function decodeHtml(value: string) {
  const element = document.createElement("div");
  element.innerHTML = value;
  return element.textContent?.replace(/\s+/g, " ").trim() ?? "";
}

function mapPost(post: ApiPost): NewsItem {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  return {
    slug: post.slug,
    title: decodeHtml(post.title.rendered),
    excerpt: decodeHtml(post.excerpt.rendered),
    content: post.content.rendered,
    category: terms.find((term) => term.taxonomy === "category")?.name ?? "Tin tức",
    date: new Intl.DateTimeFormat("vi-VN", { month: "long", year: "numeric" }).format(new Date(post.date)),
  };
}

function currentSlug() {
  const querySlug = new URLSearchParams(window.location.search).get("post");
  if (querySlug) return querySlug;

  const parts = window.location.pathname.split("/").filter(Boolean);
  const index = parts.indexOf("tin-tuc");
  return index >= 0 ? parts[index + 1] : undefined;
}

export function RealtimeNews() {
  const [articles, setArticles] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [slug, setSlug] = useState<string>();

  useEffect(() => {
    setSlug(currentSlug());
    let active = true;
    const load = async () => {
      try {
        const response = await fetch(API_URL, { cache: "no-store" });
        if (!response.ok) throw new Error("WordPress API unavailable");
        const posts = (await response.json()) as ApiPost[];
        if (active) {
          setArticles(posts.map(mapPost).filter((article) => article.slug));
          setError(false);
        }
      } catch {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    };
    load();
    const timer = window.setInterval(load, 60_000);
    return () => { active = false; window.clearInterval(timer); };
  }, []);

  const article = slug ? articles.find((item) => item.slug === slug) : undefined;

  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6 min-h-[50vh]">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-28 pb-20 min-h-[50vh]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            {slug ? (
              <article className="mx-auto max-w-[920px] pt-4">
                <a href="/tin-tuc" className="inline-flex mb-8 text-sm font-medium uppercase tracking-wider text-ink/60 hover:text-brand">Trở lại tin tức</a>
                {loading ? <p>Đang tải bài viết...</p> : article ? (
                  <>
                    <div className="flex gap-4 text-sm font-medium uppercase tracking-wider text-brand mb-6"><span>{article.category}</span><span>•</span><span>{article.date}</span></div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.1] mb-8">{article.title}</h1>
                    <p className="text-xl text-ink/70 leading-relaxed font-medium mb-12">{article.excerpt}</p>
                    <div className="wp-content max-w-none border-t border-black/10 pt-10" dangerouslySetInnerHTML={{ __html: article.content }} />
                  </>
                ) : <p>Không tìm thấy bài viết này.</p>}
              </article>
            ) : (
              <>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
                  <h1 className="text-4xl font-medium tracking-tight text-ink md:text-6xl leading-[1.1]">Tin tức & <br /><span className="text-[#2563EB] accent-serif font-normal text-3xl md:text-[56px] inline-block mt-2">Sự kiện</span></h1>
                  <p className="max-w-md text-lg text-ink/70 md:text-right pb-4 md:pb-8">Cập nhật những thông tin mới nhất về Mividoor, các hoạt động triển lãm, hội thảo và xu hướng thiết kế nội thất.</p>
                </div>
                {loading ? <p>Đang tải bài viết từ CMS...</p> : error ? <p>Không thể kết nối CMS lúc này.</p> : (
                  <div className="flex flex-col border-t border-black/10">
                    {articles.map((item) => <a key={item.slug} href={`/tin-tuc/?post=${encodeURIComponent(item.slug)}`} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/10 py-10 transition-colors hover:bg-black/5 px-6 -mx-6"><div className="flex flex-col gap-2 max-w-2xl"><h3 className="text-2xl font-medium tracking-tight text-ink group-hover:text-brand transition-colors">{item.title}</h3><p className="text-lg text-ink/60">{item.excerpt}</p></div><div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-ink/50"><span>{item.category}</span><span>—</span><span>{item.date}</span></div></a>)}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
