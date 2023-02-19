/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'hsl(0, 0%, 98%)',
        'secondary':'hsl(0, 0%, 0%)',
        'accent':'hsl(15, 100%, 59%)'
      }
    },
  },
  plugins: [],
}