import eslintConfigNext from "eslint-config-next";
import globals from "globals";

const baseConfigs = Array.isArray(eslintConfigNext)
  ? eslintConfigNext
  : Array.isArray(eslintConfigNext?.default)
    ? eslintConfigNext.default
    : [];

export default [
  ...baseConfigs,
  {
    files: ["**/*.{js,jsx,ts,tsx}", "**/*.mjs"],
    languageOptions: {
      globals: {
        ...globals.browser,
        document: "readonly",
        window: "readonly",
      },
    },
    rules: {
      "react/jsx-props-no-spreading": "off",
      "react/function-component-definition": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/static-components": "off",
      "@next/next/no-html-link-for-pages": "off",
    },
  },
  {
    files: ["**/*.config.{js,cjs,mjs}", "**/*.config.js", "**/*.config.mjs"],
    rules: {
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    ignores: ["**/node_modules/**", "**/.next/**", "lint/**"],
  },
];
