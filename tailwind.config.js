/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    darkMode: 'class',
  theme: {
      screens: {
      'sm': '375px',
      // => @media (min-width: 375px) { ... }

      'md': '780px',
      // => @media (min-width: 780px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
   
    extend: {
      
      colors: {
        'primary': '#15223214',
        'secondary': '#151B20',
      },
      backgroundImage: {
        'bg': "url('/src/images/bg1.jpg')",
      },
      fontFamily:{ 
        'poppins' : "'Poppins'",
        'inter' : "'Inter'",
        'mulish' : "'Mulish'",
        'lato':"'lato'"
    },
    
    },
    
  },
  plugins: [
    
  ],
  
}

