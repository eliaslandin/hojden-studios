import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      "sm": "735px",
      "md": "1100px"
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1100px",
      },
    },
    extend: {
      colors: {
        "hojden-green": "#006613",
        "hojden-orange": "#FF8052",
        "hojden-navy": "#0F495B",
        "hojden-peach": "#F8A895",
        "hojden-lavender": "#a6a6e6",
        "hojden-ivory": "#FFFBF5",
        "hojden-beige": "#f5f5dc",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        "footer": "9rem"
      },
      padding: {
        "footerheight": "9rem"
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config