import type { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  children: ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div>
      <p className="font-display text-display-sm text-brand-900">{title}</p>
      <p className="mt-1 font-medium text-neutral-500">{children}</p>
    </div>
  );
}

export default InfoCard;
