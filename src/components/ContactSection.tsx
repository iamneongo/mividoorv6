import { contactItems } from "@/lib/content";
import { ArrowUpRightIcon } from "@/components/icons";

export function ContactSection() {
  return (
    <section id="contact" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="mb-10 max-w-xl">
          <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand">
            Liên hệ &amp; địa chỉ
          </p>
          <h2 className="mt-2 text-[26px] font-medium leading-[1.15] tracking-[-0.5px] text-[#111111] md:text-[34px]">
            MIVIDOOR luôn sẵn sàng đồng hành cùng bạn
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((c) => (
            <div
              key={c.label}
              className="flex flex-col justify-between rounded-[22px] bg-cream p-6 transition hover:bg-muted"
            >
              <p className="text-[12px] font-bold uppercase tracking-[0.12em] text-brand-2">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  className="mt-6 text-[17px] font-medium leading-[1.35] text-[#111111] transition-opacity hover:opacity-70"
                >
                  {c.value}
                </a>
              ) : (
                <p className="mt-6 text-[16px] font-normal leading-[1.4] text-[#111111]">
                  {c.value}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-6 flex flex-col items-start gap-6 rounded-[28px] p-8 md:flex-row md:items-center md:justify-between md:p-12"
          style={{
            background:
              "linear-gradient(120deg, #fbf5ef 0%, #f6ece2 60%, #f4e6d8 100%)",
          }}
        >
          <div>
            <h3 className="text-[24px] font-medium leading-[1.2] tracking-[-0.5px] text-ink md:text-[32px]">
              nhận tư vấn &amp; báo giá{" "}
              <span className="accent-serif text-brand">ngay</span>
            </h3>
            <p className="mt-3 max-w-md text-[15px] font-normal leading-[1.6] text-[#5c5852]">
              Đội ngũ chuyên gia MIVIDOOR luôn sẵn sàng hỗ trợ bạn lựa chọn giải
              pháp tối ưu. Cam kết bảo mật thông tin, phản hồi trong 30 phút làm
              việc.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-brand px-8 text-[15px] font-medium text-white transition hover:bg-brand-2"
          >
            Gửi yêu cầu <ArrowUpRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

