/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'pulse-border': 'pulse-border 2.5s infinite',
        appear: "appear 0.4s ease-in-out",
        disappear: "disappear 0.4s ease-in-out", 
      },
      keyframes: {
        'pulse-border': {
          '0%': { borderColor: 'rgba(61, 61, 61, 0.1)' },
          '25%': { borderColor: 'rgba(61, 61, 61, 0.5)' },
          '50%': { borderColor: 'rgba(61, 61, 61, 0.7)' },
          '75%': { borderColor: 'rgba(61, 61, 61, 0.5)' },
          '100%': { borderColor: 'rgba(61, 61, 61, 0.2)' },
        },
        appear: {
          "0%": {
            bottom: "-458px",
          },
          "100%": {
            bottom: "0",
          },
        },
        disappear: {
          "0%": {
            bottom: "0",
          },
          "100%": {
            bottom: "-458px",
          },
        },
      },
      fontFamily: {
        'jakarta': ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
