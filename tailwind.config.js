/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FEFAF6",
        secondary: "#EADBC8",
        darkerSecondary: "#DAC0A3",
        accent: "#FCF7F0",
        success: "#10B981",
        warning: "#E8C81B",
        error: "#C70026",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
