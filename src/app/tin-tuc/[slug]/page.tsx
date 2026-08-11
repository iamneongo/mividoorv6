import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getNewsArticleBySlug, getNewsArticles } from "@/lib/news";
import { Link } from "next-view-transitions";
import { ArrowLeftIcon } from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const newsArticles = await getNewsArticles();

  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getNewsArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <>
      <div className="relative w-full bg-white p-4 md:p-6 min-h-[50vh]">
        <SiteHeader />
        <div className="relative w-full rounded-[16px] overflow-hidden bg-[#F2F2EC] pt-32 pb-20 h-full">
          <div className="mx-auto max-w-[800px] px-6 lg:px-10 relative z-10">
            <Link 
              href="/tin-tuc" 
              className="inline-flex items-center gap-2 text-ink/60 hover:text-brand transition-colors mb-8 font-medium text-sm uppercase tracking-wider"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Trở lại tin tức
            </Link>
            
            <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-brand mb-6">
              <span>{article.category}</span>
              <span className="text-ink/30">•</span>
              <span className="text-ink/50">{article.date}</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-ink leading-[1.1] mb-8">
              {article.title}
            </h1>
            
            <p className="text-xl text-ink/70 leading-relaxed font-medium mb-12">
              {article.excerpt}
            </p>

            <div 
              className="prose prose-lg prose-p:text-ink/80 prose-p:leading-relaxed prose-headings:font-medium prose-headings:text-ink prose-a:text-brand max-w-none border-t border-black/10 pt-10"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>
      <SiteFooter hideIntro />
    </>
  );
}
