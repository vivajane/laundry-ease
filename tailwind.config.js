/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "bluee": "#0A2471",
        "gfirst": "#287AF8",
        "gsec": "#2061C5",
        "gthird": "#184892"

      },
      textColor:{
       "txtblue" :"#0F26A6"
      },
      fontFamily:{
        "merriweather": "merriweather",
        "inter": "inter",
        "poppins": "poppins",
      }
      
    },
  },
  plugins: [],
}