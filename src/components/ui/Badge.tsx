import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "accent" | "neutral";

const tones: Record<Tone, string> = {
  accent: "bg-accent-50 text-accent-700",
  neutral: "bg-neutral-100 text-neutral-700",
};

export function Badge({
  tone = "accent",
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
