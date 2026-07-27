/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(11, 15, 20)",
        surface: {
          primary: "rgb(23, 33, 43)",
          secondary: "rgb(17, 24, 32)",
        },
        text: {
          primary: "rgb(229, 231, 235)",
          secondary: "rgb(148, 163, 184)",
          tertiary: "rgb(100, 116, 139)",
        },
        accent: {
          orange: "rgb(245, 158, 11)",
          cyan: "rgb(34, 211, 238)",
          green: "rgb(34, 197, 94)",
        },
        border: {
          subtle: "rgb(51, 65, 85)",
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
