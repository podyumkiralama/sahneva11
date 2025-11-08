// tailwind.config.js (veya .ts)
import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // ileride .dark ile temayı açıp kapatabilirsin
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1400px" },
    },
    extend: {
      fontFamily: {
        sans: ["SahnevaFallback", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "Noto Sans", "Helvetica Neue", "sans-serif"],
      },
      colors: {
        // CSS değişkenleri ile hizalı (opacity gerekmeyen durumlarda ideal)
        brand: {
          DEFAULT: "var(--brand)",
          700: "var(--brand-700)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          700: "var(--accent-700)",
        },
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
      boxShadow: {
        card: "0 8px 24px rgba(0,0,0,0.08)",
      },
      transitionTimingFunction: {
        "emphasized": "cubic-bezier(0.2, 0, 0, 1)",
      },
      keyframes: {
        "utility-tooltip-fade": {
          "0%": { opacity: "0", transform: "translateY(-50%) translateX(-10px)" },
          "100%": { opacity: "1", transform: "translateY(-50%) translateX(0)" },
        },
        "utility-overlay-fade": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "utility-modal-slide": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        tooltip: "utility-tooltip-fade .2s ease-out",
        overlay: "utility-overlay-fade .2s ease-out",
        modal: "utility-modal-slide .2s ease-out",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    plugin(function ({ addComponents, theme }) {
      // Tailwind sınıfı olarak .btn/.card’ı da erişilebilir yapalım (globals.css ile tutarlı)
      addComponents({
        ".btn": {
          "@apply inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-lg shadow-md transition min-h-[44px] min-w-[44px]": {},
          "text-shadow": "0 1px 0 rgba(0,0,0,.25)",
        },
        ".btn-primary": {
          background: theme("colors.brand.DEFAULT"),
        },
        ".btn-primary:hover": {
          background: theme("colors.brand.700"),
        },
        ".card": {
          "@apply bg-white rounded-2xl p-6 transition": {},
          boxShadow: theme("boxShadow.card"),
        },
        ".faq-card": {
          "@apply rounded-xl border": {},
          background: "rgba(255,255,255,.95)",
          borderColor: "rgba(0,0,0,.08)",
        },
      });
    }),
  ],
};
