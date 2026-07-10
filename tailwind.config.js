/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0d0e12",
          soft: "#0a0b0e",
        },
        panel: {
          DEFAULT: "#16171d",
          soft: "#1a1b21",
          deep: "#131418",
        },
        border: {
          DEFAULT: "#26272e",
          strong: "#3f3f46",
        },
        ink: {
          DEFAULT: "#d4d4d8",
          bright: "#fafafa",
          muted: "#71717a",
          dim: "#52525b",
        },
        term: {
          green: "#4ade80",
          purple: "#c084fc",
          blue: "#60a5fa",
          yellow: "#facc15",
          red: "#ff5f56",
          amber: "#ffbd2e",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Inter'", "sans-serif"],
      },
      animation: {
        blink: "blink 1.1s step-end infinite",
        "pulse-dot": "pulseDot 2s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        pulseDot: {
          "0%, 100%": { opacity: 0.6, transform: "scale(1)" },
          "50%": { opacity: 1, transform: "scale(1.3)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
    },
  },
  plugins: [],
};
