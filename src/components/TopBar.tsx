export function TopBar() {
  return (
    <div className="w-full bg-[#2563EB] text-white py-1.5 overflow-hidden whitespace-nowrap text-[12px] tracking-wide relative z-[9999] border-b border-[#2563EB]">
      <div className="flex animate-marquee items-center gap-8">
        {[...Array(6)].map((_, i) => (
          <span key={i}>Cửa composite công nghệ Đức - Bảo hành lên đến 10 năm - Liên hệ ngay để nhận báo giá tốt nhất - </span>
        ))}
      </div>
    </div>
  );
}
