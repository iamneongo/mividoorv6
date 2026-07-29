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
} from "@/types";

export const brand = {
  name: "MIVIDOOR",
  phone: "0943 39 35 39",
  email: "mivicompositevn@gmail.com",
  tagline: "Cửa composite công nghệ Đức",
};

export const navLinks: NavLink[] = [
  { label: "Trang chủ", href: "#top" },
  { label: "Về chúng tôi", href: "#about" },
  { label: "Sản phẩm", href: "#products" },
  { label: "BST Mividoor Luxury", href: "#luxury" },
  { label: "Tin tức", href: "#news" },
  { label: "Liên hệ", href: "#contact" },
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
  { title: "Phôi PVC cao cấp", subtitle: "Tiêu chuẩn nhà máy", image: `${IMG}/phoi-pvc.webp` },
  { title: "Keo Jowat Đức", subtitle: "Mividoor sử dụng", image: `${IMG}/keo-jowat.webp` },
  { title: "Lớp phim PVC", subtitle: "Cao cấp dày dặn", image: `${IMG}/phim-pvc.webp` },
  { title: "Công nghệ phủ phim", subtitle: "Máy Burkle nhập từ Đức", image: `${IMG}/burkle-machine.webp` },
  { title: "Chêm đố nhựa WPB", subtitle: "Vào 4 cạnh cánh cửa", image: `${IMG}/wpb-plastic.webp` },
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
    label: "Nhà máy sản xuất",
    value: "A1-10 đường số 2, KDC Miền Nam, Hưng Phú, TP. Cần Thơ",
  },
  { label: "Hotline liên hệ", value: brand.phone, href: `tel:${brand.phone.replace(/\s/g, "")}` },
  { label: "Email liên hệ", value: brand.email, href: `mailto:${brand.email}` },
];
