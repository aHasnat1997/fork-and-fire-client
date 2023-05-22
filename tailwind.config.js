/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#ffdb0f",

          "secondary": "#f5c7fc",

          "accent": "#0632a3",

          "neutral": "#14171F",

          "base-100": "#F6F7F9",

          "info": "#6286DF",

          "success": "#2FE490",

          "warning": "#9D6D0B",

          "error": "#E71834",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
