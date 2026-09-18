"use client";

import { FormEvent, useState } from "react";

const initialValues = { name: "", phone: "", email: "", message: "", website: "" };

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const updateValue = (field: keyof typeof initialValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message ?? "Không thể gửi yêu cầu. Vui lòng thử lại sau.");
      }

      setStatus("success");
      setMessage("Cảm ơn bạn đã liên hệ. Đội ngũ Mividoor sẽ phản hồi trong thời gian sớm nhất.");
      setValues(initialValues);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Không thể gửi yêu cầu. Vui lòng thử lại sau.");
    }
  };

  if (status === "success") {
    return (
      <section className="border-y border-ink/15 py-8" aria-live="polite" role="status">
        <div className="flex items-start gap-4">
          <span className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full bg-brand/10 text-brand" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m5 12 4.2 4.2L19 6.5" />
            </svg>
          </span>
          <div className="max-w-[32rem]">
            <p className="text-xl font-medium tracking-tight text-ink">Yêu cầu đã được gửi</p>
            <p className="mt-2 text-base leading-7 text-ink/65">{message}</p>
            <button
              type="button"
              onClick={() => {
                setStatus("idle");
                setMessage("");
              }}
              className="mt-5 text-sm font-medium text-brand underline decoration-brand/35 underline-offset-4 transition hover:decoration-brand"
            >
              Gửi một yêu cầu khác
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <form className="flex flex-col gap-8" onSubmit={submit}>
      <label className="sr-only" htmlFor="contact-name">Họ và tên</label>
      <input
        id="contact-name"
        type="text"
        placeholder="Họ và tên"
        autoComplete="name"
        value={values.name}
        onChange={(event) => updateValue("name", event.target.value)}
        required
        className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-[#2563EB] focus:border-b-2 placeholder:text-ink/30"
      />
      <label className="sr-only" htmlFor="contact-phone">Số điện thoại</label>
      <input
        id="contact-phone"
        type="tel"
        placeholder="Số điện thoại"
        autoComplete="tel"
        value={values.phone}
        onChange={(event) => updateValue("phone", event.target.value)}
        required
        className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-[#2563EB] focus:border-b-2 placeholder:text-ink/30"
      />
      <label className="sr-only" htmlFor="contact-email">Email</label>
      <input
        id="contact-email"
        type="email"
        placeholder="Email"
        autoComplete="email"
        value={values.email}
        onChange={(event) => updateValue("email", event.target.value)}
        required
        className="w-full border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-[#2563EB] focus:border-b-2 placeholder:text-ink/30"
      />
      <label className="sr-only" htmlFor="contact-message">Nội dung</label>
      <textarea
        id="contact-message"
        placeholder="Nội dung"
        rows={4}
        value={values.message}
        onChange={(event) => updateValue("message", event.target.value)}
        required
        className="w-full resize-none border-b border-black/20 bg-transparent py-4 text-lg outline-none transition focus:border-[#2563EB] focus:border-b-2 placeholder:text-ink/30"
      />
      <div className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={values.website}
          onChange={(event) => updateValue("website", event.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-4 self-start rounded-full bg-ink px-10 py-4 text-sm font-medium uppercase tracking-wide text-white transition hover:bg-[#2563EB] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu"}
      </button>
      {message && (
        <p className="text-sm text-red-600" role="alert">
          {message}
        </p>
      )}
    </form>
  );
}
