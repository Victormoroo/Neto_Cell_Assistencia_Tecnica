import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "light";
  className?: string;
  ariaLabel?: string;
  target?: "_blank" | "_self";
};

const variants = {
  primary:
    "bg-brand-red text-white shadow-red hover:bg-red-700 hover:-translate-y-0.5",
  secondary:
    "bg-white text-brand-dark ring-1 ring-black/10 hover:bg-zinc-100 hover:-translate-y-0.5",
  dark: "bg-brand-dark text-white hover:bg-zinc-800 hover:-translate-y-0.5",
  light:
    "bg-white/10 text-white ring-1 ring-white/25 hover:bg-white hover:text-brand-dark hover:-translate-y-0.5"
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
  ariaLabel,
  target
}: CTAButtonProps) {
  const shouldOpenNewTab =
    target === "_blank" || href.startsWith("http") || href.startsWith("https://wa.me");

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      target={shouldOpenNewTab ? "_blank" : undefined}
      rel={shouldOpenNewTab ? "noreferrer" : undefined}
      className={`focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}
