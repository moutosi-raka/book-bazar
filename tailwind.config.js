/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        furniture: {
        
primary: "#5b0960",
"primary-100": "#f5dff3a8",
        
secondary: "#d76ace",
        
accent: "#3A4256",
        
neutral: "#3D4451",
        
"base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
