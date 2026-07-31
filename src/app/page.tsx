import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { IngredientsIntro } from "@/components/IngredientsIntro";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { ProductShowcase } from "@/components/ProductShowcase";
import { NewProductBanner } from "@/components/NewProductBanner";
import { LuxuryShowcase } from "@/components/LuxuryShowcase";
import { BrandStory } from "@/components/BrandStory";
import { MaterialsShowcase } from "@/components/MaterialsShowcase";
import { FeaturesShowcase } from "@/components/FeaturesShowcase";
import { ColorPalette } from "@/components/ColorPalette";


import { SiteFooter } from "@/components/SiteFooter";
import { featuredProducts, productCatalog } from "@/lib/content";

export default function Home() {
  return (
    <>
      <div className="relative">
        <SiteHeader />
        <Hero />
      </div>
      <IngredientsIntro />
      <CategoryCarousel />

      <NewProductBanner />
      <LuxuryShowcase />

      <BrandStory />
      <MaterialsShowcase />
      <FeaturesShowcase />
      <ColorPalette />


      <SiteFooter />
    </>
  );
}
