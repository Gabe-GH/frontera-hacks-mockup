import type { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        geometricBg: "url('/geometric_bg.svg')",
      },
      colors: {
        "date-grey": "#D9D9D9",
      },
    },
  },
  plugins: [require("rippleui")],
  /** @type {import('rippleui').Config} */
  rippleui: {
    themes: [
      {
        themeName: "dark",
        colorScheme: "light",
        colors: {
          primary: "#573242",
          backgroundPrimary: "#000000",
        },
      },
      {
        themeName: "dark",
        colorScheme: "dark",
        colors: {
          primary: "#573242",
          backgroundPrimary: "#000000",
        },
      },
    ],
  },
};
