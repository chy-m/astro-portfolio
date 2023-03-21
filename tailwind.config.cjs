/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        pink: "#FFA3AC",
        purple: "#f9e0ff",
      },
    },
    fontFamily: {
      sans: ["Circular Std", "system-ui", "sans-serif"],
    },
  },
  plugins: [],
};
