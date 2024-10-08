/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            blue: {
                primary: '#032C48',
                secondary: '#145E7D',
                trans: '#032C48b5',
                trans2: '#032c484d',
            },
            white: {
                primary: '#FAFAFA',
            },
            red: colors.red,
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif'],
            roboto: ['Roboto', 'sans-serif'],
            robotoMono: ['Roboto Mono', 'monospace'],
        },
    },
  },
  plugins: [],
}
