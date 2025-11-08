import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,jsx,ts,tsx,mdx}",
    "./components/**/*.{js,jsx,ts,tsx,mdx}",
    "./pages/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#7c3aed",
          700: "#4f46e5",
          800: "#3730a3",
          900: "#1e1b4b",
        },
        ink: {
          900: "#0b0f1a",
          800: "#111827",
          700: "#1f2937",
          600: "#374151",
        },
      },
      boxShadow: { card: "0 10px 30px -12px rgba(2, 6, 23, .25)" },
      borderRadius: { "2xl": "1rem" },
    },
  },
  plugins: [typography(), forms()],
};
