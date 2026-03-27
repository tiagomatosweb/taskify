/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        lilac: {
          50:  '#f5f3ff',
          100: '#ede9fe',
          200: '#ddd6fe',
          300: '#c4b5fd',
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
          700: '#6d28d9',
          800: '#5b21b6',
          900: '#4c1d95',
          950: '#2e1065',
        },
      },
      animation: {
        'float':       'float 7s ease-in-out infinite',
        'orb-drift':   'orb-drift 12s ease-in-out infinite alternate',
        'fade-up':     'fade-up 0.7s ease-out forwards',
        'glow-pulse':  'glow-pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':       { transform: 'translateY(-14px) rotate(1deg)' },
        },
        'orb-drift': {
          '0%':   { transform: 'translate(0, 0) scale(1)' },
          '50%':  { transform: 'translate(40px, 30px) scale(1.05)' },
          '100%': { transform: 'translate(-20px, 20px) scale(0.97)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px 4px rgba(139,92,246,0.35)' },
          '50%':       { boxShadow: '0 0 36px 10px rgba(139,92,246,0.55)' },
        },
      },
    },
  },
  plugins: [],
}
