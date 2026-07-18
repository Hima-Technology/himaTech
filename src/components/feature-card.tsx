"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: ReactNode;
  image: string;
  delay?: number;
}

export function FeatureCard({ icon: Icon, title, children, image, delay = 0 }: FeatureCardProps) {
  return (
    <RevealOnScroll delay={delay}>
      <div className="group h-full overflow-hidden rounded-xl bg-white shadow-soft transition duration-250 hover:-translate-y-1 hover:shadow-soft-md">
        <div className="relative h-44 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center transition duration-250 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-4 grid h-12 w-12 place-content-center rounded-lg bg-brand-900 text-white">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg text-brand-900">{title}</h3>
          <p className="mt-2 font-medium text-neutral-600">{children}</p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export default FeatureCard;
