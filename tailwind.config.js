/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          600: '#a855f7',
          700: '#9333ea',
          800: '#7e22ce',
        },
      },
      fontFamily: {
        sans: ['"Geist Sans"', 'Arial', 'Helvetica', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
