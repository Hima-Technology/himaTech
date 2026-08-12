import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Tone = "accent" | "neutral";

const tones: Record<Tone, string> = {
  accent: "glass-badge--aqua",
  neutral: "",
};

export function Badge({
  tone = "accent",
  className,
  ...props
}: HTMLAttributes<HTMLSpanElement> & { tone?: Tone }) {
  return <span className={cn("glass glass-badge", tones[tone], className)} {...props} />;
}
