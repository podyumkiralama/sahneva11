/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1", // indigo
          600: "#7c3aed", // purple accent
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
      boxShadow: {
        card: "0 10px 30px -12px rgba(2, 6, 23, .25)",
      },
      borderRadius: {
        "2xl": "1rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
