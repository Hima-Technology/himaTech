const LIGHTS = [
  { top: "12%", left: "38%", size: 3, delay: "0s", duration: "3.2s", tone: "neutral" },
  { top: "18%", left: "62%", size: 2, delay: "0.6s", duration: "2.8s", tone: "accent" },
  { top: "8%", left: "50%", size: 4, delay: "1.1s", duration: "3.6s", tone: "neutral" },
  { top: "28%", left: "30%", size: 2, delay: "1.6s", duration: "3s", tone: "neutral" },
  { top: "32%", left: "70%", size: 3, delay: "0.3s", duration: "3.4s", tone: "accent" },
  { top: "45%", left: "42%", size: 2, delay: "2s", duration: "2.6s", tone: "neutral" },
  { top: "48%", left: "58%", size: 3, delay: "0.9s", duration: "3.1s", tone: "neutral" },
  { top: "22%", left: "45%", size: 2, delay: "1.4s", duration: "2.9s", tone: "accent" },
  { top: "38%", left: "55%", size: 2, delay: "2.4s", duration: "3.3s", tone: "neutral" },
] as const;

const TONE_CLASSES = {
  neutral:
    "bg-black shadow-[0_0_8px_2px_rgba(0,0,0,0.5)] dark:bg-white dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.8)]",
  accent:
    "bg-accent-600 shadow-[0_0_8px_2px_rgba(38,65,140,0.6)] dark:bg-accent-400 dark:shadow-[0_0_8px_2px_rgba(94,123,203,0.8)]",
} as const;

/** A scattered cluster of small twinkling lights, centered behind the hero copy. */
export function Sparkles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {LIGHTS.map((light, idx) => (
        <span
          key={idx}
          className={`absolute animate-twinkle rounded-full ${TONE_CLASSES[light.tone]}`}
          style={{
            top: light.top,
            left: light.left,
            width: light.size,
            height: light.size,
            animationDelay: light.delay,
            animationDuration: light.duration,
          }}
        />
      ))}
    </div>
  );
}

export default Sparkles;
