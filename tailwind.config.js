// tailwind.config.js
import plugin from "tailwindcss/plugin";

const safe = (name) => {
  try { return require(name); } catch { return null; }
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { sm:"640px", md:"768px", lg:"1024px", xl:"1280px", "2xl":"1400px" } },
    extend: { /* ... senin extend ayarların ... */ },
  },
  plugins: [
    safe("@tailwindcss/typography"),
    safe("@tailwindcss/aspect-ratio"),
    safe("@tailwindcss/line-clamp"),
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".btn": { "@apply inline-flex items-center justify-center px-6 py-3 font-semibold text-white rounded-lg shadow-md transition min-h-[44px] min-w-[44px]": {}, "text-shadow": "0 1px 0 rgba(0,0,0,.25)" },
        ".btn-primary": { background: theme("colors.brand.DEFAULT") },
        ".btn-primary:hover": { background: theme("colors.brand.700") },
        ".card": { "@apply bg-white rounded-2xl p-6 transition": {}, boxShadow: theme("boxShadow.card") },
        ".faq-card": { "@apply rounded-xl border": {}, background: "rgba(255,255,255,.95)", borderColor: "rgba(0,0,0,.08)" },
      });
    }),
  ].filter(Boolean),
};
