import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && <span className="glass glass-badge glass-badge--violet mb-4">{eyebrow}</span>}
      <h2 className="text-3xl font-bold tracking-tight text-black md:text-5xl lg:text-6xl leading-[1.15] dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}
