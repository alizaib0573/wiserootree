/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { 950: '#0A0A0B', 900: '#0E0F12' },
        accent: { 300: '#B48CFF', 500: '#7B4DFF', 700: '#5C2FEA' }
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      maxWidth: { content: '1120px' }
    }
  },
  plugins: []
}
