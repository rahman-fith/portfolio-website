import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FAFAFA",
        dark: "#111111",
        accent: "#2563EB",
        "text-primary": "#1A1A1A",
        "text-secondary": "#666666",
        "text-tertiary": "#999999",
        "subtle-border": "#E5E5E5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
