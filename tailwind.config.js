/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        josefin: ["'Josefin Sans'", "sans-serif"],
      },
      colors: {
        heroBg: "#680000",
        scndBg: "#5a0101",
        btnBg: "#7d0000",
      },
      backgroundColor: {
        heroBg: "#680000",
        scndBg: "#5a0101",
        logoBg: "#7d0000",
        cardBg: "#720000",
        emailBg: '#8c3d3d',
      },
    },
  },
  plugins: [],
};
