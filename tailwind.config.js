/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00FFFF',
        neonPurple: '#7A00FF',
        neonGreen: '#00FF00',
        spaceBlack: '#1A1A1A'
      }
    }
  },
  plugins: []
};
