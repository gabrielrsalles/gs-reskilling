module.exports = {
    theme: {
      extend: {
        keyframes: {
          'fade-in-up': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
          'fade-in-right': {
            '0%': { opacity: 0, transform: 'translateX(20px)' },
            '100%': { opacity: 1, transform: 'translateX(0)' },
          },
          'pulse-slow': {
            '0%, 100%': { opacity: 0.7 },
            '50%': { opacity: 1 },
          },
          'bounce-slow': {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-6px)' },
          },
        },
        animation: {
          'fade-in-up': 'fade-in-up 1s ease-out forwards',
          'fade-in-right': 'fade-in-right 1s ease-out forwards',
          'pulse-slow': 'pulse-slow 6s infinite',
          'bounce-slow': 'bounce-slow 2s infinite',
        },
      },
    },
    plugins: [],
  }  