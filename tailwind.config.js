module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
      },
      colors: {
        gray: "rgba(255,255,255,.1)",
        redish: "#E62E2D",
        darkOverlay: "rgba(0,0,0,.9)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
