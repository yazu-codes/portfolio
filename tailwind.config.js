/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust paths based on your project structure
    "./public/index.html", // Include HTML if it's outside the `src` folder
  ],
  theme: {
    extend: {
      colors: {
        mainColor:"#4AF626"
      }
    }, // Add customizations here
  },
  plugins: [], // Add Tailwind plugins here (like forms or typography)
};
