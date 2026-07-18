import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            light ? "text-accent-300" : "text-accent-600"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "text-display-md",
          light ? "text-white" : "text-brand-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/80" : "text-neutral-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
