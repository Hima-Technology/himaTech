import type { Config } from "tailwindcss";

/**
 * Design tokens for the HimaTech relaunch.
 * `brand` (navy) is the trust/authority anchor for a software+cybersecurity
 * consultancy; `accent` (coral) carries CTAs/energy; `violet` is a tertiary
 * tag color used sparingly for AI-specific content only (avoids the generic
 * "AI purple gradient" anti-pattern by staying a small accent, not a theme).
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        brand: {
          50: "#EEF1FA",
          100: "#D7DEF2",
          200: "#AFBDE5",
          300: "#869CD8",
          400: "#5E7BCB",
          500: "#3A5AB0",
          600: "#26418C",
          700: "#17316D",
          800: "#0F2650",
          900: "#0A2463",
          950: "#071648",
        },
        accent: {
          50: "#FFF1F1",
          100: "#FFE0E0",
          200: "#FFC2C2",
          300: "#FF9E9E",
          400: "#FF8585",
          500: "#FF6B6B",
          600: "#E05A5A",
          700: "#C24747",
          800: "#9C3737",
          900: "#7A2A2A",
        },
        violet: {
          50: "#F3EFFF",
          100: "#E6DBFF",
          200: "#CDB8FF",
          300: "#B18EFF",
          400: "#9367FF",
          500: "#6E44FF",
          600: "#5A34DB",
          700: "#4527AD",
        },
        success: {
          500: "#4CAF50",
          600: "#3D8B40",
        },
        neutral: {
          25: "#FDFDFB",
          50: "#F7F7F2",
          100: "#EDEDE7",
          200: "#D9D9D2",
          300: "#C0C0B8",
          400: "#9E9E95",
          500: "#7C7C73",
          600: "#5F5F58",
          700: "#48483F",
          800: "#3A3A35",
          900: "#2E2E2E",
          950: "#1C1C1A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-body)", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["3.5rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["2.5rem", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "display-sm": ["1.875rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem",
        xl: "1.5rem",
        "2xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 8px -2px rgb(10 36 99 / 0.08), 0 4px 16px -4px rgb(10 36 99 / 0.06)",
        "soft-md": "0 8px 24px -8px rgb(10 36 99 / 0.12), 0 4px 12px -6px rgb(10 36 99 / 0.08)",
        "soft-lg": "0 24px 48px -16px rgb(10 36 99 / 0.18), 0 8px 24px -8px rgb(10 36 99 / 0.1)",
        "glow-accent": "0 8px 24px -6px rgb(255 107 107 / 0.35)",
      },
      transitionDuration: {
        DEFAULT: "250ms",
      },
      transitionTimingFunction: {
        DEFAULT: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
