module.exports = {
  mode: "jit",
  content: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        slide: "60 / 23",
        video: "16 / 9",
        background: "240 / 73",
        card: "7 / 5",
      },
      fontFamily: {
        rub: ["Rubik", "sans-serif"],
        sans: ["Rubik", "sans-serif"],
        body: ["Rubik", "sans-serif"],
        mont: ["Rubik", "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1.25rem",
          xs: "1.25rem",
          sm: "2rem",
          "3xs": "1.25rem",
          "2xs": "1.25rem",
        },
        center: true,
        screens: {
          DEFAULT: "100%",
          lg: "1440px",
        },
      },
      boxShadow: {
        card: "0px 20px 50px rgba(61, 121, 253, 0.1)",
      },
      colors: {
        black1: "#11174A",
        blue1: "#4C67F3",
        background1: "#F2F4F9",
        txt1: "#5A5C6A",
      },
      screens: {
        "3xs": "320px",
        "2xs": "375px",
        xs: "425px",
        "3xl": "1920px",
      },
      animation: {
        "ping-slow": "ping-slow 2s ease-in-out infinite",
      },
      keyframes: {
        "ping-slow": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.9" },
          "50%": { transform: "scale(2)", opacity: "0.1" },
        },
      },
    },
  },
  // plugins: [
  //   require("@tailwindcss/typography"),
  //   require("@tailwindcss/forms"),
  //   require("@tailwindcss/aspect-ratio"),
  //   require("tailwind-scrollbar"),
  // ],
};
