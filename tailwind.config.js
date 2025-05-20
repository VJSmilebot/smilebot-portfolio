module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
      colors: {
        purple: {
          600: '#8e44ec',
          700: '#732dd2',
        },
      },
      fontFamily: {
        display: ['"Geist"', 'Arial', 'sans-serif'],
        mono: ['"Geist Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(192, 132, 252, 0.8)',
      },
    },
  },
  plugins: [],
};
