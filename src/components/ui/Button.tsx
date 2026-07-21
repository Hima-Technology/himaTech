import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-black text-white hover:bg-neutral-800 active:scale-95 shadow-[0_4px_20px_rgba(0,0,0,0.15)] dark:bg-white dark:text-black dark:hover:bg-neutral-200 dark:shadow-[0_4px_20px_rgba(255,255,255,0.15)]",
  secondary:
    "bg-neutral-100 text-black border border-black/10 hover:border-black/30 hover:bg-neutral-200 active:scale-95 dark:bg-neutral-900/80 dark:text-white dark:border-white/10 dark:hover:border-white/30 dark:hover:bg-neutral-800",
  ghost: "bg-transparent text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/5",
};

const sizes: Record<Size, string> = {
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3.5 text-base",
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
