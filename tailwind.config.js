/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a0b2e", // Dark purple base
        secondary: "#2d1b4e", // Lighter purple
        accent: "#764abc", // Bright purple accent
        text: "#e0d4fc", // Light text
        "text-muted": "#9f86c0", // Muted text
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
