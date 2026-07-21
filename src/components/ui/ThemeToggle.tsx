"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // next-themes' documented hydration-safety pattern: server can't know the
  // theme, so gate rendering until mount.
  useEffect(() => setMounted(true), []); // eslint-disable-line react-hooks/set-state-in-effect

  if (!mounted) {
    return <div className={className} style={{ width: 40, height: 40 }} aria-hidden="true" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={className}
    >
      {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
    </button>
  );
}

export default ThemeToggle;
