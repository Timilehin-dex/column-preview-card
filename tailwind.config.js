/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        primary: {
          orange: "hsl(31, 77%, 52%)", // Bright orange
          "dark-cyan": "hsl(184, 100%, 22%)", // Dark cyan
          "very-dark-cyan": "hsl(179, 100%, 13%)", // Very dark cyan
        },
        neutral: {
          "transparent-white": "hsla(0, 0%, 100%, 0.75)", // Transparent white (for paragraphs)
          "very-light-gray": "hsl(0, 0%, 95%)", // Very light gray (for background, headings, buttons)
        },
      },
      fontFamily: {
        lexend: ["Lexend Deca", "sans-serif"], // For Lexend Deca
        bigshoulders: ["Big Shoulders Display", "cursive"], // For Big Shoulders Display
      },
    },
  },
  plugins: [],
};
