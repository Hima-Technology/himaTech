import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition duration-250 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-500 text-white shadow-glow-accent hover:bg-accent-600 hover:-translate-y-0.5",
  secondary:
    "bg-white text-brand-900 border border-neutral-200 shadow-soft hover:border-brand-300 hover:-translate-y-0.5",
  ghost: "bg-white/10 text-white border border-white/30 hover:bg-white/20",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in rest && rest.href) {
    const { href, ...anchorProps } = rest as AnchorHTMLAttributes<HTMLAnchorElement> & {
      href: string;
    };
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {rest.children}
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {buttonProps.children}
    </button>
  );
}
