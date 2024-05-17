/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'iiif-purple': '#9879B0',
        'iiif-yellow': '#FFE21B'
      },
      backgroundColor: ['disabled'],
      textColor: ['disabled'],
      minHeight: {
        '500': '500px',
      }
    },
  },
  plugins: [],
};
