import type {
  Category,
  ColorSwatch,
  ContactItem,
  Feature,
  LuxuryDoor,
  Material,
  NavLink,
  Product,
  Stat,
  NewsItem
} from "@/types";

export const brand = {
  name: "MIVIDOOR",
  phone: "0943 39 35 39",
  email: "mivicompositevn@gmail.com",
  tagline: "Cửa composite công nghệ Đức",
};

export const navLinks: NavLink[] = [
  { label: "Trang chủ", href: "/" },
  { label: "Về chúng tôi", href: "/ve-chung-toi" },
  { label: "Sản phẩm", href: "/san-pham" },
  { label: "BST Mividoor Luxury", href: "/luxury" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

const IMG = "/mividoor/images";

export const categories: Category[] = [
  { eyebrow: "mẫu", title: "cửa phẳng", image: `${IMG}/mau-cua-phang.webp`, href: "#products" },
  { eyebrow: "mẫu", title: "phào chỉ", image: `${IMG}/mau-phao-chi-noi.webp`, href: "#products" },
  { eyebrow: "mẫu", title: "soi CNC", image: `${IMG}/mau-hoa-van-cnc.webp`, href: "#products" },
  { eyebrow: "mẫu", title: "ô kính", image: `${IMG}/mau-o-kinh.webp`, href: "#products" },
  { eyebrow: "mẫu", title: "cửa vòm", image: `${IMG}/mau-cua-vom.webp`, href: "#products" },
];

export const featuredProducts: Product[] = [
  {
    name: "Cửa Phẳng Sang Trọng",
    code: "MV-01",
    tagline: "Tối giản - Tinh tế",
    descr:
      "Thiết kế tối giản, bề mặt vân gỗ tự nhiên sắc nét cho không gian nội thất hiện đại.",
    image: `${IMG}/mau-cua-phang.webp`,
  },
  {
    name: "Cửa Nẹp Nhôm Inox",
    code: "MV-02",
    tagline: "Sang trọng - Điểm nhấn",
    descr:
      "Trang trí chỉ nhôm hoặc inox sáng bóng, phù hợp cho chung cư cao cấp và biệt thự.",
    image: `${IMG}/mau-nep-nhom-inox.webp`,
  },
  {
    name: "Cửa Phào Chỉ Nổi",
    code: "MV-03",
    tagline: "Cổ điển - Đẳng cấp",
    descr:
      "Phong cách tân cổ điển, đường nét điêu khắc tinh xảo tạo không gian sống bề thế.",
    image: `${IMG}/mau-phao-chi-noi.webp`,
  },
  {
    name: "Cửa Soi Huỳnh CNC",
    code: "MV-06",
    tagline: "Hoa văn - Nghệ thuật",
    descr:
      "Soi huỳnh bằng công nghệ CNC cho các đường nét hoa văn chính xác tuyệt đối.",
    image: `${IMG}/mau-hoa-van-cnc.webp`,
  },
];

export const productCatalog: Product[] = [
  featuredProducts[0],
  featuredProducts[1],
  featuredProducts[2],
  {
    name: "Cửa Lùa",
    code: "MV-04",
    tagline: "Tiện ích - Tối ưu",
    descr:
      "Hệ ray trượt siêu êm, độ bền cao — giải pháp thông minh cho phòng có diện tích hẹp.",
    image: `${IMG}/mau-cua-lua.webp`,
  },
  {
    name: "Cửa Vòm",
    code: "MV-05",
    tagline: "Mềm mại - Độc đáo",
    descr:
      "Những đường cong mềm mại tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.",
    image: `${IMG}/mau-cua-vom.webp`,
  },
  featuredProducts[3],
  {
    name: "Cửa Ô Kính",
    code: "MV-07",
    tagline: "Hiện đại - Không gian mở",
    descr:
      "Kết hợp ô kính cường lực lấy sáng tự nhiên, mở rộng tầm nhìn không gian.",
    image: `${IMG}/mau-o-kinh.webp`,
  },
  {
    name: "Cửa Ô Lá Sách",
    code: "MV-08",
    tagline: "Thoáng khí - Thanh lịch",
    descr:
      "Ô lá sách thông minh giúp lưu thông không khí ngay cả khi đóng cửa.",
    image: `${IMG}/mau-o-la-sach.webp`,
  },
  {
    name: "Cửa Ô Fix",
    code: "MV-09",
    tagline: "Đón sáng - Rộng rãi",
    descr:
      "Ô kính fix cố định cung cấp thêm ánh sáng cho hành lang hay không gian khuất.",
    image: `${IMG}/mau-o-fix.webp`,
  },
];

const luxTaglines = [
  "Sang trọng",
  "Tân cổ điển",
  "Vòm cổ điển",
  "Cổ điển",
  "Hiện đại",
  "Tinh tế",
  "Cao cấp",
  "Độc đáo",
  "Đột phá",
  "Tối giản",
  "Đẳng cấp",
  "Thượng lưu",
  "Quý phái",
  "Nghệ thuật",
];

const luxFiles = [
  "virtual-try-on-2026-07-28T02-11-25.jpg",
  "virtual-try-on-2026-07-28T02-17-42.jpg",
  "virtual-try-on-2026-07-28T02-20-15.jpg",
  "virtual-try-on-2026-07-28T02-29-20.jpg",
  "virtual-try-on-2026-07-28T02-35-08.jpg",
  "virtual-try-on-2026-07-28T02-43-42.jpg",
  "virtual-try-on-2026-07-28T02-48-48.jpg",
  "virtual-try-on-2026-07-28T02-53-41.jpg",
  "virtual-try-on-2026-07-28T03-03-41.jpg",
  "virtual-try-on-2026-07-28T03-33-25.jpg",
  "virtual-try-on-2026-07-28T03-42-40.jpg",
  "virtual-try-on-2026-07-28T03-45-16.jpg",
  "virtual-try-on-2026-07-28T03-50-33.jpg",
  "virtual-try-on-2026-07-28T04-25-44.jpg"
];

export const luxuryDoors: LuxuryDoor[] = luxFiles.map((filename, i) => ({
  code: `MIVI-LUX ${String(i + 1).padStart(2, "0")}`,
  tagline: luxTaglines[i],
  image: `${IMG}/luxury/${filename}`,
}));

export const materials: Material[] = [
  { title: "Phôi PVC cao cấp", subtitle: "Tiêu chuẩn nhà máy", image: `${IMG}/phoi-pvc-v3.webp` },
  { title: "Keo Jowat Đức", subtitle: "Mividoor sử dụng", image: `${IMG}/keo-jowat-v3.webp` },
  { title: "Lớp phim PVC", subtitle: "Cao cấp dày dặn", image: `${IMG}/phim-pvc-v3.webp` },
  { title: "Công nghệ phủ phim", subtitle: "Máy Burkle nhập từ Đức", image: `${IMG}/burkle-machine-v3.webp` },
  { title: "Chêm đố nhựa WPB", subtitle: "Vào 4 cạnh cánh cửa", image: `${IMG}/wpb-plastic-v3.webp` },
];

export const features: Feature[] = [
  {
    title: "Chống nước tuyệt đối",
    body: "Không lo ẩm mốc, phù hợp với môi trường có độ ẩm cao. Khả năng chống nước 100% cho tuổi thọ vượt trội.",
  },
  {
    title: "Chống mối mọt",
    body: "Xoá tan nỗi lo cửa bị tấn công bởi mối mọt, giữ trọn vẻ đẹp và độ bền theo thời gian.",
  },
  {
    title: "Chống cháy lan",
    body: "Không dẫn lửa, an toàn trong sử dụng, giúp giảm thiểu tối đa thiệt hại tài sản và con người.",
  },
  {
    title: "Không cong vênh co ngót",
    body: "Không biến dạng, nứt nẻ sau thời gian dài sử dụng dưới mọi điều kiện thời tiết.",
  },
  {
    title: "Cách âm tốt",
    body: "Hạn chế tiếng ồn từ bên ngoài, mang lại không gian sống riêng tư, thoải mái.",
  },
  {
    title: "Cách nhiệt tốt",
    body: "Giữ nhiệt độ phòng ổn định mặc cho sự thay đổi khắc nghiệt của thời tiết.",
  },
];

export const stats: Stat[] = [
  { value: "10.000+", label: "Bộ cửa đã bàn giao" },
  { value: "400+", label: "Đại lý phân phối" },
  { value: "100+", label: "Mẫu mã đa dạng" },
  { value: "10 năm", label: "Bảo hành uy tín" },
];

const swatchHashes = [
  "298cb06f5192d0cc8983", "2d2bfdd41c299d77c438", "ef061ae4fb197a472308", "m04",
  "6bb4095ee8a369fd30b2", "e97cf39a12679339ca76", "744cffb11e4c9f12c65d", "332761c5803801665829",
  "eaddd33f32c2b39cead3", "774a59a8b855390b6044", "2c8d9a1d7be0fabea3f1", "c25d2ebfcf424e1c1753",
  "m13", "1de54807a9fa28a471eb", "113c94df7522f47cad33", "edf75714b6e937b76ef8", "m17", "m18",
];

export const colorSwatches: ColorSwatch[] = swatchHashes.map((h, i) => ({
  code: `M-${String(i + 1).padStart(2, "0")}`,
  image: `${IMG}/mamauu/${h}.webp`,
  isNew: i === 14, // M-15 mới
}));

export const contactItems: ContactItem[] = [
  {
    label: "Showroom HCM",
    value: "52 Nguyễn Thị Nhung, KĐT Vạn Phúc, Thủ Đức, TP. HCM",
  },
  {
    label: "Mivicomposite - Nhà máy cửa composite Mividoor",
    value: "A1-10 đường số 2, KDC Miền Nam, Hưng Phú, TP. Cần Thơ",
  },
  { label: "Hotline liên hệ", value: brand.phone, href: `tel:${brand.phone.replace(/\s/g, "")}` },
  { label: "Email liên hệ", value: brand.email, href: `mailto:${brand.email}` },
];

export const newsArticles: NewsItem[] = [
  {
    slug: "mividoor-trien-lam-vietbuild-2026",
    title: "Mividoor tham gia Triển lãm Vietbuild 2026",
    excerpt: "Khám phá không gian trưng bày các mẫu cửa composite cao cấp và bộ sưu tập Mividoor Luxury mới nhất tại sự kiện.",
    content: "<p>Mividoor tự hào thông báo sự góp mặt tại Triển lãm quốc tế Vietbuild 2026, sự kiện lớn nhất trong năm của ngành xây dựng và kiến trúc tại Việt Nam. Gian hàng của chúng tôi hứa hẹn sẽ mang đến những trải nghiệm không gian sống đỉnh cao thông qua các bộ sưu tập cửa composite cao cấp, đặc biệt là dòng Mividoor Luxury hoàn toàn mới.</p><p>Tại sự kiện, khách hàng sẽ có cơ hội trực tiếp trải nghiệm độ bền bỉ, khả năng chống nước tuyệt đối cùng những hoa văn thiết kế sắc nét nhờ công nghệ ép đùn và phủ phim chuẩn Đức. Mividoor luôn cam kết đem lại giá trị vượt thời gian cho mọi công trình.</p>",
    category: "Sự kiện",
    date: "Tháng 10, 2026",
  },
  {
    slug: "ra-mat-bo-suu-tap-mividoor-luxury",
    title: "Ra mắt Bộ sưu tập Mividoor Luxury",
    excerpt: "Sự kết hợp hoàn hảo giữa công nghệ Đức và thiết kế tinh xảo, mang lại đẳng cấp cho không gian sống hiện đại.",
    content: "<p>Tháng 9 vừa qua, Mividoor đã chính thức giới thiệu bộ sưu tập Mividoor Luxury, đánh dấu một bước đột phá mới trong lĩnh vực sản xuất cửa gỗ nhựa composite. Khác với các dòng cửa thông thường, Mividoor Luxury chú trọng vào sự cá nhân hóa qua từng đường phào chỉ nổi bật, các họa tiết CNC mềm mại và bảng màu đặc quyền.</p><p>Sản phẩm không chỉ đáp ứng yêu cầu khắt khe về thẩm mỹ tân cổ điển và hiện đại, mà còn kế thừa toàn bộ tính năng vượt trội: chống nước 100%, không cong vênh, chống mối mọt và cách âm hoàn hảo. Đây chắc chắn là lựa chọn không thể thiếu cho các dự án biệt thự, chung cư cao cấp và nhà phố hạng sang.</p>",
    category: "Tin tức",
    date: "Tháng 9, 2026",
  },
  {
    slug: "tai-sao-chon-cua-composite-phong-ngu",
    title: "Tại sao nên chọn cửa composite cho phòng ngủ?",
    excerpt: "Những ưu điểm vượt trội về khả năng cách âm, cách nhiệt và độ bền bỉ của cửa gỗ nhựa composite.",
    content: "<p>Phòng ngủ là không gian cần sự yên tĩnh, riêng tư và an toàn tuyệt đối. Cửa gỗ nhựa composite Mividoor đang dần trở thành sự lựa chọn số 1 thay thế cho cửa gỗ tự nhiên và cửa công nghiệp truyền thống. Với cấu tạo khoang rỗng kết hợp hệ gioăng cao su, cửa Mividoor có khả năng triệt tiêu âm thanh cực tốt, giúp mang lại giấc ngủ trọn vẹn.</p><p>Bên cạnh đó, môi trường sử dụng máy lạnh thường xuyên khiến độ ẩm chênh lệch, tuy nhiên vật liệu composite hoàn toàn không bị co ngót hay nứt nẻ. Khả năng chống cháy lan cũng là một điểm cộng lớn bảo vệ sự an toàn cho các thành viên trong gia đình. Sự đa dạng về màu vân gỗ cũng giúp sản phẩm dễ dàng phối hợp với mọi phong cách nội thất từ tối giản đến sang trọng.</p>",
    category: "Kiến thức",
    date: "Tháng 8, 2026",
  }
];

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return newsArticles.find((news) => news.slug === slug);
}

export function getProductBySlug(slug: string): Product | LuxuryDoor | undefined {
  // Check featured, catalog, and luxury
  const catalogMatch = productCatalog.find(p => p.code.toLowerCase().replace(/\s+/g, '-') === slug);
  if (catalogMatch) return catalogMatch;
  
  const luxuryMatch = luxuryDoors.find(p => p.code.toLowerCase().replace(/\s+/g, '-') === slug);
  if (luxuryMatch) return luxuryMatch;

  return undefined;
}
