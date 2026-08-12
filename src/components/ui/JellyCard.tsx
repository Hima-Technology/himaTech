"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

const TAGS = {
  div: motion.div,
  article: motion.article,
  blockquote: motion.blockquote,
} as const;

interface JellyCardProps {
  children: ReactNode;
  className?: string;
  as?: keyof typeof TAGS;
}

export function JellyCard({ children, className, as = "div" }: JellyCardProps) {
  const Comp = TAGS[as];
  return (
    <Comp
      className={cn(className)}
      whileHover={{ scaleX: 1.025, scaleY: 0.975 }}
      transition={{ type: "spring", stiffness: 320, damping: 7, mass: 0.5 }}
    >
      {children}
    </Comp>
  );
}

export default JellyCard;
