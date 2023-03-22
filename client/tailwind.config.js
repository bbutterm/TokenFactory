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
    colors: {
      'yellow': 'rgba(249, 225, 11, 1)',
      'orange':'rgba(249, 168, 11, 1)',
      'blue':'rgba(8, 200, 226, 1)',
      'sky-blue':'rgba(110, 250, 241, 1)',
      'light-green': 'rgba(231, 251, 188, 1)',
      'white':  "#ffffff"
    },
    extend:  {
      display: ["group-hover"],  
      fontFamily:{
      Space:['Space Mono', 'monospace']
    },
  
  },
  },
  
  plugins: [],
}
