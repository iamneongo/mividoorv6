import { AnnouncementBar } from "@/components/AnnouncementBar";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { IngredientsIntro } from "@/components/IngredientsIntro";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { ProductShowcase } from "@/components/ProductShowcase";
import { NewProductBanner } from "@/components/NewProductBanner";
import { BrandStory } from "@/components/BrandStory";
import { Reviews } from "@/components/Reviews";
import { SocialMedia } from "@/components/SocialMedia";
import { Subscribers } from "@/components/Subscribers";
import { FundingLogos } from "@/components/FundingLogos";
import { SiteFooter } from "@/components/SiteFooter";
import { topSaleProducts, newProducts } from "@/lib/content";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <div className="relative">
        <SiteHeader />
        <Hero />
      </div>
      <IngredientsIntro />
      <CategoryCarousel />
      <ProductShowcase
        id="top-sale"
        tabs={["most loved", "top sale"]}
        activeTab="top sale"
        products={topSaleProducts}
      />
      <NewProductBanner />
      <ProductShowcase
        id="new"
        tabs={["new"]}
        activeTab="new"
        products={newProducts}
      />
      <BrandStory />
      <Reviews />
      <SocialMedia />
      <Subscribers />
      <FundingLogos />
      <SiteFooter />
    </>
  );
}
