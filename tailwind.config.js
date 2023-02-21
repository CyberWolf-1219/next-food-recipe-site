/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      sm: '0px 1px 5px -1px rgba(0,0,0,1)',
      md: '0px 5px 8px 0px rgba(0,0,0,1)',
      lg: '0px 8px 25px 0px rgba(0,0,0,1)',
    },
    extend: {
      colors: {
        primary: 'hsl(0, 0%, 98%)',
        secondary: 'hsl(0, 0%, 0%)',
        accent: 'hsl(15, 100%, 59%)',
      },
    },
  },
  plugins: [],
};
