/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // container-width start
      maxWidth: {
        'container': '1600px',
      },
      // container-width end
      // font-family start
      fontFamily: {
        'dmsans': ["DM Sans"],
        
      },
      // font-family end
      // color start
      colors: {
        'listcolor': '#767676',
        'categorybg': '#F5F5F3',
        'border': '#F0F0F0',
      },
      // color end
    },
  },
  plugins: [],
}

