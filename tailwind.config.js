/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor:{
        "Azul":"#023872",
        "Cin":"#1A191C",
      },
      backgroundImage:{
        "img-topo": "url('/topo.jpg')",
        "img-onda": "url('./onda.svg')"
      },
    },
  },
  plugins: [],
}

