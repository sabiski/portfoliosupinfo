/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // ✅ ajoutez cette ligne
    "./src/**/*.{js,jsx,ts,tsx}" 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

