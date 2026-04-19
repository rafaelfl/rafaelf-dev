import type { Config } from "tailwindcss";

/** Tailwind v4 uses CSS-first config in `src/styles/globals.css`; this file satisfies tooling that expects a config entry. */
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
};

export default config;
