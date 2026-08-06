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
  { 
    label: "Sản phẩm", 
    href: "/san-pham",
    subLinks: [
      { label: "Mẫu Luxury", href: "/luxury" },
      { label: "Mẫu phẳng", href: "/mau-phang" },
      { label: "Mẫu soi huỳnh", href: "/mau-soi-huynh" },
      { label: "Mẫu đi epoxy", href: "/mau-di-epoxy" },
      { label: "Mẫu đi nẹp nhôm/nẹp inox", href: "/mau-di-nep" },
      { label: "Mẫu phào chỉ nổi", href: "/mau-phao-chi-noi" },
      { label: "Mẫu 2 cánh", href: "/mau-2-canh" },
      { label: "Mẫu lùa", href: "/mau-lua" },
      { label: "Mẫu ô kính, lá sách", href: "/mau-o-kinh-la-sach" },
      { label: "Mẫu vòm", href: "/mau-vom" },
      { label: "Mẫu ô fix", href: "/mau-o-fix" }
    ]
  },
  { label: "BST Mividoor Luxury", href: "/luxury" },
  { label: "Tin tức", href: "/tin-tuc" },
  { label: "Liên hệ", href: "/lien-he" },
];

const IMG = "/mividoor/images";

export const categories: Category[] = [
  { eyebrow: "Mẫu", title: "Cửa phẳng", image: `${IMG}/mau-cua-phang.webp`, href: "#products" },
  { eyebrow: "Mẫu", title: "Phào chỉ", image: `${IMG}/mau-phao-chi-noi.webp`, href: "#products" },
  { eyebrow: "Mẫu", title: "Soi CNC", image: `${IMG}/mau-hoa-van-cnc.webp`, href: "#products" },
  { eyebrow: "Mẫu", title: "Ô kính", image: `${IMG}/mau-o-kinh.webp`, href: "#products" },
  { eyebrow: "Mẫu", title: "Cửa vòm", image: `${IMG}/mau-cua-vom.webp`, href: "#products" },
];

export const featuredProducts: Product[] = [
  {
    name: "Cửa Phẳng Sang Trọng",
    isCategory: true,
    code: "MV-01",
    tagline: "Tối giản - Tinh tế",
    descr:
      "Thiết kế tối giản, bề mặt vân gỗ tự nhiên sắc nét cho không gian nội thất hiện đại.",
    image: `${IMG}/mau-cua-phang.webp`,
  },
  {
    name: "Cửa Nẹp Nhôm Inox",
    isCategory: true,
    code: "MV-02",
    tagline: "Sang trọng - Điểm nhấn",
    descr:
      "Trang trí chỉ nhôm hoặc inox sáng bóng, phù hợp cho chung cư cao cấp và biệt thự.",
    image: `${IMG}/mau-nep-nhom-inox.webp`,
  },
  {
    name: "Cửa Phào Chỉ Nổi",
    isCategory: true,
    code: "MV-03",
    tagline: "Cổ điển - Đẳng cấp",
    descr:
      "Phong cách tân cổ điển, đường nét điêu khắc tinh xảo tạo không gian sống bề thế.",
    image: `${IMG}/mau-phao-chi-noi.webp`,
  },
  {
    name: "Cửa Soi Huỳnh CNC",
    isCategory: true,
    code: "MV-06",
    tagline: "Hoa văn - Nghệ thuật",
    descr:
      "Soi huỳnh bằng công nghệ CNC cho các đường nét hoa văn chính xác tuyệt đối.",
    image: `${IMG}/mau-hoa-van-cnc.webp`,
  },
];

export const productCatalog: Product[] = [
  {
    name: "Cửa Composite Mẫu Ô Fix 01",
    code: "MV-OFIX-01",
    tagline: "Đón sáng - Rộng rãi",
    descr: "Ô kính fix cố định cung cấp thêm ánh sáng cho hành lang hay không gian khuất.",
    image: `${IMG}/products/cua-o-fix/cua-o-fix-01.png`,
  },
  {
    name: "Cửa Composite Mẫu Ô Fix 02",
    code: "MV-OFIX-02",
    tagline: "Đón sáng - Rộng rãi",
    descr: "Ô kính fix cố định cung cấp thêm ánh sáng cho hành lang hay không gian khuất.",
    image: `${IMG}/products/cua-o-fix/cua-o-fix-02.png`,
  },
  {
    name: "Cửa Composite Mẫu Ô Fix 03",
    code: "MV-OFIX-03",
    tagline: "Đón sáng - Rộng rãi",
    descr: "Ô kính fix cố định cung cấp thêm ánh sáng cho hành lang hay không gian khuất.",
    image: `${IMG}/products/cua-o-fix/cua-o-fix-03.png`,
  },
  {
    name: "Cửa Composite Mẫu Ô Fix 04",
    code: "MV-OFIX-04",
    tagline: "Đón sáng - Rộng rãi",
    descr: "Ô kính fix cố định cung cấp thêm ánh sáng cho hành lang hay không gian khuất.",
    image: `${IMG}/products/cua-o-fix/cua-o-fix-04.png`,
  },

  {
    name: "Cửa Composite Mẫu Vòm 01",
    code: "MV-VOM-01",
    tagline: "Mềm mại - Độc đáo",
    descr: "Những đường cong mềm mại tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.",
    image: `${IMG}/products/cua-vom/cua-vom-01.png`,
  },
  {
    name: "Cửa Composite Mẫu Vòm 02",
    code: "MV-VOM-02",
    tagline: "Mềm mại - Độc đáo",
    descr: "Những đường cong mềm mại tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.",
    image: `${IMG}/products/cua-vom/cua-vom-02.png`,
  },
  {
    name: "Cửa Composite Mẫu Vòm 03",
    code: "MV-VOM-03",
    tagline: "Mềm mại - Độc đáo",
    descr: "Những đường cong mềm mại tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.",
    image: `${IMG}/products/cua-vom/cua-vom-03.png`,
  },
  {
    name: "Cửa Composite Mẫu Vòm 04",
    code: "MV-VOM-04",
    tagline: "Mềm mại - Độc đáo",
    descr: "Những đường cong mềm mại tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.",
    image: `${IMG}/products/cua-vom/cua-vom-04.png`,
  },
  {
    name: "Cửa Composite Mẫu Vòm 05",
    code: "MV-VOM-05",
    tagline: "Mềm mại - Độc đáo",
    descr: "Những đường cong mềm mại tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.",
    image: `${IMG}/products/cua-vom/cua-vom-05.png`,
  },

  {
    name: "Cửa Composite Mẫu Nẹp 01",
    code: "MV-NEP-01",
    tagline: "Nổi bật - Sang trọng",
    descr: "Điểm xuyết các đường nẹp nhôm hoặc inox sáng bóng, mang đến vẻ đẹp hiện đại và nổi bật.",
    image: `${IMG}/products/cua-nep/cua-nep-01.png`,
  },
  {
    name: "Cửa Composite Mẫu Nẹp 02",
    code: "MV-NEP-02",
    tagline: "Nổi bật - Sang trọng",
    descr: "Điểm xuyết các đường nẹp nhôm hoặc inox sáng bóng, mang đến vẻ đẹp hiện đại và nổi bật.",
    image: `${IMG}/products/cua-nep/cua-nep-02.png`,
  },
  {
    name: "Cửa Composite Mẫu Nẹp 03",
    code: "MV-NEP-03",
    tagline: "Nổi bật - Sang trọng",
    descr: "Điểm xuyết các đường nẹp nhôm hoặc inox sáng bóng, mang đến vẻ đẹp hiện đại và nổi bật.",
    image: `${IMG}/products/cua-nep/cua-nep-03.png`,
  },

  {
    name: "Cửa Composite Mẫu Soi Huỳnh 01",
    code: "MV-SH-01",
    tagline: "Tinh xảo - Đẳng cấp",
    descr: "Soi huỳnh bằng công nghệ CNC cho các đường nét hoa văn chính xác tuyệt đối.",
    image: `${IMG}/products/soi-huynh/soi-huynh-01.png`,
  },
  {
    name: "Cửa Composite Mẫu Soi Huỳnh 02",
    code: "MV-SH-02",
    tagline: "Tinh xảo - Đẳng cấp",
    descr: "Soi huỳnh bằng công nghệ CNC cho các đường nét hoa văn chính xác tuyệt đối.",
    image: `${IMG}/products/soi-huynh/soi-huynh-02.png`,
  },
  {
    name: "Cửa Composite Mẫu Soi Huỳnh 03",
    code: "MV-SH-03",
    tagline: "Tinh xảo - Đẳng cấp",
    descr: "Soi huỳnh bằng công nghệ CNC cho các đường nét hoa văn chính xác tuyệt đối.",
    image: `${IMG}/products/soi-huynh/soi-huynh-03.png`,
  },
  {
    name: "Cửa Composite Mẫu Soi Huỳnh 04",
    code: "MV-SH-04",
    tagline: "Tinh xảo - Đẳng cấp",
    descr: "Soi huỳnh bằng công nghệ CNC cho các đường nét hoa văn chính xác tuyệt đối.",
    image: `${IMG}/products/soi-huynh/soi-huynh-04.png`,
  },

  {
    name: "Cửa Composite Mẫu Lùa 01",
    code: "MV-LUA-01",
    tagline: "Tiện ích - Tối ưu",
    descr: "Hệ ray trượt siêu êm, độ bền cao — giải pháp thông minh cho phòng có diện tích hẹp.",
    image: `${IMG}/products/cua-lua/cua-lua-01.png`,
  },
  {
    name: "Cửa Composite Mẫu Lùa 02",
    code: "MV-LUA-02",
    tagline: "Tiện ích - Tối ưu",
    descr: "Hệ ray trượt siêu êm, độ bền cao — giải pháp thông minh cho phòng có diện tích hẹp.",
    image: `${IMG}/products/cua-lua/cua-lua-02.png`,
  },
  {
    name: "Cửa Composite Mẫu Lùa 03",
    code: "MV-LUA-03",
    tagline: "Tiện ích - Tối ưu",
    descr: "Hệ ray trượt siêu êm, độ bền cao — giải pháp thông minh cho phòng có diện tích hẹp.",
    image: `${IMG}/products/cua-lua/cua-lua-03.png`,
  },

  {
    name: "Cửa Composite Mẫu Phẳng 01",
    code: "MV-PHANG-01",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-01.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 02",
    code: "MV-PHANG-02",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-02.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 03",
    code: "MV-PHANG-03",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-03.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 04",
    code: "MV-PHANG-04",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-04.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 05",
    code: "MV-PHANG-05",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-05.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 06",
    code: "MV-PHANG-06",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-06.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 07",
    code: "MV-PHANG-07",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-07.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 08",
    code: "MV-PHANG-08",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-08.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 09",
    code: "MV-PHANG-09",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-09.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 10",
    code: "MV-PHANG-10",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-10.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 11",
    code: "MV-PHANG-11",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-11.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 12",
    code: "MV-PHANG-12",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-12.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 13",
    code: "MV-PHANG-13",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-13.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 14",
    code: "MV-PHANG-14",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-14.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 15",
    code: "MV-PHANG-15",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-15.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 16",
    code: "MV-PHANG-16",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-16.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 17",
    code: "MV-PHANG-17",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-17.png`,
  },
  {
    name: "Cửa Composite Mẫu Phẳng 18",
    code: "MV-PHANG-18",
    tagline: "Đơn giản - Tinh tế",
    descr: "Thiết kế phẳng nguyên tấm sang trọng, phù hợp với mọi phong cách nội thất hiện đại.",
    image: `${IMG}/products/cua-phang/cua-phang-18.png`,
  },

  featuredProducts[0],
  featuredProducts[1],
  featuredProducts[2],
  {
    name: "Cửa Lùa",
    isCategory: true,
    code: "MV-04",
    tagline: "Tiện ích - Tối ưu",
    descr:
      "Hệ ray trượt siêu êm, độ bền cao — giải pháp thông minh cho phòng có diện tích hẹp.",
    image: `${IMG}/mau-cua-lua.png`,
  },
  {
    name: "Cửa Vòm",
    isCategory: true,
    code: "MV-05",
    tagline: "Mềm mại - Độc đáo",
    descr:
      "Những đường cong mềm mại tạo điểm nhấn kiến trúc ấn tượng, thời thượng và lãng mạn.",
    image: `${IMG}/mau-cua-vom.webp`,
  },
  featuredProducts[3],
  {
    name: "Cửa Ô Kính",
    isCategory: true,
    code: "MV-07",
    tagline: "Hiện đại - Không gian mở",
    descr:
      "Kết hợp ô kính cường lực lấy sáng tự nhiên, mở rộng tầm nhìn không gian.",
    image: `${IMG}/mau-o-kinh.webp`,
  },
  {
    name: "Cửa Ô Lá Sách",
    isCategory: true,
    code: "MV-08",
    tagline: "Thoáng khí - Thanh lịch",
    descr:
      "Ô lá sách thông minh giúp lưu thông không khí ngay cả khi đóng cửa.",
    image: `${IMG}/mau-o-la-sach.png`,
  },
  {
    name: "Cửa Ô Fix",
    isCategory: true,
    code: "MV-09",
    tagline: "Đón sáng - Rộng rãi",
    descr:
      "Ô kính fix cố định cung cấp thêm ánh sáng cho hành lang hay không gian khuất.",
    image: `${IMG}/mau-o-fix.png`,
  },
];

const luxTaglines = [
  "Mẫu phào chỉ nổi",
  "Mẫu vòm",
  "Mẫu soi huỳnh",
  "Mẫu đi nẹp inox",
  "Mẫu đi epoxy",
  "Mẫu phẳng hiện đại",
  "Mẫu ô kính",
  "Mẫu lá sách",
  "Mẫu 2 cánh",
  "Mẫu lùa",
  "Mẫu ô fix",
  "Mẫu phào chỉ nổi kép",
];

const luxFiles = [
  "virtual-try-on-2026-07-28T02-11-25.jpg",
  "tan-co-dien.png",
  "virtual-try-on-2026-07-28T02-20-15.jpg",
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
