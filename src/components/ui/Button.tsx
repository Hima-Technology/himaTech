import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base = "glass glass-btn disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "glass-btn--primary",
  secondary: "glass-btn--ghost",
  ghost: "glass-btn--ghost",
};

const sizes: Record<Size, string> = {
  md: "",
  lg: "glass-btn--lg",
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
        <span className="relative z-10 inline-flex items-center gap-2">{rest.children}</span>
      </Link>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      <span className="relative z-10 inline-flex items-center gap-2">{buttonProps.children}</span>
    </button>
  );
}
