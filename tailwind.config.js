/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xl: "1440px",
      lg: "1090px",
      md: "760px",
      sm: "460px",
      xs: "340px",
    },
    extend: {},
  },
  plugins: [],
  extend: {
    keyframes: {
      pop: {
        '0%, 100%': { transform: 'scale(1)' },
        '50%': { transform: 'scale(1.4)' },
      }
    },
    animation: {
      pop: 'pop 0.25s ease-in-out'
    }
  }
};
