import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e30613",
          dark: "#070707",
          ink: "#161616",
          soft: "#f7f7f8"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(0, 0, 0, 0.08)",
        red: "0 16px 38px rgba(227, 6, 19, 0.24)"
      }
    }
  },
  plugins: []
};

export default config;
