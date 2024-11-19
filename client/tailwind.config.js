/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "move-background": "move-background 10s linear infinite",
      },
      keyframes: {
        "move-background": {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-100px, -100px)" },
        },
      },
    },
  },
  plugins: [],
};
