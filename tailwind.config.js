module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#030303', // Pure Black
        secondary: '#39ff14', // Neon Green
        cyber: '#00f0ff', // Cyber Blue
        surface: 'rgba(20, 20, 20, 0.7)', // Glass Surface
        'surface-border': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundImage: {
        'mesh-gradient': "radial-gradient(at 0% 0%, rgba(57, 255, 20, 0.15) 0, transparent 50%), radial-gradient(at 100% 100%, rgba(0, 240, 255, 0.1) 0, transparent 50%)",
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(57, 255, 20, 0.3)' },
          '50%': { opacity: 0.7, boxShadow: '0 0 40px rgba(57, 255, 20, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    }
  },
  plugins: [],
}
