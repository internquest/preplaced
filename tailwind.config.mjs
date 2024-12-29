/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        hedvig:['var(--font-hedvig)', 'sans-serif'],
        
      },
      animation: {
        shine: "shine 3s linear infinite",
        marqup: "marqup 50s linear infinite",
        marqdown: "marqdown 50s linear infinite",

      },
      keyframes:{
        shine: {
          "0%": { left: "-100%" },
          "20%": { left: "100%" },
          "100%": { left: "100%" },
        },
        marqup:{
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        },
        marqdown:{
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
