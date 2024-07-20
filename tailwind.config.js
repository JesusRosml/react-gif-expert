// tailwind.config.js
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customGray: 'rgb(234, 234, 234)',
        customPurple: 'rgb(97, 32, 158)',
      },
      fontSize: {
        'custom-size': '1.2rem',
      },
      boxShadow: {
        'custom': '0px 3px 5px rgba(0, 0, 0, 0.03)',
      }
    },
  },
  plugins: [],
}