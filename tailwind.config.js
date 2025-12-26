/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '360px',   // very small phones
        '3xl': '1600px',
        '4k': '2560px', // 2.5k+ / 4K monitors
      },
    },
  },
  plugins: [],
};
