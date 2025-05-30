/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor: {
        dark: {
          '50': '#1a1a1a',
          '100': '#262626',
          '200': '#333333',
          '300': '#404040',
          '400': '#595959',
          '500': '#737373',
          '600': '#8c8c8c',
          '700': '#a6a6a6',
          '800': '#bfbfbf',
          '900': '#d9d9d9',
        }
      },
      textColor: {
        dark: {
          '50': '#1a1a1a',
          '100': '#262626',
          '200': '#333333',
          '300': '#404040',
          '400': '#595959',
          '500': '#737373',
          '600': '#8c8c8c',
          '700': '#a6a6a6',
          '800': '#bfbfbf',
          '900': '#d9d9d9',
        }
      },
      borderColor: {
        dark: {
          '50': '#1a1a1a',
          '100': '#262626',
          '200': '#333333',
          '300': '#404040',
          '400': '#595959',
          '500': '#737373',
          '600': '#8c8c8c',
          '700': '#a6a6a6',
          '800': '#bfbfbf',
          '900': '#d9d9d9',
        }
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}

