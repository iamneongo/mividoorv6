# Arsenijs Fabrica — Page Topology & Behaviors

Target: https://www.arsenijsfabrica.com/ (Tilda site, `t-rec` blocks). Page height ~7327px @1440.
Language of some UI = Latvian (cookie banner, footer policy links). Content mostly English.

## Design tokens
- **Fonts:** Onest (sans, 200–800) for everything; **Times New Roman italic** for decorative accent words ("cosmetics", "products", "hydrophilic oil", "cosmetics!", "silk"). Use `.accent-serif`.
- **Colors:** ink `#111`, ink-soft `#0d1717`, cream section bg `#fbfbfb`, brand orange `#f15730` (CTAs), brand-2 `#f7651a`, peach `#ff8562` (hero accent), coral `#f95d51`, mint `#62c584`, gray `#818181`, hairline `#bdbdbd`, white `#fff`.
- **Container:** content max-width ~1200px, centered, ~40px side padding. Full-bleed backgrounds.
- **Radius:** cards ~20–28px; pills/buttons full-round.

## Global behaviors
- **Header** (`rec791597650`): `position:fixed; top:0; height:88px; z:9999; bg transparent`. Center nav is a **frosted pill** `border-radius:600px; backdrop-blur(8px)`, ~1035px wide, 55px tall. Always visible; over dark hero it reads light, over light sections it frosts. Logo top-left (bold uppercase wordmark, 2 lines "ARSENIJS / FABRICA", black). Menu links Onest 12px/500, color #111, letter-spacing -0.5px.
- **Reveal on scroll:** elements fade/slide up as they enter viewport (Tilda `t-records_animated`). Use `.af-reveal`.
- No Lenis / smooth-scroll lib (native scroll). `scroll-behavior:smooth` acceptable.

## Section order (top → bottom)
| # | id | name | notes |
|---|----|------|-------|
| 0 | rec781197388 | **AnnouncementBar** | h30, bg `#111`, white 14px/-0.5px, centered: "Worldwide delivery + gifts with purchase" |
| 1 | rec1056893611 | **Hero** | Split: left = model face photo (dark) with "ARSENIJS FABRICA" eyebrow + H1 "brand of modern and innovative *cosmetics*" (cosmetics = serif italic) + sub "safe cosmetics that can be bright, smell delicious and be aesthetically pleasing" + white pill "shop now". Right = light-gray studio bg with floating "Shaker Face Mask" cups + pink powder + stat card "Percentage of naturalness of products ↗ 98%" |
| 2 | rec781219755 | **IngredientsIntro** | Heading "our innovative and high-performance ✦ *products*" (products serif italic) + two badges w/ icons: "natural Ingredients", "not tested on animals" |
| 3 | rec781493201 | **CategoryCarousel** | Horizontal cards: `new drop`, `the cosmetics`, `the soap`, `the boxes`, `the bath bombs` — each big rounded image w/ eyebrow + bold title + `›` corner. Bg cream |
| 4 | rec781493647 | (part of carousel) | ‹ › prev/next + "more products" label |
| 5 | rec781226272 | **ProductShowcase header (top sale)** | tabs "most loved / top sale" + hand-drawn heart doodle + "all products ›" |
| 6 | rec791816595 | **ProductGrid (top sale)** | 4 product cards + wishlist heart, "-23%" badge, "Out of stock", "Load more" pill |
| 7 | rec781407134 | **NewProductBanner** | Full-bleed gray; "NEW PRODUCT" eyebrow, huge "tea tree + red palm *hydrophilic oil*" (hydrophilic oil serif italic) + sub "We are here to show you that natural is perfect. This is what our products are." + rotating product bottle photo + floating info card "Tea Tree + Red Palm Hydrophilic Oil" |
| 8 | rec791660713 | **ProductShowcase header (new)** | tab "new" + "all products ›" |
| 9 | rec791780016 | **ProductGrid (new)** | 4 product cards + "Load more" |
| 10 | rec781505325 | **BrandStory** | faded giant watermark "Arsenijs fabrica"; small floating rounded photos; text "the story on which the Arsenijs fabrica brand is based is about a 15-year-old boy..." |
| 11-13 | rec782105250 / rec791709001 / rec791709387 | **Accordion** | items: "mission", "sustainability", "our values" — each row with `+` toggle, hairline divider |
| 14 | rec782221889 | **StoryQuote** | "learn more ›" left; right italic-ish "every night he dreamed that one day he would have his own factory." + small portrait |
| 15 | rec781690840 | **Reviews header** | "review", heart doodle, "average product rating from consumers - **4.9** out of 5", tabs "video feedback / text feedback", "more feedback" + ‹ › |
| 16 | rec781697699 | **ReviewsCarousel** | row of video cards (portrait, black, YouTube-style red play button; some are `<video>` w/ native controls) |
| 17 | rec781798599 | **SocialMedia** | "follow social media us", instagram (8 980) / tiktok (5 216) stat pills, "we look forward to seeing you on our social networks", image strip |
| 18 | rec781690805 | **Subscribers** | "Subscribers in social networks >200k / There are over 1000 people in the skincare... join" + product images (purple bath bombs, etc.) |
| 19 | rec859890799 | **FundingLogos** | white rounded card w/ EU (Līdzfinansē Eiropas Savienība), "2027 Nacionālais attīstības plāns", LIAA logos |
| 20 | t-footer | **Footer** | (a) info: "ARSENIJS FABRICA" duct-tape image + shipping copy "We are located in Latvia, but we deliver worldwide!…"; (b) "Arsenijs Fabrica is a brand of modern and innovative *cosmetics!*" + social icon circles (ig/fb/tiktok); (c) huge nav words: new drop / cosmetics / soap / boxes / bath bombs; (d) columns: about us·feedback·delivery, Customer care arsenijsfabrica@inbox.lv, PR promotion@arsenijsfabrica.com, lang; company: ARSENIJS FABRICA SIA, Reg.Number 50203415881, Swedbank LV39HABA0551053035908, Pudiķa iela 33-1 Rīga LV-1006; policy links Privātuma politika·Noteikumi un nosacījumi·Preču atgriešana·Piegāde; Wholesale sales@arsenijsfabrica.com; "website development"; (e) giant watermark "ARSENIJS FABRICA". |

## Interaction models
- CategoryCarousel, ProductGrids, ReviewsCarousel, SocialMedia strip = **horizontal scroll** with ‹ › buttons (click-driven). Not scroll-hijack.
- Accordion (mission/sustainability/our values) = **click to expand** (`+` → open), height/opacity transition.
- Product card hover: image slight zoom, wishlist heart fill on hover. CTA pills darken on hover.
- Tabs (most loved/top sale; video/text feedback) = **click to switch** card set (we render active set; secondary sets as static demo).

## Responsive (inferred — Tilda mobile breakpoint ~640px; nav collapses to hamburger)
- Desktop 1440: as above. Mobile 390: hero stacks (image top, text below), grids → 1–1.5 cols horizontal scroll, nav = logo + hamburger + cart, big footer words stack.
