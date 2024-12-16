/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        animation: {
            'spin': 'spin 1s linear infinite',
        },
        keyframes: {
            spin: {
                to: { transform: 'rotate(360deg)' },
            },
        },
    },
  },
  plugins: [],
}