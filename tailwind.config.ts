import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ]
      },
      colors: {
        lexa: {
          coral: "#f04b45",
          red: "#d9262e",
          ink: "#171214",
          muted: "#746a6c",
          line: "#eadbdd",
          cream: "#fff8f6"
        }
      },
      boxShadow: {
        glass: "0 24px 80px rgba(217, 38, 46, 0.16)",
        "glass-dark": "0 24px 80px rgba(0, 0, 0, 0.46)"
      }
    }
  },
  plugins: []
};

export default config;
