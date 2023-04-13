/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "yekan-regular": ["iran-yekan-regular"],
        "yekan-bold": ["iran-yekan-bold"],
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
  darkMode: "class",
};
