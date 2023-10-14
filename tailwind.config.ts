import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'sans-serif'],
      'Changa': ['Changa', 'sans-serif'],
    },
    extend: {
      backgroundColor: {
        'custom': 'rgba(2, 175, 206, 0.4)',
      },
      colors: {
        blue: '#02AFCE',
        orange: '#FE590F',
      },
      boxShadow: {
        '3xl': '0 25px 50px -12px rgba(254, 89, 15, 0.3)',
      },
      extend: {
        backgroundImage: ({theme}:any) => ({
          'hero': "url('/servobackground.png')",
        }),
      },
    },
    variants: {
      extend: {
        backgroundImage: ['hover'],
      },
    },
  },
  plugins: [],
};

export default config;
