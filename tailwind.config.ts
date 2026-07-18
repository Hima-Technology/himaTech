import type { Config } from "tailwindcss";

/**
 * Design tokens for the HimaTech relaunch.
 * `ink`/`neutral` (near-black to light gray) and `danger`/`warning`/`success`
 * come directly from the official hima-brand.css document stylesheet.
 * `accent` is the single brand color layered on top — HimaTech's own
 * pre-existing `hima-blue` (#0A2463), the only named brand color that
 * predates this redesign. No gradients, no secondary hues.
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
        ink: {
          950: "#1A1A1A",
          900: "#222222",
          800: "#333333",
          700: "#555555",
          600: "#666666",
          500: "#777777",
          400: "#999999",
          300: "#BBBBBB",
        },
        neutral: {
          25: "#FFFFFF",
          50: "#F5F5F5",
          100: "#F0F0F0",
          150: "#FAFAFA",
          200: "#ECECEC",
          300: "#DDDDDD",
          400: "#BBBBBB",
          500: "#999999",
          600: "#666666",
          700: "#555555",
          800: "#333333",
          900: "#222222",
          950: "#1A1A1A",
        },
        accent: {
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
        danger: {
          50: "#FFF5F5",
          500: "#DC3545",
          600: "#BD2130",
        },
        warning: {
          50: "#FFFDE6",
          100: "#FFF9E6",
          500: "#FFC107",
          700: "#856404",
        },
        success: {
          50: "#F0FAF3",
          500: "#2E9E4F",
          600: "#25823F",
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
        soft: "0 2px 8px -2px rgb(0 0 0 / 0.08), 0 4px 16px -4px rgb(0 0 0 / 0.06)",
        "soft-md": "0 8px 24px -8px rgb(0 0 0 / 0.12), 0 4px 12px -6px rgb(0 0 0 / 0.08)",
        "soft-lg": "0 24px 48px -16px rgb(0 0 0 / 0.18), 0 8px 24px -8px rgb(0 0 0 / 0.1)",
        "glow-accent": "0 8px 24px -6px rgb(10 36 99 / 0.35)",
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
        marquee: "marquee 28s linear infinite",
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
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
