"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes' documented hydration-safety pattern: server can't know the
  // theme, so gate rendering until mount.
  useEffect(() => setMounted(true), []); // eslint-disable-line react-hooks/set-state-in-effect

  if (!mounted) {
    return <div className={cn("h-9 w-[108px]", className)} aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isDark}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "glass relative inline-flex h-9 w-[108px] items-center gap-1 rounded-full px-1",
        className
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        style={{ order: isDark ? 2 : 0 }}
        className="glass glass--bright relative z-10 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full"
      >
        {isDark ? <HiOutlineMoon size={13} /> : <HiOutlineSun size={13} />}
      </motion.span>
      <span style={{ order: 1 }} className="flex-1 text-center text-xs font-medium">
        {isDark ? "Dark" : "Light"}
      </span>
    </button>
  );
}

export default ThemeToggle;
