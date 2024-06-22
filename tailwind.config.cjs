/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        pink: '#FFA3AC',
        purple: '#f9e0ff',
        lightBlack: '#0a0f1b',
        lightPurple: '#dbc4fa',
      },
    },
    fontFamily: {
      sans: ['Circular Std', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
}
