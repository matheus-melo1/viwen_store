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
        background: "var(--background)",
        foreground: "var(--foreground)",
        main_bg: '#fff',
        bg_variant: '#1b1b1b',
        bg_secondary: '#ececec',
        primary: '#009393',
        primary_light: '#2edddd60',
        secondary_text: '#5C5C5C'
      },
    },
    fontFamily: {
      sans: ["var(--font-inter)"],
    },
  },
  plugins: [],
};
export default config;
