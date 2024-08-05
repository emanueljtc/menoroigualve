import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'icon-country': `url('../../public/icon-country.svg')`,
      },
      lineHeight: {
        'extra-loose': '3.25rem',
      },
      width: {
        '85': '22.5rem', // 360px
        '2/5': '53%',
        '2/7': '70%',
      },
      padding: {
        '156': '9.75rem', // 360px
      },
    },
    colors: {
      gray: {
        10: '#CAC4D0',
        30: '#49454F',
      },
      white: '#ffff',
      black: '#1D1B20',
      primary: {
        5: '#F7F2FA',
        10: '#21005D',
        15: '#6750A4',
        30: '#4F378B',
        80: '#D0BCFE',
      },
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '45': '2.813rem', // 45px
    },
    letterSpacing: {
      wide: '0.016rem',
      wider: '0.003rem',
    },
  },
  plugins: [require('flowbite/plugin')],
};
export default config;

