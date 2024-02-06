/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    colors:{
      black: '#1e0401',
      salmon: {
        '50': '#fff2f1',
        '100': '#ffe3e0',
        '200': '#ffccc6',
        '300': '#ffa89e',
        '400': '#ff7667',
        '500': '#fc4a37',
        '600': '#ea2d18',
        '700': '#c62210',
        '800': '#a31f11',
        '900': '#872015',
        '950': '#4a0c05',
    },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
