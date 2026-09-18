import { PhoneCall as LucidePhoneCall } from "lucide-react";
import type { SVGProps } from "react";

function PhoneIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <LucidePhoneCall
      {...props}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    />
  );
}

function MessengerIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={className}
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mividoor-messenger-gradient" cx="19.247%" cy="99.465%" r="108.96%" fx="19.247%" fy="99.465%">
          <stop offset="0%" stopColor="#09F" />
          <stop offset="60.975%" stopColor="#A033FF" />
          <stop offset="93.482%" stopColor="#FF5280" />
          <stop offset="100%" stopColor="#FF7061" />
        </radialGradient>
      </defs>
      <path
        fill="url(#mividoor-messenger-gradient)"
        d="M128 0C55.894 0 0 52.818 0 124.16c0 37.317 15.293 69.562 40.2 91.835 2.09 1.871 3.352 4.493 3.438 7.298l.697 22.77c.223 7.262 7.724 11.988 14.37 9.054L84.111 243.9a10.218 10.218 0 0 1 6.837-.501c11.675 3.21 24.1 4.92 37.052 4.92 72.106 0 128-52.818 128-124.16S200.106 0 128 0Z"
      />
      <path
        fill="#FFF"
        d="m51.137 160.47 37.6-59.653c5.98-9.49 18.788-11.853 27.762-5.123l29.905 22.43a7.68 7.68 0 0 0 9.252-.027l40.388-30.652c5.39-4.091 12.428 2.36 8.82 8.085l-37.6 59.654c-5.981 9.489-18.79 11.852-27.763 5.122l-29.906-22.43a7.68 7.68 0 0 0-9.25.027l-40.39 30.652c-5.39 4.09-12.427-2.36-8.818-8.085Z"
      />
    </svg>
  );
}

function ZaloIcon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      className={className}
      fill="#0068FF"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <title>Zalo</title>
      <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
    </svg>
  );
}

const actions = [
  {
    label: "Messenger Mividoor",
    href: "https://m.me/mivicomposite",
    className: "bg-white",
    Icon: MessengerIcon,
  },
  {
    label: "Zalo Mividoor",
    href: "https://zalo.me/0943393539",
    className: "bg-white",
    Icon: ZaloIcon,
  },
  {
    label: "Gọi Mividoor",
    href: "tel:0943393539",
    className: "bg-[#ef2029]",
    Icon: PhoneIcon,
  },
];

export function FloatingContact() {
  return (
    <nav
      aria-label="Liên hệ nhanh"
      className="fixed bottom-6 right-3 z-[9000] flex flex-col gap-2 sm:bottom-8 sm:right-5 sm:gap-3"
    >
      {actions.map(({ label, href, className, Icon }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={label}
          title={label}
          className={`contact-pulse flex size-12 items-center justify-center rounded-full border-4 border-white/80 text-white shadow-[0_4px_12px_rgba(15,23,42,0.2)] transition-transform duration-200 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:size-14 ${className}`}
        >
          <Icon className="size-6 sm:size-7" aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
