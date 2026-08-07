/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0F6CBD',
          dark: '#0A5299',
          light: '#E8F3FC',
          50: '#EFF6FF',
        },
        secondary: {
          DEFAULT: '#00B894',
          dark: '#009B7D',
          light: '#E0F7F3',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(15,108,189,0.07), 0 1px 4px rgba(0,0,0,0.05)',
        'card-md': '0 8px 40px rgba(15,108,189,0.10), 0 2px 8px rgba(0,0,0,0.06)',
        'card-lg': '0 16px 64px rgba(15,108,189,0.14), 0 4px 16px rgba(0,0,0,0.08)',
        'card-xl': '0 24px 80px rgba(15,108,189,0.18), 0 8px 24px rgba(0,0,0,0.10)',
        'glow-blue': '0 0 40px rgba(15,108,189,0.35), 0 8px 32px rgba(15,108,189,0.25)',
        'glow-green': '0 0 40px rgba(0,184,148,0.35), 0 8px 32px rgba(0,184,148,0.25)',
        'glow-dark': '0 32px 80px rgba(0,0,0,0.45), 0 8px 32px rgba(0,0,0,0.3)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F6CBD, #0e7fd4)',
        'gradient-secondary': 'linear-gradient(135deg, #00B894, #009B7D)',
        'gradient-hero': 'linear-gradient(160deg, #020D1A 0%, #041A2E 50%, #020D1A 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'float': 'float-y 4s ease-in-out infinite',
        'float-slow': 'float-slow 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'gradient': 'gradient-shift 6s ease infinite',
        'blob': 'blob 8s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      screens: {
        'xs': '480px',
      },
    },
  },
  plugins: [],
}
