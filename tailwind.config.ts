import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        zoom: {
          "0%": { transform: "translateX(-50%) translateY(-50%) scale(0.7)", opacity: "0%" },
          "100%": { transform: "translateX(-50%) translateY(-50%) scale(1)", opacity: "100%" },
        },
        zoom2: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
        loaded: {
          "0%": { transform: "translateY(40px)", opacity: "0%" },
          "100%": { transform: "translateY(0)", opacity: "100%" },
        },
      },
      animation: {
        zoom: "zoom 0.3s",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        main_bg: "#fff",
        bg_variant: "#1b1b1b",
        bg_secondary: "#ececec",
        primary: "#009393",
        primary_light: "#2edddd60",
        secondary_text: "#5C5C5C",
        line: "#ddd",
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
  plugins: [],
};
export default config;

