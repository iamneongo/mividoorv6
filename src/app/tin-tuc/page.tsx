import { Link } from "next-view-transitions";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getNewsArticles } from "@/lib/news";

export default async function NewsPage() {
  const newsArticles = await getNewsArticles();

  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6 min-h-[50vh]">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-28 pb-20 h-full min-h-[50vh]">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-24">
              <h1 className="text-4xl font-medium tracking-tight text-ink md:text-6xl leading-[1.1]">
                Tin tức & <br />
                <span className="text-[#2563EB] accent-serif font-normal text-3xl md:text-[56px] inline-block mt-2">Sự kiện</span>
              </h1>
              <p className="max-w-md text-lg text-ink/70 md:text-right pb-4 md:pb-8">
                Cập nhật những thông tin mới nhất về Mividoor, các hoạt động triển lãm, hội thảo và xu hướng thiết kế nội thất.
              </p>
            </div>
            <div className="flex flex-col border-t border-black/10">
              {newsArticles.map((article) => (
                <Link key={article.slug} href={`/tin-tuc/${article.slug}`} className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-black/10 py-10 transition-colors hover:bg-black/5 px-6 -mx-6">
                  <div className="flex flex-col gap-2 max-w-2xl">
                    <h3 className="text-2xl font-medium tracking-tight text-ink group-hover:text-brand transition-colors">{article.title}</h3>
                    <p className="text-lg text-ink/60">{article.excerpt}</p>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-ink/50">
                    <span>{article.category}</span>
                    <span>—</span>
                    <span>{article.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
      </div>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
