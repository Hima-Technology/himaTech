import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "brand" | "accent" | "violet" | "neutral";

const tones: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-700",
  accent: "bg-accent-50 text-accent-700",
  violet: "bg-violet-50 text-violet-700",
  neutral: "bg-neutral-100 text-neutral-700",
};

export function Badge({
  tone = "brand",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide",
        tones[tone],
        className
      )}
      {...props}
    />
  );
}
