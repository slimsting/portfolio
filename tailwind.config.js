/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        blob: "blob 9s infinite",
      },
      keyframes: {
        blob: {
          "0%": { transform: " translate(0px, 0px) scale(1)" },
          "33%": { transform: " translate(60px, -100px) scale(1.5)" },
          "66%": { transform: " translate(-20px, 20px) scale(0.8)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        hero: {
          "0%":{ border_radius: ""
            
          }
        }
      },
    },
    fontFamily: {
      signature: ["Great Vibes"],
    },
  },
  plugins: [],
};
