import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...nextVitals,
  ...nextTs,
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "preview/**",
      "next-env.d.ts",
    ],
  },
  {
    // App Router loads fonts in root layout; this rule targets pages/_document.
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default eslintConfig;
