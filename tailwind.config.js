/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        monts: ["Montserrat", "sans-serif"],
        clash: ["Clash Display", "sans-seri"],
        unica: ["Unica One", "cursive"],
        tommy: "tommy",
      },
    },
  },
  plugins: [],
};
