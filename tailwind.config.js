/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  daisyui: {
    themes: [
      {
        light: {
          primary: '#FF5C00',

          secondary: '#5FEFC0',

          accent: '#437fef',

          neutral: '#5A483D',

          'base-100': '#FFFFFF',

          info: '#83DDF6',

          success: '#21A16E',

          warning: '#FBAE32',

          error: '#F7366B',
          '--rounded-btn': '0.75rem', // border radius rounded-btn utility class, used in buttons and similar element
        },
      },
      // 'dark',
    ],
  },
  plugins: [require('daisyui')],
};
