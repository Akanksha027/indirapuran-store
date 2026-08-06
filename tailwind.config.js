const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      colors: {
        // Design Machine–inspired boutique palette, tinted with Riwaaz gold
        veryDarkPurple: '#121212',
        darkPurple: '#4a4a4a',
        purple: '#c4a574',
        lightPurple: '#f7f1ea',
        veryLightPurple: '#fbf8f4',
        gold: '#c4a574',
        charcoal: '#121212',
        blush: '#efe6dc',
        ink: '#121212'
      },
      fontFamily: {
        sans: ['var(--font-jost)', 'sans-serif'],
        jost: ['var(--font-jost)', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
        script: ['var(--font-script)', 'cursive'],
        lora: ['var(--font-playfair)', 'serif'],
        quicksand: ['var(--font-jost)', 'sans-serif']
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 }
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100% ': { opacity: 1, transform: 'translateY(0px)' }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100% ': { opacity: 0 }
        }
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        fadeUp: 'fadeUp 0.5s ease-out forwards',
        fadeUpDelay: '0.5s ease-out 0.25s forwards fadeUp',
        fadeOut: 'fadeOut 0.5s ease-out forwards'
      }
    }
  },
  future: {
    hoverOnlyWhenSupported: true
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/typography'),
    require('tailwindcss-3d'),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value
            };
          }
        },
        {
          values: theme('transitionDelay')
        }
      );
    })
  ]
};
