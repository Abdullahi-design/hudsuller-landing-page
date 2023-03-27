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
    extend: {},
    colors: {
      'background': '#F7FBFC',
      'white': '#ffffff',
      'warning': '#f30606',
      'text-primary': '#59A52C',
      'text-secondary': '#08262c',
      'button-primary': '#54a4b3',
      // 'button-secondary': '#08262c'
    }
  },
  plugins: [],
}