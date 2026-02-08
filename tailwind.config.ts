import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0A0A0A",
          dark: "#111111",
          card: "#141414",
          border: "#1E1E1E",
          gold: "#C9B06B",
          "gold-dim": "#8B7D4A",
          "gold-bright": "#D6C47A",
          green: "#1DB954",
          white: "#F5F5F0",
          cream: "#E8E4D9",
          gray: "#777777",
          "gray-light": "#999999",
          "gray-dark": "#444444",
          section: "#0E0E0E",
        },
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        bebas: ["var(--font-bebas)", "sans-serif"],
        space: ["var(--font-space)", "monospace"],
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(180deg, #D6C47A, #8B7D4A)",
        "gold-gradient-h": "linear-gradient(90deg, #C9B06B, #8B7D4A)",
      },
      letterSpacing: {
        widest2: "0.25em",
        widest3: "0.375em",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 3s infinite",
        "pulse-gold": "pulseGold 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
