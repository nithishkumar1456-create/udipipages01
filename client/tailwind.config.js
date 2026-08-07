/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#0A0A0A",
        darkCard: "#121212",
        darkBorder: "#242424",
        lightBg: "#FFFFFF",
        lightCard: "#F8F9FA",
        lightBorder: "#E4E4E7",
        darkText: "#0A0A0A",
        offWhite: "#F5F3EE",
        sunsetAmber: "#00A3FF",
        sunsetOrange: "#0066FF",
        beachBlue: "#00A3FF",
        oceanBlue: "#0066FF",
      },
      fontFamily: {
        display: ['Anton', 'Archivo Black', 'Clash Display', 'sans-serif'],
        sans: ['Inter', 'Satoshi', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'sunset-gradient': 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
        'beach-gradient': 'linear-gradient(135deg, #00A3FF 0%, #0066FF 100%)',
        'sunset-glow': 'radial-gradient(circle, rgba(0,163,255,0.15) 0%, rgba(255,255,255,0) 70%)',
      }
    },
  },
  plugins: [],
}
