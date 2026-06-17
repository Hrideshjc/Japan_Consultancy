/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx}',
    './src/pages/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#0877BA',
        'primary-yellow': '#F6C21F',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Roboto', 'serif'],
      },
      screens: {
        'xs': '375px',
      },
    },
  },
  plugins: [],
  safelist: [
    // Add commonly used dynamic classes here to prevent them from being purged
    'text-[11px]',
    'text-[12px]',
    'text-[13px]',
    'text-[14px]',
    'text-[15px]',
    'text-[16px]',
    'text-[17px]',
    'text-[18px]',
    'text-[19px]',
    'text-[20px]',
    'text-[21px]',
    'text-[24px]',
    'text-[28px]',
    'text-[32px]',
    'text-[34px]',
    'text-[36px]',
    'text-[42px]',
    'text-[56px]',
    'text-[64px]',
    'p-[3.5rem]',
    'p-[4.25rem]',
    'p-[5rem]',
    'text-[120px]',
    'text-[220px]',
    'w-[40px]',
    'h-[2px]',
    'h-[3px]',
  ],
}
