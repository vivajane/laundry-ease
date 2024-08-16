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
        "gthird": "#184892",
        "customers": "#D6E6FE",
        "join": "#091F5B",
        "laundry": "#9FDFFA",
        "services": "#D6E6FE",
        "download": "#0F26A6",
        "dark": "#D9D9D9",
        "footer": "#9FDFFA",
        "bgimageAbout": "#0A2471"

      },
      textColor:{
       "txtblue" :"#0F26A6",
       "blac": "#000000",
       "whit": "#FFFFFF",
       "bluey": "#091F5B"
       
      },
      fontFamily:{
        "merriweather": "merriweather",
        "inter": "inter",
        "poppins": "poppins",
      },
      backgroundImage: {
        "bgimgabt": "url('/bgimageabout.png')"
      }
      
    },
  },
  plugins: [],
}