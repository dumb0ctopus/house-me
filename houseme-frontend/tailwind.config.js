/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxsm: "480px",
      // => @media (min-width: 480px) { ... }
      xsm: "510px",
      // => @media (min-width: 510px) { ... }
      sms: "550px",
      // => @media (min-width: 550px) { even more retarded... }
      sm: "640px",
      // => @media (min-width: 640px) { ... }
      mds: "650px",
      // => @media (min-width: 768px) { special md(original right? haha) }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        halant: ["Halant", "sans-serif"],
        "halant-light": ["Halant", "sans-serif"],
        "halant-bold": ["Halant", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        "manrope-light": ["Manrope", "sans-serif"],
        "manrope-bold": ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
