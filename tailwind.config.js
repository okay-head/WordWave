/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/preline/dist/*.js',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          'pink-500': 'hsl(349, 100%, 78%)',
          'pink-600': 'hsl(349, 100%, 73%)',
          'pink-700': 'hsl(349, 100%, 65%)',
          'pink-800': 'hsl(349, 100%, 60%)',
          'pink-900': 'hsl(349, 80%, 60%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('preline/plugin')],
}
