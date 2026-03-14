import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "deep-red": "#7A0C18",
        "classic-black": "#111111",
        charcoal: "#252421",
        "sleek-silver": "#C0C0C0",
        "pearl-white": "#F5F5F5",
        mahogany: "#811F1F",
        cream: "#e7ded4",
        "warm-gold": "#A96F13",
        "gold-light": "#C9A962",
        "warm-taupe": "#C2AE9A",
      },
      fontFamily: {
        display: ["var(--font-bodoni)", "serif"],
        serif: ["var(--font-bodoni)", "serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
      },
      spacing: {
        section: "3rem",
        micro: "1rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
