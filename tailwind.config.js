module.exports = {
  purge: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Kufam", "sans-serif"],
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      DEFAULT:
        "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      lg: "0 10px 20px -3px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.3)",
      xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
      none: "none",
    },
    extend: {
      spacing: {
        38: "38px",
        140: "140px",
        150: "150px",
        280: "280px",
      },
      minWidth: {
        280: "280px",
        275: "275px",
        340: "340px",
      },
      minHeight: {
        150: "150px",
        240: "240px",
      },
      colors: {
        gray: {
          darker: "#A3A3A3",
          DEFAULT: "#F0F1F3",
          lighter: "#AF94B7",
        },
        purple: {
          darker: "#2F2962",
          DEFAULT: "#7B448E",
          lighter: "#F6F3FC",
        },
        black: {
          DEFAULT: "#000000",
        },
        white: {
          darker: "#BFBFBF",
          DEFAULT: "#FFFFFF",
        },
        orange: {
          DEFAULT: "#FEC465",
        },
      },
      keyframes: {
        flip: {
          "0%": {
            transform: "rotateX(180deg)",
          },
          "25%": {
            transform: "rotateX(225deg)",
          },
          "50%": {
            transform: "rotateX(270deg)",
          },
          "75%": {
            transform: "rotateX(315deg)",
          },
          "100%": {
            transform: "rotateX(360deg)",
          },
        },
      },
      animation: {
        flip: "flip 1s linear",
      },
    },
  },
  variants: {
    extend: {
      animation: ["focus", "active"],
      transform: ["focus"],
      display: ["active"],
      borderRadius: ["hover", "focus"],
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
