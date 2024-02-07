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
    offSalmon: {
      '50': '#faf7ec',
      '100': '#f4eacd',
      '200': '#ebd49d',
      '300': '#e0b664',
      '400': '#d59b3a',
      '500': '#cc8a2e',
      '600': '#aa6824',
      '700': '#884b20',
      '800': '#723e21',
      '900': '#623521',
      '950': '#381a10',
  },
  
    
    },
    extend: {
    
        fontFamily: {
          spartan: ["Spartan", "sans-serif"],

        },
  
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
