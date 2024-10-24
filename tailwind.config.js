                  
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: {
      md: { max: "1050px" },
      sm: { max: "550px" },
    },
    extend: {
      colors: {
        amber: { 300: "var(--amber_300)" },
        black: {
          900: "var(--black_900)",
          "900_28": "var(--black_900_28)",
          "900_2b": "var(--black_900_2b)",
          "900_33": "var(--black_900_33)",
        },
        blue: { 400: "var(--blue_400)" },
        blue_gray: { 100: "var(--blue_gray_100)", 400: "var(--blue_gray_400)" },
        color: {
          gray_1: { 0: "var(--color_gray_1_0)", 1: "var(--color_gray_1_1)" },
          gray_2: "var(--color_gray_2)",
          light_bg: "var(--color_light_bg)",
          white: "var(--color_white)",
        },
        deep_orange: { 50: "var(--deep_orange_50)" },
        deep_purple: { a200: "var(--deep_purple_a200)" },
        font: { color: "var(--font_color)", color1: "var(--font_color1)" },
        gray: {
          100: "var(--gray_100)",
          400: "var(--gray_400)",
          500: "var(--gray_500)",
          900: "var(--gray_900)",
          "400_01": "var(--gray_400_01)",
        },
        lime: { 50: "var(--lime_50)", "800_38": "var(--lime_800_38)", "800_99": "var(--lime_800_99)" },
        primary: "var(--primary)",
        red: { 300: "var(--red_300)", a700: "var(--red_a700)" },
        teal: { 300: "var(--teal_300)" },
        white: { a700_b7: "var(--white_a700_b7)" },
      },
      boxShadow: { xs: "0 4px 14px 1px #00000028" },
      fontFamily: { poppins: ["Poppins"], montserrat: ["Montserrat"] },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
