/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './src/**/*.{js,jsx,ts,tsx}',
  './src/**/*.css',
],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Funnel Display"', 'sans-serif'],
        body: ['Geist', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: "#0F172A",
        secondary: "#64748B",
        accent: "#16A34A",
        // muted: "#64748B",
        bgclr: '#F2f7ff',
        borderClr: '#E2E8F0',
      },
    },
  },
  plugins: [],
};
