/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { sm:"640px", md:"768px", lg:"1024px", xl:"1280px", "2xl":"1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["SahnevaFallback","system-ui","-apple-system","Segoe UI","Roboto","Arial","Noto Sans","Helvetica Neue","sans-serif"],
      },
      colors: {
        brand: { DEFAULT: "var(--brand)", 700: "var(--brand-700)" },
        accent:{ DEFAULT: "var(--accent)", 700: "var(--accent-700)" },
      },
      borderRadius: { xl: "0.75rem", "2xl": "1rem" },
      boxShadow: { card: "0 8px 24px rgba(0,0,0,0.08)" },
      transitionTimingFunction: { emphasized: "cubic-bezier(0.2, 0, 0, 1)" },
    },
  },
  plugins: [
    // Bunlar yüklü → OK
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
