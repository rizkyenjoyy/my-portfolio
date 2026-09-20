/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '420px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        background: "#FAF7EE",
        surface: {
          DEFAULT: "#FFFFFF",
          primary: "#FFFFFF",
          secondary: "#F3ECE1",
          card: "#FFFFFF",
          dark: "#121212",
        },
        arcade: {
          bg: "#FAF7EE",
          black: "#121212",
          white: "#FFFFFF",
          cream: "#F4EFE6",
          yellow: "#FACC15",
          orange: "#FB923C",
          rust: "#EA580C",
          green: "#22C55E",
          forest: "#16A34A",
          blue: "#3B82F6",
          cobalt: "#2563EB",
          cyan: "#06B6D4",
          teal: "#14B8A6",
          pink: "#F472B6",
          magenta: "#EC4899",
          purple: "#A855F7",
        },
        text: {
          primary: "#121212",
          secondary: "#4B5563",
          tertiary: "#6B7280",
          muted: "#9CA3AF",
        },
        accent: {
          yellow: "#FACC15",
          orange: "#EA580C",
          green: "#16A34A",
          blue: "#2563EB",
          cyan: "#06B6D4",
          pink: "#EC4899",
        },
        border: {
          DEFAULT: "#121212",
          dark: "#121212",
          subtle: "#D1D5DB",
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      borderWidth: {
        '3': '3px',
      },
      boxShadow: {
        'brutal-xs': '2px 2px 0px #121212',
        'brutal-sm': '3px 3px 0px #121212',
        'brutal': '4px 4px 0px #121212',
        'brutal-md': '6px 6px 0px #121212',
        'brutal-lg': '8px 8px 0px #121212',
        'brutal-xl': '12px 12px 0px #121212',
        'brutal-white': '4px 4px 0px #FFFFFF',
        'brutal-yellow': '4px 4px 0px #FACC15',
        'brutal-cyan': '4px 4px 0px #06B6D4',
      },
    },
  },
  plugins: [],
}

