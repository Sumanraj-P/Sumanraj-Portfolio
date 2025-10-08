/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Sora', 'system-ui', 'sans-serif'],
        'display': ['Oxanium', 'sans-serif'],
        'tech': ['JetBrains Mono', 'monospace'],
        'title': ['Exo 2', 'sans-serif']
      },
      colors: {
        primary: "#030712",
        secondary: "#8B5CF6",
        accent: "#14F195",
        tertiary: "#111827",
        "black-100": "#030712",
        "black-200": "#111827",
        "white-100": "#f8fafc",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0f172a",
        button: "0px 0px 15px rgba(56, 189, 248, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to right bottom, rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.9))",
      },
    },
  },
  plugins: [],
}