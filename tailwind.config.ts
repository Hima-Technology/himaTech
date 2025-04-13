import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        'hima-blue': '#0A2463',
        'hima-orange': '#FF6B6B',
        'hima-orange-dark': '#E05A5A',
        'hima-green': '#4CAF50',
        'hima-purple': '#6E44FF',
        'hima-sand': '#F7F7F2',
        'hima-charcoal': '#2E2E2E'
      }
    }
  },
  plugins: [],
});

export default config;
