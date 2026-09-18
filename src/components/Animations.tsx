export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const formatted = value >= 1000 ? value.toLocaleString("vi-VN") : value.toString();
  return <span>{formatted}{suffix}</span>;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.8,
  yOffset = 40,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function StaggerContainer({
  children,
  delayChildren = 0.1,
  staggerChildren = 0.1,
  className,
}: {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

export function StaggerItem({
  children,
  yOffset = 40,
  className,
}: {
  children: React.ReactNode;
  yOffset?: number;
  className?: string;
}) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
