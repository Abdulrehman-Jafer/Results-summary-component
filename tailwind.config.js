/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Light-red": "hsl(0, 100%, 67%)",
        "pale-light-red": "hsla(0, 100%, 67%,0.1)",
        "Orange-yellow": "hsl(39, 100%, 56%)",
        "pale-orange-yellow": "hsla(39, 100%, 56%,0.1)",
        "Green-teal": "hsl(166, 100%, 37%)",
        "pale-green-teal": "hsla(166, 100%, 37%,0.1)",
        "Cobalt-blue": "hsl(234, 85%, 45%)",
        "pale-cobalt-blue": "hsla(234, 85%, 45%,0.1)",

// /       / ## Gradients

// /       /BG
        "Light-slate-blue": "hsl(252, 100%, 67%)",
        "Light-royal-blue" : "hsl(241, 81%, 54%)",
        //Circle
        "Violet-blue" : "hsla(256, 72%, 46%, 1)",
        "Persian-blue" : "hsla(241, 72%, 46%, 0.1)",



// /       / ### Neutral

        "White": "hsl(0, 0%, 100%)",
        "Pale-blue": "hsl(221, 100%, 96%)",
        "Light-lavender": "hsl(241, 100%, 89%)",
        "Dark-gray-blue": "hsl(224, 30%, 27%)"
      }
    },
  },
  plugins: [],
}