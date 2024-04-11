/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#00ADB5',
        "lightBg": '#1c1f26',
        "secondary": '#393E46',
        "borderLine": '#2d323b',
        "textPlaceHolder": '#a8b3cf'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#00ADB5",
          "secondary": '#393E46',
          "white": '#fff',
          "base-100": '#0e1216',
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

